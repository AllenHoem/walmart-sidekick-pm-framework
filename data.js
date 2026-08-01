/* ============================================================
   Sidekick Strategy Studio — framework data
   Source: "First 90 Days: Three Strategic Plans for MyWalmart /
   Sidekick" — Allen Hoem, Principal PM candidate (R-2555971).
   ============================================================ */

const MODES = [
  { key: "proactive", label: "Proactive", desc: "The system acts first — nudges, alerts, predictions, interventions" },
  { key: "reactive", label: "Reactive intelligence", desc: "Insights on demand — scores, dashboards, funnels, opportunity ranking" },
  { key: "conversational", label: "Conversational", desc: "Sidekick dialogue — grounded answers and agentic action loops" }
];

const DISCOVERY_STEPS = [
  {
    days: "Days 1–5",
    title: "Telemetry deep-dive",
    summary: "Review all existing MyWalmart/Sidekick usage telemetry.",
    detail: "The ~3M daily Sidekick questions clustered by intent, feature-level engagement by role/tenure/shift/region, drop-off funnels, and session patterns.",
    question: "Where do answers dead-end into manual work?"
  },
  {
    days: "Days 1–5 · parallel",
    title: "Voice-of-associate review",
    summary: "All existing feedback channels, coded against the telemetry clusters.",
    detail: "In-app feedback, engagement survey verbatims, app store reviews, Sidekick thumbs-down transcripts, exit interview themes.",
    question: "Where do associates say it hurts vs. where the data shows it hurts?"
  },
  {
    days: "Days 6–12",
    title: "Work as a store associate",
    summary: "Badge in — overnight stocking and front-end shifts, real task assignments.",
    detail: "Same shared handhelds, same app. Not a store tour. Bentonville location makes this a weekly habit, not a one-time event.",
    question: "What does the first shift feel like — and when is the app absent when it's needed most?"
  },
  {
    days: "Days 13–14",
    title: "Refresh the journey maps",
    summary: "Synthesize all three inputs into evidence-based journey maps per persona.",
    detail: "New associate, tenured associate, team lead — pain points ranked by frequency × time-cost × emotional severity. These maps are the input to the roadmapping framework.",
    question: "What role does the app actually play in whether a new associate stays?"
  }
];

