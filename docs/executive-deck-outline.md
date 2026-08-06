# Sidekick 90-day deck: slide outline

Rebuilt from source (`data.js`, `index.html`), not from the existing site narrative. Structure follows `docs/executive-presentation-playbook.md`: point of view and outcome on slide 1, 10 slides to the decision, unlimited appendix, every headline a full-sentence claim.

Slide 1 leads with the thesis and what it is worth, not with the calendar. The playbook rule is that a reader with 60 seconds gets the recommendation, the cost, and the risk. "Approve 2 weeks" satisfied the letter of that and failed the intent: it opened on a resource request with no argument attached, so the room had to wait four slides to learn what it was buying. The recommendation still carries numbers on slide 1 ($15M per point, $30M to $45M at target, day-90 gate). The formal ask, with amount, owner, date, and fallback, stays on slide 10 where a decision slide belongs.

## Audience and running order

Walmart leadership panel: CFO or finance partner, CTO and engineering leads, GM or hiring principal, HR and legal. Read time 12 minutes, presented in 20 with 25 for questions. Pre-read sent 24 hours ahead so the room opens on objections, not a walkthrough.

Every number below is an order-of-magnitude model with stated assumptions, built to be interrogated and then replaced by pilot data.

## Layout archetypes

Nine repeating layouts. Each slide below names the one it uses.

```
L1 CLAIM + PROOF TILES        L2 SPLIT: VISUAL | CLAIMS      L3 OPTIONS TABLE
+---------------------------+ +---------------------------+  +---------------------------+
| HEADLINE CLAIM (1 line)   | | HEADLINE CLAIM            |  | HEADLINE CLAIM            |
|                           | +-------------+-------------+  +----+------+------+-------+
| +------+ +------+ +-----+ | |             | > claim 1   |  |    |  A   |  B   |   C   |
| | $15M | | 500K | | 3K  | | |   CHART     | > claim 2   |  |ROI |      |      |       |
| |  /pt | | hires| | ea. | | |   or        | > claim 3   |  |Star|      |      |       |
| +------+ +------+ +-----+ | |   DIAGRAM   |             |  |Trig|      |      |       |
|                           | |             | assumption: |  |Risk|      |      |       |
| one-line so-what          | |             | ...         |  +----+------+------+-------+
+---------------------------+ +-------------+-------------+  | do-nothing priced: $1.5B  |
                                                             +---------------------------+

L4 SEQUENCE / TIMELINE        L5 STORYBOARD (4 SURFACES)     L6 STACKED LAYERS
+---------------------------+ +---------------------------+  +---------------------------+
| HEADLINE CLAIM            | | HEADLINE CLAIM            |  | HEADLINE CLAIM            |
|  d1-30    d31-60   d61-90 | | +----+ +----+ +----+ +---+|  | +-----------------------+ |
| [==A==][====A====][==A==] | | |6:55| |chat| | *  | |>>>||  | | L5 roadmap surface    | |
|    [==B==][====B====]     | | |noti| |    | |rwd | |pat||  | | L4 bandit learning    | |
|       [==C==][====C====]  | | +----+ +----+ +----+ +---+|  | | L3 decision layer     | |
| gate: day-90 scale/kill   | | day 1   shift1  wk 1  d30 |  | | L2 cohort scores      | |
+---------------------------+ +---------------------------+  | | L1 data inputs        | |
                                                             | +-----------------------+ |
L7 RISK REGISTER              L8 DECISION ASK                +---------------------------+
+---------------------------+ +---------------------------+
| HEADLINE CLAIM            | | HEADLINE CLAIM            |
+-------+------+-----+------+ | +-----------------------+ |
| risk  | owner|trig | mitig| | | ASK: what, who, when  | |
+-------+------+-----+------+ | | amount / footprint    | |
|       |      |     |      | | +-----------------------+ |
+-------+------+-----+------+ | fallback if declined: ... |
                              | kill criteria: ...        |
                              +---------------------------+

L9 VALUE LADDER + ENTRY POINTS
+------------------------------------------------------------------+
| HEADLINE CLAIM                                                   |
|                /\        +------------------------------------+  |
|   hard        /  \       | TIER 3 NAME                        |  |
|   to copy    /____\      | what it means / first move         |  |
|             /      \     +------------------------------------+  |
|   differ-  /________\    | TIER 2 NAME                        |  |
|   entiated/          \   | what it means / first move         |  |
|          /____________\  +------------------------------------+  |
|   table /              \ | TIER 1 NAME                        |  |
|   stakes/______________\ | what it means / first move         |  |
|                          +------------------------------------+  |
| where we start, and what the top tier has to be earned with      |
+------------------------------------------------------------------+
```

