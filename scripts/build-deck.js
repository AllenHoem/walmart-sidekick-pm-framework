/* ============================================================
   Sidekick 90-day decision deck generator.
   Content source: data.js / index.html, structured per
   docs/executive-deck-outline.md.
   Run: node scripts/build-deck.js
   ============================================================ */

const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "Allen Hoem";
pres.title = "MyWalmart / Sidekick: first 90 days";

/* ---------- design system ---------- */
const NAVY = "16233B";
const NAVY_2 = "223558";
const NAVY_3 = "2E4571";
const INK = "1B2338";
const MUTED = "5E6980";
const MUTED_D = "9AA8C2";
const WHITE = "FFFFFF";
const SURFACE = "F1F5FA";
const SURFACE_2 = "E2EAF4";
const AMBER = "D9922B";
const AMBER_SOFT = "FAECD4";
const TEAL = "3B7EA8";
const TEAL_SOFT = "DCE9F2";
const RISK = "AE5348";
const RISK_SOFT = "F5E2DF";
const GREEN = "44795A";
const GREEN_SOFT = "DDEAE1";

const H = "Cambria";
const B = "Calibri";

const M = 0.62;          // page margin
const W = 13.33 - M * 2; // content width

let slideNo = 0;

/* ---------- primitives ---------- */

function newSlide(dark) {
  const s = pres.addSlide();
  s.background = { color: dark ? NAVY : WHITE };
  slideNo += 1;
  return s;
}

function diamond(s, x, y, size, color) {
  s.addShape(pres.ShapeType.diamond, {
    x, y, w: size, h: size, fill: { color }, line: { color, width: 0 }
  });
}

function eyebrow(s, text, dark) {
  diamond(s, M, 0.44, 0.13, AMBER);
  s.addText(text.toUpperCase(), {
    x: M + 0.24, y: 0.34, w: W - 0.24, h: 0.34,
    fontFace: B, fontSize: 11, bold: true, charSpacing: 1.6,
    color: dark ? MUTED_D : MUTED, valign: "middle", margin: 0
  });
}

function title(s, text, dark, opts) {
  const o = opts || {};
  s.addText(text, {
    x: M, y: o.y || 0.82, w: o.w || W, h: o.h || 1.12,
    fontFace: H, fontSize: o.size || 30, bold: true,
    color: dark ? WHITE : INK, valign: "top", margin: 0,
    lineSpacing: o.size ? o.size * 1.18 : 35
  });
}

function footNote(s, text, dark) {
  s.addText(text, {
    x: M, y: 6.82, w: W - 0.7, h: 0.4,
    fontFace: B, fontSize: 10.5, italic: true,
    color: dark ? MUTED_D : MUTED, valign: "middle", margin: 0
  });
}

function pageNum(s, dark) {
  s.addText(String(slideNo), {
    x: 13.33 - M - 0.5, y: 6.82, w: 0.5, h: 0.4,
    fontFace: B, fontSize: 10.5, color: dark ? MUTED_D : MUTED,
    align: "right", valign: "middle", margin: 0
  });
}

function card(s, x, y, w, h, fill, radius) {
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, fill: { color: fill },
    line: { color: fill, width: 0 },
    rectRadius: radius === undefined ? 0.1 : radius
  });
}

/* Calibri averages roughly 0.48em per character, so a line holds about
   (usable inches x 150 / point size) characters. Under-estimating this
   is what makes stacked items collide. */
function claimList(s, items, x, y, w, dark, size) {
  const fs = size || 13.5;
  const lineH = fs * 1.32 / 72;
  let cy = y;
  items.forEach(it => {
    const usable = w - 0.24;
    const perLine = Math.max(18, Math.floor(usable * 150 / fs));
    const lines = Math.max(1, Math.ceil(it.length / perLine));
    const h = lines * lineH + 0.07;
    diamond(s, x, cy + 0.09, 0.11, AMBER);
    s.addText(it, {
      x: x + 0.24, y: cy - 0.03, w: usable, h,
      fontFace: B, fontSize: fs,
      color: dark ? "D6DEEC" : INK, valign: "top", margin: 0, lineSpacing: fs * 1.32
    });
    cy += h + 0.14;
  });
  return cy;
}

function statTile(s, x, y, w, h, big, label, dark, tone) {
  card(s, x, y, w, h, dark ? NAVY_2 : SURFACE, 0.12);
  s.addText(big, {
    x: x + 0.18, y: y + 0.2, w: w - 0.36, h: h * 0.5,
    fontFace: H, fontSize: 30, bold: true,
    color: tone || (dark ? AMBER : INK), align: "center", valign: "middle", margin: 0
  });
  s.addText(label, {
    x: x + 0.18, y: y + h * 0.62, w: w - 0.36, h: h * 0.32,
    fontFace: B, fontSize: 11.5, color: dark ? MUTED_D : MUTED,
    align: "center", valign: "top", margin: 0, lineSpacing: 14
  });
}

function tableSlide(s, rows, opts) {
  const o = opts || {};
  s.addTable(rows, {
    x: M, y: o.y || 2.05, w: W, colW: o.colW,
    border: { type: "solid", color: SURFACE_2, pt: 1 },
    fontFace: B, fontSize: o.fontSize || 11.5, color: INK,
    valign: "top", margin: o.margin === undefined ? 0.1 : o.margin,
    autoPage: false
  });
}

function headerRow(cells) {
  return cells.map((c, i) => ({
    text: c,
    options: {
      bold: true, color: WHITE, fill: { color: i === 0 ? NAVY_2 : NAVY },
      fontFace: B, fontSize: 11.5
    }
  }));
}

function labelCell(t) {
  return { text: t, options: { bold: true, color: NAVY, fill: { color: SURFACE } } };
}

/* ============================================================
   MAIN PATH
   ============================================================ */

/* --- 1. Recommendation --- */
{
  const s = newSlide(true);
  eyebrow(s, "Allen Hoem  ·  Principal PM candidate  ·  MyWalmart / Sidekick  ·  R-2555971", true);
  s.addText("Approve 2 weeks, 20 pilot stores, and 1 data-science pod to chase 2 to 3 points of 90-day retention.", {
    x: M, y: 1.02, w: W - 0.9, h: 1.85,
    fontFace: H, fontSize: 33, bold: true, color: WHITE,
    valign: "top", margin: 0, lineSpacing: 40
  });

  const tw = (W - 0.6) / 3;
  statTile(s, M, 3.22, tw, 1.62, "~$15M", "a year, per point of 90-day\nnew-hire retention", true);
  statTile(s, M + tw + 0.3, 3.22, tw, 1.62, "$30-45M", "a year if the pilot lands\n2 to 3 points", true);
  statTile(s, M + (tw + 0.3) * 2, 3.22, tw, 1.62, "Day 90", "pre-set scale or kill,\nno open-ended spend", true);

  s.addText("Plan A first. Plans B and C follow on evidence, not on preference.", {
    x: M, y: 5.22, w: W, h: 0.45,
    fontFace: B, fontSize: 15.5, color: "D6DEEC", valign: "middle", margin: 0
  });
  footNote(s, "Illustrative model: about 500K new store hires a year, about $3,000 to replace each one. The sprint replaces both figures with measured data.", true);
  pageNum(s, true);
  s.addNotes("Open on the ask, not an agenda. Two weeks of discovery, then a 90-day pilot across 20 matched store pairs. Every number here is order-of-magnitude with assumptions stated, built to be interrogated and then replaced by pilot data.");
}