const BUILTIN_PLANS = [
  {
    id: "plan-a",
    letter: "A",
    name: "Own the first 90 days",
    tagline: "Retention & onboarding first",
    thesis: "The highest-leverage user of MyWalmart is the associate in their first 90 days. If the app wins their first two weeks, Walmart keeps them. The assets already exist — Academies, Live Better U (50+ certificates), internal promotion culture (310K promoted in two years) — but they're not orchestrated into the new associate's daily experience.",
    chooseIf: "Early-tenure attrition is concentrated and exit themes point to confusion and isolation (“didn't know what to do, didn't feel supported”) rather than pure wage competition.",
    northStar: "90-day new-hire retention rate (pilot vs. control stores)",
    supporting: [
      "Time-to-first-productive-shift",
      "Onboarding task completion",
      "New-hire Sidekick engagement",
      "Manager time spent on repetitive new-hire questions"
    ],
    risks: [
      "Retention is multi-causal — pay, managers, and scheduling dominate; the app can only move its share",
      "Requires HR/People-systems partnership from day 1"
    ],
    phases: [
      {
        range: "Days 1–30",
        focus: "Discovery sprint + baseline",
        deliverables: [
          "Retention funnel baseline by cohort (7/30/60/90-day survival curves)",
          "Onboarding journey map",
          "“First shift” audit from a week on the floor"
        ]
      },
      {
        range: "Days 31–60",
        focus: "MVP: Onboarding Companion",
        deliverables: [
          "Sidekick nano-agent for new hires: day-1 orientation checklist",
          "Proactive “what's next” nudges and buddy connection",
          "Plain-language answers tuned to zero-tenure vocabulary",
          "Pilot in 10–20 stores"
        ]
      },
      {
        range: "Days 61–90",
        focus: "Measure, iterate, scale case",
        deliverables: [
          "Pilot vs. control read on 30/60-day retention",
          "Recognition + micro-milestone mechanics (building on existing gamification)",
          "Scale/kill decision with CFO-grade ROI model (cost per replaced associate vs. pilot lift)"
        ]
      }
    ],
    modes: {
      proactive: [
        "“What's next” nudges that walk a new hire through their first weeks without being asked",
        "Buddy-connection prompts and a day-30 proactive check-in",
        "Micro-milestone recognition that fires on real onboarding progress"
      ],
      reactive: [
        "Retention funnel baseline: 7/30/60/90-day survival curves by cohort",
        "Onboarding task-completion and engagement dashboards for pilot vs. control stores",
        "CFO-grade ROI read: cost per replaced associate vs. pilot lift"
      ],
      conversational: [
        "Day-1 orientation checklist delivered as a Sidekick conversation",
        "Plain-language answers tuned to zero-tenure vocabulary (no retail jargon assumed)",
        "“Who do I ask?” routing so no question dead-ends on a first shift"
      ]
    }
  },
  {
    id: "plan-b",
    letter: "B",
    name: "Answer → Action",
    tagline: "Close the agentic gap",
    thesis: "Sidekick is a great answer engine and a weak action engine. Every question that ends in “go find your team lead” costs three people time — the associate, the lead, and the customer standing there. Moving the top question-clusters from explaining to doing returns minutes to the floor and removes the daily friction that quietly drives quits.",
    chooseIf: "High question volume dead-ending into manual handoffs, and turnover themes centered on daily friction and feeling unsupported during work.",
    northStar: "Minutes of associate time returned per week",
    supporting: [
      "In-app task completion rate",
      "Manager-interruption deflection",
      "Answer→action conversion",
      "Trust metrics (accuracy, escalation quality)"
    ],
    risks: [
      "Action agents touch systems of record (scheduling, HR) — integration and trust bar is high",
      "One wrong scheduling action costs more trust than 100 right answers earn"
    ],
    phases: [
      {
        range: "Days 1–30",
        focus: "Discovery sprint + opportunity ranking",
        deliverables: [
          "The 3M daily questions clustered by intent",
          "Each cluster scored by frequency × time-cost × feasibility",
          "Top-3 action candidates (hypothesis: scheduling, time-off, task/equipment)"
        ]
      },
      {
        range: "Days 31–60",
        focus: "MVP: first action agent",
        deliverables: [
          "One nano-agent shipping the full action loop for the #1 cluster",
          "Schedule-conflict loop: detect → propose takers → initiate swap → async lead escalation → close the loop",
          "Accuracy tiering — strictest grounding on pay/benefits/scheduling"
        ]
      },
      {
        range: "Days 61–90",
        focus: "Instrument, harden, expand",
        deliverables: [
          "Task-completion and deflection read",
          "Reliability hardening — the agent must be boringly dependable before it's broadly loved",
          "Second cluster spec'd; experimentation cadence institutionalized"
        ]
      }
    ],
    modes: {
      proactive: [
        "Detect the schedule conflict before the associate does — and arrive with proposed takers",
        "Async escalation follow-ups that close the loop without anyone chasing",
        "Equipment/task alerts pushed at the moment they're actionable"
      ],
      reactive: [
        "Intent-cluster opportunity ranking: frequency × time-cost × feasibility",
        "Task-completion and manager-interruption deflection reads",
        "Trust telemetry: accuracy, correction rate, escalation quality"
      ],
      conversational: [
        "The full action loop lives in the conversation: detect → propose → initiate → escalate → confirm",
        "Accuracy-tiered answers — strictest grounding on pay, benefits, scheduling",
        "Graceful handoff dialogue when the agent can't act: who, why, and what happens next"
      ]
    }
  },
  {
    id: "plan-c",
    letter: "C",
    name: "The Signal Engine",
    tagline: "Personalization & incentives platform",
    thesis: "Walmart has 1.9M associates and treats them, product-wise, as one user. The durable advantage isn't any single feature — it's a platform that senses each cohort's state (frustrated? disengaged? ready to grow?) and responds with the right intervention: an alert, a reward, an FYI, a training module, a career nudge. A contextual Multi-Armed Bandit engine decides what works per cohort.",
    chooseIf: "Attrition drivers vary strongly by cohort, and leadership has appetite for a platform investment over point fixes.",
    northStar: "Predicted-vs-actual retention lift in bandit cohorts (with long-horizon holdouts)",
    supporting: [
      "Score AUC on attrition prediction",
      "Incentive ROI per arm",
      "Engagement lift per cohort",
      "% roadmap decisions traceable to signal data"
    ],
    risks: [
      "Perception — scoring associates can read as surveillance. Mitigation is radical transparency: associates see their own signals framed as growth, never as hidden risk labels",
      "Slowest path to visible wins; needs DS headcount"
    ],
    phases: [
      {
        range: "Days 1–30",
        focus: "Discovery sprint + signal audit",
        deliverables: [
          "Inventory of every existing signal (telemetry, VoC, workforce data)",
          "Cohort taxonomy defined (role × shift × region × tenure)",
          "Scoring model v0 on historical data — can we predict 90-day attrition from app signals?"
        ]
      },
      {
        range: "Days 31–60",
        focus: "MVP: one score, two interventions",
        deliverables: [
          "Retention-risk score for new hires, live",
          "Two intervention arms A/B'd: proactive check-in nudge vs. micro-recognition reward",
          "Incentive compliance framework cleared with HR/legal (taxable wages, state wage rules, fairness review)"
        ]
      },
      {
        range: "Days 61–90",
        focus: "Bandit pilot + roadmap integration",
        deliverables: [
          "Contextual MAB running across 3–4 intervention arms in pilot regions",
          "Cohort-level results — let the bandit find what works per cohort",
          "Opportunity-scoring dashboard that turns signals into ranked roadmap input"
        ]
      }
    ],
    modes: {
      proactive: [
        "Retention-risk-triggered interventions: check-in nudges, micro-recognition, manager-visible praise",
        "Career-pathing nudges — “you're 2 certificates from team-lead eligibility”",
        "Bandit-allocated intervention arms, capped at N per associate per week to prevent nudge fatigue"
      ],
      reactive: [
        "Five cohort scores: friction, engagement, retention-risk, growth-readiness, trust",
        "Opportunity-scoring dashboard ranking roadmap items by expected minutes returned + retention lift × confidence",
        "Human-readable bandit policies: “cohort X responds best to Y,” reviewable by People teams"
      ],
      conversational: [
        "Growth-readiness sensed from conversation (“how do I become a team lead?”) feeds career pathing",
        "Transparent “what Sidekick can and can't do” dialogue to rebuild low-trust cohorts",
        "Targeted micro-training delivered in-chat where the trust score says it's needed"
      ]
    }
  }
];

