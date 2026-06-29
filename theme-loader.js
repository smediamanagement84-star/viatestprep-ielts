/**
 * ViATestPrep — Universal Theme Loader
 * ------------------------------------
 * Injected into every sub-page to force the premium dark color scheme
 * and apply high-contrast, premium styling across all preparation resources.
 *
 * © 2026 ViATestPrep. All Rights Reserved.
 */

(function() {
  'use strict';

  // ---- 1. Instant Theme Application (no flash) ----
  // Force dark mode globally to maintain a single, highly readable premium color scheme
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  localStorage.setItem('theme', 'dark');

  // ---- 2. Inject Dark Mode CSS Overrides ----
  var darkCSS = document.createElement('style');
  darkCSS.id = 'vtp-dark-mode-overrides';
  darkCSS.textContent = `
    /* === VTP Universal Dark Mode Overrides === */
    html.dark body,
    html.dark {
      background: #070913 !important;
      color: #f8fafc !important;
    }

    html.dark .toolbar {
      background: rgba(7, 9, 19, 0.92) !important;
      border-bottom-color: rgba(255,255,255,0.08) !important;
    }

    html.dark .card,
    html.dark [class*="card"],
    html.dark .module-mock,
    html.dark .q-box {
      background: rgba(17, 20, 38, 0.65) !important;
      border-color: rgba(255,255,255,0.08) !important;
      color: #f8fafc !important;
    }

    html.dark h1, html.dark h2, html.dark h3, html.dark h4 {
      color: #f1f5f9 !important;
    }

    /* Hide all theme toggles */
    #darkModeToggle,
    .theme-toggle-btn,
    .vtp-theme-toggle {
      display: none !important;
    }

    /* Question box and passage text visibility overrides (Highly visible & readable) */
    html.dark .q-box p,
    html.dark .instruction-box p {
      color: #f1f5f9 !important; /* High-contrast slate-100 */
    }
    
    html.dark #passageContent p,
    html.dark #passageContent span,
    html.dark #passageContent li {
      color: #d6d3d1 !important; /* Premium warm readable off-white */
    }
    html.dark #passageContent h1,
    html.dark #passageContent h2,
    html.dark #passageContent h3,
    html.dark #passageContent strong {
      color: #f1f5f9 !important; /* Bright headers and bold text */
    }

    /* Sub-page header text contrast adjustments */
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

    html.dark .timer-pill { color: #c4b5fd !important; }

    /* Feedbacks styling */
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
    html.dark .vtp-corner { background: linear-gradient(135deg, #5b2a86, #3b0a64) !important; }

    html.dark .nav-step { color: #94a3b8 !important; }
    html.dark .nav-step:hover { color: #e2e8f0 !important; }

    /* Retain custom Tailwind text colors (make sure they are not wiped by overrides) */
    html.dark .text-purple-300 { color: #d8b4fe !important; }
    html.dark .text-purple-400 { color: #c084fc !important; }
    html.dark .text-purple-500 { color: #a855f7 !important; }
    html.dark .text-teal-300 { color: #5eead4 !important; }
    html.dark .text-teal-400 { color: #2dd4bf !important; }
    html.dark .text-teal-500 { color: #14b8a6 !important; }
    html.dark .text-emerald-400 { color: #34d399 !important; }
    html.dark .text-emerald-500 { color: #10b981 !important; }
    html.dark .text-cyan-400 { color: #22d3ee !important; }
    html.dark .text-amber-400 { color: #fbbf24 !important; }
    html.dark .text-amber-500 { color: #f59e0b !important; }
    html.dark .text-red-400 { color: #f87171 !important; }

    /* Button styling exception: prevent general dark styles from overriding active selection states */
    html.dark button:not(.vtp-theme-toggle):not([class*="bg-purple"]):not([class*="bg-emerald"]):not([class*="bg-teal"]):not([class*="bg-red"]):not([class*="bg-green"]):not(.active) {
      background: rgba(255,255,255,0.06) !important;
      border-color: rgba(255,255,255,0.12) !important;
      color: #e2e8f0 !important;
    }

    /* Strong, vibrant custom overrides for Chosen/Selected answers */
    html.dark button.bg-purple-600,
    html.dark button[class*="bg-purple-600"] {
      background-color: #7c3aed !important;
      border-color: #c084fc !important;
      color: #ffffff !important;
      box-shadow: 0 0 12px rgba(124, 58, 237, 0.4) !important;
    }
    html.dark button.bg-purple-600\/30,
    html.dark button[class*="bg-purple-600/30"] {
      background-color: rgba(124, 58, 237, 0.3) !important;
      border-color: #a78bfa !important;
      color: #ffffff !important;
      box-shadow: inset 0 0 8px rgba(167, 139, 250, 0.2) !important;
    }
    html.dark button.bg-emerald-600,
    html.dark button[class*="bg-emerald-600"] {
      background-color: #059669 !important;
      border-color: #34d399 !important;
      color: #ffffff !important;
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
})();
