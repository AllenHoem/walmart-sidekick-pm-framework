# Sidekick Strategy Studio

An interactive, single-page strategy framework for **MyWalmart / Sidekick — First 90 Days**,
built as a static site for GitHub Pages. No build step, no dependencies.

Based on *"First 90 Days: Three Strategic Plans for MyWalmart / Sidekick"* (Allen Hoem,
Principal Product Manager candidate, R-2555971).

## What's inside

| Section | What it does |
|---|---|
| **The Brief** | The 60-second executive path: five frames (Problem → Insight → Three bets → POV → Ask), the R4 equation (*Rejuvenation & rewards drive retention & results*), per-plan ROI headlines, the discovery sprint, and grounding facts |
| **Strategies** | Three distinct bets — Plan A (*the new hire*, Maya), Plan B (*everyone's daily friction*, Devon), Plan C (*the platform that learns per cohort*) — each with a persona + signature moment, a four-surface **storyboard** (alert → conversation → reward → growth path), CFO-style ROI math with stated assumptions, 30/60/90 phases, metrics, risks, and evidence triggers |
| **Signal Engine** | The five-layer signals-to-roadmap framework: an **interactive cohort simulator** (six scores including Wellbeing → intervention families including Rejuvenation), the three-tier **reward ladder** (everyday / quarterly / career), bandit guardrails, and compliance said out loud |
| **Roadmap** | **Journey swimlanes** with a **strategy dropdown filter** (ghosting non-selected plans) and mode filters, plus a weighted opportunity-score ranking with adjustable sliders |
| **Builder** | A generic, ready-to-input experience for creating new strategic alternatives in the same shape as A/B/C — with a live preview, a mode-coverage check, localStorage persistence, and JSON export/import |
| **Coverage** | A matrix mapping every plan (pre-built and custom) against the three experience modes |

Every section also carries a **"how this fits" strip** (the Signal Engine → Strategies →
Roadmap → Builder → Coverage pipeline, with the current page highlighted) and a collapsible
**"Behind the scenes — the science"** panel explaining the actual formulas and logic the page
runs (triangulation, threshold policy, Thompson sampling, the opportunity-scoring formula).

## The three experience modes

Every strategy in the framework declares its coverage across:

- **Proactive** — the system acts first: nudges, alerts, predictions, interventions
- **Reactive intelligence** — insights on demand: scores, dashboards, funnels, opportunity ranking
- **Conversational** — Sidekick dialogue: grounded answers and agentic action loops

The builder flags any plan that leaves a mode uncovered.

## Hosting on GitHub Pages

1. In this repository, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*
3. Pick the branch containing these files, folder **/ (root)**, and save
4. The site publishes at `https://<username>.github.io/walmart-sidekick-pm-framework/`

Everything is plain HTML/CSS/JS at the repo root (`index.html`, `styles.css`, `data.js`,
`app.js`), so no Actions workflow or build configuration is needed. A `.nojekyll` file is
included so Pages serves the files as-is.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Notes

- **Custom plans** live in the browser's localStorage — use **Export JSON** in the builder to
  move a plan between devices, and **Import JSON** to bring it back.
- **Dark mode** follows the OS preference; the toggle in the header overrides it.
- Colors used for the three modes are a colorblind-validated categorical trio; every mode
  reference carries a text label, never color alone.
- This is an independent candidate work product — not affiliated with or endorsed by Walmart Inc.
