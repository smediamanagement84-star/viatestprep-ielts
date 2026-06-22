/**
 * ViATestPrep — Clean 3D Effects System
 * CSS perspective card tilts + subtle Three.js star field.
 * Restriced strictly to the landing page. No clutter.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarField();
  init3DCardTilt();
  initNeonDividers();
});

// ==========================================
// 1. STAR FIELD BACKGROUND (subtle, elegant)
// ==========================================
function initStarField() {
  if (typeof THREE === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.id = 'three-bg-canvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;';
  document.body.prepend(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Stars
  const count = 500;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 18;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0x6366f1, size: 0.025, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending });
  const stars = new THREE.Points(geo, mat);
  scene.add(stars);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Performance optimization: Pause rendering when scrolled below fold
  let isStarFieldVisible = true;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isStarFieldVisible = entry.isIntersecting;
      });
    }, { threshold: 0.01 });
    observer.observe(canvas);
  }

  const clock = new THREE.Clock();
  (function animate() {
    requestAnimationFrame(animate);
    if (!isStarFieldVisible) return; // Skip CPU/GPU draw calls when not visible
    const t = clock.getElapsedTime();
    stars.rotation.y = t * 0.008;
    stars.rotation.x = t * 0.003;
    const isLight = document.documentElement.classList.contains('light');
    mat.color.setHex(isLight ? 0x6366f1 : 0x9c5bf5);
    renderer.render(scene, camera);
  })();
}

// ==========================================
// 2. 3D CARD TILT — PROPER PREMIUM EFFECT
// ==========================================
function init3DCardTilt() {
  function applyTilt(card) {
    if (card.classList.contains('tilt-active')) return;
    card.classList.add('tilt-active');
    card.style.transformStyle = 'preserve-3d';

    const shine = document.createElement('div');
    shine.style.cssText = 'position:absolute;inset:0;pointer-events:none;border-radius:inherit;z-index:5;opacity:0;transition:opacity 0.15s;';
    card.appendChild(shine);

    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });

    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const nx = x / r.width, ny = y / r.height;
      const tX = (0.5 - ny) * 14, tY = (nx - 0.5) * 14;
      
      // Determine base rotation based on card class
      let baseRot = '';
      if (card.classList.contains('hfc-reading')) baseRot = 'rotateY(18deg) rotateX(-6deg)';
      else if (card.classList.contains('hfc-listening')) baseRot = 'rotateY(14deg) rotateX(5deg)';
      else if (card.classList.contains('hfc-writing')) baseRot = 'rotateY(-18deg) rotateX(-6deg)';
      else if (card.classList.contains('hfc-speaking')) baseRot = 'rotateY(-14deg) rotateX(4deg)';

      card.style.transform = `perspective(1000px) rotateX(${tX}deg) rotateY(${tY}deg) scale3d(1.03,1.03,1.03)`;
      shine.style.opacity = '1';
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.14) 0%, transparent 62%)`;
      const icon = card.querySelector('.hfc-icon');
      if (icon) icon.style.transform = 'translateZ(20px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.45s cubic-bezier(0.23,1,0.32,1), background 0.3s, box-shadow 0.3s';
      card.style.transform = ''; // Let CSS floating animations resume
      shine.style.opacity = '0';
      const icon = card.querySelector('.hfc-icon');
      if (icon) { icon.style.transition = 'transform 0.4s ease'; icon.style.transform = 'translateZ(0)'; }
    });
  }

  // Apply 3D tilt ONLY to the hero floating cards to prevent lag on main lists
  document.querySelectorAll('.hero-float-card').forEach(applyTilt);
  new MutationObserver(() => document.querySelectorAll('.hero-float-card:not(.tilt-active)').forEach(applyTilt))
    .observe(document.body, { childList: true, subtree: true });
}

// ==========================================
// 3. SECTION DIVIDERS (subtle gradients)
// ==========================================
function initNeonDividers() {
  document.querySelectorAll('canvas.three-separator').forEach(canvas => {
    canvas.width = canvas.offsetWidth || window.innerWidth;
    canvas.height = 2;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '1px';
    canvas.style.opacity = '0.3';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.3, '#6366f1');
    grad.addColorStop(0.7, '#0d8a7a');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, 2);
  });
}
