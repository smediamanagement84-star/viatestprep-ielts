/**
 * ViATestPrep Content Protection & Security Access Script
 * Handles copy-paste prevention, print protection, and client-side password locks.
 */
(function () {
  const CONFIG_PASSWORD = 'via79plus'; // Admin-configurable access password

  // Determine page exemption status
  const currentPath = window.location.pathname.toLowerCase();
  const isExempt = currentPath === '' || 
                   currentPath === '/' || 
                   currentPath.endsWith('/') ||
                   currentPath.includes('index') || 
                   currentPath.includes('free-essay-template');

  // 1. Inject CSS Rules dynamically for Selection, Dragging, Print, Blur & Watermark
  const style = document.createElement('style');
  
  let printProtectionCSS = '';
  if (!isExempt) {
    printProtectionCSS = `
      /* Print Protection: hide everything if user tries to print */
      @media print {
        body {
          display: none !important;
        }
        html::after {
          content: "Printing is strictly prohibited. Your activity has been logged." !important;
          font-family: sans-serif;
          font-size: 24px;
          color: red;
          display: block;
          text-align: center;
          padding: 50px;
        }
      }
    `;
  }

  style.textContent = `
    /* Disable selection and drag & drop across the board */
    *, *::before, *::after {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-user-drag: none !important;
    }
    
    /* Allow selection only for input/textarea/button/a elements so students can type answers and click naturally */
    input, textarea, button, a, select, [contenteditable="true"] {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }

    ${printProtectionCSS}

    /* Watermark container */
    .vp-watermark-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 999999;
      opacity: 0.06;
      mix-blend-mode: difference;
      background-repeat: repeat;
      user-select: none !important;
    }
    
    /* Active blur effect */
    .vp-blurred {
      filter: blur(15px) grayscale(50%) !important;
      transition: filter 0.15s ease;
    }

    /* Locked body styling */
    body.vp-locked > *:not(.vp-lock-screen) {
      filter: blur(15px) grayscale(50%) !important;
      pointer-events: none !important;
      user-select: none !important;
    }

    /* Lock Screen Overlay styles */
    .vp-lock-screen {
      position: fixed;
      inset: 0;
      z-index: 9999999;
      background: rgba(15, 23, 42, 0.82);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #fff;
    }
    .vp-lock-card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 20px;
      max-width: 440px;
      width: 100%;
      padding: 2.5rem 2rem;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
      text-align: center;
      animation: vpPopIn 0.3s ease-out;
    }
    @keyframes vpPopIn {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .vp-lock-logo {
      width: 56px;
      height: 56px;
      border-radius: 15px;
      background: linear-gradient(135deg, #5b2a86, #3b0a64);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.6rem;
      margin: 0 auto 1.2rem;
      box-shadow: 0 0 0 4px rgba(91,42,134,0.25);
      color: #fff;
    }
    .vp-lock-card h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #fff;
      font-weight: 700;
    }
    .vp-lock-card h3 {
      font-size: 1.1rem;
      margin-bottom: 0.4rem;
      color: #ffe599;
      font-weight: 600;
    }
    .vp-lock-card p {
      font-size: 0.85rem;
      color: #94a3b8;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
    .vp-lock-input-group {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .vp-lock-input-group input {
      flex: 1;
      background: #0f172a !important;
      border: 1px solid #334155 !important;
      border-radius: 10px !important;
      padding: 0.75rem 1rem !important;
      color: #fff !important;
      font-size: 0.9rem !important;
      outline: none;
      transition: border-color 0.15s;
    }
    .vp-lock-input-group input:focus {
      border-color: #5b2a86 !important;
    }
    .vp-lock-input-group button {
      background: #5b2a86;
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 0.75rem 1.25rem;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
    }
    .vp-lock-input-group button:hover {
      background: #3b0a64;
    }
    .vp-lock-error {
      color: #ef4444;
      font-size: 0.78rem;
      text-align: left;
      min-height: 18px;
      margin-bottom: 1rem;
      padding-left: 2px;
    }
    .vp-lock-divider {
      border: none;
      border-top: 1px solid #334155;
      margin: 1.5rem 0;
    }
    .vp-lock-btn-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      background: #e1306c;
      color: #fff !important;
      text-decoration: none !important;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: opacity 0.15s;
    }
    .vp-lock-btn-cta:hover {
      opacity: 0.95;
    }
  `;
  document.head.appendChild(style);

  // 2. Disable Right-Click context menu
  document.addEventListener('contextmenu', e => e.preventDefault());

  // 3. Disable Drag Start
  document.addEventListener('dragstart', e => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  });

  // 4. Keyboard Protection (F12, Inspect tools, save page, print page, copy)
  document.addEventListener('keydown', e => {
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    const cmdKey = e.ctrlKey || e.metaKey;
    if (cmdKey) {
      const key = e.key.toLowerCase();
      if (
        key === 'c' || // Copy
        key === 'u' || // View Source
        key === 's' || // Save
        (!isExempt && key === 'p') || // Print (allowed only for free template)
        key === 'i' || // Inspect
        key === 'j'    // Console
      ) {
        e.preventDefault();
        return false;
      }
    }

    if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
      const key = e.key.toLowerCase();
      if (key === 'i' || key === 'j' || key === 'c') {
        e.preventDefault();
        return false;
      }
    }
  });

  // 5. Blur Page Content when window/tab loses focus (anti-screenshot trigger)
  const applyBlur = () => {
    if (!document.body.classList.contains('vp-locked')) {
      document.body.classList.add('vp-blurred');
    }
  };
  const removeBlur = () => {
    document.body.classList.remove('vp-blurred');
  };

  window.addEventListener('blur', applyBlur);
  window.addEventListener('focus', removeBlur);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      applyBlur();
    } else {
      removeBlur();
    }
  });

  // 6. Dynamic Watermark Pattern Generator (Repeating Canvas)
  const initWatermark = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email') || 
                      urlParams.get('user') || 
                      localStorage.getItem('userEmail');

    if (!userEmail) return;

    const canvas = document.createElement('canvas');
    canvas.width = 450;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');

    ctx.font = '800 11px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.translate(225, 150);
    ctx.rotate(-20 * Math.PI / 180);
    ctx.fillText(userEmail, 0, 0);

    const overlay = document.createElement('div');
    overlay.className = 'vp-watermark-overlay';
    overlay.style.backgroundImage = `url(${canvas.toDataURL()})`;

    document.body.appendChild(overlay);
  };

  // 7. Client-Side Password Protection (Lock Screen Injection)
  const checkPasswordLock = () => {
    if (isExempt) return;

    const isUnlocked = localStorage.getItem('viatestprep_unlocked') === 'true';
    if (isUnlocked) return;

    // Apply locked class to body to blur everything
    document.body.classList.add('vp-locked');

    // Create the lock overlay element
    const lockScreen = document.createElement('div');
    lockScreen.className = 'vp-lock-screen';
    lockScreen.id = 'vp-lock-screen-overlay';
    lockScreen.innerHTML = `
      <div class="vp-lock-card">
        <div class="vp-lock-logo">V</div>
        <h2>Premium Resource</h2>
        <p>This study module is locked. If you are a student of <strong>ViATestPrep</strong>, enter your access password below.</p>
        
        <div class="vp-lock-input-group">
          <input type="password" id="vp-pass-input" placeholder="Enter password..." />
          <button id="vp-unlock-btn">Unlock</button>
        </div>
        <div id="vp-pass-error" class="vp-lock-error"></div>
        
        <hr class="vp-lock-divider" />
        
        <div class="vp-lock-cta">
          <h3>Enroll in our Classes</h3>
          <p>Join ViATestPrep to get full access to all 16 premium IELTS & PTE modules, interactive drills, templates, and timed mocks.</p>
          <a href="https://www.instagram.com/viatestprep/" target="_blank" class="vp-lock-btn-cta">
            💬 DM us on Instagram to Join
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(lockScreen);

    // Setup events
    const input = document.getElementById('vp-pass-input');
    const button = document.getElementById('vp-unlock-btn');
    const errorDiv = document.getElementById('vp-pass-error');

    const handleUnlock = () => {
      const enteredValue = input.value.trim();
      if (enteredValue === CONFIG_PASSWORD) {
        localStorage.setItem('viatestprep_unlocked', 'true');
        document.body.classList.remove('vp-locked');
        lockScreen.remove();
      } else {
        errorDiv.textContent = '❌ Incorrect password. Please try again.';
        input.value = '';
        input.focus();
      }
    };

    button.addEventListener('click', handleUnlock);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleUnlock();
    });
  };

  // Run watermark and password check on page load
  const runOnLoad = () => {
    initWatermark();
    checkPasswordLock();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runOnLoad);
  } else {
    runOnLoad();
  }
})();
