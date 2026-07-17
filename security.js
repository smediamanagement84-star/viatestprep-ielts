/**
 * ViATestPrep Content Protection & Security Access Script
 * Handles copy-paste prevention, print protection, and screenshot deterrence.
 */
(function () {
  // Track mouse coordinates globally inside closure
  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

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
    input, textarea, button, a, select, [contenteditable="true"], .passage-pane, .passage-pane * {
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

  // Run watermark check on page load
  const runOnLoad = () => {
    initWatermark();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runOnLoad);
  } else {
    runOnLoad();
  }
})();