## Main path: 10 slides to a decision

### Slide 1. Rejuvenation and rewards drive retention and results

Layout L1 with the equation strip above the proof tiles. Opens on the vision and what it is worth. The calendar ask is one supporting line, not the headline: the room is being asked to back an approach and an outcome, and the two weeks are only what it costs to start.

```
+------------------------------------------------------------------+
| Rejuvenation and rewards drive retention and results.            |
|                                                                  |
|  +--------------+   +--------------+      +-------------------+  |
|  | REJUVENATION | + |   REWARDS    |  ->  | RETENTION         |  |
|  | rest that is |   | real currency|      | past 90 days and  |  |
|  | scheduled,   |   | for drive.   |  +   | past 5 years      |  |
|  | not begged   |   | The associate|      | RESULTS           |  |
|  | for          |   | picks it     |      | staffed shifts,   |  |
|  +--------------+   +--------------+      | full floor        |  |
|                                           +-------------------+  |
|   +-------------+  +-------------+  +-------------+              |
|   |   ~$15M     |  |  $30-45M    |  |   Day 90    |              |
|   | a year per  |  | a year if   |  | scale or    |              |
|   | retention pt|  | we land 2-3 |  | kill, preset|              |
|   +-------------+  +-------------+  +-------------+              |
|                                                                  |
| Start where the loss is: the first 90 days, 20 matched stores,   |
| 2 weeks to pick the entry point. Evidence decides what scales.   |
+------------------------------------------------------------------+
```

The headline is the point of view, not a feature list. The three tiles carry the outcome: what a point of retention is worth, what the pilot targets, and when the room gets to stop paying. The closing line carries approach and ask together so the calendar never reads as the request itself.

Assumption line visible: about 500K new store hires a year, about $3,000 to replace each one, illustrative until the sprint replaces both.

### Slide 2. Answers are table stakes. Rejuvenation and rewards are where retention is won

Layout L9. Expands the equation from slide 1 into three tiers of what an associate actually gets, and names the first move on each. This is the strategy slide: it shows what the thesis means in practice and where the work starts.

```
+------------------------------------------------------------------+
| Answers are table stakes. Rejuvenation and rewards win retention.|
|                                                                  |
|              /\          +-------------------------------------+ |
|   hard      /  \         | REWARDS THE ASSOCIATE PICKS         | |
|   to copy  / rw \        | Real currency for driven, proactive | |
|           /______\       | work. Reaches payroll, not a badge. | |
|          /        \      | First move: reward catalog v1, HR   | |
|   diff- /  rejuv-  \     | and legal cleared, tested as an arm.| |
|  erenti/   enation  \    +-------------------------------------+ |
|   ated/______________\   | REJUVENATION ON THE SCHEDULE        | |
|      /                \  | Rest that is scheduled, not begged  | |
| table/    answers      \ | for. Safe to fail. Safe at work.    | |
| stak/__________________\ | First move: own the first 90 days   | |
|                          | in 20 matched stores.               | |
|                          +-------------------------------------+ |
|                          | ANSWERS THAT FINISH THE JOB         | |
|                          | Ask once, the task completes. No    | |
|                          | "go ask your team lead."            | |
|                          | First move: cluster 3M questions,   | |
|                          | ship one agent that closes the loop.| |
|                          +-------------------------------------+ |
| Base and middle start together. The top tier is earned with the  |
| cohort data those two produce, which is why C follows A, not the |
| other way round.                                                 |
+------------------------------------------------------------------+
```

