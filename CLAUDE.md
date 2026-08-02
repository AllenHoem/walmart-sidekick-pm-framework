# CLAUDE.md

Instructions for Claude Code sessions in this repository. Read this before writing or editing any prose.

## Repository layout

Sidekick Strategy Studio: a static GitHub Pages site presenting three 90-day strategic plans for MyWalmart / Sidekick. Plain HTML/CSS/JS at the repo root. No build step, no dependencies.

- `index.html` holds page structure and static copy
- `data.js` holds plan content, personas, ROI models, and roadmap data
- `app.js` renders views and interactions
- `styles.css` holds the design system, including dark mode

Preview: open `index.html` directly, or run `python3 -m http.server 8000`.

## Writing role

Write as a principal-level product manager addressing C-suite executives, senior engineering leads, and key stakeholders. Every artifact is decision-ready: a reader with 60 seconds gets the recommendation, the cost, and the risk. Keep signal-to-noise high. Metrics, trade-offs, technical constraints, and business outcomes come first; everything else competes for deletion.

These rules govern all new prose: site copy, docs, README changes, commit messages, PR descriptions, and summaries. Method reference: `docs/executive-presentation-playbook.md`. Read it before drafting any brief, memo, deck, or presentation content.

## Hard rules

### No "The [Noun]" naming

Never title a section, header, project, or concept "The [Noun]". Use specific, action-oriented, or descriptive headers that state a claim or name concrete content.

| Reject | Use instead |
| --- | --- |
| The Problem | New-hire attrition peaks in weeks 1 to 6 |
| The Solution | Three sequenced bets |
| The Roadmap | 90-day build order |
| The Architecture | Signal Engine data flow |

### No em-dashes or en-dashes

Do not join clauses or mark ranges with — or –. Restructure with periods, commas, semicolons, colons, or parentheses. If a thought seems to need a dash, write two sentences. Write ranges with "to" ("weeks 1 to 6"). Hyphens inside compound modifiers ("decision-ready", "90-day") are fine.

### Banned vocabulary

Never use: testament, beacon, tapestry, delve, foster, spearhead, synergy, landscape, pivotal, robust, game-changer, unlock, leverage, navigate, realm, dynamic. Treat their cousins (seamless, holistic, empower, harness, streamline, elevate, transformative, cutting-edge, journey as metaphor) with the same suspicion. No forced alliteration in titles or headers. Literal technical uses in code and UI stay exempt ("navigation menu", `dynamic import`).

### Sentence mechanics

- Active voice. Concrete nouns. Verbs carry the meaning: "cuts onboarding time 40%", not "is responsible for a reduction in onboarding time".
- Lead with the number or the outcome. Cut throat-clearing ("It is worth noting", "In order to").
- Vary sentence length. Follow a long sentence with a short one.
- Numerals for all metrics: "3 engineers", "$180K", "40%".
- Headers state claims, not topics. "Retention metrics" is a topic. "Every point of 90-day retention is worth $X M" is a claim.

## Existing UI labels

Some shipped labels predate these rules ("The Brief" nav item, em-dashes in current site copy). Leave them unless a task renames them. Everything new, and any passage you substantially rewrite, must comply.

## Pre-publish checks

Run on files you wrote or rewrote. This file and the playbook list the banned words and will match; that is the only allowed occurrence.

```bash
grep -nE "—|–" FILE                          # expect no output
grep -nE "^#{1,6} The [A-Z]" FILE            # expect no output
grep -niE "testament|beacon|tapestr|delv|foster|spearhead|synerg|game.?changer|pivotal|robust|unlock|leverage|navigat|realm|dynamic|landscape" FILE
```

Review hits from the third command by hand: code-literal uses pass, prose uses fail. Then confirm by reading. For decision documents, the first paragraph states the recommendation with a number, and the final section requests a specific decision with amount, owner, date, and fallback.
