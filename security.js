/**
 * ViATestPrep Content Protection Script
 * Detours copy-paste, printing, inspection, and screenshot sharing.
 */
(function () {
  // 1. Inject CSS Rules dynamically for Selection, Dragging, Print, Blur & Watermark
  const style = document.createElement('style');
  style.textContent = `
    /* Disable selection and drag & drop across the board */
    *, *::before, *::after {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-user-drag: none !important;
    }
    
    /* Allow selection only for input/textarea elements so students can type answers */
    input, textarea, [contenteditable="true"] {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }

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

    /* Watermark container */
    .vp-watermark-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 999999;
      opacity: 0.06; /* Extremely subtle and non-intrusive */
      mix-blend-mode: difference; /* Automatically adapts to dark and light backgrounds */
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
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Command combinations
    const cmdKey = e.ctrlKey || e.metaKey; // supports Mac command key too
    if (cmdKey) {
      const key = e.key.toLowerCase();
      if (
        key === 'c' || // Copy
        key === 'u' || // View Source
        key === 's' || // Save
        key === 'p' || // Print
        key === 'i' || // Inspect (Chrome)
        key === 'j'    // Console/DevTools
      ) {
        e.preventDefault();
        return false;
      }
    }

    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
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
    document.body.classList.add('vp-blurred');
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
    // Try to get user identity from query parameters or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email') || 
                      urlParams.get('user') || 
                      localStorage.getItem('userEmail');

    // ONLY render the watermark if a student identity exists
    if (!userEmail) {
      return;
    }

    // Create a dynamic canvas to draw the watermark text
    const canvas = document.createElement('canvas');
    canvas.width = 450;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');

    // Draw settings (white text is required for mix-blend-mode: difference)
    ctx.font = '800 11px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Position and rotation
    ctx.translate(225, 150);
    ctx.rotate(-20 * Math.PI / 180);
    ctx.fillText(userEmail, 0, 0);

    const overlay = document.createElement('div');
    overlay.className = 'vp-watermark-overlay';
    overlay.style.backgroundImage = `url(${canvas.toDataURL()})`;

    document.body.appendChild(overlay);
  };

  // Run watermark insertion on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWatermark);
  } else {
    initWatermark();
  }
})();