/* --- 2. Do-nothing price --- */
{
  const s = newSlide(false);
  eyebrow(s, "Situation and complication", false);
  title(s, "Replacement spend runs about $1.5B a year, and it concentrates in weeks 1 to 6.", false);

  s.addChart(pres.ChartType.line, [{
    name: "New hires still employed",
    labels: ["Day 0", "Day 7", "Day 14", "Day 30", "Day 45", "Day 60", "Day 90"],
    values: [100, 94, 88, 81, 78, 75, 72]
  }], {
    x: M, y: 2.12, w: 6.75, h: 4.0,
    showTitle: false, showLegend: false,
    chartColors: [TEAL], lineSize: 3.5, lineSmooth: false,
    showValue: true, dataLabelPosition: "t", dataLabelFontSize: 10,
    dataLabelColor: MUTED, dataLabelFormatCode: '0"%"',
    valAxisMinVal: 60, valAxisMaxVal: 104,
    catAxisLabelColor: MUTED, valAxisLabelColor: MUTED,
    catAxisLabelFontSize: 10.5, valAxisLabelFontSize: 10.5,
    catAxisLabelFontFace: B, valAxisLabelFontFace: B,
    valGridLine: { color: SURFACE_2, size: 1 },
    catGridLine: { style: "none" },
    valAxisLineShow: false, catAxisLineShow: true, catAxisLineColor: SURFACE_2
  });
  s.addText("Steepest loss sits in the first 6 weeks, before most support programs reach a new hire.", {
    x: M, y: 6.12, w: 6.75, h: 0.55,
    fontFace: B, fontSize: 11.5, italic: true, color: MUTED, valign: "top", margin: 0, lineSpacing: 14
  });

  const rx = M + 7.15;
  const rw = W - 7.15;
  card(s, rx, 2.12, rw, 1.28, AMBER_SOFT, 0.12);
  s.addText("~$1.5B", {
    x: rx + 0.22, y: 2.24, w: rw - 0.44, h: 0.62,
    fontFace: H, fontSize: 30, bold: true, color: "8A5A11", valign: "middle", margin: 0
  });
  s.addText("a year in replacement spend if nothing changes", {
    x: rx + 0.22, y: 2.86, w: rw - 0.44, h: 0.44,
    fontFace: B, fontSize: 12, color: "8A5A11", valign: "top", margin: 0
  });

  claimList(s, [
    "1.9M associates globally. About 500K new store hires a year.",
    "About $3,000 to replace each early exit.",
    "Exit themes read as confusion and isolation, not only wage competition.",
    "The retention assets already exist and go unorchestrated: Academies, 50+ Live Better U certificates at no cost, 310K associates promoted in two years."
  ], rx, 3.66, rw, false, 13);

  footNote(s, "Survival curve is illustrative. Days 1 to 30 of the sprint replace it with real 7/30/60/90-day curves by cohort.", false);
  pageNum(s, false);
  s.addNotes("This is the do-nothing price. Inaction is not free: at these assumptions it costs about $1.5B a year. The curve shape is the point, not the exact values. The sprint produces the real curves in the first 30 days.");
}

/* --- 3. Answer engine, weak action engine --- */
{
  const s = newSlide(false);
  eyebrow(s, "Insight from 3M questions a day", false);
  title(s, "Sidekick answers 3M questions a day and can act on almost none of them.", false);

  const cw = 6.4;
  card(s, M, 2.12, cw, 3.55, SURFACE, 0.12);
  s.addText("Devon, front end, mid-shift. Today.", {
    x: M + 0.26, y: 2.28, w: cw - 0.52, h: 0.32,
    fontFace: B, fontSize: 11, bold: true, color: MUTED, valign: "middle", margin: 0
  });

  card(s, M + 0.26, 2.68, cw - 1.5, 0.62, NAVY_2, 0.1);
  s.addText("I'm scheduled Saturday but I have a class conflict. What do I do?", {
    x: M + 0.42, y: 2.72, w: cw - 1.82, h: 0.54,
    fontFace: B, fontSize: 11.5, color: WHITE, valign: "middle", margin: 0, lineSpacing: 14
  });

  card(s, M + 1.24, 3.42, cw - 1.5, 0.62, SURFACE_2, 0.1);
  s.addText("You can request a shift swap. Ask your team lead to start one in the scheduling system.", {
    x: M + 1.4, y: 3.46, w: cw - 1.82, h: 0.54,
    fontFace: B, fontSize: 11.5, color: INK, valign: "middle", margin: 0, lineSpacing: 14
  });

  s.addText("Conversation ends.", {
    x: M + 0.26, y: 4.26, w: cw - 0.52, h: 0.3,
    fontFace: B, fontSize: 11.5, bold: true, color: RISK, valign: "middle", margin: 0
  });
  s.addText("Devon walks the floor looking for the lead.\nThe lead stops mid-task.\nA customer waits.", {
    x: M + 0.26, y: 4.6, w: cw - 0.52, h: 0.92,
    fontFace: B, fontSize: 12.5, color: INK, valign: "top", margin: 0, lineSpacing: 18
  });

  const rx = M + cw + 0.5;
  const rw = W - cw - 0.5;
  claimList(s, [
    "A correct answer that still costs three people time: the associate, the lead, and the customer standing there.",
    "Every handoff is minutes off the floor and one more reason the day feels unsupported.",
    "Turnover themes centre on daily friction, not one dramatic failure."
  ], rx, 2.18, rw, false, 13.5);

  card(s, rx, 4.42, rw, 1.28, TEAL_SOFT, 0.12);
  s.addText("~$100M", {
    x: rx + 0.22, y: 4.54, w: rw - 0.44, h: 0.6,
    fontFace: H, fontSize: 30, bold: true, color: "1E4E6B", valign: "middle", margin: 0
  });
  s.addText("a year for one minute returned per associate per shift", {
    x: rx + 0.22, y: 5.14, w: rw - 0.44, h: 0.46,
    fontFace: B, fontSize: 12, color: "1E4E6B", valign: "top", margin: 0
  });

  footNote(s, "Assumptions: about 1M store associates, 1 minute per shift, about $0.30 a minute loaded labor, roughly $300K a day. Top question clusters waste far more than a minute.", false);
  pageNum(s, false);
  s.addNotes("Sidekick is a strong answer engine and a weak action engine. The gap between answering and doing is where the minutes and the goodwill go. Devon's exchange is the everyday version of that gap.");
}

/* --- 4. R4 point of view --- */
{
  const s = newSlide(true);
  eyebrow(s, "Point of view", true);
  title(s, "Rejuvenation and rewards drive retention and results.", true, { size: 34 });

  /* 4 blocks + 3 operators must total exactly W, or the last block
     runs off the slide. */
  const opW = 0.43;
  const bw = (W - opW * 3) / 4;
  const bh = 2.2, by = 2.82;
  let x = M;

  function term(xx, head, sub, accent) {
    card(s, xx, by, bw, bh, accent ? NAVY_3 : NAVY_2, 0.12);
    s.addText(head, {
      x: xx + 0.2, y: by + 0.24, w: bw - 0.4, h: 0.46,
      fontFace: H, fontSize: 19, bold: true, color: accent ? AMBER : WHITE,
      valign: "middle", margin: 0
    });
    s.addText(sub, {
      x: xx + 0.2, y: by + 0.76, w: bw - 0.4, h: 1.3,
      fontFace: B, fontSize: 11.5, color: "C9D4E6", valign: "top", margin: 0, lineSpacing: 15
    });
  }
  function op(xx, sym) {
    s.addText(sym, {
      x: xx, y: by + bh / 2 - 0.3, w: opW, h: 0.6,
      fontFace: H, fontSize: 24, bold: true, color: AMBER,
      align: "center", valign: "middle", margin: 0
    });
  }

  term(x, "Rejuvenation", "Rest that is scheduled, not begged for. Safe to fail and learn. Safe at work and in the community.");
  x += bw; op(x, "+"); x += opW;
  term(x, "Rewards", "Real currency for driven, proactive, challenge-seeking work. The associate picks what it is.");
  x += bw; op(x, "="); x += opW;
  term(x, "Retention", "Past 90 days, and past 5 years. The 5-year average US tenure is the number to beat.", true);
  x += bw; op(x, "+"); x += opW;
  term(x, "Results", "Effective associates, staffed shifts, customers served on a full floor.", true);

  s.addText("This is not a request for more features. It is a system that senses each cohort's state and responds with the right one.", {
    x: M, y: 5.5, w: W, h: 0.6,
    fontFace: B, fontSize: 14.5, color: "D6DEEC", valign: "middle", margin: 0, lineSpacing: 19
  });
  footNote(s, "Rewards reach payroll, not just a badge in an app. That distinction is what makes the loop credible to an associate.", true);
  pageNum(s, true);
  s.addNotes("The thesis in one line. Rejuvenation and rewards are inputs; retention and results are outputs. Everything downstream is an implementation of this claim.");
}

