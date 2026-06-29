/**
 * ViATestPrep — Universal Theme Loader & Dark Mode Toggle
 * -------------------------------------------------------
 * Injected into every sub-page for seamless dark/light theme
 * persistence synced with the main Hub (index.html).
 *
 * Features:
 * - Reads theme from localStorage on page load (instant, no flash)
 * - Injects a dark mode toggle button into the toolbar
 * - Applies comprehensive dark mode CSS overrides for warm-themed pages
 * - Responsive: hides XP bar text on mobile, compacts toolbar
 *
 * © 2026 ViATestPrep. All Rights Reserved.
 */

(function() {
  'use strict';

  // ---- 1. Instant Theme Application (no flash) ----
  var savedTheme = localStorage.getItem('theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }

  // ---- 2. Inject Dark Mode CSS Overrides ----
  // These override the warm light-themed pages when .dark is on <html>
  var darkCSS = document.createElement('style');
  darkCSS.id = 'vtp-dark-mode-overrides';
  darkCSS.textContent = `
    /* === VTP Universal Dark Mode Overrides === */
    html.dark body,
    html.dark {
      background: #0c0e1a !important;
      color: #e2e8f0 !important;
    }

    html.dark .toolbar {
      background: rgba(12, 14, 26, 0.92) !important;
      border-bottom-color: rgba(255,255,255,0.08) !important;
    }

    html.dark .card,
    html.dark [class*="card"],
    html.dark .module-mock {
      background: rgba(17, 20, 38, 0.65) !important;
      border-color: rgba(255,255,255,0.1) !important;
      color: #e2e8f0 !important;
    }

    html.dark h1, html.dark h2, html.dark h3, html.dark h4 {
      color: #f1f5f9 !important;
    }

    html.dark p, html.dark span, html.dark div, html.dark li, html.dark td, html.dark th, html.dark label {
      color: inherit;
    }

    html.dark a { color: #93c5fd; }
    html.dark a:hover { color: #bfdbfe; }

    html.dark .btn-ghost,
    html.dark .opt,
    html.dark button:not(.vtp-theme-toggle) {
      background: rgba(255,255,255,0.06) !important;
      border-color: rgba(255,255,255,0.12) !important;
      color: #e2e8f0 !important;
    }
    html.dark .btn-ghost:hover,
    html.dark .opt:hover {
      background: rgba(255,255,255,0.1) !important;
      border-color: rgba(255,255,255,0.2) !important;
    }

    html.dark .btn-primary {
      background: #5b2a86 !important;
      color: #fff !important;
    }

    html.dark .feedback.good { background: rgba(16, 185, 129, 0.1) !important; border-color: #10b981 !important; color: #a7f3d0 !important; }
    html.dark .feedback.bad { background: rgba(239, 68, 68, 0.1) !important; border-color: #ef4444 !important; color: #fca5a5 !important; }
    html.dark .feedback.tip { background: rgba(251, 191, 36, 0.1) !important; border-color: #f59e0b !important; color: #fde68a !important; }

    html.dark .opt.correct { background: rgba(16,185,129,0.15) !important; border-color: #10b981 !important; color: #6ee7b7 !important; }
    html.dark .opt.wrong { background: rgba(239,68,68,0.15) !important; border-color: #ef4444 !important; color: #fca5a5 !important; }

    html.dark .progress-bar { background: rgba(255,255,255,0.1) !important; }
    html.dark .badge { background: rgba(255,255,255,0.08) !important; color: #e2e8f0 !important; border-color: rgba(255,255,255,0.12) !important; }
    html.dark .chip { background: rgba(255,255,255,0.08) !important; color: #c4b5fd !important; }
    html.dark .gap { background: rgba(91,42,134,0.2) !important; border-color: #8b5cf6 !important; color: #c4b5fd !important; }
    html.dark .gap.filled { background: rgba(16,185,129,0.15) !important; border-color: #10b981 !important; color: #6ee7b7 !important; }
    html.dark .gap.wrong { background: rgba(239,68,68,0.15) !important; border-color: #ef4444 !important; color: #fca5a5 !important; }

    html.dark input, html.dark textarea, html.dark select {
      background: rgba(255,255,255,0.06) !important;
      border-color: rgba(255,255,255,0.12) !important;
      color: #e2e8f0 !important;
    }
    html.dark input::placeholder, html.dark textarea::placeholder {
      color: rgba(226,232,240,0.4) !important;
    }

    html.dark table { border-color: rgba(255,255,255,0.08) !important; }
    html.dark th { background: rgba(255,255,255,0.05) !important; color: #e2e8f0 !important; border-color: rgba(255,255,255,0.08) !important; }
    html.dark td { border-color: rgba(255,255,255,0.06) !important; }
    html.dark tr:nth-child(even) td { background: rgba(255,255,255,0.02) !important; }

    html.dark .marker-yellow { background: linear-gradient(transparent 60%, rgba(251,191,36,0.25) 60%) !important; }
    html.dark .marker-pink { background: linear-gradient(transparent 60%, rgba(236,72,153,0.25) 60%) !important; }
    html.dark .marker-green { background: linear-gradient(transparent 60%, rgba(52,211,153,0.25) 60%) !important; }

    html.dark .reveal { border-color: rgba(255,255,255,0.08) !important; }

    html.dark .stamp { border-color: #f87171 !important; color: #f87171 !important; }

    html.dark .vtp-corner {
      background: linear-gradient(135deg, #5b2a86, #3b0a64) !important;
    }

    html.dark .nav-step { color: #94a3b8 !important; }
    html.dark .nav-step:hover { color: #e2e8f0 !important; }

    /* Sub-page header text fixes */
    html.dark .text-stone-500, html.dark .text-stone-600, html.dark .text-stone-700 { color: #94a3b8 !important; }
    html.dark .text-stone-800, html.dark .text-stone-900 { color: #e2e8f0 !important; }
    html.dark .text-gray-500, html.dark .text-gray-600, html.dark .text-gray-700 { color: #94a3b8 !important; }
    html.dark .text-gray-800, html.dark .text-gray-900 { color: #e2e8f0 !important; }
    html.dark .text-slate-500, html.dark .text-slate-600, html.dark .text-slate-700 { color: #94a3b8 !important; }

    /* Background overrides for Tailwind utility classes */
    html.dark .bg-white { background-color: rgba(17, 20, 38, 0.65) !important; }
    html.dark .bg-gray-50, html.dark .bg-gray-100, html.dark .bg-stone-50, html.dark .bg-stone-100 { background-color: rgba(17, 20, 38, 0.4) !important; }
    html.dark .bg-slate-50, html.dark .bg-slate-100 { background-color: rgba(17, 20, 38, 0.4) !important; }

    html.dark .border, html.dark .border-gray-200, html.dark .border-stone-200, html.dark .border-slate-200 {
      border-color: rgba(255,255,255,0.1) !important;
    }
    html.dark .divide-gray-200 > :not([hidden]) ~ :not([hidden]) { border-color: rgba(255,255,255,0.08) !important; }

    html.dark .shadow-sm, html.dark .shadow-md, html.dark .shadow-lg {
      box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
    }

    /* Timer pill and XP display */
    html.dark .timer-pill { color: #c4b5fd !important; }

    /* VTP Theme Toggle Button */
    .vtp-theme-toggle {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.1);
      background: rgba(0,0,0,0.04);
      color: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all 0.25s ease;
      flex-shrink: 0;
      line-height: 1;
      padding: 0;
    }
    html.dark .vtp-theme-toggle {
      border-color: rgba(255,255,255,0.15) !important;
      background: rgba(255,255,255,0.06) !important;
      color: #e2e8f0 !important;
    }
    .vtp-theme-toggle:hover {
      transform: scale(1.08) rotate(12deg);
      border-color: #5b2a86;
      background: rgba(91,42,134,0.08) !important;
    }

    /* Responsive toolbar optimizations */
    @media (max-width: 640px) {
      .toolbar .progress-bar { display: none !important; }
      .toolbar .nav-step { display: none !important; }
      .toolbar .hidden.sm\\:block { display: none !important; }
    }
    @media (max-width: 480px) {
      .toolbar > div { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
    }
  `;
  document.head.appendChild(darkCSS);

  // ---- 3. DOM Ready: Inject Toggle Button Into Toolbar ----
  function injectToggle() {
    // Find the toolbar's inner flex container (the direct child that holds the layout)
    var toolbar = document.querySelector('.toolbar');
    if (!toolbar) return; // No toolbar on this page (e.g., practice pages)

    // Find the rightmost flex group in the toolbar
    var innerWrapper = toolbar.querySelector(':scope > div');
    if (!innerWrapper) return;

    // Find the last flex group (right side of toolbar)
    var rightGroups = innerWrapper.querySelectorAll(':scope > div');
    var rightGroup = rightGroups[rightGroups.length - 1];
    if (!rightGroup) return;

    // Don't inject twice
    if (toolbar.querySelector('.vtp-theme-toggle')) return;

    // Create toggle button
    var btn = document.createElement('button');
    btn.className = 'vtp-theme-toggle';
    btn.setAttribute('aria-label', 'Toggle Dark Mode');
    btn.title = 'Toggle Dark Mode';
    btn.innerHTML = isDark ? '☀️' : '🌙';

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var html = document.documentElement;
      var currentlyDark = html.classList.contains('dark');

      if (currentlyDark) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙';
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️';
      }
    });

    // Insert at the end of the right group
    rightGroup.appendChild(btn);
  }

  // Also handle practice pages that use a different layout (nav element at top)
  function injectTogglePractice() {
    // Practice pages (ielts-*-practice.html, pte-*.html) use a <nav> element
    var nav = document.querySelector('nav');
    if (!nav) return;
    // Check if already has a toggle
    if (document.querySelector('.vtp-theme-toggle')) return;

    // Find the rightmost flex/button group
    var groups = nav.querySelectorAll(':scope > div');
    var rightGroup = groups[groups.length - 1];
    if (!rightGroup) return;

    var btn = document.createElement('button');
    btn.className = 'vtp-theme-toggle';
    btn.style.cssText = 'margin-left:0.5rem;';
    btn.setAttribute('aria-label', 'Toggle Dark Mode');
    btn.title = 'Toggle Dark Mode';
    btn.innerHTML = isDark ? '☀️' : '🌙';

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var html = document.documentElement;
      var currentlyDark = html.classList.contains('dark');

      if (currentlyDark) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙';
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️';
      }
    });

    rightGroup.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectToggle();
      injectTogglePractice();
    });
  } else {
    injectToggle();
    injectTogglePractice();
  }
})();
