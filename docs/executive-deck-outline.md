# Sidekick 90-day deck: slide outline

Rebuilt from source (`data.js`, `index.html`), not from the existing site narrative. Structure follows `docs/executive-presentation-playbook.md`: unlimited appendix, every headline a full-sentence claim.

The main path runs 12 slides, up from 10. Four of them (1 to 4) are the vision and the people it is for, which is what the extra length bought. If 12 is too many for the room, slides 9 and 10 move to the appendix without breaking the argument: 9 is a storyboard of a single day and 10 is the scoring mechanism, and both are illustrations of claims already made rather than load-bearing steps.

The opening runs problem, then hypothesis, then the people it is for, then strategy. Slide 1 names what is broken and prices it. Slide 2 proposes the two inputs and leaves a question mark on the end, because which input moves the number is exactly what the pilot is for. Slides 3 and 4 are about associates as individuals rather than as a population. Slide 5 is the approach.

"Approve 2 weeks, 20 pilot stores, 1 DS pod" used to open the deck. It satisfied the letter of the playbook rule and failed the intent: a resource request with no argument attached, leaving the room four slides behind on what it was buying. The formal ask now sits on slide 12 where a decision slide belongs, and by then the room has the argument.

### On voice

This deck is a candidate presentation, so the person giving it is part of what is being evaluated. Two slides carry first-person material: slide 3 says plainly why this problem is not abstract to the presenter, and slide 12 closes on why this work is worth doing at all.

Both are written to sound like someone talking, not like a pitch. Short sentences. No claims of transformation. The Meijer summers are in there because "I got bored and got good at wasting time" is a more useful piece of evidence about disengagement than any survey, and because it makes the argument on slide 3 something the presenter has actually lived rather than modeled.

The rest of the deck stays analytical. Personal voice used twice lands. Used on every slide it becomes a tone, and the numbers stop being believable.

## Audience and running order

Walmart leadership panel: CFO or finance partner, CTO and engineering leads, GM or hiring principal, HR and legal. Read time 12 minutes, presented in 20 with 25 for questions. Pre-read sent 24 hours ahead so the room opens on objections, not a walkthrough.

Every number below is an order-of-magnitude model with stated assumptions, built to be interrogated and then replaced by pilot data.

## Layout archetypes

Twelve repeating layouts. Each slide below names the one it uses.

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

L9 VALUE LADDER + BUILD ORDER PER TIER
+------------------------------------------------------------------+
| HEADLINE CLAIM                                                   |
|                /\        +------------------------------------+  |
|   hard        /  \       | TIER 3 NAME             [tag]      |  |
|   to copy    /____\      | what it means, one line            |  |
|             /      \     | d1-30 | d31-60 | d61-90            |  |
|   differ-  /________\    | depends on: ...                    |  |
|   entiated/          \   +------------------------------------+  |
|          /____________\  | TIER 2 NAME             [tag]      |  |
|   table /              \ | ... same four rows ...             |  |
|   stakes/______________\ +------------------------------------+  |
|                          | TIER 1 NAME             [tag]      |  |
|                          | ... same four rows ...             |  |
|                          +------------------------------------+  |
| where we start, and what the top tier has to be earned with      |
+------------------------------------------------------------------+

L10 HERO EQUATION
+------------------------------------------------------------------+
|                                                                  |
|        TERM A        +        TERM B                             |
|      gloss line            gloss line                            |
|                                                                  |
|                     =  ?                                         |
|                                                                  |
|        TERM C        +        TERM D                             |
|      gloss line            gloss line                            |
|                                                                  |
|   what the question mark is doing there                          |
+------------------------------------------------------------------+