Why the tiers sit in this order. The base is where Sidekick lives today and where every large employer is already investing, so it buys parity and retains no one on its own. The middle needs to know where each new hire sits in their first 90 days, which most employers do not track, so it is defensible. The top needs the right reward per cohort, which needs the Signal Engine underneath it, so it is the tier a competitor cannot copy by shipping a feature.

This slide is also the honest answer to "why not just do rewards first." Rewards without the signal layer is a gift card lottery. The ladder states the dependency instead of hiding it.

### Slide 3. Replacement spend runs about $1.5B a year, and the losses concentrate in weeks 1 to 6

Layout L2. Situation and complication in one slide. This is the do-nothing price.

```
+------------------------------------------------------------------+
| Replacement spend runs ~$1.5B/yr. It concentrates in weeks 1-6.  |
+-------------------------------+----------------------------------+
|  survival curve, new hires    | > 1.9M associates. ~500K new     |
| 100%|**                       |   store hires a year.            |
|     |  ***                    | > ~$3,000 to replace each one.   |
|     |     ****                | > Exit themes: confusion and     |
|     |         ******          |   isolation, not only wage.      |
|     +---------------------    | > Assets exist and go unused:    |
|      d7  d30  d60  d90        |   Academies, 50+ LBU certs,      |
|      ^^^^^^                   |   310K promoted in 2 years.      |
|      steepest drop            |                                  |
|                               | Illustrative model. Sprint       |
|                               | replaces it with real curves.    |
+-------------------------------+----------------------------------+
```

Answers the CFO question before it is asked: doing nothing is not free, it costs about $1.5B a year at these assumptions.

### Slide 4. Sidekick answers 3M questions a day and can act on almost none of them

Layout L2, with the dead-end conversation as the visual. Devon, front end, mid-shift.

```
+------------------------------------------------------------------+
| Sidekick answers 3M questions a day. It can act on almost none.  |
+-------------------------------+----------------------------------+
| ME: Scheduled Saturday, class | > A correct answer that still    |
|     conflict. What do I do?   |   costs three people time:       |
| BOT: You can request a swap!  |   associate, lead, customer.     |
|     Ask your team lead.       | > Every handoff is minutes off   |
| ---- conversation ends ----   |   the floor and one more reason  |
| Devon walks the floor.        |   the day feels unsupported.     |
| Lead stops mid-task.          | > 1 minute per associate per     |
| Customer waits.               |   shift is worth ~$100M/yr.      |
+-------------------------------+----------------------------------+
```

Assumption line: 1M store associates, 1 minute per shift, $0.30 per minute loaded labor, about $300K a day.

### Slide 5. Discovery data picks the entry point, not conviction

Layout L3. Three bets, each with the evidence that would select it, plus the priced do-nothing row.

```
+------------------------------------------------------------------+
| Each bet names the evidence that would make it the right entry.  |
+------------+---------------+---------------+---------------------+
|            | A First 90    | B Answer to   | C Signal Engine     |
|            | days          | action        |                     |
+------------+---------------+---------------+---------------------+
| Value      | $15M/yr per   | $100M/yr per  | ~2x retention gain  |
|            | retention pt  | minute back   | per incentive $     |
| Key Metric | 90-day new    | minutes back  | predicted vs actual |
| Improved   | hire retention| per week      | lift, vs holdouts   |
| Choose if  | new hires quit| same questions| groups quit for     |
|            | early, exits  | asked over and| different reasons,  |
|            | blame confus- | over, answers | budget exists for a |
|            | ion, not pay  | dead-end      | platform            |
| Risk       | people quit   | agents write  | scoring can feel    |
|            | for many      | to HR systems;| like surveillance;  |
|            | reasons       | one bad write | slowest to a win    |
+------------+---------------+---------------+---------------------+
| Do nothing: ~$1.5B/yr replacement spend continues. Not an option |
| I would defend, and the one I would kill first.                  |
+------------------------------------------------------------------+
```

### Slide 6. Sequence A then C, with B woven through: a visible win in one quarter that becomes the platform

Layout L4. States the trade-off in the open.