const DATA_INPUTS = [
  { input: "Usage telemetry", examples: "Sidekick question intents, feature engagement, funnels, session context", cadence: "Continuous" },
  { input: "Voice of associate", examples: "In-app feedback, survey verbatims, thumbs-down transcripts, exit interviews", cadence: "Weekly synthesis" },
  { input: "Ethnographic", examples: "Floor observation, ride-alongs, PM's own shifts, manager interviews", cadence: "Monthly field cycles" },
  { input: "Workforce / HR", examples: "Tenure, attrition events, schedule volatility, promotion velocity, LBU enrollment", cadence: "Batch, privacy-gated" },
  { input: "Operational", examples: "Task completion, shift fill rates, callout rates, department productivity", cadence: "Continuous" },
  { input: "Competitive", examples: "Target/Amazon/Costco associate-app capabilities, retail wage/benefit moves, gig-work alternatives", cadence: "Quarterly brief" },
  { input: "External", examples: "Local labor market tightness, seasonal patterns", cadence: "Quarterly" }
];

/* Cohort scores (Layer 2). direction: which end of the slider trips the
   threshold — "high" fires when value >= threshold, "low" when <= . */
const SCORES = [
  {
    key: "friction",
    label: "Friction score",
    desc: "How often this cohort's journeys dead-end — abandoned flows, repeated questions, escalations"
  },
  {
    key: "engagement",
    label: "Engagement score",
    desc: "Depth and breadth of app usage relative to role baseline"
  },
  {
    key: "retention",
    label: "Retention-risk score",
    desc: "Predicted attrition probability delta vs. baseline (workforce + telemetry features)"
  },
  {
    key: "growth",
    label: "Growth-readiness score",
    desc: "Advancement appetite: LBU activity, skill completions, “how do I become a team lead?” questions"
  },
  {
    key: "trust",
    label: "Trust score",
    desc: "Thumbs-down rate, correction rate, reliance on workarounds after using Sidekick"
  }
];