L11 DEFINITION COLUMNS + SOURCES
+------------------------------------------------------------------+
| HEADLINE CLAIM                                                   |
| +----------------+ +----------------+ +----------------+         |
| | TYPE 1         | | TYPE 2         | | TYPE 3         |         |
| | what it is     | | what it is     | | what it is     |         |
| | examples       | | examples       | | examples       |         |
| +----------------+ +----------------+ +----------------+         |
| | design note:   | | design note:   | | design note:   |         |
| | cost, speed,   | | cost, speed,   | | cost, speed,   |         |
| | copyability    | | copyability    | | copyability    |         |
| +----------------+ +----------------+ +----------------+         |
| so-what line          sources: [1] [2] [3] [4] [5] [6]           |
+------------------------------------------------------------------+

L12 PERSONAL NOTE + THREE MOTIVES
+------------------------------------------------------------------+
| HEADLINE CLAIM                                                   |
| +------------+  +------------+  +------------+                   |
| | motive A   |  | motive B   |  | motive C   |                   |
| | one person |  | one person |  | one person |                   |
| +------------+  +------------+  +------------+                   |
| +--------------------------------------------------------------+ |
| | set-apart block, first person, 4 to 6 short lines             | |
| +--------------------------------------------------------------+ |
| the design consequence of the note above                         |
+------------------------------------------------------------------+
```

## Main path: 12 slides to a decision

### Slide 1. About $1.5B a year walks out the door, and most of it goes in the first 6 weeks

Layout L2. Retention and results are the two things we are short of. This slide names them and prices what is missing.

```
+------------------------------------------------------------------+
| About $1.5B a year walks out, and most of it in weeks 1 to 6.    |
+---------------------------+--------------------------------------+
|                           |  new hires still employed            |
|      RETENTION            | 100%|**                              |
|   past 90 days and        |     |  ***                           |
|   past 5 years            |     |     ****                       |
|                           |     |         ******                 |
|          +                |     +---------------------           |
|                           |      d7  d30  d60  d90               |
|      RESULTS              |      ^^^^^^ steepest drop            |
|   staffed shifts,         |                                      |
|   a full floor            | ~500K new store hires a year.        |
|                           | ~$3,000 to replace each one.         |
|   These are the two       | Exit themes: confusion and           |
|   numbers we are          | isolation, not only wage.            |
|   trying to move.         | Academies and 50+ LBU certs exist    |
|                           | and go unused.                       |
+---------------------------+--------------------------------------+
```

Two terms set large on the left, the evidence on the right. The room leaves this slide knowing what is broken and what it costs, and nothing has been asked of it yet.

Doing nothing is not free. That is the CFO answer, delivered before the question.

Illustrative model, and the sprint replaces both figures with measured curves.

### Slide 2. Rewards and rejuvenation should move both, and which one is an open question

Layout L10. The equation with a question mark on the end. No stat tiles, no approach line, no calendar.

```
+------------------------------------------------------------------+
|                                                                  |
|         REWARDS            +          REJUVENATION               |
|      real currency for            rest that is scheduled,        |
|      drive. They pick it.         not begged for                 |
|                                                                  |
|                          =  ?                                    |
|                                                                  |
|        RETENTION           +            RESULTS                  |
|      past 90 days and             staffed shifts,                |
|      past 5 years                 a full floor                   |
|                                                                  |
|   Which one moves the number, and for which associates?          |
|   That is what the pilot is for.                                 |
+------------------------------------------------------------------+
```

Set full-bleed navy, terms at roughly 30pt, glosses at 13pt, operators large enough to read as an equation rather than punctuation. Inputs on the top row, outputs on the bottom, the equals sign between them on its own line. A single horizontal line runs too wide to scan at this type size.

The question mark is the most important character on the slide. Every internal deck that has ever proposed a rewards program asserted this equation and then spent money on it. This one puts the hypothesis on screen and says the pilot will try to break it. That is what makes the 2 weeks worth funding, and it is a stronger position than certainty because it survives being wrong.

Term order is Rewards first, matching how the thesis was stated to me. The site reads "Rejuvenation and rewards" in its h1. That ordering stays on the site; the deck leads with Rewards.

Every point of 90-day retention is worth about $15M a year. That number lives in the footnote here, not the headline, because slide 1 already priced the problem.

### Slide 3. No two associates are chasing the same thing, so one reward for everyone reaches almost no one

Layout L12. The people slide. It argues that variation between associates is not noise to be averaged away, it is the thing worth designing for.

```
+------------------------------------------------------------------+
| No two associates are chasing the same thing, so one reward for  |
| everyone reaches almost no one.                                  |
|                                                                  |
| +----------------+ +----------------+ +----------------+         |
| | Paying rent    | | Wants to be    | | Wants the day  |         |
| | this month.    | | good at this   | | to stop being  |         |
| | Cash is the    | | and to be seen | | a slog. Time   |         |
| | only signal    | | doing it well. | | back is worth  |         |
| | that lands.    | |                | | more than cash.|         |
| +----------------+ +----------------+ +----------------+         |
|                                                                  |
| +--------------------------------------------------------------+ |
| | I worked two summers at Meijer. It was boring, and I got     | |
| | good at wasting time. Nobody was measuring whether I was     | |
| | engaged, so I wasn't. My store was in a safe area. Plenty    | |
| | of associates do not get that. The difference between a job  | |
| | that empties you and one that gives something back is        | |
| | mostly whether the place notices you are in it.              | |
| +--------------------------------------------------------------+ |
|                                                                  |
| So Sidekick should not average associates. It should learn what  |
| each cohort responds to and give them that.                      |
+------------------------------------------------------------------+
```

The three cards are motives, not personas. No names, no photos, no invented biographies. Each is one sentence about what a person is actually chasing, and each maps to one of the reward types defined on slide 4.

The note is set apart: lighter background, first person, presenter's voice. It stays at six lines. It is not a story about the presenter, it is evidence about disengagement that happens to be first hand, and the last sentence is the design principle the rest of the deck runs on.

Say it once and move on. The next slide goes straight back to definitions and sources.

### Slide 4. Three kinds of reward, and the two Sidekick delivers best are the cheap ones

Layout L11. Definitions with sources, because "rewards" means four different things to the four seats in the room and the deck should not let that ambiguity ride.

```
+------------------------------------------------------------------+
| Three kinds of reward. The two Sidekick delivers best are also   |
| the two that cost least.                                         |
| +----------------+ +----------------+ +----------------+         |
| | EXTRINSIC      | | INTRINSIC      | | INSTANT        |         |
| | Cash bonuses,  | | Praise, public | | Real-time      |         |
| | pay increases, | | or private.    | | positive feed- |         |
| | gift cards,    | | Meaningful     | | back. Points   |         |
| | benefits.      | | work, growth,  | | redeemed for   |         |
| | Direct finan-  | | respect,       | | something real.|         |
| | cial security. | | wellness hours | | Reinforces     |         |
| |                | | and days.      | | daily habits.  |         |
| +----------------+ +----------------+ +----------------+         |
| | Easiest for a  | | Cheapest to    | | Highest freq-  |         |
| | competitor to  | | deliver, hard- | | uency, lowest  |         |
| | match. Highest | | est to fake.   | | unit cost.     |         |
| | cost per point | | Needs a system | | Shapes behav-  |         |
| | of retention.  | | that noticed.  | | iour in the    |         |
| |                | |                | | moment.        |         |
| +----------------+ +----------------+ +----------------+         |
| An app at 1.9M scale cannot out-spend anyone on cash. It can     |
| notice, at a scale no manager can.                               |
| Sources: [1] to [6], listed in full on A20.                      |
+------------------------------------------------------------------+
```

The argument this slide is making. Extrinsic reward is the one every competitor already has and the one Walmart cannot win on per dollar. Intrinsic and instant are the two an app is uniquely placed to deliver, because both depend on noticing something at the moment it happens, and noticing at 1.9M scale is a software problem rather than a management problem. That is the case for building this into Sidekick rather than into a benefits program.

The wellness hours and wellness days in the intrinsic column are the direct link to rejuvenation, which keeps slide 2's left-hand side from splitting into two unrelated ideas.

Sources ship as bracketed numbers on the slide, full URLs on appendix A20 and in the speaker notes. Six sources, spanning peer-reviewed work, Gallup, and industry practice.

### Slide 5. Each tier is earned by the one below, so the base and middle start together

Layout L9. Turns the equation into three tiers of what an associate gets, and gives each tier a 90-day build order and the thing it depends on. This is the approach slide.

```
+------------------------------------------------------------------+
| Each tier is earned by the one below, so base and middle start   |
| together.                                                        |
|                                                                  |
|            /\      +-------------------------------------------+ |
|   hard    /  \     | REWARDS THE ASSOCIATE PICKS  [hard to copy]| |
|   to copy/ rw \    | Real currency for initiative, paid through | |
|         /______\   | payroll. The associate chooses it.         | |
|        /        \  | d1-30 inventory signals, fit score v0      | |
|  diff-/  rejuven- \| d31-60 catalog v1, HR and legal cleared    | |
| erent/    ation    | d61-90 bandit across 3 to 4 arms           | |
|  ated/____________\| Depends on: cohort scores the tiers below  | |
|     /              | produce. Without them this is a lottery.   | |
|    /    answers    +-------------------------------------------+ |
|   /                | REJUVENATION ON THE SCHEDULE [differentia-]| |
|  /                 | Rest that is scheduled, not begged for.    | |
| /__________________| Safe to fail and learn. Safe at work.      | |
|  table stakes      | d1-30 map the first-90 journey, pick 20    | |
|                    | matched store pairs                        | |
|                    | d31-60 check-ins fire at day 7, 30, 60     | |
|                    | d61-90 read lift against control stores    | |
|                    | Depends on: knowing where each new hire    | |
|                    | sits in their first 90 days                 | |
|                    +-------------------------------------------+ |
|                    | ANSWERS THAT FINISH THE JOB [table stakes] | |
|                    | Ask once and the task completes. No "go    | |
|                    | ask your team lead."                       | |
|                    | d1-30 cluster 3M questions by intent       | |
|                    | d31-60 one agent closes one loop end to end| |
|                    | d61-90 deflection measured, cluster 2 spec | |
|                    | Depends on: write access to systems of     | |
|                    | record, and the accuracy bar that guards it | |
|                    +-------------------------------------------+ |
| Rewards and rejuvenation ship as separate arms from day 31, so   |
| the pilot can tell which one moved the number, and for whom.     |
+------------------------------------------------------------------+
```

Why the tiers sit in this order. The base is where Sidekick lives today and where every large employer is already investing, so it buys parity and retains no one on its own. The middle needs to know where each new hire sits in their first 90 days, which most employers do not track, so it is defensible. The top needs the right reward per cohort, which needs the Signal Engine underneath it, so a competitor cannot copy it by shipping a feature.

This is also the honest answer to "why not do rewards first." Rewards without the signal layer is a gift card lottery. The ladder states the dependency instead of hiding it. Rewards last is a sequencing decision, not a priority call.

Separating the two inputs is the point of the closing line, and it is what answers slide 2's question mark. Rewards and rejuvenation run as distinct arms rather than a single bundled treatment, so a lift can be attributed to one or the other instead of to "the program." Cohort-level results say which input works for which group. Slide 10 carries the mechanism, this slide carries the commitment.

How this differs from slide 8. Slide 5 sequences the three tiers at one phrase per phase to show the approach. Slide 8 sequences the three bets in detail and carries the day-90 scale-or-kill gate. Slide 5 answers "how would you go about this," slide 8 answers "what exactly happens and when do we get to stop."

### Slide 6. Sidekick answers 3M questions a day and can act on almost none of them

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

### Slide 7. Discovery data picks the entry point, not conviction

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

### Slide 8. Sequence A then C, with B woven through: a visible win in one quarter that becomes the platform

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

### Slide 9. Day 1 stops being "nobody told me anything"

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

### Slide 10. Six cohort scores decide what fires, and a bandit learns what works per cohort

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

### Slide 11. Four risks can sink this, and each has an owner and a trigger

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

### Slide 12. Decision requested: 2 weeks, 20 pilot and 20 control stores, 1 DS pod, named owner, start date

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
| Digital channels beat paper because the information mattered.    |
| Promotions are just one more reason to spend. This is the        |
| first kind. That is why I want to work on it.                    |
+------------------------------------------------------------------+
```

