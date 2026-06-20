/**
 * ViATestPrep Premium 3D Effects System
 * Integrates Three.js & GSAP for 3D hero objects, particle trails,
 * interactive card tilts, morphing shapes, and 3D UI carousels.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update task list item in background
  initGlobal3DBackground();
  init3DCardTilt();
  init3DHeroScene();
  init3DMorphingSphere();
  init3DCardCarousel();
  init3DNeonSeparators();
  init3DScoreGraph();
});

// Helper: Normalize mouse coordinates
const mouse = { x: 0, y: 0, rawX: 0, rawY: 0 };
window.addEventListener('mousemove', (e) => {
  mouse.rawX = e.clientX;
  mouse.rawY = e.clientY;
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Helper: Create Extruded Letter Path for Three.js
function createLetterShape(letter) {
  const shape = new THREE.Shape();
  switch (letter) {
    case 'I':
      shape.moveTo(-0.2, -0.7);
      shape.lineTo(0.2, -0.7);
      shape.lineTo(0.2, 0.7);
      shape.lineTo(-0.2, 0.7);
      break;
    case 'E':
      shape.moveTo(-0.4, -0.7);
      shape.lineTo(0.4, -0.7);
      shape.lineTo(0.4, -0.4);
      shape.lineTo(-0.1, -0.4);
      shape.lineTo(-0.1, -0.15);
      shape.lineTo(0.3, -0.15);
      shape.lineTo(0.3, 0.15);
      shape.lineTo(-0.1, 0.15);
      shape.lineTo(-0.1, 0.4);
      shape.lineTo(0.4, 0.4);
      shape.lineTo(0.4, 0.7);
      shape.lineTo(-0.4, 0.7);
      break;
    case 'L':
      shape.moveTo(-0.4, -0.7);
      shape.lineTo(0.4, -0.7);
      shape.lineTo(0.4, -0.4);
      shape.lineTo(-0.1, -0.4);
      shape.lineTo(-0.1, 0.7);
      shape.lineTo(-0.4, 0.7);
      break;
    case 'T':
      shape.moveTo(-0.15, -0.7);
      shape.lineTo(0.15, -0.7);
      shape.lineTo(0.15, 0.4);
      shape.lineTo(0.5, 0.4);
      shape.lineTo(0.5, 0.7);
      shape.lineTo(-0.5, 0.7);
      shape.lineTo(-0.5, 0.4);
      shape.lineTo(-0.15, 0.4);
      break;
    case 'S':
      // Serpentine path for block 'S'
      shape.moveTo(-0.35, -0.7);
      shape.lineTo(0.35, -0.7);
      shape.lineTo(0.35, -0.2);
      shape.lineTo(-0.1, -0.2);
      shape.lineTo(-0.1, 0.05);
      shape.lineTo(0.35, 0.05);
      shape.lineTo(0.35, 0.7);
      shape.lineTo(-0.35, 0.7);
      shape.lineTo(-0.35, 0.2);
      shape.lineTo(0.1, 0.2);
      shape.lineTo(0.1, -0.05);
      shape.lineTo(-0.35, -0.05);
      break;
    default:
      // Square placeholder
      shape.moveTo(-0.5, -0.5);
      shape.lineTo(0.5, -0.5);
      shape.lineTo(0.5, 0.5);
      shape.lineTo(-0.5, 0.5);
  }
  shape.closePath();
  return shape;
}

// ==========================================
// 1. GLOBAL 3D BACKGROUND & CURSOR TRAIL
// ==========================================
function initGlobal3DBackground() {
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
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Ambient Stars
  const starsCount = 600;
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
    size: 0.025,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending
  });
  const starField = new THREE.Points(starsGeo, starsMat);
  scene.add(starField);

  // Cursor Trail System
  const trailCount = 45;
  const trailGeo = new THREE.BufferGeometry();
  const trailPos = new Float32Array(trailCount * 3);
  const trailSizes = new Float32Array(trailCount);
  
  // Fill arrays initially
  for (let i = 0; i < trailCount; i++) {
    trailPos[i * 3] = 999;
    trailPos[i * 3 + 1] = 999;
    trailPos[i * 3 + 2] = 0;
    trailSizes[i] = 0;
  }
  
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  
  const trailMat = new THREE.PointsMaterial({
    color: 0x00f2fe,
    size: 0.12,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  const trailPoints = new THREE.Points(trailGeo, trailMat);
  scene.add(trailPoints);

  let trailHistory = [];
  
  window.addEventListener('mousemove', (e) => {
    // Project mouse screen coords to 3D space
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos3D = camera.position.clone().add(dir.multiplyScalar(distance));
    
    trailHistory.push({
      x: pos3D.x,
      y: pos3D.y,
      age: 0
    });
    
    if (trailHistory.length > trailCount) {
      trailHistory.shift();
    }
  });

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    
    const elapsedTime = clock.getElapsedTime();
    starField.rotation.y = elapsedTime * 0.015;
    starField.rotation.x = elapsedTime * 0.005;

    // Update cursor trail positions
    const posAttr = trailGeo.attributes.position;
    
    // Clear out
    for (let i = 0; i < trailCount; i++) {
      if (i < trailHistory.length) {
        const item = trailHistory[i];
        item.age += 0.08;
        
        posAttr.setXYZ(i, item.x, item.y, 0.2);
        
        // Dissipate trail point
        item.x += (Math.random() - 0.5) * 0.01;
        item.y += (Math.random() - 0.5) * 0.01;
      } else {
        posAttr.setXYZ(i, 999, 999, 0);
      }
    }
    posAttr.needsUpdate = true;
    
    // Filter dead elements
    trailHistory = trailHistory.filter(item => item.age < 1.0);

    // Apply color morph based on theme
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
}

// ==========================================
// 2. 3D CARD TILT & SPOTLIGHT SHINE
// ==========================================
function init3DCardTilt() {
  // Locate cards on the page dynamically
  const applyTiltToCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.classList.contains('tilt-active')) return;
      card.classList.add('tilt-active');
      card.style.transformStyle = 'preserve-3d';
      
      // Inject CSS shine overlay
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
        
        // Calculate normalized positions
        const normX = x / rect.width;
        const normY = y / rect.height;
        
        // Target tilt values
        const tiltX = (0.5 - normY) * 12; // tilt angle max 12deg
        const tiltY = (normX - 0.5) * 12;
        
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        shine.style.opacity = '1';
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, transparent 65%)`;
        
        // Apply 3D pop depth to icon wrapper & button inside card
        const icon = card.querySelector('.card-icon-wrapper');
        const arrow = card.querySelector('.go-arrow');
        if (icon) icon.style.transform = 'translateZ(30px)';
        if (arrow) arrow.style.transform = 'translateZ(20px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.4s ease, background 0.35s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        shine.style.opacity = '0';
        
        const icon = card.querySelector('.card-icon-wrapper');
        const arrow = card.querySelector('.go-arrow');
        if (icon) {
          icon.style.transition = 'transform 0.4s ease';
          icon.style.transform = 'translateZ(0)';
        }
        if (arrow) {
          arrow.style.transition = 'transform 0.4s ease';
          arrow.style.transform = 'translateZ(0)';
        }
      });
      
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
        const icon = card.querySelector('.card-icon-wrapper');
        const arrow = card.querySelector('.go-arrow');
        if (icon) icon.style.transition = 'none';
        if (arrow) arrow.style.transition = 'none';
      });
    });
  };

  applyTiltToCards();
  
  // Set observer to support dynamically added cards
  const observer = new MutationObserver(applyTiltToCards);
  observer.observe(document.body, { childList: true, subtree: true });
}

// ==========================================
// 3. 3D HERO INTERACTIVE SCENE
// ==========================================
function init3DHeroScene() {
  const container = document.getElementById('three-hero-container');
  if (!container) return;

  // Insert Canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'three-hero-canvas';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  const scene = new THREE.Scene();
  
  // Camera - adjusted Z to 5.0 for wide background space
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 5.0;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Glassmorphic Material with higher opacity to shine in light mode
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xc084fc,
    transparent: true,
    opacity: 0.6,
    roughness: 0.15,
    metalness: 0.1,
    transmission: 0.7,
    ior: 1.5,
    thickness: 0.8,
    specularIntensity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xeab308, // bright golden yellow
    roughness: 0.15,
    metalness: 0.95,
    emissive: 0x442200
  });

  const tealMat = new THREE.MeshPhysicalMaterial({
    color: 0x22d3ee,
    transparent: true,
    opacity: 0.65,
    roughness: 0.18,
    transmission: 0.75,
    thickness: 0.6
  });

  // Calculate side-spread distance based on aspect ratio
  const getSpreadX = () => {
    const aspect = container.clientWidth / container.clientHeight;
    // Lower aspect (mobile portrait) = narrower spread, higher aspect = wider spread
    return Math.min(2.8, aspect * 1.55);
  };
  let spreadX = getSpreadX();

  // Group to hold all mesh objects
  const objectsGroup = new THREE.Group();
  scene.add(objectsGroup);

  // 1. Extruded Glass Letters (placed in a wide background arc behind the text)
  const letters = ['I', 'E', 'L', 'T', 'S'];
  const letterMeshes = [];
  const extrudeSettings = { depth: 0.15, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.015, bevelSegments: 3 };

  letters.forEach((char, idx) => {
    const shape = createLetterShape(char);
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    const mat = idx % 2 === 0 ? glassMat.clone() : tealMat.clone();
    const mesh = new THREE.Mesh(geometry, mat);
    
    // Arrange in a wide circle behind the text
    const angle = (idx / (letters.length - 1)) * Math.PI * 0.8 - Math.PI * 0.4;
    mesh.position.x = Math.sin(angle) * (spreadX * 1.25);
    mesh.position.y = Math.cos(angle) * 0.6 - 0.25;
    mesh.position.z = -0.8; // far back
    
    mesh.scale.set(0.6, 0.6, 0.6);
    mesh.rotation.y = -angle * 0.5;
    
    mesh.userData = {
      floatSpeed: 0.7 + Math.random() * 0.5,
      rotSpeed: 0.4 + Math.random() * 0.4,
      initialY: mesh.position.y,
      initialRotY: mesh.rotation.y
    };

    objectsGroup.add(mesh);
    letterMeshes.push(mesh);
  });

  // 2. 3D Glass Book (floating on the left side)
  const bookGroup = new THREE.Group();
  const coverGeo = new THREE.BoxGeometry(0.8, 1.1, 0.13);
  const pagesGeo = new THREE.BoxGeometry(0.74, 1.03, 0.1);
  pagesGeo.center();
  
  const coverMesh = new THREE.Mesh(coverGeo, glassMat);
  const pagesMesh = new THREE.Mesh(pagesGeo, goldMat);
  pagesMesh.position.x = 0.03;

  bookGroup.add(coverMesh);
  bookGroup.add(pagesMesh);
  
  bookGroup.position.set(-spreadX, 0.1, 0.2); 
  bookGroup.rotation.set(0.3, 0.5, -0.15);
  bookGroup.userData = { floatSpeed: 0.7, rotSpeed: 0.2, initialY: 0.1, initialX: -spreadX };
  objectsGroup.add(bookGroup);

  // 3. 3D Magnifying Glass (floating on the right side)
  const lensGroup = new THREE.Group();
  const ringGeo = new THREE.TorusGeometry(0.26, 0.05, 12, 24);
  const handleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.38, 12);
  handleGeo.translate(0, -0.38, 0);
  
  const ringMesh = new THREE.Mesh(ringGeo, goldMat);
  const handleMesh = new THREE.Mesh(handleGeo, glassMat);
  const lensGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.015, 16);
  lensGeo.rotateX(Math.PI / 2);
  const lensMesh = new THREE.Mesh(lensGeo, tealMat);

  lensGroup.add(ringMesh);
  lensGroup.add(handleMesh);
  lensGroup.add(lensMesh);
  lensGroup.position.set(spreadX, 0.2, 0.3);
  lensGroup.rotation.set(-0.2, -0.3, 0.4);
  lensGroup.userData = { floatSpeed: 0.6, rotSpeed: 0.35, initialY: 0.2, initialX: spreadX };
  objectsGroup.add(lensGroup);

  // 4. 3D Pencil (floating on the left-front, under the book)
  const pencilGroup = new THREE.Group();
  const pencilBodyGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.45, 12);
  const pencilTipGeo = new THREE.ConeGeometry(0.03, 0.11, 12);
  pencilTipGeo.translate(0, 0.285, 0);
  const pencilEraserGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.06, 12);
  pencilEraserGeo.translate(0, -0.25, 0);

  const pBodyMesh = new THREE.Mesh(pencilBodyGeo, tealMat);
  const pTipMesh = new THREE.Mesh(pencilTipGeo, goldMat);
  const pEraserMesh = new THREE.Mesh(pencilEraserGeo, glassMat);

  pencilGroup.add(pBodyMesh);
  pencilGroup.add(pTipMesh);
  pencilGroup.add(pEraserMesh);
  pencilGroup.position.set(-spreadX * 0.95, -0.7, 0.5);
  pencilGroup.rotation.set(0.5, 0, -0.7);
  pencilGroup.userData = { floatSpeed: 0.5, rotSpeed: 0.45, initialY: -0.7, initialX: -spreadX * 0.95 };
  objectsGroup.add(pencilGroup);

  // Lights - brighter for front illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
  dirLight.position.set(0, 4, 6); // shine directly from front-top
  scene.add(dirLight);

  const pointLight1 = new THREE.PointLight(0xa855f7, 4, 15);
  pointLight1.position.set(-3, 1, 3);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x0ea5e9, 4, 15);
  pointLight2.position.set(3, -1, 3);
  scene.add(pointLight2);

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    
    // Recalculate dynamic side spreads
    spreadX = getSpreadX();
    bookGroup.position.x = -spreadX;
    if (bookGroup.userData) bookGroup.userData.initialX = -spreadX;
    
    lensGroup.position.x = spreadX;
    if (lensGroup.userData) lensGroup.userData.initialX = spreadX;
    
    pencilGroup.position.x = -spreadX * 0.95;
    if (pencilGroup.userData) pencilGroup.userData.initialX = -spreadX * 0.95;
    
    letterMeshes.forEach((mesh, idx) => {
      const angle = (idx / (letters.length - 1)) * Math.PI * 0.8 - Math.PI * 0.4;
      mesh.position.x = Math.sin(angle) * (spreadX * 1.25);
    });
  });

  // Interactive mouse offset tracking
  const targetRot = { x: 0, y: 0 };

  // Loop
  const clock = new THREE.Clock();
  function draw() {
    requestAnimationFrame(draw);
    const elapsed = clock.getElapsedTime();

    // Floating and rotating each object
    objectsGroup.children.forEach(obj => {
      const data = obj.userData;
      if (!data) return;
      
      // Floating wave Y
      obj.position.y = data.initialY + Math.sin(elapsed * data.floatSpeed) * 0.08;
      
      // Horizontal sway X
      if (typeof data.initialX !== 'undefined') {
        obj.position.x = data.initialX + Math.cos(elapsed * data.floatSpeed * 0.5) * 0.05;
      }
      
      // Rotation logic
      if (obj === bookGroup) {
        obj.rotation.y = 0.5 + Math.sin(elapsed * data.rotSpeed) * 0.15;
        obj.rotation.x = 0.3 + Math.cos(elapsed * data.rotSpeed) * 0.08;
      } else if (obj === lensGroup) {
        obj.rotation.z = 0.4 + Math.sin(elapsed * data.rotSpeed) * 0.25;
      } else if (obj === pencilGroup) {
        obj.rotation.y = elapsed * 0.5;
      } else {
        obj.rotation.y = data.initialRotY + Math.sin(elapsed * data.rotSpeed) * 0.25;
      }
    });

    // Tilt camera slightly to react to mouse cursor
    targetRot.x += (mouse.y * 0.12 - targetRot.x) * 0.08;
    targetRot.y += (mouse.x * 0.12 - targetRot.y) * 0.08;
    
    objectsGroup.rotation.x = targetRot.x;
    objectsGroup.rotation.y = targetRot.y;

    // Handle theme variations
    const isLight = document.documentElement.classList.contains('light');
    if (isLight) {
      pointLight1.color.setHex(0xa855f7);
      pointLight1.intensity = 5.0;
      pointLight2.color.setHex(0x0ea5e9);
      pointLight2.intensity = 5.0;
      glassMat.opacity = 0.35;
    } else {
      pointLight1.color.setHex(0xa855f7);
      pointLight1.intensity = 3.0;
      pointLight2.color.setHex(0x0ea5e9);
      pointLight2.intensity = 3.0;
      glassMat.opacity = 0.6;
    }

    renderer.render(scene, camera);
  }
  draw();
}

// ==========================================
// 4. 3D STUDY TRACK MORPHING SPHERE
// ==========================================
function init3DMorphingSphere() {
  const container = document.getElementById('three-morph-container');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'three-morph-canvas';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 3.8;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particle cloud configuration
  const pCount = 500;
  const positions = new Float32Array(pCount * 3);
  
  // Set up structures for geometries coordinates
  const sphereCoords = [];
  const torusCoords = [];
  const knotCoords = [];
  const helixCoords = [];
  const cubeCoords = [];

  for (let i = 0; i < pCount; i++) {
    // 1. Sphere coordinates
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 1.0;
    sphereCoords.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );

    // 2. Torus coordinates
    const tTheta = Math.random() * Math.PI * 2;
    const tPhi = Math.random() * Math.PI * 2;
    const R = 0.8;
    const rT = 0.35;
    torusCoords.push(
      (R + rT * Math.cos(tPhi)) * Math.cos(tTheta),
      (R + rT * Math.cos(tPhi)) * Math.sin(tTheta),
      rT * Math.sin(tPhi)
    );

    // 3. Torus Knot coordinates
    const t = (i / pCount) * Math.PI * 2 * 3; // winding loops
    const p = 2;
    const q = 3;
    const rK = 0.45 * (2 + Math.sin(q * t));
    knotCoords.push(
      0.35 * rK * Math.cos(p * t) + (Math.random() - 0.5) * 0.08,
      0.35 * rK * Math.sin(p * t) + (Math.random() - 0.5) * 0.08,
      0.35 * Math.cos(q * t) + (Math.random() - 0.5) * 0.08
    );

    // 4. Double Helix coordinates
    const hT = (i / pCount) * Math.PI * 4;
    const strand = i % 2 === 0 ? 1 : -1;
    const rH = 0.55;
    helixCoords.push(
      rH * Math.cos(hT) * strand + (Math.random() - 0.5) * 0.05,
      rH * Math.sin(hT) * strand + (Math.random() - 0.5) * 0.05,
      (hT / (Math.PI * 4)) * 2 - 1 // vertical distribution
    );

    // 5. Cube coordinates
    cubeCoords.push(
      (Math.random() - 0.5) * 1.6,
      (Math.random() - 0.5) * 1.6,
      (Math.random() - 0.5) * 1.6
    );
  }

  // Set initial shape as Sphere
  for (let i = 0; i < pCount * 3; i++) {
    positions[i] = sphereCoords[i];
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x9c5bf5,
    size: 0.05,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending
  });

  const pointsMesh = new THREE.Points(geometry, material);
  scene.add(pointsMesh);

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Morph function using GSAP
  window.morphSphereTo = function(targetShapeName) {
    let sourceCoords;
    let targetColor;
    
    switch (targetShapeName) {
      case 'ielts-7.0':
        sourceCoords = sphereCoords;
        targetColor = 0xa855f7; // purple
        break;
      case 'ielts-7.5':
        sourceCoords = torusCoords;
        targetColor = 0xc8932a; // gold
        break;
      case 'pte-65':
        sourceCoords = helixCoords;
        targetColor = 0x0ea5e9; // blue
        break;
      case 'pte-79':
        sourceCoords = knotCoords;
        targetColor = 0xf97316; // orange
        break;
      case 'ukvi':
        sourceCoords = cubeCoords;
        targetColor = 0x10b981; // emerald
        break;
      default:
        sourceCoords = sphereCoords;
        targetColor = 0x9c5bf5;
    }

    const posAttr = geometry.attributes.position;
    
    // Animate each coordinate using GSAP
    for (let i = 0; i < pCount; i++) {
      const idx = i * 3;
      gsap.to(posAttr.array, {
        [idx]: sourceCoords[idx],
        [idx + 1]: sourceCoords[idx + 1],
        [idx + 2]: sourceCoords[idx + 2],
        duration: 1.25,
        ease: 'power3.inOut',
        onUpdate: () => {
          posAttr.needsUpdate = true;
        }
      });
    }

    // Morph points color
    gsap.to(material.color, {
      r: ((targetColor >> 16) & 255) / 255,
      g: ((targetColor >> 8) & 255) / 255,
      b: (targetColor & 255) / 255,
      duration: 1.2
    });
  };

  // Wire up morph buttons inside HTML target selector widget
  const setupMorphTriggers = () => {
    const btns = document.querySelectorAll('#calcOptions .calc-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const track = btn.getAttribute('data-track');
        if (track && window.morphSphereTo) {
          window.morphSphereTo(track);
        }
      });
    });
  };
  setupMorphTriggers();

  // Draw loop
  function draw() {
    requestAnimationFrame(draw);
    pointsMesh.rotation.y += 0.007;
    pointsMesh.rotation.x += 0.003;
    renderer.render(scene, camera);
  }
  draw();
}

// ==========================================
// 5. CSS 3D CYLINDER CARD CAROUSEL
// ==========================================
function init3DCardCarousel() {
  const container = document.getElementById('modulesSection');
  if (!container) return;

  const inner = container.querySelector('.modules-inner');
  if (!inner) return;

  // 1. Create and inject view toggler button in index.html
  const header = container.querySelector('.section-header');
  if (!header) return;

  const toggleWrapper = document.createElement('div');
  toggleWrapper.className = 'flex justify-center md:justify-start mt-6 mb-2';
  toggleWrapper.innerHTML = `
    <button id="toggle3DViewBtn" class="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-purple-600 hover:border-purple-600 hover:text-white font-bold text-xs transition duration-300">
      <span>📐</span> <span id="toggle3DLabel">Switch to 3D Cylinder Workspace</span>
    </button>
  `;
  header.appendChild(toggleWrapper);

  const toggleBtn = document.getElementById('toggle3DViewBtn');
  let is3DMode = false;
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .modules-workspace-3d {
      perspective: 1600px;
      perspective-origin: 50% 30%;
      height: 620px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-top: 3rem;
    }
    .carousel-cylinder-3d {
      width: 320px;
      height: 380px;
      position: absolute;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: grab;
      z-index: 5;
    }
    .carousel-cylinder-3d:active {
      cursor: grabbing;
    }
    .carousel-cylinder-3d .card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s;
    }
    /* Dim background cards and make them clickable */
    .carousel-cylinder-3d .card.carousel-behind {
      opacity: 0.22;
      filter: blur(1.5px) grayscale(70%);
      cursor: pointer;
    }
    .carousel-cylinder-3d .card.carousel-focus {
      opacity: 1;
      pointer-events: auto;
      filter: none;
      box-shadow: 0 25px 50px -12px rgba(156, 91, 245, 0.35);
    }
    .carousel-nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-main);
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 100;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      user-select: none;
    }
    .carousel-nav-arrow:hover {
      background: rgba(91, 42, 134, 0.4);
      border-color: hsl(var(--primary));
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 0 15px rgba(91, 42, 134, 0.4);
    }
    .carousel-nav-arrow.prev {
      left: 2rem;
    }
    .carousel-nav-arrow.next {
      right: 2rem;
    }
    .light .carousel-nav-arrow {
      background: rgba(255, 255, 255, 0.6);
    }
    .light .carousel-nav-arrow:hover {
      background: rgba(91, 42, 134, 0.15);
    }
    .carousel-dots-wrapper {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.6rem;
      z-index: 100;
    }
    .carousel-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid var(--border-color);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .carousel-dot:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    .carousel-dot.active {
      background: hsl(var(--primary));
      width: 24px;
      border-radius: 999px;
      box-shadow: 0 0 10px hsl(var(--primary));
    }
    .light .carousel-dot {
      background: rgba(0, 0, 0, 0.2);
    }
    .light .carousel-dot:hover {
      background: rgba(0, 0, 0, 0.4);
    }
    .carousel-floor-reflection {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) rotateX(80deg);
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(156, 91, 245, 0.12) 0%, transparent 60%);
      pointer-events: none;
      z-index: 1;
    }
    .light .carousel-floor-reflection {
      background: radial-gradient(circle, rgba(91, 42, 134, 0.06) 0%, transparent 60%);
    }
    @media (max-width: 768px) {
      .carousel-nav-arrow {
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
      }
      .carousel-nav-arrow.prev { left: 0.5rem; }
      .carousel-nav-arrow.next { right: 0.5rem; }
    }
  `;
  document.head.appendChild(styleEl);

  toggleBtn.addEventListener('click', () => {
    is3DMode = !is3DMode;
    if (is3DMode) {
      enter3DWorkspace();
      toggleBtn.classList.add('bg-purple-600', 'border-purple-600', 'text-white');
      document.getElementById('toggle3DLabel').textContent = 'Switch to standard grid view';
    } else {
      exit3DWorkspace();
      toggleBtn.classList.remove('bg-purple-600', 'border-purple-600', 'text-white');
      document.getElementById('toggle3DLabel').textContent = 'Switch to 3D Cylinder Workspace';
    }
  });

  let cylinder, activeCards, radius, theta;
  let angleY = 0;
  let startX = 0;
  let isDragging = false;
  let velocityY = 0;

  function enter3DWorkspace() {
    // Collect all visible cards that are NOT currently filtered out
    const cards = Array.from(inner.querySelectorAll('.grid-container:not(.hidden) .card:not(.filtered-out)'));
    if (cards.length === 0) {
      alert("No active cards to build 3D Workspace!");
      is3DMode = false;
      return;
    }

    // Hide normal containers grid, preserve in DOM
    inner.querySelectorAll('.grid-container').forEach(c => c.style.display = 'none');
    inner.querySelectorAll('.section-divider').forEach(d => d.style.display = 'none');

    // Create 3D Workspace area
    const workspace = document.createElement('div');
    workspace.id = 'three-carousel-workspace';
    workspace.className = 'modules-workspace-3d';
    
    cylinder = document.createElement('div');
    cylinder.className = 'carousel-cylinder-3d';
    workspace.appendChild(cylinder);
    inner.appendChild(workspace);

    // Add floor reflection
    const reflection = document.createElement('div');
    reflection.className = 'carousel-floor-reflection';
    workspace.appendChild(reflection);

    // Calculate layout parameters
    activeCards = cards;
    const n = cards.length;
    theta = 360 / n;
    
    // Calculate radius to prevent cards overlaying
    radius = Math.round((165) / Math.tan(Math.PI / n));
    // Min radius fallback
    if (n < 6) radius = 350;

    // Reposition cards inside cylinder and attach listeners
    cards.forEach((card, idx) => {
      const cardAngle = idx * theta;
      card.dataset.carouselIndex = idx;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
      cylinder.appendChild(card);
      
      card.addEventListener('click', handleCardClick);
    });

    // Add left and right navigation arrows
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-nav-arrow prev';
    prevBtn.innerHTML = '‹';
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      rotateByOffset(-1);
    });
    workspace.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-nav-arrow next';
    nextBtn.innerHTML = '›';
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      rotateByOffset(1);
    });
    workspace.appendChild(nextBtn);

    // Add pagination dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots-wrapper';
    cards.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot';
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        rotateToCardIndex(idx);
      });
      dotsContainer.appendChild(dot);
    });
    workspace.appendChild(dotsContainer);

    updateCarouselHighlight();

    // Mouse and touch drag handler to spin cylinder
    workspace.addEventListener('mousedown', dragStart);
    workspace.addEventListener('touchstart', dragStart, { passive: true });
    window.addEventListener('mousemove', dragMove);
    window.addEventListener('touchmove', dragMove, { passive: false });
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);

    // Add wheel event listener for scroll control
    workspace.addEventListener('wheel', handleWheel, { passive: false });
  }

  function handleWheel(e) {
    e.preventDefault();
    cylinder.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    const direction = e.deltaY > 0 ? 1 : -1;
    angleY -= direction * theta;
    cylinder.style.transform = `translateZ(-${radius}px) rotateY(${angleY}deg)`;
    updateCarouselHighlight();
  }

  function handleCardClick(e) {
    const card = e.currentTarget;
    if (card.classList.contains('carousel-behind')) {
      e.preventDefault();
      e.stopPropagation();
      const idx = parseInt(card.dataset.carouselIndex);
      rotateToCardIndex(idx);
    }
  }

  function rotateToCardIndex(idx) {
    cylinder.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    const n = activeCards.length;
    const currentFocusIdx = (Math.round(-angleY / theta) % n + n) % n;
    
    let diff = (idx - currentFocusIdx + n) % n;
    if (diff > n / 2) {
      diff -= n;
    }
    
    angleY -= diff * theta;
    cylinder.style.transform = `translateZ(-${radius}px) rotateY(${angleY}deg)`;
    updateCarouselHighlight();
  }

  function rotateByOffset(offset) {
    cylinder.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    angleY -= offset * theta;
    cylinder.style.transform = `translateZ(-${radius}px) rotateY(${angleY}deg)`;
    updateCarouselHighlight();
  }

  function exit3DWorkspace() {
    const workspace = document.getElementById('three-carousel-workspace');
    if (!workspace) return;

    workspace.removeEventListener('wheel', handleWheel);

    // Extract cards from cylinder, put them back to original grid containers
    const cards = Array.from(cylinder.querySelectorAll('.card'));
    
    // Find containers and put them back
    const orientationGrid = inner.querySelector('#container-orientation .grid');
    const practiceGrid = inner.querySelector('#container-practice .grid');
    const ukviGrid = inner.querySelector('#container-ukvi .grid');
    const pteGrid = inner.querySelector('#container-pte .grid');

    cards.forEach(card => {
      card.removeEventListener('click', handleCardClick);
      card.style.transform = '';
      card.style.opacity = '';
      card.style.filter = '';
      card.classList.remove('carousel-behind', 'carousel-focus');

      // Put back to matching container based on tags
      const tags = card.getAttribute('data-tags');
      if (tags.includes('practice')) {
        practiceGrid.appendChild(card);
      } else if (tags.includes('ukvi')) {
        ukviGrid.appendChild(card);
      } else if (tags.includes('pte')) {
        pteGrid.appendChild(card);
      } else {
        orientationGrid.appendChild(card);
      }
    });

    workspace.remove();

    // Show standard grids again
    inner.querySelectorAll('.grid-container').forEach(c => c.style.display = '');
    inner.querySelectorAll('.section-divider').forEach(d => d.style.display = '');
    
    // Re-trigger standard filtering to match active states
    if (window.applyFilters) window.applyFilters();
  }

  function dragStart(e) {
    isDragging = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    velocityY = 0;
    cylinder.style.transition = 'none';
  }

  function dragMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - startX;
    startX = clientX;
    
    // Convert drag pixel coordinates to rotational degree
    velocityY = deltaX * 0.18;
    angleY += velocityY;
    
    cylinder.style.transform = `translateZ(-${radius}px) rotateY(${angleY}deg)`;
    updateCarouselHighlight();
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    // Momentum damping scroll simulation
    cylinder.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    
    // Snapping angle rotation to nearest card index
    const snappedCardIndex = Math.round(-angleY / theta);
    angleY = -snappedCardIndex * theta;
    
    cylinder.style.transform = `translateZ(-${radius}px) rotateY(${angleY}deg)`;
    updateCarouselHighlight();
  }

  function updateCarouselHighlight() {
    const focusIdx = (Math.round(-angleY / theta) % activeCards.length + activeCards.length) % activeCards.length;
    
    activeCards.forEach((card, idx) => {
      // Determine if card is facing camera (Focus) or facing backward (Dim)
      const diff = Math.min(Math.abs(idx - focusIdx), activeCards.length - Math.abs(idx - focusIdx));
      
      if (diff === 0) {
        card.className = card.className.replace(/\bcarousel-behind\b/g, '');
        if (!card.classList.contains('carousel-focus')) card.classList.add('carousel-focus');
      } else {
        card.className = card.className.replace(/\bcarousel-focus\b/g, '');
        if (!card.classList.contains('carousel-behind')) card.classList.add('carousel-behind');
      }
    });

    // Update dots active status
    const workspace = document.getElementById('three-carousel-workspace');
    if (workspace) {
      const dots = workspace.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === focusIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  // Hook into custom standard filters to reset carousel items if filters change
  const origApplyFilters = window.applyFilters;
  if (origApplyFilters) {
    window.applyFilters = function() {
      origApplyFilters();
      if (is3DMode) {
        // Redraw 3D Workspace with new card subset
        exit3DWorkspace();
        enter3DWorkspace();
      }
    };
  }
}

// ==========================================
// 6. 3D GLOWING SECTION NEON SEPARATORS
// ==========================================
function init3DNeonSeparators() {
  const separators = document.querySelectorAll('.three-separator');
  if (separators.length === 0) {
    // Replace standard horizontal HR tags on index.html with Canvas separators
    const dividersList = document.querySelectorAll('.section-divider');
    dividersList.forEach(div => {
      const canvas = document.createElement('canvas');
      canvas.className = 'three-separator section-divider';
      canvas.style.width = '100%';
      canvas.style.height = '60px';
      canvas.style.border = 'none';
      div.parentNode.replaceChild(canvas, div);
    });
  }

  const updatedSeparators = document.querySelectorAll('.three-separator');
  updatedSeparators.forEach((canvas) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / 60, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, 60);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create ribbon line path
    const pointsCount = 45;
    const pathPoints = [];
    for (let i = 0; i < pointsCount; i++) {
      pathPoints.push(new THREE.Vector3((i / (pointsCount - 1)) * 4 - 2, 0, 0));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const material = new THREE.LineBasicMaterial({
      color: 0x9c5bf5,
      linewidth: 3, // WebGL limits this to 1 on most systems, we offset with overlapping lines
      transparent: true,
      opacity: 0.6
    });

    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // Overlay glowing particle dots
    const dotGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const dotMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // Scroll impact values
    let scrollVal = 0;
    window.addEventListener('scroll', () => {
      scrollVal = window.scrollY * 0.003;
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime() * 1.5;

      const pos = geometry.attributes.position;
      const dotPos = dotGeo.attributes.position;

      // Animate wave coordinates using sine functions
      for (let i = 0; i < pointsCount; i++) {
        const x = pos.getX(i);
        // Base sine wave + scroll speed offset
        const y = Math.sin(x * 2.5 + t + scrollVal) * 0.15;
        const z = Math.cos(x * 1.8 + t + scrollVal) * 0.1;
        
        pos.setXYZ(i, x, y, z);
        dotPos.setXYZ(i, x, y, z);
      }
      pos.needsUpdate = true;
      dotPos.needsUpdate = true;

      // React to active theme colors
      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        material.color.setHex(0x5b2a86);
        dotMat.color.setHex(0x0d8a7a);
      } else {
        material.color.setHex(0x9c5bf5);
        dotMat.color.setHex(0x00f2fe);
      }

      renderer.render(scene, camera);
    }
    animate();

    // Resize canvas renderer
    window.addEventListener('resize', () => {
      camera.aspect = canvas.clientWidth / 60;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, 60);
    });
  });
}

// ==========================================
// 7. 3D SCORE HISTORY VISUALIZATION
// ==========================================
function init3DScoreGraph() {
  const container = document.getElementById('scoreBoard');
  if (!container) return;

  // Insert graph container inside scoreBoard widget
  let graphArea = document.getElementById('three-score-graph-container');
  if (!graphArea) {
    graphArea = document.createElement('div');
    graphArea.id = 'three-score-graph-container';
    graphArea.style.width = '100%';
    graphArea.style.height = '180px';
    graphArea.style.marginTop = '1.5rem';
    graphArea.style.borderRadius = '16px';
    graphArea.style.overflow = 'hidden';
    graphArea.style.border = '1px solid var(--border-color)';
    graphArea.style.background = 'rgba(255, 255, 255, 0.01)';
    
    // Append right after the history table container
    const tableContainer = document.getElementById('historyTableContainer');
    if (tableContainer) {
      tableContainer.parentNode.insertBefore(graphArea, tableContainer.nextSibling);
    } else {
      container.appendChild(graphArea);
    }
  }

  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  graphArea.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, graphArea.clientWidth / 180, 0.1, 100);
  camera.position.set(0, 1.2, 4);
  camera.lookAt(0, 0.2, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(graphArea.clientWidth, 180);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);
  const point = new THREE.PointLight(0xa855f7, 2, 8);
  point.position.set(0, 2, 2);
  scene.add(point);

  // Retrieve scores from localStorage
  const scores = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('score_test_')) {
      const parts = key.split('_');
      const testId = parts[2];
      const moduleName = parts[3];
      const bandScore = parseFloat(localStorage.getItem(key)) || 0;
      scores.push({ name: `Test ${testId} (${moduleName.charAt(0).toUpperCase()})`, score: bandScore });
    }
  }

  // Draw 3D Bars if we have scores, otherwise render 3D glowing hologram
  const barsGroup = new THREE.Group();
  scene.add(barsGroup);

  if (scores.length > 0) {
    const barSpacing = 0.55;
    const startX = -((scores.length - 1) * barSpacing) / 2;
    
    scores.forEach((item, idx) => {
      // IELTS maximum band is 9.0, normalise height parameter
      const height = (item.score / 9.0) * 1.2;
      const geo = new THREE.BoxGeometry(0.3, height, 0.3);
      geo.translate(0, height / 2, 0); // anchor pivot to bottom

      const barMat = new THREE.MeshStandardMaterial({
        color: 0x9c5bf5,
        roughness: 0.15,
        metalness: 0.7,
        emissive: 0x1f0d3a
      });
      
      const bar = new THREE.Mesh(geo, barMat);
      bar.position.set(startX + idx * barSpacing, 0, 0);
      barsGroup.add(bar);

      // Animate entry pop-up using GSAP
      bar.scale.y = 0;
      gsap.to(bar.scale, {
        y: 1,
        duration: 0.8,
        delay: idx * 0.15,
        ease: 'elastic.out(1, 0.5)'
      });
      
      // Color-code high bands
      if (item.score >= 7.5) {
        barMat.color.setHex(0x10b981); // Emerald green for high target
        barMat.emissive.setHex(0x022c22);
      } else if (item.score >= 6.5) {
        barMat.color.setHex(0xc8932a); // Gold for medium target
        barMat.emissive.setHex(0x2d1b02);
      }
    });

    // Draw floor grid line
    const gridHelper = new THREE.GridHelper(5, 10, 0x475569, 0x1e293b);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);
    
    graphArea.style.display = 'block';
  } else {
    // No scores yet, render 3D glowing hologram ring
    const ringGeo = new THREE.TorusGeometry(0.65, 0.05, 16, 100);
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f2fe,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.5,
      emissive: 0x003344
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    barsGroup.add(ring);
    
    // Add particle spark inside ring
    const sparkGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const sparkMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 2
    });
    const spark = new THREE.Mesh(sparkGeo, sparkMat);
    spark.position.y = 0.25;
    barsGroup.add(spark);

    // Hide scoreboard graph area outer border wrapper since it's empty
    graphArea.style.border = 'none';
  }

  // Draw loop
  function animate() {
    requestAnimationFrame(animate);
    barsGroup.rotation.y = mouse.x * 0.4;
    barsGroup.rotation.x = Math.max(-0.2, Math.min(0.4, mouse.y * 0.4 + 0.2));
    
    // Float spark if exists
    if (barsGroup.children.length === 2 && scores.length === 0) {
      barsGroup.children[1].position.y = 0.25 + Math.sin(Date.now() * 0.003) * 0.08;
      barsGroup.children[0].rotation.z += 0.01;
    }

    renderer.render(scene, camera);
  }
  animate();

  // Resize canvas
  window.addEventListener('resize', () => {
    camera.aspect = graphArea.clientWidth / 180;
    camera.updateProjectionMatrix();
    renderer.setSize(graphArea.clientWidth, 180);
  });
}