/* --- 5. Three bets --- */
{
  const s = newSlide(false);
  eyebrow(s, "Three bets, one decision rule", false);
  title(s, "Discovery data picks the entry point, not conviction.", false);

  const rows = [
    headerRow(["", "A · Own the first 90 days", "B · Answer to action", "C · Signal Engine"]),
    [labelCell("Worth"),
      "~$15M a year per point of 90-day retention",
      "~$100M a year per minute returned per shift",
      "~2x retention yield on the same incentive dollar"],
    [labelCell("North star"),
      "90-day new-hire retention, pilot vs control stores",
      "Minutes of associate time returned per week",
      "Predicted vs actual lift in bandit cohorts, with holdouts"],
    [labelCell("Choose if"),
      "Exits cluster early and themes read confusion and isolation, not wage",
      "High question volume dead-ends into manual handoffs",
      "Attrition drivers vary sharply by cohort and there is appetite for platform spend"],
    [labelCell("Main risk"),
      "Retention is multi-causal. The app moves only its share",
      "Actions touch systems of record. One wrong write costs more trust than 100 right answers earn",
      "Scoring can read as surveillance. Slowest path to a visible win"]
  ];
  tableSlide(s, rows, { y: 2.05, colW: [1.55, 3.51, 3.51, 3.52], fontSize: 11 });

  card(s, M, 5.35, W, 0.76, AMBER_SOFT, 0.12);
  s.addText("Do nothing and about $1.5B a year in replacement spend continues. That is the fourth option, and the one I would kill first.", {
    x: M + 0.24, y: 5.39, w: W - 0.48, h: 0.68,
    fontFace: B, fontSize: 13, bold: true, color: "8A5A11", valign: "middle", margin: 0
  });
  pageNum(s, false);
  s.addNotes("Each bet is falsifiable: it states up front what the discovery data would have to show for it to be the right entry point. That makes the sprint output the decider rather than anyone's conviction in this room.");
}

/* --- 6. Sequence --- */
{
  const s = newSlide(false);
  eyebrow(s, "Recommended sequence", false);
  title(s, "Sequence A then C, with B woven through: a visible win in one quarter that becomes the platform.", false, { size: 27, h: 1.0 });

  const lx = M + 1.35;
  const colW = (W - 1.35 - 0.5) / 3;
  const hy = 2.02;
  ["Days 1 to 30  ·  Discover", "Days 31 to 60  ·  MVP", "Days 61 to 90  ·  Prove"].forEach((t, i) => {
    s.addText(t, {
      x: lx + i * (colW + 0.25), y: hy, w: colW, h: 0.34,
      fontFace: B, fontSize: 11.5, bold: true, color: MUTED, valign: "middle", margin: 0
    });
  });

  const lanes = [
    { k: "A", name: "Own the first\n90 days", tone: AMBER, soft: AMBER_SOFT, ink: "8A5A11",
      cells: ["Retention baselines and journey maps", "Onboarding Companion live in 20 stores", "Pilot vs control read. Scale or kill."] },
    { k: "B", name: "Answer to\naction", tone: TEAL, soft: TEAL_SOFT, ink: "1E4E6B",
      cells: ["Cluster the 3M questions by intent", "Schedule-conflict action agent, full loop", "Harden reliability. Spec cluster two."] },
    { k: "C", name: "Signal\nEngine", tone: GREEN, soft: GREEN_SOFT, ink: "2E5540",
      cells: ["Signal audit and cohort taxonomy", "One score live, two intervention arms", "Contextual bandit across 3 to 4 arms"] }
  ];

  lanes.forEach((ln, r) => {
    const y = 2.5 + r * 1.28;
    s.addShape(pres.ShapeType.ellipse, {
      x: M, y: y + 0.28, w: 0.44, h: 0.44, fill: { color: ln.tone }, line: { color: ln.tone, width: 0 }
    });
    s.addText(ln.k, {
      x: M, y: y + 0.28, w: 0.44, h: 0.44,
      fontFace: H, fontSize: 15, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0
    });
    s.addText(ln.name, {
      x: M + 0.52, y: y + 0.22, w: 0.8, h: 0.6,
      fontFace: B, fontSize: 10.5, bold: true, color: INK, valign: "middle", margin: 0, lineSpacing: 12
    });
    ln.cells.forEach((c, i) => {
      const cx = lx + i * (colW + 0.25);
      card(s, cx, y, colW, 1.0, ln.soft, 0.1);
      s.addText(c, {
        x: cx + 0.18, y: y + 0.1, w: colW - 0.36, h: 0.8,
        fontFace: B, fontSize: 11.5, color: ln.ink, valign: "middle", margin: 0, lineSpacing: 15
      });
    });
  });

  const gx = lx + 2 * (colW + 0.25) + colW + 0.11; // clear of the card edge
  s.addShape(pres.ShapeType.line, {
    x: gx, y: 2.42, w: 0, h: 4.0, line: { color: RISK, width: 2, dashType: "dash" }
  });
  s.addText("Day-90 gate", {
    x: gx - 1.26, y: 6.4, w: 1.2, h: 0.3,
    fontFace: B, fontSize: 10.5, bold: true, color: RISK, align: "right", valign: "middle", margin: 0
  });

  footNote(s, "Cost of this order: the platform starts slower. Benefit: a measured retention number in hand before anyone is asked to fund platform headcount.", false);
  pageNum(s, false);
  s.addNotes("A proves the retention thesis in one quarter on a footprint small enough to kill. C turns that proof into rails everything later ships on. B runs through both because its wins are immediate and it feeds the engine the intent data it needs.");
}

/* --- 7. Maya storyboard --- */
{
  const s = newSlide(false);
  eyebrow(s, "Plan A, seen from the floor", false);
  title(s, 'Day 1 stops being "nobody told me anything."', false);

  const cw2 = (W - 0.75) / 4;
  const moments = [
    { tag: "Proactive", time: "Day 1  ·  6:55am", head: "The app speaks first",
      body: "First shift today, Maya. Badge and locker first, then meet Dee, your buddy, aisle 12. I will guide each step when you arrive.", tone: TEAL, soft: TEAL_SOFT, ink: "1E4E6B" },
    { tag: "Conversational", time: "Shift 1", head: "Zero-tenure vocabulary",
      body: "“What's a zone?”  Your assigned section for the night. Yours is GM-3, aisles 10 to 14. Dee walks the first pass with you.", tone: NAVY_3, soft: SURFACE_2, ink: NAVY },
    { tag: "Reward", time: "Week 1", head: "Real reward, her choice",
      body: "Five shifts, all trainings done. Pick one: $15 gift card, free lunch, 5 stock-sweepstake entries, or $15 to a cause you choose.", tone: AMBER, soft: AMBER_SOFT, ink: "8A5A11" },
    { tag: "Growth path", time: "Day 30", head: "A visible road",
      body: "Day-30 check-in tomorrow. Day 60 cross-training choice. Day 90 milestone and path picker. Two recovery days a week held.", tone: GREEN, soft: GREEN_SOFT, ink: "2E5540" }
  ];

  moments.forEach((m, i) => {
    const x = M + i * (cw2 + 0.25);
    card(s, x, 2.1, cw2, 3.2, m.soft, 0.12);
    s.addShape(pres.ShapeType.roundRect, {
      x: x + 0.18, y: 2.3, w: 1.42, h: 0.3, fill: { color: m.tone }, line: { color: m.tone, width: 0 }, rectRadius: 0.15
    });
    s.addText(m.tag, {
      x: x + 0.18, y: 2.3, w: 1.42, h: 0.3,
      fontFace: B, fontSize: 9.5, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0
    });
    s.addText(m.time, {
      x: x + 0.18, y: 2.72, w: cw2 - 0.36, h: 0.28,
      fontFace: B, fontSize: 10.5, bold: true, color: MUTED, valign: "middle", margin: 0
    });
    s.addText(m.head, {
      x: x + 0.18, y: 3.02, w: cw2 - 0.36, h: 0.66,
      fontFace: H, fontSize: 15.5, bold: true, color: m.ink, valign: "top", margin: 0, lineSpacing: 19
    });
    s.addText(m.body, {
      x: x + 0.18, y: 3.72, w: cw2 - 0.36, h: 1.4,
      fontFace: B, fontSize: 12, color: INK, valign: "top", margin: 0, lineSpacing: 16
    });
  });

  s.addText("Four surfaces, one associate. Every plan in this deck is drawn the same way, so the room compares experiences and not adjectives.", {
    x: M, y: 5.62, w: W, h: 0.5,
    fontFace: B, fontSize: 13, color: INK, valign: "middle", margin: 0
  });
  footNote(s, "Illustrative dialogue, drafted to show intent. Not shipped UX copy.", false);
  pageNum(s, false);
  s.addNotes("Maya is a day-3 overnight stocker. Skipping a training never costs her anything, which is what makes it safe to learn. The week-1 reward is chosen by her, and that choice is also the training signal Plan C learns from.");
}