Closing note, three lines, set quiet at the bottom in the presenter's voice. It draws the line between messaging that carries something a person needs and messaging that sells them something, and it says which side this project sits on.

Placement is deliberate. It comes after the ask, not before, so it reads as a reason rather than a persuasion technique. A room that has just been handed scale and kill criteria can take one honest sentence about motive. The same words on slide 1 would sound like a pitch.

This is the second and last first-person moment in the deck. Slide 3 is the first.

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
| A20 | Reward-science sources in full, six citations behind slide 4, with what each one supports | HR, DS, any skeptic |

## Reward-science sources behind slide 4

Cited as bracketed numbers on slide 4, in full on A20 and in the speaker notes.

| # | Source | Supports |
| --- | --- | --- |
| 1 | PubMed Central, PMC8319625 | Peer-reviewed grounding for intrinsic and extrinsic motivation operating through different mechanisms |
| 2 | Video reference supplied by the author (`youtube.com/watch?v=UGVuDwgcxlc`) | Practitioner framing of gratification timing |
| 3 | Gallup, employee recognition as low cost and high impact | The intrinsic column's cost argument |
| 4 | Incentive Research Foundation, value and ROI of employee recognition | Recognition ROI, the number the CFO will want |
| 5 | Reward Gateway, point-reward systems for employees | Instant gratification mechanics as implemented in practice |
| 6 | IJSMS vol 8 issue 3, paper 118 | Recent academic treatment of reward systems and engagement |

