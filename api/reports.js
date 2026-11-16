const { restRequest, getStudentById } = require('./_lib/supabaseAdmin');
const { getCaller } = require('./_lib/callerAuth');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Owner-Key, X-Session-Token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // 1. POST: Student Submits Error Report
    if (req.method === 'POST') {
      let { studentId, studentName, consultancyId, section, label, errorType, description, questionRef, devWebhookUrl } = req.body || {};
      const caller = getCaller(req);
      // Who a report is "from" comes from the verified session, never from
      // the request body - otherwise anyone could file reports as any
      // student into any consultancy's inbox.
      if (caller && caller.role === 'student') {
        studentId = caller.id;
        consultancyId = 'default_consultancy';
        try {
          const st = await getStudentById(caller.id);
          if (st) { studentName = st.name || studentName; consultancyId = st.consultancy_id || 'default_consultancy'; }
        } catch (e) {}
      } else if (!caller || caller.role !== 'owner') {
        studentId = 'demo_student';
        consultancyId = 'default_consultancy';
      }
      const clip = (v, n) => String(v == null ? '' : v).slice(0, n);
      studentName = clip(studentName, 120); section = clip(section, 120); label = clip(label, 200);
      errorType = clip(errorType, 80); description = clip(description, 2000); questionRef = clip(questionRef, 300);
      
      const reportData = {
        id: 'rep_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        student_id: studentId || 'demo_student',
        student_name: studentName || 'Student',
        consultancy_id: consultancyId || 'default_consultancy',
        section: section || 'General Practice',
        label: label || 'Test Question',
        error_type: errorType || 'General Error',
        description: description || '',
        question_ref: questionRef || '',
        status: 'open',
        resolution_note: '',
        created_at: new Date().toISOString()
      };

      // Direct Database persistence in Supabase
      let dbResult = null;
      try {
        const rows = await restRequest('error_reports', { method: 'POST', body: reportData });
        dbResult = rows && rows.length ? rows[0] : reportData;
      } catch (dbErr) {
        dbResult = reportData;
      }

      // Permanent Backend System Notification Log for Developers
      try {
        const sysNotif = {
          id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
          type: 'error_report',
          title: `🚨 DEV ALERT: ${errorType || 'App Error'} in ${section || 'General'}`,
          message: `${description} ${questionRef ? '(Ref: ' + questionRef + ')' : ''}`,
          meta: reportData,
          dev_status: 'UNREAD',
          priority: 'HIGH',
          created_at: new Date().toISOString()
        };
        await restRequest('system_notifications', { method: 'POST', body: sysNotif }).catch(() => {});
      } catch (sysErr) {}

      // Developer Webhook Notification (Optional extra push if URL configured)
      // A custom webhook URL is honoured only from the owner. Taking one from
      // anyone would let strangers make this server send requests anywhere.
      const targetWebhook = (caller && caller.role === 'owner' && devWebhookUrl) || process.env.DEV_DISCORD_WEBHOOK_URL || process.env.DEV_WEBHOOK_URL;
      if (targetWebhook && targetWebhook.startsWith('http')) {
        try {
          const discordEmbed = {
            embeds: [{
              title: "🚨 DEV ALERT: New Student App Error Report",
              color: 15158332, // Red
              fields: [
                { name: "👤 Student", value: `${studentName} (${studentId})`, inline: true },
                { name: "🏢 Consultancy", value: consultancyId, inline: true },
                { name: "📌 Section / Context", value: `${section} · ${label}`, inline: false },
                { name: "🏷 Error Type", value: errorType, inline: true },
                { name: "📍 Question Ref", value: questionRef || 'N/A', inline: true },
                { name: "💬 Issue Description", value: description, inline: false }
              ],
              footer: { text: "ViaTestPrep Developer Push Alert Engine" },
              timestamp: new Date().toISOString()
            }]
          };
          
          await fetch(targetWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(discordEmbed)
          }).catch(wErr => console.error('Dev webhook send error:', wErr));
        } catch (wErr) {
          console.error('Dev webhook dispatch exception:', wErr);
        }
      }

      return res.status(200).json({ success: true, report: dbResult });
    }

    // 2. GET: Admin/Teacher/Dev Fetches Reports
    if (req.method === 'GET') {
      const caller = getCaller(req);
      if (!caller) return res.status(401).json({ error: 'Please log in to view reports.' });
      if (caller.role !== 'owner' && caller.role !== 'consultancy') return res.status(403).json({ error: 'Not allowed.' });
      // A consultancy only ever sees its own reports; only the owner may ask for "all".
      const consultancyId = caller.role === 'owner' ? (req.query.consultancyId || 'all') : caller.id;
      let query = '?order=created_at.desc';
      if (consultancyId !== 'all') {
        query = `?consultancy_id=eq.${encodeURIComponent(consultancyId)}&order=created_at.desc`;
      }
      try {
        const reports = await restRequest('error_reports', { method: 'GET', query });
        return res.status(200).json({ success: true, reports });
      } catch (dbErr) {
        return res.status(200).json({ success: true, reports: [] });
      }
    }

    // 3. PATCH: Admin/Dev Resolves Report
    if (req.method === 'PATCH') {
      const { reportId, status, resolutionNote } = req.body || {};
      if (!reportId) return res.status(400).json({ error: 'reportId is required.' });
      const caller = getCaller(req);
      if (!caller) return res.status(401).json({ error: 'Please log in to update reports.' });
      if (caller.role !== 'owner') {
        if (caller.role !== 'consultancy') return res.status(403).json({ error: 'Not allowed.' });
        let owned = false;
        try {
          const found = await restRequest('error_reports', { method: 'GET', query: `?id=eq.${encodeURIComponent(reportId)}&select=consultancy_id` });
          owned = !!(found && found.length && String(found[0].consultancy_id) === String(caller.id));
        } catch (e) {}
        if (!owned) return res.status(403).json({ error: 'Not allowed.' });
      }

      try {
        const rows = await restRequest('error_reports', {
          method: 'PATCH',
          query: `?id=eq.${encodeURIComponent(reportId)}`,
          body: {
            status: status || 'resolved',
            resolution_note: resolutionNote || '',
            resolved_at: new Date().toISOString()
          }
        });
        return res.status(200).json({ success: true, report: rows && rows.length ? rows[0] : null });
      } catch (dbErr) {
        return res.status(200).json({ success: true, note: 'Updated client side' });
      }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    console.error('API /api/reports handler error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
};