/* Decision layer (Layer 3): score pattern → intervention family */
const INTERVENTIONS = [
  {
    id: "alerts",
    pattern: "Friction ↑",
    family: "Proactive alerts + product fixes",
    example: "Detect the schedule conflict before the associate does; fix the top dead-end flow.",
    modes: ["proactive", "reactive"],
    fires: s => s.friction >= 65
  },
  {
    id: "onboarding",
    pattern: "Engagement ↓ · tenure < 90d",
    family: "Onboarding interventions",
    example: "Companion nudges, buddy prompts, day-30 check-in.",
    modes: ["proactive", "conversational"],
    fires: s => s.engagement <= 40 && s.tenure === "new"
  },
  {
    id: "rewards",
    pattern: "Retention-risk ↑",
    family: "Rewards & recognition",
    example: "Micro-incentives for early/prompt action on store needs; manager-visible recognition. (Every incentive arm ships with HR/legal review and an equity audit.)",
    modes: ["proactive"],
    fires: s => s.retention >= 60
  },
  {
    id: "career",
    pattern: "Growth-readiness ↑",
    family: "Career pathing",
    example: "“You're 2 certificates from team-lead eligibility” — concrete next steps via Academies/LBU.",
    modes: ["proactive", "conversational"],
    fires: s => s.growth >= 60
  },
  {
    id: "trustfix",
    pattern: "Trust ↓",
    family: "FYIs + training + product hardening",
    example: "Transparent “what Sidekick can/can't do,” targeted micro-training, grounding fixes.",
    modes: ["reactive", "conversational"],
    fires: s => s.trust <= 40
  }
];

const SIM_PRESETS = {
  struggling: { tenure: "new", friction: 55, engagement: 20, retention: 75, growth: 25, trust: 55 },
  friction:   { tenure: "mid", friction: 85, engagement: 60, retention: 45, growth: 40, trust: 60 },
  rising:     { tenure: "tenured", friction: 25, engagement: 80, retention: 15, growth: 85, trust: 75 },
  skeptical:  { tenure: "mid", friction: 60, engagement: 35, retention: 50, growth: 30, trust: 20 },
  healthy:    { tenure: "tenured", friction: 25, engagement: 70, retention: 20, growth: 45, trust: 80 }
};

const GUARDRAILS = [
  {
    title: "Long-horizon holdouts",
    text: "Bandits optimize the reward you give them; if the reward is “clicked the nudge,” you'll maximize clicks and possibly annoy people into quitting. Reward = leading indicators validated against 90-day retention in permanent holdout groups."
  },
  {
    title: "Fairness constraints",
    text: "Minimum exposure floors per arm and per cohort; no cohort silently starved of beneficial interventions; periodic equity audits of realized rewards."
  },
  {
    title: "Intervention budget caps",
    text: "An associate sees at most N interventions per week — the engine competes for a scarce attention budget, preventing nudge fatigue."
  },
  {
    title: "Human-readable policies",
    text: "Every learned policy exports as “cohort X responds best to Y” — reviewable by People teams, not a black box."
  }
];

