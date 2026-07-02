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
    /* NOTE: --paper/--ink/--line/--soft/--blue/--terra/--gold/--green are intentionally
       NOT forced here anymore. Every page now defines its own paper/ink/accent/gold
       values (maroon #7a2331 + gold #a8792f house palette) to match the rest of the
       site, and forcing shared values here with !important previously fought those
       per-page definitions - most visibly, forcing --green globally broke the
       semantic "correct answer = green" feedback color on quiz pages that reuse
       --green for both their brand accent and answer-checking UI. */
    html.light,
    :root {
      --paper: #fffefb !important;
      --ink: #1c1a17 !important;
    }

    html.light body,
    html.light {
      background: #f3ecd8 !important;
      color: #1c1a17 !important;
    }

    /* Header & Footer Navigation in Mock Simulator (Clean, professional look) */
    html.light header,
    html.light header[class*="bg-black"],
    html.light header.bg-black\/40 {
      background: #ffffff !important;
      border-bottom: 1px solid rgba(15, 23, 42, 0.06) !important;
      color: #1c1a17 !important;
    }
    html.light header h2,
    html.light header span,
    html.light header a,
    html.light header div {
      color: #1c1a17 !important;
    }
    html.light header a[class*="bg-white"],
    html.light header div[class*="bg-white"],
    html.light header button[class*="bg-white"] {
      background: #f3ecd8 !important;
      border: 1px solid rgba(15, 23, 42, 0.08) !important;
      color: #1c1a17 !important;
    }
    html.light header a[class*="bg-white"]:hover,
    html.light header button[class*="bg-white"]:hover {
      background: #e5ded0 !important;
    }
    html.light header span[class*="text-purple-400"] {
      color: #7a2331 !important;
    }
    html.light header .timer-pill,
    html.light header span#timerText {
      color: #7a2331 !important;
    }

    /* Main Content Layout Panels */
    html.light .audio-pane,
    html.light .passage-pane {
      background: #f3ecd8 !important;
      border-right: 1px solid rgba(15, 23, 42, 0.06) !important;
    }
    html.light .questions-pane {
      background: #f3ecd8 !important;
    }

    /* Bottom Nav Tray in Simulator */
    html.light footer,
    html.light div[class*="border-t"][class*="bg-black"] {
      background: #ffffff !important;
      border-top: 1px solid rgba(15, 23, 42, 0.06) !important;
      color: #1c1a17 !important;
    }

    /* Audio Player Control Card (Light theme styling) */
    html.light .audio-player-card {
      background: #ffffff !important;
      border: 1px solid rgba(122, 35, 49, 0.12) !important;
      box-shadow: 0 10px 30px rgba(122, 35, 49, 0.04) !important;
    }
    html.light .audio-player-card select,
    html.light .audio-player-card option {
      background: #ffffff !important;
      color: #7a2331 !important;
    }
    html.light button#playBtn {
      background-color: #7a2331 !important;
      color: #ffffff !important;
      box-shadow: 0 4px 12px rgba(122, 35, 49, 0.25) !important;
    }
    html.light button#playBtn:hover {
      background-color: #5e1a25 !important;
    }
    html.light button[onclick="stopAudio()"] {
      background: #f3ecd8 !important;
      border: 1px solid rgba(15, 23, 42, 0.08) !important;
      color: #4a453d !important;
    }
    html.light button[onclick="stopAudio()"]:hover {
      background: #e5ded0 !important;
      color: #1c1a17 !important;
    }
    html.light .audio-player-card div[class*="bg-black/20"] {
      background: #f3ecd8 !important;
      border: 1px solid rgba(15, 23, 42, 0.08) !important;
    }
    html.light .audio-player-card span[class*="text-stone-500"] {
      color: #4a453d !important;
    }
    html.light #audioSpeed {
      color: #7a2331 !important;
    }
    html.light #audioSpeed option {
      background: #ffffff !important;
      color: #1c1a17 !important;
    }
    html.light input[type="range"]#audioTimeline {
      background: rgba(15, 23, 42, 0.08) !important;
    }
    html.light #currentTime,
    html.light #totalDuration {
      color: #766f62 !important;
    }

    /* Simulator Warnings & Tips (Teal info box contrast fixes) */
    html.light div[class*="bg-teal-500/8"],
    html.light div[class*="border-teal-500"],
    html.light div[class*="text-teal-200"],
    html.light .instruction-box,
    html.light div[class*="bg-teal-500/10"] {
      background-color: rgba(13, 148, 136, 0.04) !important;
      border-color: rgba(13, 148, 136, 0.15) !important;
      color: #0f766e !important;
    }
    html.light div[class*="bg-teal-500/8"] strong,
    html.light div[class*="bg-teal-500/8"] span,
    html.light .instruction-box *,
    html.light div[class*="bg-teal-500/10"] * {
      color: #0d9488 !important;
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
      background: linear-gradient(rgba(122, 35, 49, 0.03) 1px, transparent 1px) 0 0/24px 24px,
                  linear-gradient(90deg, rgba(122, 35, 49, 0.03) 1px, transparent 1px) 0 0/24px 24px,
                  #ffffff !important;
      border-color: var(--blue) !important;
      color: var(--ink) !important;
    }

    /* Option states in lessons */
    html.light .opt:hover {
      background: rgba(122, 35, 49, 0.04) !important;
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

    /* Badges */
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

    /* NOTE: no longer forcing a blanket heading color here - pages define their own
       h1-h4 colors (ink by default, with maroon/gold spans for emphasis), and the old
       "#1e1b4b" indigo override was clobbering those with !important, most visibly
       muting intentional light-on-maroon headings like the UKVI "Boss Fight" banner. */

    /* Question box and passage text visibility overrides (Highly visible & readable) */
    html.light .q-box p,
    html.light .instruction-box p {
      color: #1c1a17 !important; /* High-contrast Slate-900 */
    }
    
    html.light #passageContent p,
    html.light #passageContent span,
    html.light #passageContent li {
      color: #4a453d !important; /* Premium readable slate-700 */
    }
    html.light #passageContent h1,
    html.light #passageContent h2,
    html.light #passageContent h3,
    html.light #passageContent strong {
      color: #1c1a17 !important; /* Bold headings and bold text */
    }

    /* Sub-page text contrast adjustments */
    html.light .text-stone-500, html.light .text-stone-600, html.light .text-stone-700 { color: #4a453d !important; }
    html.light .text-stone-800, html.light .text-stone-900 { color: #1c1a17 !important; }
    html.light .text-gray-500, html.light .text-gray-600, html.light .text-gray-700 { color: #4a453d !important; }
    html.light .text-gray-800, html.light .text-gray-900 { color: #1c1a17 !important; }
    html.light .text-slate-500, html.light .text-slate-600, html.light .text-slate-700 { color: #4a453d !important; }

    /* Background overrides for Tailwind utility classes */
    html.light .bg-white { background-color: #ffffff !important; }
    html.light .bg-gray-50, html.light .bg-gray-100, html.light .bg-stone-50, html.light .bg-stone-100 { background-color: #f3ecd8 !important; }
    html.light .bg-slate-50, html.light .bg-slate-100 { background-color: #f3ecd8 !important; }

    html.light .border, html.light .border-gray-200, html.light .border-stone-200, html.light .border-slate-200 {
      border-color: rgba(15, 23, 42, 0.06) !important;
    }
    html.light .divide-gray-200 > :not([hidden]) ~ :not([hidden]) { border-color: rgba(15, 23, 42, 0.06) !important; }

    html.light .shadow-sm, html.light .shadow-md, html.light .shadow-lg {
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03) !important;
    }

    html.light .timer-pill { color: #7a2331 !important; }

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

    /* NOTE: the old blanket "html.light button {...!important}" rule that lived here is
       removed - it forced every <button> on every page to a white/slate style, which
       silently overrode intentional maroon-filled buttons (.btn-primary, .btn-drill,
       etc.) on every boutique lesson/PTE/UKVI page since those don't carry the
       bg-purple/bg-emerald/... exclusion classes this rule was written against. Buttons
       now take whatever color each page's own CSS gives them. */

    /* Selected Option Highlights in MCQ */
    html.light button[onclick*="selectOption"] {
      background-color: #ffffff !important;
      border-color: rgba(15, 23, 42, 0.08) !important;
      color: #4a453d !important;
    }
    html.light button[onclick*="selectOption"]:hover {
      background-color: #f3ecd8 !important;
      border-color: #6366f1 !important;
    }
    
    /* MCQ Selected (Translucent Indigo Glow) */
    html.light button[onclick*="selectOption"][class*="bg-purple-600/30"] {
      background-color: rgba(122, 35, 49, 0.08) !important;
      border-color: #6366f1 !important;
      color: #7a2331 !important;
      font-weight: 600 !important;
      box-shadow: 0 2px 8px rgba(122, 35, 49, 0.08) !important;
    }
    html.light button[onclick*="selectOption"][class*="bg-purple-600/30"] span {
      color: #7a2331 !important;
    }

    /* TFNG Selected (Solid Indigo with White text) */
    html.light button[onclick*="selectOption"][class*="bg-purple-600"]:not([class*="/30"]) {
      background-color: #7a2331 !important;
      border-color: #7a2331 !important;
      color: #ffffff !important;
      font-weight: 600 !important;
      box-shadow: 0 4px 12px rgba(122, 35, 49, 0.2) !important;
    }

    /* Input blanks in mock simulator */
    html.light .input-fill {
      background: #ffffff !important;
      border-color: rgba(15, 23, 42, 0.12) !important;
      color: #1c1a17 !important;
    }
    html.light .input-fill:focus {
      border-color: #7a2331 !important;
      box-shadow: 0 0 0 2px rgba(122, 35, 49, 0.15) !important;
    }

    /* Bottom Nav Tray Buttons */
    html.light .q-nav-btn {
      background: #ffffff !important;
      border-color: rgba(15, 23, 42, 0.08) !important;
      color: #4a453d !important;
    }
    html.light .q-nav-btn.current {
      border-color: #7a2331 !important;
      color: #7a2331 !important;
      box-shadow: 0 0 0 2px rgba(122, 35, 49, 0.15) !important;
    }
    html.light .q-nav-btn.answered {
      background: rgba(122, 35, 49, 0.08) !important;
      border-color: #6366f1 !important;
      color: #7a2331 !important;
    }
    html.light .q-nav-btn.flagged {
      border-color: #ea580c !important;
      background: rgba(234, 88, 12, 0.08) !important;
      color: #ea580c !important;
    }
  `;
  document.head.appendChild(lightCSS);
})();
