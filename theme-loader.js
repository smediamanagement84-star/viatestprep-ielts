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
    html.dark,
    :root.dark {
      --paper: #070913 !important; /* Premium dark slate background */
      --ink: #f8fafc !important; /* High contrast text */
      --line: rgba(255, 255, 255, 0.08) !important; /* Subtle dark border */
      --soft: rgba(255, 255, 255, 0.04) !important; /* Subtle dark fill */
      
      /* Elevate brand colors to vibrant, high-contrast equivalents in dark mode */
      --blue: #8b5cf6 !important; /* Purple accent */
      --blue-d: #c084fc !important;
      --terra: #f87171 !important; /* Coral accent */
      --gold: #fbbf24 !important; /* Amber accent */
      --green: #34d399 !important; /* Emerald accent */
    }

    html.dark body,
    html.dark {
      background: #070913 !important;
      color: #f8fafc !important;
    }

    html.dark .toolbar {
      background: rgba(7, 9, 19, 0.92) !important;
      border-bottom-color: rgba(255,255,255,0.08) !important;
    }

    /* Hide all theme toggles */
    #darkModeToggle,
    .theme-toggle-btn,
    .vtp-theme-toggle {
      display: none !important;
    }

    /* Standard Card & Element Overrides for Lesson Modules */
    html.dark .card,
    html.dark .pillar,
    html.dark .case-card,
    html.dark .model-essay,
    html.dark .modal-box,
    html.dark .tpl-input,
    html.dark .tpl-tab,
    html.dark .btn-ghost,
    html.dark .opt,
    html.dark .formula,
    html.dark .tpl-meta,
    html.dark .tpl-starter-prefix,
    html.dark .tpl-word-count,
    html.dark [class*="card"],
    html.dark .module-mock,
    html.dark .q-box {
      background: rgba(17, 20, 38, 0.65) !important;
      border-color: var(--line) !important;
      color: var(--ink) !important;
    }

    /* Modal Styling */
    html.dark .modal-backdrop {
      background: rgba(7, 9, 19, 0.8) !important;
    }
    html.dark .modal-head {
      background: #0d0f1e !important;
      border-color: var(--line) !important;
      color: var(--ink) !important;
    }

    /* Premium Blueprint Grid Override */
    html.dark .blueprint {
      background: linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px) 0 0/24px 24px,
                  linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px) 0 0/24px 24px,
                  rgba(17, 20, 38, 0.65) !important;
      border-color: var(--blue) !important;
      color: var(--ink) !important;
    }

    /* Option states in lessons */
    html.dark .opt:hover {
      background: rgba(139, 92, 246, 0.08) !important;
      border-color: var(--blue) !important;
    }
    html.dark .opt.correct {
      border-color: var(--green) !important;
      background: rgba(52, 211, 153, 0.1) !important;
      color: var(--green) !important;
    }
    html.dark .opt.wrong {
      border-color: var(--terra) !important;
      background: rgba(248, 113, 113, 0.1) !important;
      color: var(--terra) !important;
    }

    /* Feedbacks in lessons */
    html.dark .feedback.good { border-color: var(--green) !important; background: rgba(52, 211, 153, 0.06) !important; }
    html.dark .feedback.bad { border-color: var(--terra) !important; background: rgba(248, 113, 113, 0.06) !important; }
    html.dark .feedback.tip { border-color: var(--gold) !important; background: rgba(251, 191, 36, 0.06) !important; }

    /* Inline badge styling override via attribute matching */
    html.dark .badge[style*="var(--terra)"],
    html.dark .badge[style*="terra"] {
      background: rgba(248, 113, 113, 0.1) !important;
      color: #fca5a5 !important;
      border: 1px solid rgba(248, 113, 113, 0.2) !important;
    }
    html.dark .badge[style*="var(--green)"],
    html.dark .badge[style*="green"] {
      background: rgba(52, 211, 153, 0.1) !important;
      color: #a7f3d0 !important;
      border: 1px solid rgba(52, 211, 153, 0.2) !important;
    }
    html.dark .badge[style*="var(--gold)"],
    html.dark .badge[style*="gold"] {
      background: rgba(251, 191, 36, 0.1) !important;
      color: #fde68a !important;
      border: 1px solid rgba(251, 191, 36, 0.2) !important;
    }

    html.dark h1, html.dark h2, html.dark h3, html.dark h4 {
      color: #f1f5f9 !important;
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

    /* Sub-page text contrast adjustments */
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

    /* Retain custom Tailwind text colors */
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

    /* Highlight Marker Overrides */
    html.dark .marker-yellow { background: linear-gradient(transparent 60%, rgba(251,191,36,0.25) 60%) !important; }
    html.dark .marker-pink { background: linear-gradient(transparent 60%, rgba(236,72,153,0.25) 60%) !important; }
    html.dark .marker-green { background: linear-gradient(transparent 60%, rgba(52,211,153,0.25) 60%) !important; }
    html.dark .marker-blue { background: linear-gradient(transparent 60%, rgba(59,130,246,0.25) 60%) !important; }

    /* Annotation Contrast Overrides */
    html.dark .annot-paraphrase { background-color: rgba(251, 191, 36, 0.25) !important; color: #fef08a !important; }
    html.dark .annot-thesis { background-color: rgba(59, 130, 246, 0.25) !important; color: #bfdbfe !important; }
    html.dark .annot-topic { background-color: rgba(34, 197, 94, 0.25) !important; color: #bbf7d0 !important; }
    html.dark .annot-cohesion { background-color: rgba(236, 72, 153, 0.25) !important; color: #fbcfe8 !important; }
    html.dark .annot-lexis { background-color: rgba(168, 85, 247, 0.25) !important; color: #e9d5ff !important; }

    /* Button styling exception */
    html.dark button:not(.vtp-theme-toggle):not([class*="bg-purple"]):not([class*="bg-emerald"]):not([class*="bg-teal"]):not([class*="bg-red"]):not([class*="bg-green"]):not(.active) {
      background: rgba(255,255,255,0.06) !important;
      border-color: rgba(255,255,255,0.12) !important;
      color: #e2e8f0 !important;
    }

    /* Chosen/Selected answers highlights */
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