```
+------------------------------------------------------------------+
| A then C, B woven through. Proof first, breadth second.          |
|                                                                  |
|  days 1-30        days 31-60           days 61-90                |
|  +-------------+  +------------------+  +---------------------+  |
| A| baseline    |->| Onboarding       |->| pilot vs control    |  |
|  | journey map |  | Companion, 20    |  | read, scale/kill    |  |
|  +-------------+  | stores           |  +---------------------+  |
|  +-------------+  +------------------+  +---------------------+  |
| B| cluster the |->| schedule-conflict|->| harden, 2nd cluster |  |
|  | 3M questions|  | action agent     |  |                     |  |
|  +-------------+  +------------------+  +---------------------+  |
|  +-------------+  +------------------+  +---------------------+  |
| C| signal audit|->| 1 score, 2 arms  |->| contextual bandit   |  |
|  +-------------+  +------------------+  +---------------------+  |
|                                          ^ GATE: day-90        |
| Cost of this order: platform starts slower. Benefit: a proven   |
| retention number before we ask for platform headcount.          |
+------------------------------------------------------------------+
```

### Slide 7. Day 1 stops being "nobody told me anything"

Layout L5. Maya, day 3, overnight stocking. Four surfaces, drawn as phone screens. This is the slide that makes it real for a non-product executive.

```
+------------------------------------------------------------------+
| Day 1 stops being "nobody told me anything."                     |
|                                                                  |
| +------------+ +------------+ +------------+ +------------+      |
| | 6:55       | | chat       | |    STAR    | | Maya -> 90 |      |
| | First      | | "what's a  | | Week-1     | | [====>   ] |      |
| | shift      | |  zone?"    | | streak     | | d30 check  |      |
| | today.     | | plain      | | done. Pick | | d60 cross  |      |
| | Badge,     | | answer, no | | your       | | d90 path   |      |
| | then meet  | | jargon     | | reward:    | | picker     |      |
| | Dee,       | | assumed    | | card/lunch/| |            |      |
| | aisle 12   | |            | | stock/give | | rest is    |      |
| +------------+ +------------+ +------------+ +------------+      |
|   proactive      conversational   reward         growth path     |
|                                                                  |
| Same four surfaces carry every plan. Draft copy, not shipped UX. |
+------------------------------------------------------------------+
```

### Slide 8. Six cohort scores decide what fires, and a bandit learns what works per cohort

Layout L6. Engineering and data-science credibility slide, compressed to one page with the detail pushed to appendix.

```
+------------------------------------------------------------------+
| Six cohort scores decide what fires. A bandit learns what works. |
|                                                                  |
| L5 | roadmap surface: score, rank, sequence                      |
| L4 | learning: contextual bandit, Thompson sampling              |
| L3 | decision: friction>=65 -> alerts. wellbeing<=40 -> recovery |
| L2 | scores per COHORT: friction, engagement, retention-risk,    |
|    | growth-readiness, trust, wellbeing                          |
| L1 | inputs: telemetry, voice of associate, field, workforce,    |
|    | operational, competitive, external                          |
|                                                                  |
| Cohort, never individual. Policies export as "cohort X responds  |
| best to Y" so People teams can audit every trigger.              |
+------------------------------------------------------------------+
```

### Slide 9. Four risks can sink this, and each has an owner and a trigger

Layout L7. Pre-empts the room rather than waiting for it.

```
+------------------------------------------------------------------+
| Four risks can sink this. Each has an owner and a trip wire.     |
+---------------+--------+-------------------+---------------------+
| Risk          | Owner  | Trigger to watch  | Mitigation          |
+---------------+--------+-------------------+---------------------+
| Reads as      | Product| associate         | associates see own  |
| surveillance  | + HR   | sentiment drop    | signals, framed as  |
|               |        | in pilot stores   | growth, opt-out     |
| Bandit games  | DS     | engagement up,    | reward validated    |
| its own metric|        | 90-day flat       | vs 90-day holdouts  |
| Retention is  | Product| control stores    | claim only the app  |
| multi-causal  |        | move too          | share, matched pairs|
| Wrong write to| Eng    | any incorrect     | strictest grounding |
| system of rec.|        | schedule action   | tier, lead approves |
+---------------+--------+-------------------+---------------------+
| Rewards are taxable comp. Payroll integration, not an app feature.|
+------------------------------------------------------------------+
```

