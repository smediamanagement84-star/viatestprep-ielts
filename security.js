/**
 * ViATestPrep Content Protection & Security Access Script
 * Handles copy-paste prevention, print protection, and client-side password locks.
 */
(function () {
  const CONFIG_PASSWORD = 'via79plus'; // Admin-configurable access password

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

  // 7. Client-Side Password Protection (Lock Screen Injection with 3D Padlock)
  const loadScript = (src, callback) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = callback;
    document.head.appendChild(s);
  };

  const ensureThreeJS = (callback) => {
    if (typeof THREE !== 'undefined' && typeof gsap !== 'undefined') {
      callback();
    } else {
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', () => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', callback);
      });
    }
  };

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
        <div id="vp-3d-lock-container" style="width:100%; height:140px; margin-bottom:1rem; position:relative;"></div>
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

    // Setup input events
    const input = document.getElementById('vp-pass-input');
    const button = document.getElementById('vp-unlock-btn');
    const errorDiv = document.getElementById('vp-pass-error');

    // Ensure libraries and run 3D lock rendering
    ensureThreeJS(() => {
      init3DLockCanvas('vp-3d-lock-container', (onFinish) => {
        // Correct Callback
        localStorage.setItem('viatestprep_unlocked', 'true');
        // Close screen after unlock animation
        setTimeout(() => {
          document.body.classList.remove('vp-locked');
          lockScreen.remove();
          onFinish();
        }, 1200);
      }, () => {
        // Incorrect Callback
        errorDiv.textContent = '❌ Incorrect password. Please try again.';
        input.value = '';
        input.focus();
      });
    });

    const handleUnlockAttempt = () => {
      const enteredValue = input.value.trim();
      if (enteredValue === CONFIG_PASSWORD) {
        if (window.trigger3DUnlock) {
          window.trigger3DUnlock();
        } else {
          // Fallback if 3D scene failed
          localStorage.setItem('viatestprep_unlocked', 'true');
          document.body.classList.remove('vp-locked');
          lockScreen.remove();
        }
      } else {
        if (window.trigger3DLockError) {
          window.trigger3DLockError();
        } else {
          errorDiv.textContent = '❌ Incorrect password. Please try again.';
          input.value = '';
          input.focus();
        }
      }
    };

    button.addEventListener('click', handleUnlockAttempt);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleUnlockAttempt();
    });
  };

  // 3D Padlock Scene Creator inside Modal Card
  function init3DLockCanvas(containerId, onCorrect, onIncorrect) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 3.6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Padlock Group
    const lockGroup = new THREE.Group();
    scene.add(lockGroup);

    // Materials
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc8932a,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x1a1100
    });
    
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.85
    });

    const darkMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });

    // 1. Lock Body
    const bodyGeo = new THREE.BoxGeometry(0.7, 0.55, 0.22);
    // Chamfer body edges slightly
    const bodyMesh = new THREE.Mesh(bodyGeo, goldMat);
    bodyMesh.position.y = -0.15;
    lockGroup.add(bodyMesh);

    // 2. Lock Shackle (Torus)
    const shackleGeo = new THREE.TorusGeometry(0.24, 0.05, 8, 24, Math.PI);
    const shackleMesh = new THREE.Mesh(shackleGeo, steelMat);
    shackleMesh.position.set(0, 0.12, 0);
    lockGroup.add(shackleMesh);

    // Shackle legs (Cylinders)
    const legGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.22, 12);
    const legLeft = new THREE.Mesh(legGeo, steelMat);
    legLeft.position.set(-0.24, 0.02, 0);
    const legRight = new THREE.Mesh(legGeo, steelMat);
    legRight.position.set(0.24, 0.02, 0);
    lockGroup.add(legLeft);
    lockGroup.add(legRight);

    // 3. Keyhole (Cylinder + Box)
    const keyholeGroup = new THREE.Group();
    const keyholeCircle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12), darkMat);
    keyholeCircle.rotation.x = Math.PI / 2;
    const keyholeSlot = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.02), darkMat);
    keyholeSlot.position.y = -0.04;
    keyholeGroup.add(keyholeCircle);
    keyholeGroup.add(keyholeSlot);
    keyholeGroup.position.set(0, -0.16, 0.12); // mount to front of body
    lockGroup.add(keyholeGroup);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(2, 4, 3);
    scene.add(light1);

    const colorFlashLight = new THREE.PointLight(0xa855f7, 0, 10);
    colorFlashLight.position.set(0, 0.5, 2);
    scene.add(colorFlashLight);

    // Floating animation variables
    let hoverActive = true;
    let isTransitioning = false;

    // Unlocking function
    window.trigger3DUnlock = function() {
      if (isTransitioning) return;
      isTransitioning = true;
      hoverActive = false;

      // Create key mesh dynamically
      const keyGroup = new THREE.Group();
      const keyShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8), steelMat);
      keyShaft.rotation.x = Math.PI / 2;
      const keyBow = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 8, 16), steelMat);
      keyBow.position.z = 0.22;
      const keyBit = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 0.06), steelMat);
      keyBit.position.set(0, -0.03, -0.12);
      
      keyGroup.add(keyShaft);
      keyGroup.add(keyBow);
      keyGroup.add(keyBit);
      keyGroup.position.set(0, -0.16, 1.2); // start key in front
      scene.add(keyGroup);

      const tl = gsap.timeline();

      // 1. Insert key
      tl.to(keyGroup.position, {
        z: 0.15,
        duration: 0.45,
        ease: 'power2.out'
      });

      // 2. Turn key
      tl.to(keyGroup.rotation, {
        z: Math.PI / 2,
        duration: 0.3,
        ease: 'power1.inOut'
      });

      // 3. Shackle pops open
      tl.to([shackleMesh.position, legLeft.position, legRight.position], {
        y: (idx) => idx === 0 ? 0.28 : 0.18, // slide up shackle and legs
        duration: 0.25,
        ease: 'back.out(2)'
      }, '-=0.1');

      // Light flash emerald green
      tl.to(colorFlashLight, {
        color: 0x10b981,
        intensity: 5.0,
        duration: 0.2
      }, '-=0.25');

      // 4. Key & Lock dissolve/particle burst
      tl.to([lockGroup.scale, keyGroup.scale], {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => {
          keyGroup.remove();
          onCorrect(() => {
            renderer.dispose();
          });
        }
      }, '+=0.15');
    };

    // Error shaking function
    window.trigger3DLockError = function() {
      if (isTransitioning) return;
      isTransitioning = true;

      // Play shake animation
      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioning = false;
          onIncorrect();
        }
      });

      tl.to(lockGroup.position, { x: -0.14, duration: 0.05, ease: 'power1.inOut' });
      tl.to(lockGroup.position, { x: 0.14, duration: 0.05, ease: 'power1.inOut' });
      tl.to(lockGroup.position, { x: -0.09, duration: 0.05, ease: 'power1.inOut' });
      tl.to(lockGroup.position, { x: 0.09, duration: 0.05, ease: 'power1.inOut' });
      tl.to(lockGroup.position, { x: 0, duration: 0.05, ease: 'power1.inOut' });

      // Light flash red
      gsap.fromTo(colorFlashLight, 
        { color: 0xef4444, intensity: 6.0 }, 
        { intensity: 0, duration: 0.45 }
      );
    };

    // Draw loop
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      
      if (hoverActive) {
        const elapsed = clock.getElapsedTime();
        // Floating motion
        lockGroup.position.y = Math.sin(elapsed * 2.2) * 0.05;
        // Hover react to mouse
        lockGroup.rotation.y = mouse.x * 0.35;
        lockGroup.rotation.x = Math.max(-0.2, Math.min(0.2, mouse.y * 0.3));
      }

      renderer.render(scene, camera);
    }
    animate();

    // Resize canvas
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  // Auto-run global background particles, stardust, and tilts on every page
  const initGlobal3DBackground = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'three-bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.prepend(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Stars
    const starsCount = 400;
    const starsGeo = new THREE.BufferGeometry();
    const starsPos = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPos[i] = (Math.random() - 0.5) * 15;
      starsPos[i + 1] = (Math.random() - 0.5) * 15;
      starsPos[i + 2] = (Math.random() - 0.5) * 15;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
    const starsMat = new THREE.PointsMaterial({
      color: 0x9c5bf5,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starsGeo, starsMat);
    scene.add(starField);

    // Cursor Trail
    const trailCount = 30;
    const trailGeo = new THREE.BufferGeometry();
    const trailPos = new Float32Array(trailCount * 3);
    for (let i = 0; i < trailCount; i++) {
      trailPos[i * 3] = 999;
      trailPos[i * 3 + 1] = 999;
      trailPos[i * 3 + 2] = 0;
    }
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
    const trailMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.1,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const trailPoints = new THREE.Points(trailGeo, trailMat);
    scene.add(trailPoints);

    let trailHistory = [];
    window.addEventListener('mousemove', () => {
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos3D = camera.position.clone().add(dir.multiplyScalar(distance));
      
      trailHistory.push({ x: pos3D.x, y: pos3D.y, age: 0 });
      if (trailHistory.length > trailCount) trailHistory.shift();
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      starField.rotation.y = elapsed * 0.01;
      
      const posAttr = trailGeo.attributes.position;
      for (let i = 0; i < trailCount; i++) {
        if (i < trailHistory.length) {
          const item = trailHistory[i];
          item.age += 0.08;
          posAttr.setXYZ(i, item.x, item.y, 0.2);
          item.x += (Math.random() - 0.5) * 0.015;
          item.y += (Math.random() - 0.5) * 0.015;
        } else {
          posAttr.setXYZ(i, 999, 999, 0);
        }
      }
      posAttr.needsUpdate = true;
      trailHistory = trailHistory.filter(item => item.age < 1.0);

      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        starsMat.color.setHex(0x5b2a86);
        trailMat.color.setHex(0x0d8a7a);
      } else {
        starsMat.color.setHex(0x9c5bf5);
        trailMat.color.setHex(0x00f2fe);
      }

      renderer.render(scene, camera);
    }
    animate();
  };

  const init3DCardTilt = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.classList.contains('tilt-active')) return;
      card.classList.add('tilt-active');
      card.style.transformStyle = 'preserve-3d';

      const shine = document.createElement('div');
      shine.className = 'card-shine-overlay';
      shine.style.position = 'absolute';
      shine.style.inset = '0';
      shine.style.pointerEvents = 'none';
      shine.style.borderRadius = 'inherit';
      shine.style.zIndex = '5';
      shine.style.transition = 'opacity 0.2s';
      shine.style.opacity = '0';
      shine.style.background = 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)';
      card.appendChild(shine);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normX = x / rect.width;
        const normY = y / rect.height;
        const tiltX = (0.5 - normY) * 12;
        const tiltY = (normX - 0.5) * 12;
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        shine.style.opacity = '1';
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, transparent 65%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.4s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        shine.style.opacity = '0';
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    });
  };

  // Run watermark and password check on page load
  const runOnLoad = () => {
    initWatermark();
    checkPasswordLock();

    // Auto-run global 3D background particles, stardust, and tilts on every page once loaded
    ensureThreeJS(() => {
      if (!document.getElementById('three-bg-canvas')) {
        initGlobal3DBackground();
      }
      init3DCardTilt();
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runOnLoad);
  } else {
    runOnLoad();
  }
})();