/* --- 8. Signal Engine --- */
{
  const s = newSlide(true);
  eyebrow(s, "How it senses and learns", true);
  title(s, "Six cohort scores decide what fires, and a bandit learns what works per cohort.", true, { size: 28 });

  const layers = [
    { k: "L5", t: "Roadmapping surface", d: "Score, rank, and sequence every candidate against build cost" },
    { k: "L4", t: "Learning layer", d: "Contextual bandit, Thompson sampling. Exploration scales with uncertainty" },
    { k: "L3", t: "Decision layer", d: "Friction 65 or higher fires alerts. Wellbeing 40 or lower offers recovery" },
    { k: "L2", t: "Cohort scores", d: "Friction · engagement · retention-risk · growth-readiness · trust · wellbeing" },
    { k: "L1", t: "Data inputs", d: "Telemetry · voice of associate · field shifts · workforce · operational · competitive" }
  ];

  layers.forEach((L, i) => {
    const y = 2.12 + i * 0.79;
    const fill = i === 0 ? NAVY_3 : i % 2 ? NAVY_2 : "1F3050";
    card(s, M, y, W, 0.68, fill, 0.1);
    s.addShape(pres.ShapeType.roundRect, {
      x: M + 0.2, y: y + 0.16, w: 0.52, h: 0.36, fill: { color: AMBER }, line: { color: AMBER, width: 0 }, rectRadius: 0.08
    });
    s.addText(L.k, {
      x: M + 0.2, y: y + 0.16, w: 0.52, h: 0.36,
      fontFace: B, fontSize: 11, bold: true, color: NAVY, align: "center", valign: "middle", margin: 0
    });
    s.addText(L.t, {
      x: M + 0.88, y: y + 0.14, w: 2.9, h: 0.4,
      fontFace: H, fontSize: 14.5, bold: true, color: WHITE, valign: "middle", margin: 0
    });
    s.addText(L.d, {
      x: M + 3.85, y: y + 0.14, w: W - 4.05, h: 0.4,
      fontFace: B, fontSize: 11.5, color: "C9D4E6", valign: "middle", margin: 0
    });
  });

  s.addText("Scores are computed per cohort (role x shift x region x tenure), never per individual. Every learned policy exports in plain language: “cohort X responds best to Y,” reviewable by People teams.", {
    x: M, y: 6.12, w: W, h: 0.62,
    fontFace: B, fontSize: 12.5, color: "D6DEEC", valign: "top", margin: 0, lineSpacing: 16
  });
  pageNum(s, true);
  s.addNotes("Cohorts, not individuals: larger samples make the scores stable, and it is the right privacy posture because the engine never carries a hidden label on a person. Wellbeing reads operational signals only. Never health data.");
}

/* --- 9. Risks --- */
{
  const s = newSlide(false);
  eyebrow(s, "What would sink this", false);
  title(s, "Four risks can sink this, and each has an owner and a trip wire.", false);

  const rows = [
    headerRow(["Risk", "Owner", "Trip wire to watch", "Mitigation"]),
    [{ text: "Scoring reads as surveillance", options: { bold: true, color: INK } },
      "Product + HR", "Associate sentiment drops in pilot stores versus control",
      "Associates see their own signals, framed as growth, never as a hidden risk label. Opt-out available."],
    [{ text: "Bandit optimizes its own metric", options: { bold: true, color: INK } },
      "Data science", "Engagement climbs while 90-day retention stays flat",
      "Reward is a leading indicator validated against 90-day retention in permanent holdout groups."],
    [{ text: "Retention is multi-causal", options: { bold: true, color: INK } },
      "Product", "Control stores move with the pilot stores",
      "Claim only the app's share. Matched pairs and a pre-registered north star."],
    [{ text: "Wrong write to a system of record", options: { bold: true, color: INK } },
      "Engineering", "Any incorrect scheduling or pay action, at any volume",
      "Strictest grounding tier on pay, benefits, and scheduling. A lead approves before commit."]
  ];
  tableSlide(s, rows, { y: 2.05, colW: [2.75, 1.5, 3.2, 4.64], fontSize: 11 });

  card(s, M, 5.08, W, 0.82, RISK_SOFT, 0.12);
  s.addText("Said out loud: gift cards, bonuses, and stock are taxable compensation. That is payroll integration, not an app feature. Sweepstakes carry their own legal regime, and every reward tier ships with an equity audit.", {
    x: M + 0.24, y: 5.12, w: W - 0.48, h: 0.74,
    fontFace: B, fontSize: 12, color: "7A322A", valign: "middle", margin: 0, lineSpacing: 15
  });
  pageNum(s, false);
  s.addNotes("Surveillance perception is the risk that kills Plan C if it is handled late. The mitigation is radical transparency from the first release, not a comms plan bolted on after launch.");
}

/* --- 10. Decision --- */
{
  const s = newSlide(true);
  eyebrow(s, "Decision requested today", true);
  title(s, "Two weeks, 40 stores, one pod, and a date on the calendar.", true, { size: 30 });

  card(s, M, 2.05, W, 2.28, NAVY_2, 0.12);
  s.addText("APPROVE", {
    x: M + 0.3, y: 2.22, w: 2.0, h: 0.32,
    fontFace: B, fontSize: 11, bold: true, charSpacing: 1.6, color: AMBER, valign: "middle", margin: 0
  });
  s.addText("A 2-week discovery sprint, then a 90-day pilot.", {
    x: M + 0.3, y: 2.54, w: W - 0.6, h: 0.46,
    fontFace: H, fontSize: 21, bold: true, color: WHITE, valign: "middle", margin: 0
  });

  const askW = (W - 0.6 - 0.6) / 3;
  [
    ["Footprint", "20 pilot stores and 20 matched control stores"],
    ["Team", "1 data-science pod, [N] engineers.\nOwner: [PM name]"],
    ["Money and dates", "Budget: $[amount]\nStart: [date]   Gate: day 90"]
  ].forEach((c, i) => {
    const x = M + 0.3 + i * (askW + 0.3);
    s.addText(c[0].toUpperCase(), {
      x, y: 3.1, w: askW, h: 0.28,
      fontFace: B, fontSize: 9.5, bold: true, charSpacing: 1.2, color: MUTED_D, valign: "middle", margin: 0
    });
    s.addText(c[1], {
      x, y: 3.38, w: askW, h: 0.8,
      fontFace: B, fontSize: 13, color: WHITE, valign: "top", margin: 0, lineSpacing: 17
    });
  });

  const bw2 = (W - 0.6) / 3;
  const outcomes = [
    { h: "Scale if", tone: GREEN, body: "90-day retention in pilot stores beats matched controls by 2 points or more, on the pre-registered north star." },
    { h: "Kill if", tone: RISK, body: "Lift comes in under 1 point, or associate sentiment drops in pilot stores. No renegotiation." },
    { h: "Fallback if declined", tone: AMBER, body: "Telemetry and survey baseline only, at roughly a tenth the cost. Weaker evidence. Revisit in Q3." }
  ];
  outcomes.forEach((o, i) => {
    const x = M + i * (bw2 + 0.3);
    card(s, x, 4.62, bw2, 1.85, "1F3050", 0.12);
    s.addShape(pres.ShapeType.ellipse, {
      x: x + 0.24, y: 4.86, w: 0.2, h: 0.2, fill: { color: o.tone }, line: { color: o.tone, width: 0 }
    });
    s.addText(o.h, {
      x: x + 0.54, y: 4.8, w: bw2 - 0.78, h: 0.32,
      fontFace: H, fontSize: 15, bold: true, color: WHITE, valign: "middle", margin: 0
    });
    s.addText(o.body, {
      x: x + 0.24, y: 5.24, w: bw2 - 0.48, h: 1.1,
      fontFace: B, fontSize: 11.5, color: "C9D4E6", valign: "top", margin: 0, lineSpacing: 15
    });
  });

  footNote(s, "Bracketed values need finance and staffing input before this deck is presented.", true);
  pageNum(s, true);
  s.addNotes("Close on the ask and stop talking. Amount, owner, date, gate, and the fallback are all on one slide so the room can decide without a second meeting.");
}