/* ---------- Roadmap (Layer 5, promoted to its own view) ----------
   Swimlanes = associate journey milestones; columns = 30/60/90 horizons.
   minutes / retention / confidence on 0–100; cost 1–5 (build effort). */

const JOURNEY_LANES = [
  { key: "firstshift", label: "First shift", desc: "Day 1 — badge-in, orientation, “what do I do right now?”" },
  { key: "first90", label: "First 90 days", desc: "The onboarding arc where attrition concentrates" },
  { key: "everyday", label: "Everyday work", desc: "Daily friction: schedules, tasks, questions mid-shift" },
  { key: "growth", label: "Growth & advancement", desc: "Team-lead track, LBU certificates, career pathing" },
  { key: "platform", label: "Platform foundations", desc: "The rails beneath the journey — signals, scores, learning" }
];

const HORIZONS = [
  { key: "h1", label: "Days 1–30", sub: "Discover & baseline" },
  { key: "h2", label: "Days 31–60", sub: "MVP" },
  { key: "h3", label: "Days 61–90", sub: "Prove & expand" }
];

const ROADMAP_ITEMS = [
  { name: "Retention funnel baselines", sub: "7/30/60/90-day survival curves", plan: "A", lane: "platform", horizon: "h1", modes: ["reactive"], minutes: 5, retention: 45, confidence: 90, cost: 1 },
  { name: "Intent-cluster opportunity ranking", sub: "3M questions/day, scored", plan: "B", lane: "platform", horizon: "h1", modes: ["reactive"], minutes: 10, retention: 30, confidence: 90, cost: 1 },
  { name: "Cohort taxonomy + signal inventory", sub: "role × shift × region × tenure", plan: "C", lane: "platform", horizon: "h1", modes: ["reactive"], minutes: 5, retention: 40, confidence: 85, cost: 1 },
  { name: "Fix top dead-end flow", sub: "friction score, all cohorts", plan: "B", lane: "everyday", horizon: "h1", modes: ["reactive"], minutes: 70, retention: 35, confidence: 90, cost: 2 },

  { name: "Day-1 orientation agent", sub: "checklist as a conversation", plan: "A", lane: "firstshift", horizon: "h2", modes: ["conversational"], minutes: 30, retention: 70, confidence: 75, cost: 2 },
  { name: "“Who do I ask?” routing", sub: "no first-shift dead ends", plan: "A", lane: "firstshift", horizon: "h2", modes: ["conversational"], minutes: 25, retention: 55, confidence: 65, cost: 2 },
  { name: "Onboarding Companion nano-agent", sub: "Plan A MVP · pilot 10–20 stores", plan: "A", lane: "first90", horizon: "h2", modes: ["proactive", "conversational"], minutes: 45, retention: 85, confidence: 70, cost: 3 },
  { name: "Buddy-connection prompts", sub: "isolation is an exit theme", plan: "A", lane: "first90", horizon: "h2", modes: ["proactive"], minutes: 10, retention: 60, confidence: 55, cost: 1 },
  { name: "Schedule-conflict action agent", sub: "Plan B cluster #1 — full loop", plan: "B", lane: "everyday", horizon: "h2", modes: ["proactive", "conversational"], minutes: 90, retention: 55, confidence: 80, cost: 4 },
  { name: "Retention-risk score + 2 arms", sub: "Plan C MVP · nudge vs. reward", plan: "C", lane: "platform", horizon: "h2", modes: ["proactive", "reactive"], minutes: 20, retention: 80, confidence: 55, cost: 4 },

  { name: "Micro-recognition mechanics", sub: "existing gamification rails", plan: "A", lane: "first90", horizon: "h3", modes: ["proactive"], minutes: 10, retention: 50, confidence: 50, cost: 1 },
  { name: "Time-off action agent", sub: "Plan B cluster #2", plan: "B", lane: "everyday", horizon: "h3", modes: ["proactive", "conversational"], minutes: 60, retention: 40, confidence: 65, cost: 3 },
  { name: "Trust transparency + micro-training", sub: "low-trust cohorts", plan: "C", lane: "everyday", horizon: "h3", modes: ["reactive", "conversational"], minutes: 10, retention: 35, confidence: 50, cost: 2 },
  { name: "Career-pathing nudges (LBU)", sub: "growth-readiness cohorts", plan: "C", lane: "growth", horizon: "h3", modes: ["proactive", "conversational"], minutes: 15, retention: 60, confidence: 60, cost: 2 },
  { name: "Contextual bandit pilot", sub: "3–4 arms, pilot regions", plan: "C", lane: "platform", horizon: "h3", modes: ["proactive", "reactive"], minutes: 15, retention: 75, confidence: 45, cost: 5 }
];

