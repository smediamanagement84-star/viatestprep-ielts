/**
 * ViATestPrep — Universal Theme Loader
 * ------------------------------------
 * Injected into every sub-page to force the premium light color scheme
 * and apply high-contrast, premium styling across all preparation resources.
 *
 * © 2026 ViATestPrep. All Rights Reserved.
 */

(function() {
  'use strict';

  // ---- 1. Instant Theme Application (no flash) ----
  // Force light mode globally to maintain a single, highly readable premium color scheme
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');

  // ---- 2. Inject Light Mode CSS Overrides ----
  var lightCSS = document.createElement('style');
  lightCSS.id = 'vtp-light-mode-overrides';
  lightCSS.textContent = `
    /* === VTP Universal Light Mode Overrides === */
    html.light,
    :root {
      --paper: #f8fafc !important; /* Premium light slate background */
      --ink: #0f172a !important; /* Deep slate-900 text */
      --line: rgba(15, 23, 42, 0.06) !important; /* Clean, ultra-thin border */
      --soft: #f1f5f9 !important; /* Soft slate-100 fill */
      
      /* Elevate brand colors to vibrant, high-contrast equivalents in light mode */
      --blue: #4f46e5 !important; /* Indigo accent */
      --blue-d: #3730a3 !important;
      --terra: #ea580c !important; /* Orange accent */
      --gold: #d97706 !important; /* Amber accent */
      --green: #059669 !important; /* Emerald accent */
    }

    html.light body,
    html.light {
      background: #f8fafc !important;
      color: #0f172a !important;
    }

    html.light .toolbar {
      background: rgba(255, 255, 255, 0.85) !important;
      border-bottom-color: rgba(15, 23, 42, 0.06) !important;
      backdrop-filter: blur(8px) !important;
    }

    /* Hide all theme toggles */
    #darkModeToggle,
    .theme-toggle-btn,
    .vtp-theme-toggle {
      display: none !important;
    }

    /* Standard Card & Element Styling for Light Theme */
    html.light .card,
    html.light .pillar,
    html.light .case-card,
    html.light .model-essay,
    html.light .modal-box,
    html.light .tpl-input,
    html.light .tpl-tab,
    html.light .btn-ghost,
    html.light .opt,
    html.light .formula,
    html.light .tpl-meta,
    html.light .tpl-starter-prefix,
    html.light .tpl-word-count,
    html.light [class*="card"],
    html.light .module-mock,
    html.light .q-box {
      background: #ffffff !important;
      border-color: var(--line) !important;
      color: var(--ink) !important;
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.02) !important;
    }

    /* Modal Styling */
    html.light .modal-backdrop {
      background: rgba(15, 23, 42, 0.4) !important;
      backdrop-filter: blur(4px) !important;
    }
    html.light .modal-head {
      background: #ffffff !important;
      border-bottom: 1px solid var(--line) !important;
      color: var(--ink) !important;
    }

    /* Premium Blueprint Grid Override */
    html.light .blueprint {
      background: linear-gradient(rgba(79, 70, 229, 0.03) 1px, transparent 1px) 0 0/24px 24px,
                  linear-gradient(90deg, rgba(79, 70, 229, 0.03) 1px, transparent 1px) 0 0/24px 24px,
                  #ffffff !important;
      border-color: var(--blue) !important;
      color: var(--ink) !important;
    }

    /* Option states in lessons */
    html.light .opt:hover {
      background: rgba(79, 70, 229, 0.04) !important;
      border-color: var(--blue) !important;
    }
    html.light .opt.correct {
      border-color: var(--green) !important;
      background: rgba(5, 150, 105, 0.04) !important;
      color: var(--green) !important;
    }
    html.light .opt.wrong {
      border-color: var(--terra) !important;
      background: rgba(234, 88, 12, 0.04) !important;
      color: var(--terra) !important;
    }

    /* Feedbacks in lessons */
    html.light .feedback.good { border-color: var(--green) !important; background: rgba(5, 150, 105, 0.03) !important; }
    html.light .feedback.bad { border-color: var(--terra) !important; background: rgba(234, 88, 12, 0.03) !important; }
    html.light .feedback.tip { border-color: var(--gold) !important; background: rgba(217, 119, 6, 0.03) !important; }

    /* Inline badge styling override via attribute matching */
    html.light .badge[style*="var(--terra)"],
    html.light .badge[style*="terra"] {
      background: rgba(234, 88, 12, 0.08) !important;
      color: #c2410c !important;
      border: 1px solid rgba(234, 88, 12, 0.15) !important;
    }
    html.light .badge[style*="var(--green)"],
    html.light .badge[style*="green"] {
      background: rgba(5, 150, 105, 0.08) !important;
      color: #047857 !important;
      border: 1px solid rgba(5, 150, 105, 0.15) !important;
    }
    html.light .badge[style*="var(--gold)"],
    html.light .badge[style*="gold"] {
      background: rgba(217, 119, 6, 0.08) !important;
      color: #b45309 !important;
      border: 1px solid rgba(217, 119, 6, 0.15) !important;
    }

    html.light h1, html.light h2, html.light h3, html.light h4 {
      color: #1e1b4b !important; /* Deep Indigo-950 headings */
    }

    /* Question box and passage text visibility overrides (Highly visible & readable) */
    html.light .q-box p,
    html.light .instruction-box p {
      color: #0f172a !important; /* High-contrast Slate-900 */
    }
    
    html.light #passageContent p,
    html.light #passageContent span,
    html.light #passageContent li {
      color: #334155 !important; /* Premium readable slate-700 */
    }
    html.light #passageContent h1,
    html.light #passageContent h2,
    html.light #passageContent h3,
    html.light #passageContent strong {
      color: #0f172a !important; /* Bold headings and bold text */
    }

    /* Sub-page text contrast adjustments */
    html.light .text-stone-500, html.light .text-stone-600, html.light .text-stone-700 { color: #475569 !important; }
    html.light .text-stone-800, html.light .text-stone-900 { color: #0f172a !important; }
    html.light .text-gray-500, html.light .text-gray-600, html.light .text-gray-700 { color: #475569 !important; }
    html.light .text-gray-800, html.light .text-gray-900 { color: #0f172a !important; }
    html.light .text-slate-500, html.light .text-slate-600, html.light .text-slate-700 { color: #475569 !important; }

    /* Background overrides for Tailwind utility classes */
    html.light .bg-white { background-color: #ffffff !important; }
    html.light .bg-gray-50, html.light .bg-gray-100, html.light .bg-stone-50, html.light .bg-stone-100 { background-color: #f1f5f9 !important; }
    html.light .bg-slate-50, html.light .bg-slate-100 { background-color: #f1f5f9 !important; }

    html.light .border, html.light .border-gray-200, html.light .border-stone-200, html.light .border-slate-200 {
      border-color: rgba(15, 23, 42, 0.06) !important;
    }
    html.light .divide-gray-200 > :not([hidden]) ~ :not([hidden]) { border-color: rgba(15, 23, 42, 0.06) !important; }

    html.light .shadow-sm, html.light .shadow-md, html.light .shadow-lg {
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03) !important;
    }

    html.light .timer-pill { color: #4f46e5 !important; }

    /* Highlight Marker Overrides */
    html.light .marker-yellow { background: linear-gradient(transparent 60%, rgba(253, 224, 71, 0.4) 60%) !important; }
    html.light .marker-pink { background: linear-gradient(transparent 60%, rgba(244, 114, 182, 0.4) 60%) !important; }
    html.light .marker-green { background: linear-gradient(transparent 60%, rgba(74, 222, 128, 0.4) 60%) !important; }
    html.light .marker-blue { background: linear-gradient(transparent 60%, rgba(96, 165, 250, 0.4) 60%) !important; }

    /* Annotation Contrast Overrides */
    html.light .annot-paraphrase { background-color: rgba(253, 224, 71, 0.3) !important; color: #854d0e !important; }
    html.light .annot-thesis { background-color: rgba(96, 165, 250, 0.3) !important; color: #1e40af !important; }
    html.light .annot-topic { background-color: rgba(74, 222, 128, 0.3) !important; color: #166534 !important; }
    html.light .annot-cohesion { background-color: rgba(244, 114, 182, 0.3) !important; color: #9d174d !important; }
    html.light .annot-lexis { background-color: rgba(192, 132, 252, 0.3) !important; color: #6b21a8 !important; }

    /* Button styling in Light Mode */
    html.light button:not(.vtp-theme-toggle):not([class*="bg-purple"]):not([class*="bg-emerald"]):not([class*="bg-teal"]):not([class*="bg-red"]):not([class*="bg-green"]):not(.active) {
      background: #ffffff !important;
      border-color: rgba(15, 23, 42, 0.12) !important;
      color: #0f172a !important;
    }
    html.light button:not(.vtp-theme-toggle):not([class*="bg-purple"]):not([class*="bg-emerald"]):not([class*="bg-teal"]):not([class*="bg-red"]):not([class*="bg-green"]):not(.active):hover {
      background: #f1f5f9 !important;
    }

    /* Chosen/Selected answers highlights in Light Mode */
    html.light button.bg-purple-600,
    html.light button[class*="bg-purple-600"] {
      background-color: #4f46e5 !important; /* Premium Indigo */
      border-color: #6366f1 !important;
      color: #ffffff !important;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2) !important;
    }
    html.light button.bg-purple-600\/30,
    html.light button[class*="bg-purple-600/30"] {
      background-color: rgba(79, 70, 229, 0.1) !important;
      border-color: #6366f1 !important;
      color: #4f46e5 !important;
      box-shadow: inset 0 0 6px rgba(79, 70, 229, 0.05) !important;
    }
    html.light button.bg-emerald-600,
    html.light button[class*="bg-emerald-600"] {
      background-color: #059669 !important;
      border-color: #10b981 !important;
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
  document.head.appendChild(lightCSS);
})();