/* ============================================================
   APPENDIX
   ============================================================ */

/* --- divider --- */
{
  const s = newSlide(true);
  s.addText("Appendix", {
    x: M, y: 2.6, w: W, h: 1.0,
    fontFace: H, fontSize: 42, bold: true, color: WHITE, valign: "middle", margin: 0
  });
  s.addText("Nineteen slides, indexed by the seat that asks. ROI models and measurement design for finance. Architecture, integration, and bandit mechanics for engineering and data science. Reward ladder, compliance, and guardrails for HR and legal.", {
    x: M, y: 3.7, w: W - 3.2, h: 1.2,
    fontFace: B, fontSize: 15, color: "C9D4E6", valign: "top", margin: 0, lineSpacing: 21
  });
  pageNum(s, true);
  s.addNotes("Do not walk the appendix. Jump to the slide the question needs.");
}

/* Reference-section layout: a two-column card grid rather than a bare
   bullet list, so the slide fills the canvas and stays scannable when
   someone jumps straight to it from a question. */
function appendixList(tag, head, items, note) {
  const s = newSlide(false);
  eyebrow(s, tag, false);
  title(s, head, false, { size: 26, h: 0.9 });

  const cw = (W - 0.3) / 2;
  const rows = Math.ceil(items.length / 2);
  const top = 1.95;
  const bottom = note ? 6.55 : 6.7;
  const gap = 0.22;
  const ch = (bottom - top - (rows - 1) * gap) / rows;

  items.forEach((it, i) => {
    const last = i === items.length - 1;
    const orphan = last && items.length % 2 === 1; // span the odd one out
    const x = M + (orphan ? 0 : (i % 2) * (cw + 0.3));
    const y = top + Math.floor(i / 2) * (ch + gap);
    const thisW = orphan ? W : cw;
    card(s, x, y, thisW, ch, SURFACE, 0.1);
    diamond(s, x + 0.28, y + ch / 2 - 0.07, 0.14, AMBER);
    s.addText(it, {
      x: x + 0.58, y: y + 0.16, w: thisW - 0.86, h: ch - 0.32,
      fontFace: B, fontSize: 12, color: INK, valign: "middle", margin: 0, lineSpacing: 16
    });
  });

  if (note) footNote(s, note, false);
  pageNum(s, false);
  return s;
}

/* A1 Plan A ROI */
{
  const s = newSlide(false);
  eyebrow(s, "A1  ·  For finance", false);
  title(s, "Plan A ROI rests on two inputs, and both are testable in the pilot.", false, { size: 26, h: 0.9 });

  const stepW = (W - 0.6) / 3;
  [
    ["~500K", "new store hires a year\n(illustrative)"],
    ["+1 point", "of 90-day retention is about\n5,000 fewer replacements"],
    ["~$15M", "a year per point, at about\n$3,000 to replace each hire"]
  ].forEach((t, i) => {
    statTile(s, M + i * (stepW + 0.3), 1.95, stepW, 1.5, t[0], t[1], false, i === 2 ? "8A5A11" : INK);
    if (i < 2) {
      s.addText("›", {
        x: M + i * (stepW + 0.3) + stepW + 0.02, y: 2.4, w: 0.26, h: 0.6,
        fontFace: H, fontSize: 22, bold: true, color: AMBER, align: "center", valign: "middle", margin: 0
      });
    }
  });

  const rows = [
    headerRow(["Sensitivity", "$2,000 to replace", "$3,000 to replace", "$4,000 to replace"]),
    [labelCell("400K hires"), "$8M per point", "$12M per point", "$16M per point"],
    [labelCell("500K hires"), "$10M per point", "$15M per point", "$20M per point"],
    [labelCell("600K hires"), "$12M per point", "$18M per point", "$24M per point"]
  ];
  tableSlide(s, rows, { y: 3.72, colW: [2.6, 3.16, 3.17, 3.17], fontSize: 11.5 });

  card(s, M, 5.6, W, 1.0, SURFACE, 0.12);
  s.addText("What kills this model: a pilot lift under 1 point, or a true replacement cost below about $1,500. Measurement is matched pilot versus control stores, 20 each, with the north star pre-registered before the pilot opens and a scale or kill call at day 90.", {
    x: M + 0.24, y: 5.66, w: W - 0.48, h: 0.9,
    fontFace: B, fontSize: 12, color: INK, valign: "middle", margin: 0, lineSpacing: 16
  });
  footNote(s, "Order-of-magnitude model with stated assumptions, built to be interrogated in the room and then replaced by measured pilot data.", false);
  pageNum(s, false);
  s.addNotes("Every cell in the sensitivity grid still clears the cost of the sprint. That is the point of showing it.");
}

/* A2 Plan B ROI */
appendixList("A2  ·  For finance",
  "Plan B ROI is a labor-minutes model, and the top clusters waste far more than a minute.",
  [
    "About 1M store associates x 1 minute per shift x about $0.30 a minute loaded labor is roughly $300K a day, or $100M a year.",
    "Deflection is the second lever: fewer mid-task interruptions per team lead per shift, which the current dead-end pattern generates all day.",
    "Shift planning already fell from 90 minutes to 30 with agent help. That is the proof the mechanism works here.",
    "Measurement is task-level instrumentation: answer-to-action conversion, deflection rate, and time-to-resolution against a pre-pilot baseline.",
    "What kills this model: if the top clusters turn out to be genuinely low-frequency, or if action feasibility is blocked by systems of record we cannot write to."
  ],
  "The sprint ranks every intent cluster by frequency x time-cost x feasibility before a single agent is built.");

/* A3 Plan C ROI */
appendixList("A3  ·  For finance",
  "Plan C pays back through targeting yield and through what it makes cheap later.",
  [
    "Bandit targeting concentrates incentive spend on the arms that work per cohort, which is where the roughly 2x yield on the same dollar comes from. Holdout-proven, not asserted.",
    "Platform effect: a new intervention becomes config rather than code, so what took weeks takes days.",
    "It compounds A and B rather than competing with them. Their features become arms the engine keeps optimizing.",
    "Measurement is permanent long-horizon holdouts, incentive ROI per arm, and predicted versus actual lift with equity audits attached.",
    "What kills this model: if attrition drivers turn out to be uniform across cohorts, targeting has nothing to find and the platform spend is not justified yet."
  ],
  "This is the slowest bet to a visible win, which is exactly why it is sequenced second rather than first.");

/* A4 Measurement design */
appendixList("A4  ·  For finance and the GM",
  "Measurement is designed before the build, so the day-90 call is arithmetic and not debate.",
  [
    "Matched pairs: 20 pilot stores and 20 control stores matched on volume, region, tenure mix, and recent turnover.",
    "The north star is pre-registered before the pilot opens. No metric shopping after the read.",
    "Plan C keeps permanent long-horizon holdout groups, so leading indicators stay honest against 90-day retention.",
    "Every plan ends in a scale or kill decision priced in CFO terms: cost per replaced associate against measured pilot lift.",
    "Scale at 2 points or better. Kill under 1 point, or on any sentiment drop in pilot stores."
  ],
  "Pre-registration is what separates a pilot from a demo.");