Two caveats to settle before this ships. Sources 3, 4, and 5 are vendor or industry publications with an interest in the conclusion, so slide 4 should lean on 1 and 6 for the mechanism claims and use the others for practice examples. Source 2 is a video, which is weak to cite in a deck for a CFO. Recommend dropping it from the slide and keeping it in the notes, unless you have a specific segment in mind.

## Open inputs before build

Three numbers are placeholders in the source and need your real figures, or they ship tagged as illustrative:

1. Sprint and pilot budget in dollars. Source states the ask as 2 weeks, 20 stores, 1 DS pod, with no dollar figure. Slide 12 needs one, plus engineer count.
2. Named PM owner and start date for slide 12.
3. Whether 500K annual new store hires and $3,000 replacement cost can be replaced with Walmart-sourced figures. Both currently carry an "illustrative" tag, which is defensible but weaker in a CFO conversation.
4. Whether the Meijer note on slide 3 and the closing note on slide 12 go in as drafted. Both are the presenter's own words, tightened. They are the two places the deck stops being analytical, and they should read the way the presenter actually talks, so they need a read-aloud check rather than an edit pass.

## Changes from the existing site narrative

- The deck opens on the problem and prices it, then proposes the equation as a hypothesis with a question mark rather than as a conclusion. The site asserts the equation in frame 5 and never tests it.
- Rewards are defined rather than assumed. Slide 4 splits extrinsic, intrinsic, and instant, cites six sources, and argues that an app wins on the last two. The site treats "rewards" as one undifferentiated thing.
- Associates appear as individuals with different motives on slide 3, and the deck says plainly that averaging them is the failure mode. The site describes cohorts but never makes variation the design principle.
- Rewards and rejuvenation run as separate arms so the pilot can attribute a lift to one or the other. The site bundles them.
- Two slides carry the presenter's voice. The site is written entirely in the third person.
- Do-nothing is priced at about $1.5B a year and named as the option to kill. The site never prices inaction.
- Risks get owners, trip wires, and mitigations in one table. The site scatters them per plan.
- Scale and kill criteria are numeric and pre-registered on the decision slide.
- Detail moves to a 19-slide appendix so the main path stays at 10.