/* ---------- "How this fits" framework map ---------- */
const FRAMEWORK_MAP = [
  { key: "engine", label: "Signal Engine", href: "#/engine", blurb: "senses & learns" },
  { key: "plans", label: "Strategies", href: "#/plans", blurb: "the bets it justifies" },
  { key: "roadmap", label: "Roadmap", href: "#/roadmap", blurb: "sequenced delivery" },
  { key: "builder", label: "Builder", href: "#/builder", blurb: "author new bets" },
  { key: "coverage", label: "Coverage", href: "#/coverage", blurb: "completeness audit" }
];

const FIT_BLURBS = {
  plans: "Strategies are outputs of the Signal Engine — three pre-computed bets the discovery evidence could justify. Each one's capabilities land on the Roadmap; the Builder authors new bets in the same shape; Coverage audits them all.",
  engine: "The Signal Engine is the machine underneath everything: signals → cohort scores → interventions → bandit learning. Strategies are its first three outputs, and its Layer 5 scoring feeds the Roadmap directly.",
  roadmap: "The Roadmap is where Signal Engine scores meet the associate journey: every capability from every plan, placed on a journey milestone and a 30/60/90 horizon, ranked by the same opportunity formula.",
  builder: "The Builder writes new strategies in the exact schema Plans A–C use — which is what keeps them comparable in the Signal Engine's scoring and visible to the Coverage audit.",
  coverage: "Coverage is the audit at the end of the pipeline: every plan — pre-built or yours — checked against the three experience modes, so no strategy quietly ignores part of the associate's day."
};

