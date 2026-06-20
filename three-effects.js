/**
 * ViATestPrep — Clean 3D Effects System
 * CSS perspective card tilts + subtle Three.js star field.
 * No ugly letter meshes. No gimmicks. Just premium depth.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarField();
  init3DCardTilt();
  injectHero3DScene();
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
  const count = 700;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 18;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0x9c5bf5, size: 0.022, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending });
  const stars = new THREE.Points(geo, mat);
  scene.add(stars);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const clock = new THREE.Clock();
  (function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    stars.rotation.y = t * 0.012;
    stars.rotation.x = t * 0.004;
    const isLight = document.documentElement.classList.contains('light');
    mat.color.setHex(isLight ? 0x5b2a86 : 0x9c5bf5);
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
      card.style.transform = `perspective(1000px) rotateX(${tX}deg) rotateY(${tY}deg) scale3d(1.03,1.03,1.03)`;
      shine.style.opacity = '1';
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.14) 0%, transparent 62%)`;
      const icon = card.querySelector('.card-icon-wrapper');
      const arrow = card.querySelector('.go-arrow');
      if (icon) icon.style.transform = 'translateZ(28px)';
      if (arrow) arrow.style.transform = 'translateZ(18px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.45s cubic-bezier(0.23,1,0.32,1), background 0.3s, box-shadow 0.3s';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      shine.style.opacity = '0';
      const icon = card.querySelector('.card-icon-wrapper');
      const arrow = card.querySelector('.go-arrow');
      if (icon) { icon.style.transition = 'transform 0.4s ease'; icon.style.transform = 'translateZ(0)'; }
      if (arrow) { arrow.style.transition = 'transform 0.4s ease'; arrow.style.transform = 'translateZ(0)'; }
    });
  }

  document.querySelectorAll('.card').forEach(applyTilt);
  new MutationObserver(() => document.querySelectorAll('.card:not(.tilt-active)').forEach(applyTilt))
    .observe(document.body, { childList: true, subtree: true });
}

// ==========================================
// 3. HERO 3D FLOATING SKILL CARDS
// ==========================================
function injectHero3DScene() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    .hero-3d-scene {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 1;
      perspective: 1200px;
    }

    .hero-3d-stage {
      position: absolute;
      inset: 0;
      transform-style: preserve-3d;
    }

    /* Left skill card */
    .hero-float-card {
      position: absolute;
      border-radius: 20px;
      padding: 1.4rem 1.6rem;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(255,255,255,0.13);
      background: rgba(17, 20, 38, 0.6);
      box-shadow: 0 24px 60px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transform-style: preserve-3d;
      will-change: transform;
    }
    .light .hero-float-card {
      background: rgba(255,255,255,0.7);
      border-color: rgba(0,0,0,0.09);
      color: #0f172a;
      box-shadow: 0 24px 60px -10px rgba(91,42,134,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
    }

    .hero-float-card .hfc-icon {
      font-size: 1.8rem;
      line-height: 1;
    }
    .hero-float-card .hfc-label {
      font-size: 0.68rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      opacity: 0.55;
    }
    .hero-float-card .hfc-title {
      font-family: 'Fraunces', serif;
      font-size: 1.15rem;
      font-weight: 800;
    }
    .hero-float-card .hfc-sub {
      font-size: 0.75rem;
      opacity: 0.6;
      line-height: 1.45;
    }
    .hero-float-card .hfc-badge {
      margin-top: 0.4rem;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      padding: 0.22rem 0.6rem;
      border-radius: 999px;
      display: inline-block;
      width: fit-content;
    }

    /* Card positions */
    .hfc-reading {
      left: 2%;
      top: 18%;
      width: 190px;
      animation: float-reading 7s ease-in-out infinite;
      border-top-color: rgba(147,51,234,0.5);
      transform: perspective(900px) rotateY(18deg) rotateX(-6deg);
    }
    .hfc-listening {
      left: 6%;
      bottom: 14%;
      width: 175px;
      animation: float-listening 8.5s ease-in-out infinite;
      border-top-color: rgba(6,182,212,0.5);
      transform: perspective(900px) rotateY(14deg) rotateX(5deg);
    }
    .hfc-writing {
      right: 2%;
      top: 15%;
      width: 190px;
      animation: float-writing 9s ease-in-out infinite;
      border-top-color: rgba(245,158,11,0.5);
      transform: perspective(900px) rotateY(-18deg) rotateX(-6deg);
    }
    .hfc-speaking {
      right: 5%;
      bottom: 18%;
      width: 175px;
      animation: float-speaking 7.5s ease-in-out infinite;
      border-top-color: rgba(236,72,153,0.5);
      transform: perspective(900px) rotateY(-14deg) rotateX(4deg);
    }

    @keyframes float-reading {
      0%,100% { transform: perspective(900px) rotateY(18deg) rotateX(-6deg) translateY(0px); }
      50% { transform: perspective(900px) rotateY(20deg) rotateX(-4deg) translateY(-14px); }
    }
    @keyframes float-listening {
      0%,100% { transform: perspective(900px) rotateY(14deg) rotateX(5deg) translateY(0px); }
      50% { transform: perspective(900px) rotateY(16deg) rotateX(7deg) translateY(-12px); }
    }
    @keyframes float-writing {
      0%,100% { transform: perspective(900px) rotateY(-18deg) rotateX(-6deg) translateY(0px); }
      50% { transform: perspective(900px) rotateY(-20deg) rotateX(-4deg) translateY(-16px); }
    }
    @keyframes float-speaking {
      0%,100% { transform: perspective(900px) rotateY(-14deg) rotateX(4deg) translateY(0px); }
      50% { transform: perspective(900px) rotateY(-16deg) rotateX(6deg) translateY(-10px); }
    }

    /* Hide on small viewports */
    @media (max-width: 900px) {
      .hfc-listening, .hfc-speaking { display: none; }
    }
    @media (max-width: 640px) {
      .hfc-reading, .hfc-writing { display: none; }
    }

    /* Score ring widget */
    .hero-score-ring {
      position: absolute;
      bottom: 22%;
      left: 50%;
      transform: translateX(-50%) perspective(600px) rotateX(28deg);
      display: flex;
      gap: 1rem;
      pointer-events: none;
      animation: float-ring 6s ease-in-out infinite;
    }
    @keyframes float-ring {
      0%,100% { transform: translateX(-50%) perspective(600px) rotateX(28deg) translateY(0); }
      50% { transform: translateX(-50%) perspective(600px) rotateX(26deg) translateY(-8px); }
    }
    .score-chip {
      background: rgba(17,20,38,0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      padding: 0.7rem 1.1rem;
      text-align: center;
      box-shadow: 0 12px 30px rgba(0,0,0,0.35);
    }
    .light .score-chip {
      background: rgba(255,255,255,0.8);
      border-color: rgba(0,0,0,0.08);
    }
    .score-chip .sc-val {
      font-family: 'Fraunces', serif;
      font-size: 1.4rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffe599, #c8932a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .score-chip .sc-label {
      font-size: 0.62rem;
      font-weight: 700;
      opacity: 0.5;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #fff;
    }
    .light .score-chip .sc-label { color: #0f172a; }

    @media (max-width: 640px) {
      .hero-score-ring { display: none; }
    }

    /* Glowing orb layer */
    .hero-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.18;
      pointer-events: none;
    }
    .hero-orb-1 {
      width: 340px; height: 340px;
      background: radial-gradient(circle, #7c3aed, transparent 70%);
      top: 10%; left: 5%;
      animation: orb-drift-1 12s ease-in-out infinite alternate;
    }
    .hero-orb-2 {
      width: 280px; height: 280px;
      background: radial-gradient(circle, #06b6d4, transparent 70%);
      top: 20%; right: 8%;
      animation: orb-drift-2 15s ease-in-out infinite alternate;
    }
    .hero-orb-3 {
      width: 200px; height: 200px;
      background: radial-gradient(circle, #f59e0b, transparent 70%);
      bottom: 25%; left: 50%;
      animation: orb-drift-3 10s ease-in-out infinite alternate;
    }
    @keyframes orb-drift-1 {
      from { transform: translate(0,0) scale(1); }
      to { transform: translate(30px, 40px) scale(1.1); }
    }
    @keyframes orb-drift-2 {
      from { transform: translate(0,0) scale(1); }
      to { transform: translate(-25px, 30px) scale(0.9); }
    }
    @keyframes orb-drift-3 {
      from { transform: translateX(-50%) scale(1); }
      to { transform: translateX(-50%) scale(1.15) translateY(-20px); }
    }

    /* Grid line depth overlay */
    .hero-grid-floor {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) perspective(600px) rotateX(65deg);
      width: 900px;
      height: 300px;
      background-image:
        linear-gradient(rgba(147,51,234,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(147,51,234,0.12) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 100%, black 30%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 100%, black 30%, transparent 80%);
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  // Build the 3D scene
  const scene = document.createElement('div');
  scene.className = 'hero-3d-scene';
  scene.innerHTML = `
    <!-- Glowing orbs -->
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>
    <div class="hero-orb hero-orb-3"></div>

    <!-- Grid floor -->
    <div class="hero-grid-floor"></div>

    <!-- Reading card -->
    <div class="hero-float-card hfc-reading">
      <div class="hfc-icon">🕵️</div>
      <div class="hfc-label">Module 01</div>
      <div class="hfc-title">Reading</div>
      <div class="hfc-sub">14 question types + timed drills</div>
      <span class="hfc-badge" style="background:rgba(147,51,234,0.15);color:#a855f7">8 hrs · Hard</span>
    </div>

    <!-- Listening card -->
    <div class="hero-float-card hfc-listening">
      <div class="hfc-icon">🎧</div>
      <div class="hfc-label">Module 02</div>
      <div class="hfc-title">Listening</div>
      <div class="hfc-sub">4 sections, spelling traps</div>
      <span class="hfc-badge" style="background:rgba(6,182,212,0.15);color:#06b6d4">6 hrs · Med</span>
    </div>

    <!-- Writing card -->
    <div class="hero-float-card hfc-writing">
      <div class="hfc-icon">✍️</div>
      <div class="hfc-label">Module 03</div>
      <div class="hfc-title">Writing</div>
      <div class="hfc-sub">Task 1 + 2, templates, essays</div>
      <span class="hfc-badge" style="background:rgba(245,158,11,0.15);color:#f59e0b">10 hrs · Hard</span>
    </div>

    <!-- Speaking card -->
    <div class="hero-float-card hfc-speaking">
      <div class="hfc-icon">🎤</div>
      <div class="hfc-label">Module 04</div>
      <div class="hfc-title">Speaking</div>
      <div class="hfc-sub">Part 1–3 fluency frameworks</div>
      <span class="hfc-badge" style="background:rgba(236,72,153,0.15);color:#ec4899">8 hrs · Med</span>
    </div>

    <!-- Score chips -->
    <div class="hero-score-ring">
      <div class="score-chip"><div class="sc-val">7.5</div><div class="sc-label">Band Target</div></div>
      <div class="score-chip"><div class="sc-val">16</div><div class="sc-label">Modules</div></div>
      <div class="score-chip"><div class="sc-val">79+</div><div class="sc-label">PTE Score</div></div>
    </div>
  `;

  hero.style.position = 'relative';
  hero.style.overflow = 'hidden';
  hero.insertBefore(scene, hero.firstChild);

  // Subtle parallax on mousemove
  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;

    const cards = hero.querySelectorAll('.hero-float-card');
    cards.forEach((card, i) => {
      const depth = 0.5 + i * 0.15;
      const mx = dx * depth * 10, my = dy * depth * 8;
      card.style.marginLeft = mx + 'px';
      card.style.marginTop = my + 'px';
    });
  });
}

// ==========================================
// 4. NEON SECTION DIVIDERS (simple canvas lines)
// ==========================================
function initNeonDividers() {
  document.querySelectorAll('canvas.three-separator').forEach(canvas => {
    canvas.width = canvas.offsetWidth || window.innerWidth;
    canvas.height = 2;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '1px';
    canvas.style.opacity = '0.4';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.3, '#7c3aed');
    grad.addColorStop(0.7, '#06b6d4');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, 2);
  });
}