/* A5 Discovery sprint */
{
  const s = newSlide(false);
  eyebrow(s, "A5  ·  For the GM and hiring principal", false);
  title(s, "Two weeks, four workstreams, and one question each has to answer.", false, { size: 26, h: 0.9 });

  const steps = [
    { d: "Days 1 to 5", t: "Telemetry deep-dive", b: "The 3M daily Sidekick questions clustered by intent. Feature engagement by role, tenure, shift, and region. Drop-off funnels.", q: "Where do answers dead-end into manual work?" },
    { d: "Days 1 to 5, parallel", t: "Voice-of-associate review", b: "In-app feedback, survey verbatims, app store reviews, thumbs-down transcripts, exit interview themes, coded against the telemetry clusters.", q: "Where do associates say it hurts versus where the data shows it hurts?" },
    { d: "Days 6 to 12", t: "Work as a store associate", b: "Badge in. Overnight stocking and front-end shifts with real task assignments, on the same shared handhelds. Not a store tour.", q: "What does the first shift feel like, and when is the app absent?" },
    { d: "Days 13 to 14", t: "Refresh the journey maps", b: "Synthesize all three inputs into evidence-based maps per persona: new associate, tenured associate, team lead.", q: "What role does the app actually play in whether a new associate stays?" }
  ];

  const cw3 = (W - 0.75) / 4;
  steps.forEach((st, i) => {
    const x = M + i * (cw3 + 0.25);
    card(s, x, 1.98, cw3, 3.9, SURFACE, 0.12);
    s.addShape(pres.ShapeType.ellipse, {
      x: x + 0.2, y: 2.18, w: 0.42, h: 0.42, fill: { color: NAVY }, line: { color: NAVY, width: 0 }
    });
    s.addText(String(i + 1), {
      x: x + 0.2, y: 2.18, w: 0.42, h: 0.42,
      fontFace: H, fontSize: 14, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0
    });
    s.addText(st.d, {
      x: x + 0.2, y: 2.7, w: cw3 - 0.4, h: 0.28,
      fontFace: B, fontSize: 10, bold: true, color: MUTED, valign: "middle", margin: 0
    });
    s.addText(st.t, {
      x: x + 0.2, y: 2.98, w: cw3 - 0.4, h: 0.62,
      fontFace: H, fontSize: 14.5, bold: true, color: INK, valign: "top", margin: 0, lineSpacing: 18
    });
    s.addText(st.b, {
      x: x + 0.2, y: 3.64, w: cw3 - 0.4, h: 1.32,
      fontFace: B, fontSize: 11, color: INK, valign: "top", margin: 0, lineSpacing: 14
    });
    card(s, x + 0.2, 5.0, cw3 - 0.4, 0.72, AMBER_SOFT, 0.08);
    s.addText(st.q, {
      x: x + 0.32, y: 5.04, w: cw3 - 0.64, h: 0.64,
      fontFace: B, fontSize: 10, italic: true, color: "8A5A11", valign: "middle", margin: 0, lineSpacing: 13
    });
  });

  footNote(s, "Triangulation by design: telemetry shows what associates do, voice-of-associate shows what they say, floor shifts show what it feels like. A pain point in all three is real. In one, it is a hypothesis.", false);
  pageNum(s, false);
  s.addNotes("Bentonville makes the floor shifts a weekly habit rather than a one-time event. That is the difference between ethnography and a photo opportunity.");
}

/* A6 architecture */
appendixList("A6  ·  For engineering",
  "This ships as nano-agents inside the four-super-agent architecture that already exists.",
  [
    "Sparky, Marty, Associate, and Developer are the existing super-agents. Plan A's Onboarding Companion is a nano-agent under the Associate super-agent, not a new stack.",
    "That matches the stated surgical agent philosophy: small, purpose-built agents over one general assistant asked to do everything.",
    "Plan B's action agents are nano-agents per intent cluster, starting with schedule conflicts, each owning one complete loop.",
    "Plan C adds no new surface. It adds the rails underneath: a feature store, versioned scores, and config-driven intervention arms.",
    "Nothing here asks for a rewrite. Every plan lands as an increment on shipped infrastructure."
  ],
  "Reference: four-super-agent architecture with nano-agents, per CTO Hari Vasudev's stated agent philosophy.");

/* A7 systems of record */
appendixList("A7  ·  For engineering leads",
  "Writing to systems of record sets the trust bar, so accuracy is tiered by what a mistake costs.",
  [
    "Strictest grounding tier covers pay, benefits, and scheduling. These actions double-check against the system of record before commit.",
    "A human approves the write: the schedule-swap loop proposes eligible takers and the lead approves with one tap.",
    "One wrong scheduling action costs more trust than 100 right answers earn. Reliability is the feature, not a follow-up.",
    "Graceful handoff is specified, not implied: when the agent cannot act it says who, why, and what happens next.",
    "Days 61 to 90 of Plan B are reliability hardening. The agent has to be boringly dependable before it can be broadly loved."
  ],
  "Trust telemetry runs alongside: accuracy, correction rate, and escalation quality, all read per cluster.");

/* A8 Thompson sampling */
{
  const s = newSlide(false);
  eyebrow(s, "A8  ·  For data science", false);
  title(s, "Exploration scales with uncertainty, which is the whole trick.", false, { size: 26, h: 0.9 });

  claimList(s, [
    "For each cohort-context and each intervention arm, the bandit keeps a probability distribution over how well that arm works there.",
    "To choose, it samples from every distribution and plays the winner. An arm it is unsure about occasionally wins the sample, so exploration happens on its own.",
    "Persistently weak arms get sampled less and less. Nobody has to prune them by hand.",
    "Classic A/B is too slow here: dozens of cohorts times multiple arms wastes exposure on losing arms for weeks."
  ], M, 1.98, 6.6, false, 13);

  const rx = M + 7.0;
  const rw = W - 7.0;
  card(s, rx, 1.98, rw, 3.9, SURFACE, 0.12);
  s.addText("Why a bandit and not A/B", {
    x: rx + 0.26, y: 2.14, w: rw - 0.52, h: 0.4,
    fontFace: H, fontSize: 16, bold: true, color: INK, valign: "middle", margin: 0
  });
  claimList(s, [
    "Reward type (cash, food, stock upside, giving) joins the context as its own factored dimension. The associate's own choices are the labels.",
    "Factoring intervention-family by reward-type keeps the arm space tractable instead of exploding combinatorially.",
    "Start reward-type learning inside the incentive family only, then widen.",
    "West-coast overnight stockers may respond differently from East-coast stockers. The bandit finds out and surfaces the pattern for humans to interrogate."
  ], rx + 0.26, 2.66, rw - 0.52, false, 11.5);
  footNote(s, "Every learned policy exports as a readable sentence, so a People team reviews behaviour rather than weights.", false);
  pageNum(s, false);
  s.addNotes("If someone asks why not A/B: exposure. A/B spends weeks paying losing arms while a bandit reallocates continuously and still explores.");
}

/* A9 reward definition */
appendixList("A9  ·  For data science",
  "A bandit optimizes exactly what you feed it, so the reward is validated against 90-day retention.",
  [
    "The reward fed to the learner is a leading indicator, for example week-4 engagement, never a click.",
    "That leading indicator is itself validated against 90-day retention inside permanent holdout groups before it is trusted.",
    "If the reward were “clicked the nudge,” the engine would maximize clicks and could annoy people into quitting while the dashboard turned green.",
    "Holdouts are permanent, not a launch-phase courtesy. They are how the metric stays honest a year in.",
    "Trip wire on the risk register: engagement climbing while 90-day retention stays flat."
  ],
  "This is the single most important line of defence against optimizing the wrong thing.");

/* A10 six scores */
{
  const s = newSlide(false);
  eyebrow(s, "A10  ·  For data science and HR", false);
  title(s, "Six scores, computed per cohort and never per individual.", false, { size: 26, h: 0.9 });

  const scores = [
    ["Friction", "How often this cohort's journeys dead-end: abandoned flows, repeated questions, escalations."],
    ["Engagement", "Depth and breadth of app usage relative to the role baseline."],
    ["Retention-risk", "Predicted attrition probability against baseline, from workforce and telemetry features."],
    ["Growth-readiness", "Advancement appetite: LBU activity, skill completions, questions about becoming a team lead."],
    ["Trust", "Thumbs-down rate, correction rate, and reliance on workarounds after using Sidekick."],
    ["Wellbeing", "Operational rest and load signals only: schedule volatility, overtime density, break patterns, callout trends."]
  ];
  const cw4 = (W - 0.3) / 2;
  scores.forEach((sc, i) => {
    const x = M + (i % 2) * (cw4 + 0.3);
    const y = 1.98 + Math.floor(i / 2) * 1.25;
    card(s, x, y, cw4, 1.08, i === 5 ? AMBER_SOFT : SURFACE, 0.1);
    s.addText(sc[0], {
      x: x + 0.24, y: y + 0.12, w: cw4 - 0.48, h: 0.34,
      fontFace: H, fontSize: 15, bold: true, color: i === 5 ? "8A5A11" : INK, valign: "middle", margin: 0
    });
    s.addText(sc[1], {
      x: x + 0.24, y: y + 0.46, w: cw4 - 0.48, h: 0.52,
      fontFace: B, fontSize: 11, color: i === 5 ? "8A5A11" : INK, valign: "top", margin: 0, lineSpacing: 14
    });
  });

  card(s, M, 5.9, W, 0.78, NAVY, 0.12);
  s.addText("Wellbeing is deliberately narrow. It reads operational signals only, never health data. The app offers resources and recovery options. It never infers, records, or diagnoses a health status.", {
    x: M + 0.24, y: 5.94, w: W - 0.48, h: 0.7,
    fontFace: B, fontSize: 12, color: WHITE, valign: "middle", margin: 0, lineSpacing: 15
  });
  pageNum(s, false);
  s.addNotes("Cohort-level scoring gives larger samples per estimate, so the scores are statistically stable, and it is the right privacy posture because no individual carries a hidden label.");
}