### Slide 10. Decision requested: 2 weeks, 20 pilot and 20 control stores, 1 DS pod, named owner, start date

Layout L8. Amount, owner, date, fallback, kill criteria.

```
+------------------------------------------------------------------+
| Decision requested today.                                        |
|                                                                  |
| +--------------------------------------------------------------+ |
| | APPROVE: 2-week discovery sprint, then a 90-day pilot        | |
| | Footprint: 20 pilot stores + 20 matched control stores       | |
| | Team: 1 DS pod, [N] engineers, PM owner: [name]              | |
| | Budget: $[amount]  Start: [date]  Gate: day 90               | |
| +--------------------------------------------------------------+ |
|                                                                  |
| SCALE IF: 90-day retention in pilot beats control by >= 2 pts,   |
|           pre-registered, matched pairs.                         |
| KILL IF:  lift < 1 pt, or sentiment drops in pilot stores.       |
| FALLBACK IF DECLINED: telemetry-and-survey-only baseline at      |
|           roughly a tenth the cost, weaker evidence, revisit Q3. |
+------------------------------------------------------------------+
```

## Appendix: built from the questions each seat will ask

Sequenced so any question lands one flip away.

| # | Slide | Seat it answers |
| --- | --- | --- |
| A1 | Plan A ROI model, every assumption exposed, sensitivity on the two inputs that matter | CFO |
| A2 | Plan B ROI model: minutes returned, deflection, loaded-labor rate | CFO |
| A3 | Plan C ROI model: incentive yield per arm, platform effect on future feature cost | CFO |
| A4 | Measurement design: matched pairs, pre-registration, permanent holdouts, scale/kill arithmetic | CFO, GM |
| A5 | Two-week discovery sprint, 4 workstreams, day by day | GM, hiring principal |
| A6 | Where this runs: nano-agents inside the existing four-super-agent architecture | CTO |
| A7 | Systems-of-record integration and the accuracy tiering that guards scheduling and pay | CTO, eng leads |
| A8 | Thompson sampling in one page: how exploration scales with uncertainty | CTO, DS |
| A9 | Reward definition and why it is validated against 90-day retention, not clicks | DS |
| A10 | Six scores defined, including the narrow operational definition of wellbeing | DS, HR |
| A11 | Threshold policy in full, and what fires when several families trip at once | Product, HR |
| A12 | Reward ladder: everyday, quarterly, career, and who grants each | HR |
| A13 | Compliance: taxable wages, sweepstakes rules, HR calibration, equity audits | Legal, HR |
| A14 | Guardrails: exposure floors, intervention budget caps, human-readable policies | HR, legal |
| A15 | Full 18-item roadmap on journey swimlanes with the opportunity formula | Eng leads, GM |
| A16 | Plan B detail: phases, north star, risks | Any |
| A17 | Plan C detail: phases, north star, risks | Any |
| A18 | Scale requirements: feature store, versioned scores, config-driven arms, WCAG 2.2 AA, 44 languages | CTO |
| A19 | Grounding facts and sources | Any |

## Open inputs before build

Three numbers are placeholders in the source and need your real figures, or they ship tagged as illustrative:

1. Sprint and pilot budget in dollars. Source states the ask as 2 weeks, 20 stores, 1 DS pod, with no dollar figure. Slide 10 needs one, plus engineer count.
2. Named PM owner and start date for slide 10.
3. Whether 500K annual new store hires and $3,000 replacement cost can be replaced with Walmart-sourced figures. Both currently carry an "illustrative" tag, which is defensible but weaker in a CFO conversation.

## Changes from the existing site narrative

- Point of view and outcome open slide 1, with the equation the site buries in frame 5. Slide 2 turns that equation into a three-tier value ladder with the first move named on each tier, which the site does not do anywhere.
- Do-nothing is priced at about $1.5B a year and named as the option to kill. The site never prices inaction.
- Risks get owners, trip wires, and mitigations in one table. The site scatters them per plan.
- Scale and kill criteria are numeric and pre-registered on the decision slide.
- Detail moves to a 19-slide appendix so the main path stays at 10.
