/**
 * ViATestPrep — Shared In-App Toast & Confirmation Modal UI
 * Replaces native browser alert() / confirm() dialogs across standalone
 * simulator and module pages with crisp White + Yellow + Charcoal components.
 */
(function () {
  'use strict';

  var STYLE_ID = 'vtp-ui-styles';
  var TOAST_WRAP_ID = 'vtp-toast-wrap';
  var CONFIRM_MODAL_ID = 'vtp-confirm-modal';

  function ensureStyles() {
    if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = [
      '#' + TOAST_WRAP_ID + '{position:fixed;bottom:20px;right:20px;z-index:99999;display:flex;flex-direction:column;gap:10px;max-width:min(400px,calc(100vw - 32px));pointer-events:none;font-family:"Inter","Plus Jakarta Sans",sans-serif;}',
      '.vtp-toast{pointer-events:auto;display:flex;align-items:flex-start;gap:10px;background:#FFFFFF;color:#111827;border:1.5px solid #E5E7EB;border-left:4px solid #FACC15;border-radius:14px;padding:12px 14px;box-shadow:0 16px 36px rgba(17,24,39,0.12);font-size:13px;line-height:1.45;font-weight:600;animation:vtpToastIn .2s ease-out;}',
      '.vtp-toast.vtp-toast-success{border-left-color:#16A34A;}',
      '.vtp-toast.vtp-toast-error{border-left-color:#DC2626;}',
      '.vtp-toast.vtp-toast-warning{border-left-color:#EAB308;background:#FEFCE8;}',
      '.vtp-toast-msg{flex:1;white-space:pre-line;word-break:break-word;}',
      '.vtp-toast-close{background:none;border:none;color:#6B7280;font-size:14px;font-weight:800;cursor:pointer;padding:0 4px;line-height:1;}',
      '.vtp-toast-close:hover{color:#111827;}',
      '@keyframes vtpToastIn{from{opacity:0;transform:translateY(10px) scale(0.98);}to{opacity:1;transform:translateY(0) scale(1);}}',
      '#' + CONFIRM_MODAL_ID + '{position:fixed;inset:0;z-index:100000;background:rgba(17,24,39,0.55);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;padding:16px;font-family:"Inter","Plus Jakarta Sans",sans-serif;}',
      '#' + CONFIRM_MODAL_ID + '.open{display:flex;}',
      '.vtp-confirm-box{background:#FFFFFF;border:1.5px solid #E5E7EB;border-top:4px solid #FACC15;border-radius:20px;max-width:420px;width:100%;padding:22px 24px;box-shadow:0 24px 48px rgba(17,24,39,0.18);color:#111827;}',
      '.vtp-confirm-title{font-size:16px;font-weight:800;margin:0 0 8px;color:#111827;}',
      '.vtp-confirm-msg{font-size:13px;line-height:1.55;color:#4B5563;margin:0 0 18px;white-space:pre-line;}',
      '.vtp-confirm-actions{display:flex;justify-content:flex-end;gap:10px;}',
      '.vtp-confirm-cancel{padding:9px 16px;border-radius:10px;border:1px solid #D1D5DB;background:#FFFFFF;color:#374151;font-size:12px;font-weight:700;cursor:pointer;}',
      '.vtp-confirm-cancel:hover{background:#F3F4F6;}',
      '.vtp-confirm-ok{padding:9px 18px;border-radius:10px;border:1px solid #EAB308;background:#FACC15;color:#111827;font-size:12px;font-weight:800;cursor:pointer;}',
      '.vtp-confirm-ok:hover{background:#EAB308;}',
      '.vtp-confirm-ok.danger{background:#DC2626;border-color:#B91C1C;color:#FFFFFF;}',
      '.vtp-confirm-ok.danger:hover{background:#B91C1C;}'
    ].join('');
    document.head.appendChild(s);
  }

  function detectType(msg, explicitType) {
    if (explicitType) return explicitType;
    var t = String(msg || '').toLowerCase();
    if (/✅|✓|saved|submitted|copied|unlocked|sent!|dispatched/.test(t)) return 'success';
    if (/❌|error|invalid|failed|could not|expired|empty|missing|cannot|reach/.test(t)) return 'error';
    if (/⚠|please |select |enter |warning|time is up/.test(t)) return 'warning';
    return 'info';
  }

  window.vtpToast = function vtpToast(message, type, durationMs) {
    if (typeof document === 'undefined' || !document.body) return;
    ensureStyles();
    var wrap = document.getElementById(TOAST_WRAP_ID);
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = TOAST_WRAP_ID;
      wrap.setAttribute('role', 'status');
      wrap.setAttribute('aria-live', 'polite');
      document.body.appendChild(wrap);
    }

    var resolvedType = detectType(message, type);
    var toast = document.createElement('div');
    toast.className = 'vtp-toast vtp-toast-' + resolvedType;

    var msgEl = document.createElement('div');
    msgEl.className = 'vtp-toast-msg';
    msgEl.textContent = String(message || '');

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'vtp-toast-close';
    closeBtn.setAttribute('aria-label', 'Dismiss notification');
    closeBtn.textContent = '✕';
    closeBtn.onclick = function () { toast.remove(); };

    toast.appendChild(msgEl);
    toast.appendChild(closeBtn);
    wrap.appendChild(toast);

    var ttl = typeof durationMs === 'number' ? durationMs : (resolvedType === 'error' ? 5500 : 4200);
    if (ttl > 0) {
      setTimeout(function () {
        if (toast.parentNode) toast.remove();
      }, ttl);
    }
  };

  window.vtpConfirm = function vtpConfirm(options) {
    var opts = typeof options === 'string' ? { message: options } : (options || {});
    if (typeof document === 'undefined' || !document.body) {
      return Promise.resolve(true);
    }
    ensureStyles();

    var overlay = document.getElementById(CONFIRM_MODAL_ID);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = CONFIRM_MODAL_ID;
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.innerHTML = [
        '<div class="vtp-confirm-box">',
        '  <h4 class="vtp-confirm-title" id="vtp-confirm-title">Please confirm</h4>',
        '  <p class="vtp-confirm-msg" id="vtp-confirm-msg"></p>',
        '  <div class="vtp-confirm-actions">',
        '    <button type="button" class="vtp-confirm-cancel" id="vtp-confirm-cancel">Cancel</button>',
        '    <button type="button" class="vtp-confirm-ok" id="vtp-confirm-ok">Confirm</button>',
        '  </div>',
        '</div>'
      ].join('');
      document.body.appendChild(overlay);
    }

    var titleEl = document.getElementById('vtp-confirm-title');
    var msgEl = document.getElementById('vtp-confirm-msg');
    var cancelBtn = document.getElementById('vtp-confirm-cancel');
    var okBtn = document.getElementById('vtp-confirm-ok');

    titleEl.textContent = opts.title || 'Please confirm';
    msgEl.textContent = opts.message || '';
    cancelBtn.textContent = opts.cancelText || 'Cancel';
    okBtn.textContent = opts.confirmText || 'Confirm';
    okBtn.className = 'vtp-confirm-ok' + (opts.danger ? ' danger' : '');

    return new Promise(function (resolve) {
      function cleanup(result) {
        overlay.classList.remove('open');
        document.removeEventListener('keydown', onKey);
        overlay.onclick = null;
        cancelBtn.onclick = null;
        okBtn.onclick = null;
        resolve(result);
      }
      function onKey(e) {
        if (e.key === 'Escape') cleanup(false);
        if (e.key === 'Enter') cleanup(true);
      }
      cancelBtn.onclick = function () { cleanup(false); };
      okBtn.onclick = function () { cleanup(true); };
      overlay.onclick = function (e) { if (e.target === overlay) cleanup(false); };
      document.addEventListener('keydown', onKey);
      overlay.classList.add('open');
      okBtn.focus();
    });
  };
})();