/* A11 threshold policy */
{
  const s = newSlide(false);
  eyebrow(s, "A11  ·  For product and HR", false);
  title(s, "The decision layer is a readable threshold policy, auditable line by line.", false, { size: 26, h: 0.9 });

  const rows = [
    headerRow(["Score pattern", "Intervention family", "What it looks like"]),
    [{ text: "Friction at 65 or above", options: { bold: true, color: INK } }, "Proactive alerts and product fixes",
      "Detect the schedule conflict before the associate does. Fix the top dead-end flow."],
    [{ text: "Engagement 40 or below, tenure under 90 days", options: { bold: true, color: INK } }, "Onboarding interventions",
      "Companion nudges, buddy prompts, a day-30 check-in."],
    [{ text: "Retention-risk at 60 or above", options: { bold: true, color: INK } }, "Rewards and recognition",
      "Real rewards, associate's choice. Streaks feed bonus and merit nominations with evidence attached."],
    [{ text: "Growth-readiness at 60 or above", options: { bold: true, color: INK } }, "Career pathing",
      "“You are 2 certificates from team-lead eligibility,” with concrete next steps via Academies and LBU."],
    [{ text: "Trust at 40 or below", options: { bold: true, color: INK } }, "FYIs, training, product hardening",
      "Transparent what-it-can-and-cannot-do dialogue, targeted micro-training, grounding fixes."],
    [{ text: "Wellbeing at 40 or below", options: { bold: true, color: INK } }, "Rejuvenation",
      "Recovery-day nudges when close-shift streaks stack up. Break protection. Offered, never prescribed."]
  ];
  tableSlide(s, rows, { y: 1.95, colW: [3.5, 3.2, 5.39], fontSize: 11 });

  footNote(s, "Several families can fire at once. A struggling new hire trips both onboarding and rewards, and the intervention budget cap arbitrates so the engine competes for scarce attention instead of sending everything.", false);
  pageNum(s, false);
  s.addNotes("In production the thresholds come from score distributions, for example top-quartile friction. The policy stays human-readable on purpose so a People team can audit every trigger.");
}

/* A12 reward ladder */
{
  const s = newSlide(false);
  eyebrow(s, "A12  ·  For HR", false);
  title(s, "Three reward tiers, three different grant mechanics.", false, { size: 26, h: 0.9 });

  const tiers = [
    { t: "Everyday", g: "System-grantable, instant", i: "Free lunch. Small gift card. Stock-sweepstake entries. A donation to a cause the associate picks.", n: "The associate picks, and every choice teaches the engine what motivates that cohort.", tone: AMBER_SOFT, ink: "8A5A11" },
    { t: "Quarterly", g: "Manager and HR loop, fed by streaks", i: "Bonus. Merit-increase nomination. A larger stock sweepstake.", n: "The app nominates with evidence. Humans decide inside existing HR calibration.", tone: TEAL_SOFT, ink: "1E4E6B" },
    { t: "Career", g: "HR pipeline, the growth path itself", i: "Stock grants. Team-lead track via Academies and Live Better U.", n: "The reward is the path, surfaced as concrete next steps rather than a vague promise. 310K promoted in two years.", tone: GREEN_SOFT, ink: "2E5540" }
  ];
  const cw5 = (W - 0.6) / 3;
  tiers.forEach((t, i) => {
    const x = M + i * (cw5 + 0.3);
    card(s, x, 1.98, cw5, 3.5, t.tone, 0.12);
    s.addText(t.t, {
      x: x + 0.26, y: 2.16, w: cw5 - 0.52, h: 0.46,
      fontFace: H, fontSize: 20, bold: true, color: t.ink, valign: "middle", margin: 0
    });
    s.addText(t.g.toUpperCase(), {
      x: x + 0.26, y: 2.64, w: cw5 - 0.52, h: 0.42,
      fontFace: B, fontSize: 9.5, bold: true, charSpacing: 1, color: t.ink, valign: "top", margin: 0, lineSpacing: 12
    });
    s.addText(t.i, {
      x: x + 0.26, y: 3.16, w: cw5 - 0.52, h: 1.05,
      fontFace: B, fontSize: 12.5, color: INK, valign: "top", margin: 0, lineSpacing: 16
    });
    s.addText(t.n, {
      x: x + 0.26, y: 4.24, w: cw5 - 0.52, h: 1.1,
      fontFace: B, fontSize: 11, italic: true, color: t.ink, valign: "top", margin: 0, lineSpacing: 14
    });
  });
  footNote(s, "Rewards reach payroll. That is what separates this from a badge in an app, and it is also what makes compliance a day-one workstream.", false);
  pageNum(s, false);
  s.addNotes("The everyday tier is the only one the system grants on its own. Everything above it routes through a human decision inside processes HR already runs.");
}

/* A13 compliance */
appendixList("A13  ·  For legal and HR",
  "Compliance is a day-one workstream, not a launch-week discovery.",
  [
    "Gift cards, bonuses, and stock are taxable compensation. That means payroll integration, not an app feature.",
    "Sweepstakes carry their own legal regime: no-consideration entry and state-by-state rules.",
    "Merit and promotion nominations flow through existing HR calibration. The app brings evidence, humans decide.",
    "Every tier ships with an equity audit of realized rewards across cohorts.",
    "That audit includes checking that rewarding drive never quietly disadvantages the associate who simply works their shift well.",
    "Reward mechanics must never read as pay-for-surveillance. If a mechanic cannot survive being explained to the associate it applies to, it does not ship."
  ],
  "Cleared with HR and legal inside days 31 to 60 of Plan C, before the first reward arm goes live.");

/* A14 guardrails */
{
  const s = newSlide(false);
  eyebrow(s, "A14  ·  For HR and legal", false);
  title(s, "Four guardrails keep the learning layer honest.", false, { size: 26, h: 0.9 });

  const g = [
    ["Long-horizon holdouts", "Bandits optimize the reward you give them. Reward is a leading indicator validated against 90-day retention in permanent holdout groups."],
    ["Fairness constraints", "Minimum exposure floors per arm and per cohort. No cohort is silently starved of a beneficial intervention, and realized rewards are audited for equity."],
    ["Intervention budget caps", "An associate sees at most N interventions a week. The engine competes for a scarce attention budget, which prevents nudge fatigue."],
    ["Human-readable policies", "Every learned policy exports as “cohort X responds best to Y,” reviewable by People teams. Not a black box."]
  ];
  const cw6 = (W - 0.3) / 2;
  g.forEach((it, i) => {
    const x = M + (i % 2) * (cw6 + 0.3);
    const y = 2.0 + Math.floor(i / 2) * 2.1;
    card(s, x, y, cw6, 1.85, SURFACE, 0.12);
    diamond(s, x + 0.26, y + 0.3, 0.16, AMBER);
    s.addText(it[0], {
      x: x + 0.56, y: y + 0.2, w: cw6 - 0.82, h: 0.4,
      fontFace: H, fontSize: 16, bold: true, color: INK, valign: "middle", margin: 0
    });
    s.addText(it[1], {
      x: x + 0.26, y: y + 0.68, w: cw6 - 0.52, h: 1.0,
      fontFace: B, fontSize: 12, color: INK, valign: "top", margin: 0, lineSpacing: 16
    });
  });
  footNote(s, "Fairness floors are hard constraints in the sampler, not preferences applied afterwards in review.", false);
  pageNum(s, false);
  s.addNotes("These four are what let a People team sign off on a learning system. Each one is testable and each one has an owner.");
}