/* ---------- "Behind the scenes" science panels ---------- */
const SCIENCE = {
  overview: {
    title: "The science: evidence triangulation",
    body: [
      "The discovery sprint is a triangulation design: telemetry shows what associates <em>do</em>, voice-of-associate shows what they <em>say</em>, and floor shifts show what it <em>feels like</em>. A pain point that appears in all three sources is real; one that appears in only one is a hypothesis.",
      "Pain points are then ranked by a single composite: <code>frequency × time-cost × emotional severity</code>. Frequency and time-cost come from telemetry; emotional severity is coded from verbatims and field notes. Ranking on the product — not any single factor — is what stops the loudest feedback channel from setting the roadmap."
    ]
  },
  plans: {
    title: "The science: why three plans, and what makes them comparable",
    body: [
      "Each plan is a falsifiable bet, not a preference: it declares up front what the discovery data would have to show for it to be the right entry point (“choose this if…”). That's a decision rule — the sprint output selects the plan, not conviction.",
      "All three share one schema: thesis → evidence trigger → 30/60/90 phases → north star → risks → experience modes. Identical structure is what makes them comparable in roadmap scoring and auditable in Coverage — and it's the same schema the Builder enforces on new alternatives.",
      "Every plan is also an experiment: pilot vs. control stores, a scale/kill decision at day 90, and a north star that a CFO can price (e.g., cost per replaced associate vs. pilot retention lift)."
    ]
  },
  scores: {
    title: "The science: cohort scoring and the decision layer",
    body: [
      "Scores are computed per cohort (role × shift × region × tenure band), never per individual. Cohorts give larger samples per estimate — so scores are statistically stable — and they're the right privacy posture: the engine never carries a hidden label on a person.",
      "The decision layer in this simulator is a transparent threshold policy — exactly what runs on this page: <code>friction ≥ 65</code>, <code>engagement ≤ 40 AND tenure &lt; 90d</code>, <code>retention-risk ≥ 60</code>, <code>growth-readiness ≥ 60</code>, <code>trust ≤ 40</code>. In production the thresholds are set from score distributions (e.g., top-quartile friction), but the policy stays human-readable on purpose: a People team can audit every trigger.",
      "Multiple families can fire at once — a struggling new hire trips both onboarding and rewards. The intervention budget cap (Layer 4) is what arbitrates: the engine competes for scarce attention rather than sending everything."
    ]
  },
  bandit: {
    title: "The science: Thompson sampling in one paragraph",
    body: [
      "For each cohort-context and each intervention arm, the bandit keeps a probability distribution over “how well does this arm work here?” To pick an arm it <em>samples</em> from each distribution and plays the winner — arms it's unsure about occasionally win the sample, so exploration happens automatically, but persistently weak arms get sampled less and less. That's the whole trick: exploration is proportional to uncertainty.",
      "The reward fed to the bandit is a leading indicator (e.g., week-4 engagement) that is itself validated against 90-day retention in permanent holdout groups — because a bandit optimizes exactly what you give it, and “clicked the nudge” is not the business goal.",
      "Fairness floors are hard constraints, not preferences: every arm keeps a minimum exposure per cohort so the learner can't silently starve a group of a beneficial intervention, and realized rewards are audited for equity across cohorts."
    ]
  },
  roadmap: {
    title: "The science: the opportunity-scoring formula",
    body: [
      "Every card is scored with the same formula this page actually runs: <code>score = (minutes-returned × w<sub>m</sub> + retention-lift × w<sub>r</sub>) × confidence ÷ build-cost</code>, with the weights normalized from the two sliders.",
      "Confidence multiplies rather than adds: a huge opportunity you barely believe in should rank like a modest one you're sure of. Cost divides: it converts impact into impact-per-unit-effort, which is the number a capacity-constrained team can act on.",
      "The swimlanes add the dimension scores can't see — <em>where in the associate's journey</em> a capability lands. Scores decide priority; lanes and horizons decide sequence and expose gaps (an empty lane means a journey milestone no plan is serving).",
      "The point of the dashboard isn't to obey the model — it's to make overrides explicit: “here's what the signals rank, here's where I'm overriding, and why.”"
    ]
  },
  builder: {
    title: "The science: why the form is shaped like this",
    body: [
      "The builder is a forcing function. Each field maps to a discipline: an evidence trigger makes the plan falsifiable; a north star forces one number; risks demand a pre-mortem; the three mode fields make experience coverage explicit instead of accidental.",
      "Because output conforms to the same schema as Plans A–C, a custom plan is instantly comparable — it appears in Coverage, and its capabilities can be scored with the same roadmap formula. Frameworks beat opinions only when everything speaks the same language."
    ]
  },
  coverage: {
    title: "The science: why these three modes",
    body: [
      "Proactive, reactive-intelligence, and conversational cover the three possible directions of an interaction: the system initiates (proactive), the human interrogates the data (reactive), or the two converse to get something done (conversational). A capability that fits none of them usually isn't an experience at all — it's infrastructure.",
      "The matrix is a completeness check, the same way the mode-coverage meter in the Builder is: an empty cell is not automatically wrong, but it must be a decision, not an accident."
    ]
  }
};
