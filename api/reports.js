const { restRequest } = require('./_lib/supabaseAdmin');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // 1. POST: Student Submits Error Report
    if (req.method === 'POST') {
      const { studentId, studentName, consultancyId, section, label, errorType, description, questionRef, devWebhookUrl } = req.body || {};
      
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
      const targetWebhook = devWebhookUrl || process.env.DEV_DISCORD_WEBHOOK_URL || process.env.DEV_WEBHOOK_URL;
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
      const consultancyId = req.query.consultancyId || 'all';
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