/* A15 roadmap */
{
  const s = newSlide(false);
  eyebrow(s, "A15  ·  For engineering leads and the GM", false);
  title(s, "Eighteen capabilities, one scoring formula, placed on the associate journey.", false, { size: 26, h: 0.9 });

  card(s, M, 1.95, W, 0.72, NAVY, 0.12);
  s.addText("score  =  ( minutes returned x weight  +  retention lift x weight )  x  confidence  ÷  build cost", {
    x: M + 0.24, y: 1.99, w: W - 0.48, h: 0.64,
    fontFace: B, fontSize: 14, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0
  });

  const rows = [
    headerRow(["Top-ranked capability", "Plan", "Journey lane", "Horizon", "Why it ranks"]),
    ["Fix the top dead-end flow", "B", "Everyday work", "Days 1 to 30", "High minutes, high confidence, low build cost"],
    ["Schedule-conflict action agent", "B", "Everyday work", "Days 31 to 60", "Largest minutes return of any single capability"],
    ["Onboarding Companion nano-agent", "A", "First 90 days", "Days 31 to 60", "Highest retention lift, moderate confidence"],
    ["Day-1 orientation agent", "A", "First shift", "Days 31 to 60", "Strong retention lift at low build cost"],
    ["Retention-risk score and two arms", "C", "Platform", "Days 31 to 60", "High lift, low confidence until measured"],
    ["Contextual bandit pilot", "C", "Platform", "Days 61 to 90", "Highest cost, highest option value"]
  ];
  tableSlide(s, rows, { y: 2.92, colW: [3.9, 0.8, 2.0, 1.75, 3.64], fontSize: 11 });

  footNote(s, "Confidence multiplies rather than adds, so a large opportunity nobody believes in ranks like a modest one that is certain. Cost divides, which converts impact into impact per unit of effort. Swimlanes expose gaps: an empty lane is a journey milestone no plan is serving.", false);
  pageNum(s, false);
  s.addNotes("The dashboard is not there to be obeyed. It makes overrides explicit: here is what the signals rank, here is where I am overriding, and why.");
}

/* A16 Plan B detail */
appendixList("A16  ·  Plan B in full",
  "Answer to action: close the agentic gap on the highest-volume clusters.",
  [
    "Thesis: every question that ends in “go find your team lead” costs three people time. Moving the top clusters from explaining to doing returns minutes and removes daily friction.",
    "Days 1 to 30: cluster the 3M daily questions by intent and score each cluster by frequency x time-cost x feasibility. Hypothesis for the top three: scheduling, time off, task and equipment.",
    "Days 31 to 60: one nano-agent ships the complete loop for cluster one. Detect, propose takers, initiate the swap, escalate async to the lead, close the loop.",
    "Days 61 to 90: instrument task completion and deflection, harden reliability, spec cluster two, and institutionalize the experimentation cadence.",
    "North star: minutes of associate time returned per week. Supporting: in-app task completion, manager-interruption deflection, answer-to-action conversion, and trust metrics.",
    "Risks: action agents touch systems of record, so the integration and trust bar is high, and one wrong scheduling action costs more trust than 100 right answers earn."
  ]);

/* A17 Plan C detail */
appendixList("A17  ·  Plan C in full",
  "Signal Engine: sense each cohort's state, respond with the right intervention, learn what works.",
  [
    "Thesis: Walmart has 1.9M associates and treats them, product-wise, as one user. The durable advantage is a platform that senses cohort state and responds, not any single feature.",
    "Days 1 to 30: inventory every existing signal, define the cohort taxonomy (role x shift x region x tenure), and fit a scoring model v0 on historical data to test whether 90-day attrition is predictable from app signals.",
    "Days 31 to 60: retention-risk score live for new hires. Two arms A/B tested, proactive check-in against real-reward choice. Reward catalog v1 shipped with HR and legal clearance.",
    "Days 61 to 90: contextual bandit across 3 to 4 arms in pilot regions, cohort-level results, and an opportunity-scoring dashboard that turns signals into ranked roadmap input.",
    "North star: predicted versus actual retention lift in bandit cohorts, with long-horizon holdouts. Supporting: score AUC, incentive ROI per arm, engagement lift per cohort.",
    "Risks: scoring associates can read as surveillance, and this is the slowest path to a visible win. Mitigation is radical transparency plus dedicated data-science headcount."
  ]);

/* A18 scale requirements */
{
  const s = newSlide(false);
  eyebrow(s, "A18  ·  For engineering", false);
  title(s, "What this needs to scale past the pilot.", false, { size: 26, h: 0.9 });

  const items = [
    ["Feature store", "Signals land in a shared feature store on the Element platform. Built to hand off, not to hoard."],
    ["Versioned scores", "Scores are versioned models with monitoring owned by data science. Product owns the semantics."],
    ["Config-driven arms", "Interventions are config-driven templates. A new arm is config, not code."],
    ["Launch criteria", "WCAG 2.2 AA and 44-language coverage as launch gates, with associate co-design panels every field cycle."]
  ];
  const cw7 = (W - 0.9) / 4;
  items.forEach((it, i) => {
    const x = M + i * (cw7 + 0.3);
    card(s, x, 2.1, cw7, 2.9, SURFACE, 0.12);
    s.addShape(pres.ShapeType.ellipse, {
      x: x + 0.26, y: 2.36, w: 0.5, h: 0.5, fill: { color: NAVY }, line: { color: NAVY, width: 0 }
    });
    s.addText(String(i + 1), {
      x: x + 0.26, y: 2.36, w: 0.5, h: 0.5,
      fontFace: H, fontSize: 15, bold: true, color: AMBER, align: "center", valign: "middle", margin: 0
    });
    s.addText(it[0], {
      x: x + 0.26, y: 3.0, w: cw7 - 0.52, h: 0.5,
      fontFace: H, fontSize: 16, bold: true, color: INK, valign: "top", margin: 0, lineSpacing: 19
    });
    s.addText(it[1], {
      x: x + 0.26, y: 3.56, w: cw7 - 0.52, h: 1.28,
      fontFace: B, fontSize: 11.5, color: INK, valign: "top", margin: 0, lineSpacing: 15
    });
  });
  footNote(s, "Accessibility and language coverage are launch criteria, not a later release. An associate app that only serves some associates is not shipped.", false);
  pageNum(s, false);
  s.addNotes("The handoff posture matters: product owns what a score means, data science owns how it is computed and monitored.");
}

/* A19 grounding facts */
{
  const s = newSlide(true);
  eyebrow(s, "A19  ·  Grounding facts", true);
  title(s, "Numbers this deck rests on.", true, { size: 28 });

  const facts = [
    ["~1.9M", "global associates"],
    ["~3M", "Sidekick questions a day"],
    ["310K", "promoted in two years"],
    ["50+", "Live Better U certificates, no cost"],
    ["$1B", "training investment by 2026"],
    ["90 to 30 min", "shift planning, already cut by agents"]
  ];
  const cw8 = (W - 0.6) / 3;
  facts.forEach((f, i) => {
    const x = M + (i % 3) * (cw8 + 0.3);
    const y = 2.15 + Math.floor(i / 3) * 1.62;
    statTile(s, x, y, cw8, 1.42, f[0], f[1], true);
  });

  s.addText("Context: a four-super-agent architecture (Sparky, Marty, Associate, Developer) with nano-agents beneath, a stated surgical agent philosophy from CTO Hari Vasudev, and a 5-year average US associate tenure.", {
    x: M, y: 5.62, w: W, h: 0.72,
    fontFace: B, fontSize: 12.5, color: "C9D4E6", valign: "top", margin: 0, lineSpacing: 17
  });
  footNote(s, "Independent candidate work product. Not affiliated with or endorsed by Walmart Inc. Financial models are illustrative with stated assumptions.", true);
  pageNum(s, true);
  s.addNotes("Every figure here is public or stated as illustrative. The sprint replaces the illustrative ones with measured internal data.");
}

/* ---------- write ---------- */
const out = path.join(__dirname, "..", "docs", "sidekick-90-day-decision-deck.pptx");
pres.writeFile({ fileName: out }).then(() => {
  console.log("wrote " + out + "  (" + slideNo + " slides)");
});
