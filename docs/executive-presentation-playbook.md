# Executive Presentation Playbook

Methods for briefs, memos, decks, and status updates that senior audiences act on. Style gates live in `CLAUDE.md` and apply to every example here.

## Operating principle

Executives read to decide, not to learn. They allocate capital and absorb risk, and they stop reading the moment the decision is clear or the writing wastes their time. Every artifact must survive three cuts:

1. A 10-second scan of the title and first line.
2. A 60-second read: recommendation, cost, risk.
3. A 5-minute interrogation: evidence, trade-offs, assumptions.

Structure everything for the reader who stops early.

## Message architecture

### Answer first

Put the recommendation in the first two sentences, then defend it. This is Minto's pyramid: one governing claim, three supporting arguments, evidence beneath each. Never build toward a conclusion.

Buried: "We studied six cohorts across 40 stores. Several patterns emerged around onboarding friction. This suggests we should consider Plan A."

Led: "Fund Plan A at $1.2M for 90 days. Onboarding friction drives most early exits in the six cohorts studied, and Plan A attacks it directly."

### SCQA for openings that need context

Situation (facts the room already agrees on), Complication (what changed), Question (implied), Answer (your recommendation). Four sentences, then stop framing.

"Walmart employs about 1.9M associates, and Sidekick already answers about 3M questions a day. New associates still quit fastest in their first six weeks, before most support programs reach them. Plan A puts Sidekick into the first shift: proactive check-ins and one visible reward inside week one."

### One message per unit

A slide, a section, a paragraph each carries exactly one claim. The header states the claim; the body proves it. If a header could sit above two different bodies, it is a topic, not a message. Rewrite it.

### Three options, visibly filtered

Present three alternatives and name the one you would kill, with the reason. Fewer than three reads as unexamined; more reads as unfiltered. A recommendation earns credibility from the options it beats, including a do-nothing baseline priced with its own cost.

## Numbers discipline

- Every claim carries a number, a source, or a stated assumption. A sentence with none of the three is decoration; cut it.
- Ranges beat false precision. "$0.8M to $1.6M depending on adoption" invites interrogation. "$1.17M" invites distrust.
- State assumptions next to the number, not in a footnote.
- Separate observed data from modeled projection, in prose and in charts.
- Price delay: "each unstaffed month costs N shifts" turns urgency into arithmetic.
- Never average a bimodal result. Report the split.

## Trade-offs, not features

The room chooses between uses of the same money and headcount, so present each option as what it buys, what it costs, and what it forecloses. Pattern, using this repo's plans: "Plan B touches all 1.9M associates but moves no single metric deeply. Plan A moves week-6 retention hard but only for new hires. Sequencing A then C buys proof first and breadth second, at the cost of a slower platform start."

## Decision requests

End every decision document with a specific ask: amount, owner, start date, and the fallback if declined.

"Decision requested: approve $180K and 2 engineers for the two-week discovery sprint starting March 3, owner named. If declined, we run the $15K survey-only baseline and return in Q3 with weaker evidence."

A document that ends in a summary is a report. A document that ends in an ask is a proposal. Know which one you were asked to write.

## Pre-empt the room

Write the three hardest questions each seat will ask, then answer them inside the document. A question answered in the pre-read dies quietly. The same question asked live costs ten minutes and momentum.

- CFO: payback period, sensitivity of each assumption, next-best use of the same money, which input kills the ROI.
- CTO and engineering leads: build vs buy, reversibility, operational load, integration risk, what gets deleted when this ships.
- CEO or GM: competitive timing, the single number that defines success, reputational exposure.
- Legal and compliance: data classes touched, consent model, audit trail, worst plausible headline.

## Depth matches reversibility

Reversible decisions (feature flags, pilots, anything with a cheap exit) get one page and a stated exit condition. Irreversible decisions (contracts, data models, public commitments) get the full memo, a red-team pass, and explicit kill criteria. A six-pager for a reversible call wastes the room. One page for an irreversible call is malpractice.

## Format patterns

### One-pager

1. Recommendation: two sentences, with the dollar figure.
2. Why now: three bullets, each with a number.
3. Options compared in a table, do-nothing included.
4. Risks, each with a named owner and a mitigation.
5. Decision requested.

### Narrative memo, six pages max

For irreversible decisions. Prose, not bullets, because prose exposes gaps that bullets hide. Recommendation first, options considered with kill reasons, resourcing, risks with owners and triggers, and an FAQ appendix that absorbs every objection collected during review. Send it 24 hours ahead. Open the meeting on questions, not a walkthrough.

### Decision deck

- Slide 1 states the recommendation. Never an agenda.
- 10 slides maximum to reach the decision; unlimited appendix.
- Every headline is a full-sentence claim. Flipping through headlines alone must deliver the whole argument.
- Every chart answers a question stated on the slide. Axes start at zero unless deviation is the story; when they do not, say so on the slide.
- Build the appendix from the pre-empted questions above.

### Status update

Lead with what changed since last time: shipped, slipped, decided, discovered. Then the one risk that grew. Then asks. No activity logs.

## Craft pass before publishing

1. Cover the body and read only the headers. Does the argument survive?
2. First 60 seconds: recommendation, cost, and risk all present?
3. Every number sourced or assumption-tagged?
4. Ask specific: amount, owner, date, fallback?
5. Style gates from `CLAUDE.md`: header naming, dash rules, banned vocabulary, claim-style headers.
