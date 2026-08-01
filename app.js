/* ============================================================
   Sidekick Strategy Studio — app logic
   Vanilla JS, no dependencies. Hash routing so it works on
   GitHub Pages with zero configuration.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "sidekick-studio-custom-plans-v1";
  const THEME_KEY = "sidekick-studio-theme";

  /* ---------- tiny helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function lines(text) {
    return String(text || "").split("\n").map(s => s.trim()).filter(Boolean);
  }
  function slugify(name) {
    return String(name || "plan").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "plan";
  }

  /* ---------- custom plan storage ---------- */
  function loadCustomPlans() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(p => p && p.id && p.name) : [];
    } catch (e) { return []; }
  }
  function saveCustomPlans(plans) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(plans)); } catch (e) { /* private mode */ }
  }
  function allPlans() { return BUILTIN_PLANS.concat(loadCustomPlans()); }
  function getPlan(id) { return allPlans().find(p => p.id === id); }

  /* ---------- theme ---------- */
  function initTheme() {
    let stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
    $("#theme-toggle").addEventListener("click", () => {
      const root = document.documentElement;
      const current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------- mode chips ---------- */
  function modeChip(modeKey, count) {
    const mode = MODES.find(m => m.key === modeKey);
    const has = count > 0;
    return '<span class="mode-chip mode-' + modeKey + (has ? "" : " empty") + '" title="' + esc(mode.desc) + '">' +
      (has ? '<span class="mode-dot" aria-hidden="true"></span>' : "") +
      esc(mode.label) + (has ? " · " + count : " · none") + "</span>";
  }
  function modeChipRow(plan) {
    return '<div class="mode-chip-row">' +
      MODES.map(m => modeChip(m.key, (plan.modes && plan.modes[m.key] || []).length)).join("") +
      "</div>";
  }

  /* ---------- plan cards ---------- */
  function planCard(plan, opts) {
    opts = opts || {};
    const custom = !plan.builtIn && !BUILTIN_PLANS.some(b => b.id === plan.id);
    const letter = plan.letter || (custom ? "＋" : "?");
    let actions = '<a class="btn btn-primary" href="#/plans/' + esc(plan.id) + '">Open plan</a>';
    if (custom && opts.editable) {
      actions += ' <button class="btn btn-ghost" data-edit="' + esc(plan.id) + '">Edit</button>' +
        ' <button class="btn btn-ghost btn-danger" data-delete="' + esc(plan.id) + '">Delete</button>';
    }
    return '<article class="plan-card' + (custom ? " custom" : "") + '">' +
      (custom ? '<span class="custom-badge">Yours</span>' : "") +
      '<div class="plan-letter" aria-hidden="true">' + esc(letter) + "</div>" +
      "<h3>" + (custom ? "" : "Plan " + esc(letter) + " — ") + esc(plan.name) + "</h3>" +
      (plan.tagline ? '<p class="plan-tagline">' + esc(plan.tagline) + "</p>" : "") +
      '<p class="plan-thesis">' + esc(truncate(plan.thesis, 190)) + "</p>" +
      modeChipRow(plan) +
      (plan.northStar ? '<p class="plan-meta"><strong>North star:</strong> ' + esc(plan.northStar) + "</p>" : "") +
      '<div class="plan-card-actions">' + actions + "</div>" +
      "</article>";
  }
  function truncate(s, n) {
    s = String(s || "");
    return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : s;
  }

  function renderPlanGrids() {
    const grid = $("#plan-grid");
    if (grid) {
      grid.innerHTML = allPlans().map(p => planCard(p, { editable: true })).join("");
      $$("[data-delete]", grid).forEach(btn => btn.addEventListener("click", () => deletePlan(btn.getAttribute("data-delete"))));
      $$("[data-edit]", grid).forEach(btn => btn.addEventListener("click", () => {
        loadPlanIntoForm(getPlan(btn.getAttribute("data-edit")));
        location.hash = "#/builder";
      }));
    }
    const overview = $("#overview-plan-cards");
    if (overview) overview.innerHTML = BUILTIN_PLANS.map(p => planCard(p)).join("");
  }

  function deletePlan(id) {
    const plans = loadCustomPlans();
    const plan = plans.find(p => p.id === id);
    if (!plan) return;
    if (!confirm('Delete "' + plan.name + '"? This cannot be undone.')) return;
    saveCustomPlans(plans.filter(p => p.id !== id));
    renderPlanGrids();
    renderCoverageMatrix();
  }

  /* ---------- plan detail ---------- */
  function renderPlanDetail(id) {
    const view = $("#view-plan-detail");
    const plan = getPlan(id);
    if (!plan) {
      view.innerHTML = '<a class="back-link" href="#/plans">← All strategies</a><h1>Plan not found</h1>' +
        '<p class="section-sub">This plan may have been created in a different browser — custom plans live in local storage.</p>';
      return;
    }
    const custom = !BUILTIN_PLANS.some(b => b.id === plan.id);
    view.innerHTML =
      '<div class="detail-head">' +
        '<a class="back-link" href="#/plans">← All strategies</a>' +
        '<p class="eyebrow">' + (custom ? "Custom alternative" : "Pre-built strategic bet") + "</p>" +
        "<h1>" + (plan.letter && !custom ? "Plan " + esc(plan.letter) + " — " : "") + esc(plan.name) + "</h1>" +
        (plan.tagline ? '<p class="plan-tagline">' + esc(plan.tagline) + "</p>" : "") +
        (plan.thesis ? '<p class="detail-thesis"><strong>Thesis:</strong> ' + esc(plan.thesis) + "</p>" : "") +
      "</div>" +

      '<div class="section"><h2>30 / 60 / 90</h2><div class="phase-timeline">' +
        (plan.phases || []).map(ph =>
          '<div class="phase-card">' +
            '<div class="phase-range">' + esc(ph.range) + "</div>" +
            "<h3>" + esc(ph.focus || "") + "</h3>" +
            "<ul>" + (ph.deliverables || []).map(d => "<li>" + esc(d) + "</li>").join("") + "</ul>" +
          "</div>").join("") +
      "</div></div>" +

      '<div class="section"><h2>Experience coverage</h2>' +
        '<p class="section-sub">How this plan shows up across the three modes an associate actually experiences.</p>' +
        '<div class="mode-columns">' +
          MODES.map(m => {
            const items = (plan.modes && plan.modes[m.key]) || [];
            return '<div class="mode-col mode-' + m.key + '">' +
              '<h3><span class="mode-dot" aria-hidden="true"></span>' + esc(m.label) + "</h3>" +
              (items.length
                ? "<ul>" + items.map(i => "<li>" + esc(i) + "</li>").join("") + "</ul>"
                : '<p class="none">Not covered — a gap worth explaining.</p>') +
            "</div>";
          }).join("") +
        "</div></div>" +

      '<div class="section"><div class="detail-grid">' +
        '<div class="detail-card"><h3>North star</h3><p class="northstar-value">' + esc(plan.northStar || "—") + "</p></div>" +
        '<div class="detail-card"><h3>Supporting metrics</h3><ul>' +
          (plan.supporting || []).map(s => "<li>" + esc(s) + "</li>").join("") + "</ul></div>" +
        '<div class="detail-card"><h3>Risks</h3><ul>' +
          (plan.risks || []).map(r => "<li>" + esc(r) + "</li>").join("") + "</ul></div>" +
        '<div class="detail-card"><h3>Choose this if discovery shows…</h3><p style="font-size:0.9rem;color:var(--text-secondary)">' +
          esc(plan.chooseIf || "—") + "</p></div>" +
      "</div></div>" +

      (custom
        ? '<div class="add-plan-strip"><button class="btn btn-ghost" id="detail-edit">Edit this plan in the builder</button></div>'
        : "");

    const editBtn = $("#detail-edit");
    if (editBtn) editBtn.addEventListener("click", () => {
      loadPlanIntoForm(plan);
      location.hash = "#/builder";
    });
  }

  /* ---------- overview: discovery timeline ---------- */
  function renderDiscovery() {
    const track = $("#discovery-track");
    track.innerHTML = DISCOVERY_STEPS.map((s, i) =>
      '<button type="button" class="discovery-step" aria-expanded="false" data-i="' + i + '">' +
        '<span class="step-days">' + esc(s.days) + "</span>" +
        "<h3>" + (i + 1) + ". " + esc(s.title) + "</h3>" +
        "<p>" + esc(s.summary) + "</p>" +
        '<div class="step-detail"><p>' + esc(s.detail) + "</p>" +
        '<p class="step-question">Key question: ' + esc(s.question) + "</p></div>" +
      "</button>").join("");
    $$(".discovery-step", track).forEach(btn => {
      btn.addEventListener("click", () => {
        const open = btn.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  /* ---------- engine: inputs table ---------- */
  function renderInputsTable() {
    const tbody = $("#inputs-table tbody");
    tbody.innerHTML = DATA_INPUTS.map(r =>
      "<tr><td>" + esc(r.input) + "</td><td>" + esc(r.examples) + "</td>" +
      '<td><span class="cadence-chip">' + esc(r.cadence) + "</span></td></tr>").join("");
  }

  /* ---------- engine: cohort simulator ---------- */
  const simState = { tenure: "new", friction: 50, engagement: 50, retention: 50, growth: 50, trust: 50 };

  function renderSimSliders() {
    const wrap = $("#sim-sliders");
    wrap.innerHTML = SCORES.map(s =>
      '<div class="sim-slider">' +
        '<div class="slider-head"><label for="sim-' + s.key + '">' + esc(s.label) + "</label>" +
        '<output id="sim-' + s.key + '-out">' + simState[s.key] + "</output></div>" +
        '<p class="slider-desc">' + esc(s.desc) + "</p>" +
        '<input type="range" id="sim-' + s.key + '" min="0" max="100" value="' + simState[s.key] + '" data-score="' + s.key + '">' +
      "</div>").join("");
    $$("#sim-sliders input[type=range]").forEach(input => {
      input.addEventListener("input", () => {
        const key = input.getAttribute("data-score");
        simState[key] = Number(input.value);
        $("#sim-" + key + "-out").textContent = input.value;
        renderSimOutput();
      });
    });
    $("#sim-tenure").addEventListener("change", e => {
      simState.tenure = e.target.value;
      renderSimOutput();
    });
    $$(".sim-presets .chip-btn").forEach(btn => {
      btn.addEventListener("click", () => applyPreset(btn.getAttribute("data-preset")));
    });
  }

  function applyPreset(name) {
    const preset = SIM_PRESETS[name];
    if (!preset) return;
    Object.assign(simState, preset);
    $("#sim-tenure").value = preset.tenure;
    SCORES.forEach(s => {
      $("#sim-" + s.key).value = preset[s.key];
      $("#sim-" + s.key + "-out").textContent = preset[s.key];
    });
    $$(".sim-presets .chip-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-preset") === name));
    renderSimOutput();
  }

  function renderSimOutput() {
    const out = $("#sim-interventions");
    let fired = 0;
    out.innerHTML = INTERVENTIONS.map(iv => {
      const hit = iv.fires(simState);
      if (hit) fired++;
      return '<div class="intervention-card' + (hit ? "" : " dim") + '">' +
        "<h4>" + esc(iv.family) +
        (hit ? '<span class="fired-tag">selected</span>' : "") +
        '</h4>' +
        '<span class="trigger">Trigger: ' + esc(iv.pattern) + "</span>" +
        "<p>" + esc(iv.example) + "</p>" +
        '<div class="mode-chip-row">' + iv.modes.map(m => {
          const mode = MODES.find(x => x.key === m);
          return '<span class="mode-chip mode-' + m + '"><span class="mode-dot" aria-hidden="true"></span>' + esc(mode.label) + "</span>";
        }).join("") + "</div>" +
      "</div>";
    }).join("");
    $("#sim-empty").hidden = fired !== 0;
  }

  /* ---------- engine: guardrails ---------- */
  function renderGuardrails() {
    $("#guardrails").innerHTML = GUARDRAILS.map((g, i) =>
      '<div class="guardrail-card"><span class="guardrail-num">' + (i + 1) + "</span>" +
      "<h3>" + esc(g.title) + "</h3><p>" + esc(g.text) + "</p></div>").join("");
  }

  /* ---------- fit strips ("how this fits") ---------- */
  function renderFitStrips() {
    $$("[data-fit]").forEach(el => {
      const current = el.getAttribute("data-fit");
      el.innerHTML =
        '<div class="fit-strip">' +
          '<div class="fit-nodes">' +
            FRAMEWORK_MAP.map((n, i) =>
              (i ? '<span class="fit-arrow" aria-hidden="true">→</span>' : "") +
              '<a class="fit-node' + (n.key === current ? " current" : "") + '" href="' + n.href + '">' +
                "<strong>" + esc(n.label) + "</strong><small>" + esc(n.blurb) + "</small></a>"
            ).join("") +
          "</div>" +
          '<p class="fit-blurb">' + esc(FIT_BLURBS[current] || "") + "</p>" +
        "</div>";
    });
  }

  /* ---------- science panels ("behind the scenes") ---------- */
  function renderScience() {
    $$("[data-science]").forEach(el => {
      const s = SCIENCE[el.getAttribute("data-science")];
      if (!s) return;
      // Body strings are trusted framework copy from data.js (contain markup like <code>).
      el.innerHTML =
        '<details class="science">' +
          "<summary><span class=\"science-icon\" aria-hidden=\"true\">🔬</span>" + esc(s.title) +
          '<span class="science-hint">behind the scenes</span></summary>' +
          '<div class="science-body">' + s.body.map(p => "<p>" + p + "</p>").join("") + "</div>" +
        "</details>";
    });
  }

  /* ---------- roadmap: shared scoring ---------- */
  function scoredRoadmap() {
    const wM = Number($("#w-minutes").value);
    const wR = Number($("#w-retention").value);
    $("#w-minutes-out").textContent = wM + "%";
    $("#w-retention-out").textContent = wR + "%";
    const total = wM + wR || 1;
    const scored = ROADMAP_ITEMS.map(item => {
      const value = (item.minutes * (wM / total)) + (item.retention * (wR / total));
      const score = (value * (item.confidence / 100)) / item.cost;
      return Object.assign({ score }, item);
    }).sort((a, b) => b.score - a.score);
    scored.forEach((item, i) => { item.rank = i + 1; });
    return scored;
  }

  function renderRoadmap() {
    const scored = scoredRoadmap();
    renderRoadmapBars(scored);
    renderSwimlanes(scored);
  }

  function renderRoadmapBars(scored) {
    const max = scored[0].score || 1;
    $("#roadmap-chart").innerHTML = scored.map(item =>
      '<div class="roadmap-row" title="minutes ' + item.minutes + ' · retention ' + item.retention +
        ' · confidence ' + item.confidence + '% · cost ' + item.cost + '/5">' +
        '<div class="rr-label">' + esc(item.name) + "<small>" + esc(item.sub) + "</small></div>" +
        '<div class="rr-track"><div class="rr-bar" style="width:' + Math.max(3, (item.score / max) * 100) + '%"></div></div>' +
        '<div class="rr-val">' + item.score.toFixed(1) + "</div>" +
      "</div>").join("");
  }

  /* ---------- roadmap: journey swimlanes ---------- */
  function roadmapCard(item) {
    const top = item.rank <= 3;
    return '<div class="rm-card' + (top ? " top-pick" : "") + '" tabindex="0" ' +
      'title="minutes ' + item.minutes + ' · retention ' + item.retention +
      ' · confidence ' + item.confidence + '% · cost ' + item.cost + '/5 · rank #' + item.rank + '">' +
      '<div class="rm-card-head">' +
        '<span class="plan-dot" title="From Plan ' + esc(item.plan) + '">' + esc(item.plan) + "</span>" +
        "<strong>" + esc(item.name) + "</strong>" +
        (top ? '<span class="top-pick-dot" title="Top 3 by current weights">★</span>' : "") +
      "</div>" +
      "<small>" + esc(item.sub) + "</small>" +
      '<div class="rm-card-foot">' +
        '<span class="rm-modes">' + item.modes.map(m =>
          '<span class="mode-dot" style="background:var(--mode-' + m + ')" title="' +
          esc(MODES.find(x => x.key === m).label) + '"></span>').join("") + "</span>" +
        '<span class="rm-score">' + item.score.toFixed(1) + "</span>" +
      "</div>" +
    "</div>";
  }

  function renderSwimlanes(scored) {
    const byCell = {};
    scored.forEach(item => {
      const key = item.lane + "|" + item.horizon;
      (byCell[key] = byCell[key] || []).push(item);
    });
    $("#swimlanes").innerHTML =
      '<div class="sl-row sl-head">' +
        '<div class="sl-lane-label"></div>' +
        HORIZONS.map(h =>
          '<div class="sl-col-head"><strong>' + esc(h.label) + "</strong><small>" + esc(h.sub) + "</small></div>").join("") +
      "</div>" +
      JOURNEY_LANES.map(lane =>
        '<div class="sl-row' + (lane.key === "platform" ? " sl-platform" : "") + '">' +
          '<div class="sl-lane-label"><strong>' + esc(lane.label) + "</strong><small>" + esc(lane.desc) + "</small></div>" +
          HORIZONS.map(h => {
            const items = byCell[lane.key + "|" + h.key] || [];
            return '<div class="sl-cell">' +
              (items.length ? items.map(roadmapCard).join("") : '<span class="sl-empty">—</span>') +
            "</div>";
          }).join("") +
        "</div>").join("");
  }

  /* ---------- builder ---------- */
  let editingId = null;

  const FIELD_IDS = ["f-name", "f-tagline", "f-thesis", "f-chooseif",
    "f-p1-focus", "f-p1-deliv", "f-p2-focus", "f-p2-deliv", "f-p3-focus", "f-p3-deliv",
    "f-mode-proactive", "f-mode-reactive", "f-mode-conversational",
    "f-northstar", "f-supporting", "f-risks"];

  function formToPlan() {
    return {
      id: editingId || "custom-" + slugify($("#f-name").value) + "-" + Date.now().toString(36),
      letter: "✎",
      name: $("#f-name").value.trim() || "Untitled plan",
      tagline: $("#f-tagline").value.trim(),
      thesis: $("#f-thesis").value.trim(),
      chooseIf: $("#f-chooseif").value.trim(),
      northStar: $("#f-northstar").value.trim(),
      supporting: lines($("#f-supporting").value),
      risks: lines($("#f-risks").value),
      phases: [
        { range: "Days 1–30", focus: $("#f-p1-focus").value.trim(), deliverables: lines($("#f-p1-deliv").value) },
        { range: "Days 31–60", focus: $("#f-p2-focus").value.trim(), deliverables: lines($("#f-p2-deliv").value) },
        { range: "Days 61–90", focus: $("#f-p3-focus").value.trim(), deliverables: lines($("#f-p3-deliv").value) }
      ],
      modes: {
        proactive: lines($("#f-mode-proactive").value),
        reactive: lines($("#f-mode-reactive").value),
        conversational: lines($("#f-mode-conversational").value)
      }
    };
  }

  function loadPlanIntoForm(plan) {
    if (!plan) return;
    const isBuiltin = BUILTIN_PLANS.some(b => b.id === plan.id);
    editingId = isBuiltin ? null : plan.id; // cloning a built-in creates a new plan
    $("#f-name").value = isBuiltin ? plan.name + " (variant)" : plan.name;
    $("#f-tagline").value = plan.tagline || "";
    $("#f-thesis").value = plan.thesis || "";
    $("#f-chooseif").value = plan.chooseIf || "";
    const ph = plan.phases || [];
    $("#f-p1-focus").value = (ph[0] && ph[0].focus) || "";
    $("#f-p1-deliv").value = ((ph[0] && ph[0].deliverables) || []).join("\n");
    $("#f-p2-focus").value = (ph[1] && ph[1].focus) || "";
    $("#f-p2-deliv").value = ((ph[1] && ph[1].deliverables) || []).join("\n");
    $("#f-p3-focus").value = (ph[2] && ph[2].focus) || "";
    $("#f-p3-deliv").value = ((ph[2] && ph[2].deliverables) || []).join("\n");
    $("#f-mode-proactive").value = ((plan.modes || {}).proactive || []).join("\n");
    $("#f-mode-reactive").value = ((plan.modes || {}).reactive || []).join("\n");
    $("#f-mode-conversational").value = ((plan.modes || {}).conversational || []).join("\n");
    $("#f-northstar").value = plan.northStar || "";
    $("#f-supporting").value = (plan.supporting || []).join("\n");
    $("#f-risks").value = (plan.risks || []).join("\n");
    setStatus(isBuiltin ? "Cloned “" + plan.name + "” — saving creates a new plan." : "Editing “" + plan.name + "”.");
    renderBuilderPreview();
  }

  function clearForm() {
    editingId = null;
    FIELD_IDS.forEach(id => { $("#" + id).value = ""; });
    setStatus("");
    renderBuilderPreview();
  }

  function setStatus(msg) { $("#builder-status").textContent = msg; }

  function renderBuilderPreview() {
    const plan = formToPlan();
    $("#builder-preview-card").innerHTML = planCard(plan);
    // Neutralize the preview's "Open plan" link — the plan isn't saved yet.
    const link = $("#builder-preview-card a.btn");
    if (link) { link.removeAttribute("href"); link.setAttribute("aria-disabled", "true"); link.style.opacity = "0.5"; link.style.pointerEvents = "none"; }
    $("#builder-coverage-meter").innerHTML =
      '<h3 class="preview-title">Mode coverage check</h3>' +
      MODES.map(m => {
        const n = plan.modes[m.key].length;
        return '<div class="cm-row mode-' + m.key + '"><span class="mode-dot" aria-hidden="true"></span>' +
          esc(m.label) +
          '<span class="cm-status ' + (n ? "ok" : "missing") + '">' + (n ? n + " experience" + (n > 1 ? "s" : "") + " ✓" : "not covered") + "</span></div>";
      }).join("");
  }

  function savePlan(e) {
    e.preventDefault();
    const plan = formToPlan();
    if (!$("#f-name").value.trim()) { setStatus("Give the plan a name first."); return; }
    const missing = MODES.filter(m => plan.modes[m.key].length === 0).map(m => m.label);
    const plans = loadCustomPlans();
    const idx = plans.findIndex(p => p.id === plan.id);
    if (idx >= 0) plans[idx] = plan; else plans.push(plan);
    saveCustomPlans(plans);
    editingId = plan.id;
    renderPlanGrids();
    renderCoverageMatrix();
    setStatus("Saved. " + (missing.length
      ? "Heads-up: no " + missing.join(" or ") + " coverage yet — a complete strategy answers all three modes."
      : "All three experience modes covered — view it under Strategies."));
  }

  function exportPlan() {
    const plan = formToPlan();
    const blob = new Blob([JSON.stringify(plan, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = slugify(plan.name) + ".json";
    a.click();
    URL.revokeObjectURL(a.href);
    setStatus("Exported “" + plan.name + "” as JSON — import it on any device.");
  }

  function importPlan(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const plan = JSON.parse(reader.result);
        if (!plan || typeof plan !== "object" || !plan.name) throw new Error("bad shape");
        plan.id = "custom-" + slugify(plan.name) + "-" + Date.now().toString(36);
        loadPlanIntoForm(plan);
        editingId = plan.id;
        setStatus("Imported “" + plan.name + "” — review and save.");
      } catch (err) {
        setStatus("Could not import that file — expected a plan JSON exported from this studio.");
      }
    };
    reader.readAsText(file);
  }

  function initBuilder() {
    $$("#builder-start [data-template]").forEach(btn => {
      btn.addEventListener("click", () => {
        const t = btn.getAttribute("data-template");
        if (t === "blank") { clearForm(); setStatus("Blank canvas — the framework holds the shape, you bring the bet."); }
        else loadPlanIntoForm(BUILTIN_PLANS.find(p => p.id === t));
      });
    });
    $("#builder-form").addEventListener("submit", savePlan);
    $("#builder-form").addEventListener("input", renderBuilderPreview);
    $("#export-plan-btn").addEventListener("click", exportPlan);
    $("#reset-form-btn").addEventListener("click", clearForm);
    $("#import-btn").addEventListener("click", () => $("#import-file").click());
    $("#import-file").addEventListener("change", e => {
      if (e.target.files && e.target.files[0]) importPlan(e.target.files[0]);
      e.target.value = "";
    });
    renderBuilderPreview();
  }

  /* ---------- coverage matrix ---------- */
  function renderCoverageMatrix() {
    const wrap = $("#coverage-matrix");
    const plans = allPlans();
    wrap.innerHTML =
      '<table class="coverage-table">' +
        "<thead><tr><th>Plan</th>" +
        MODES.map(m => '<th><span class="mode-dot mode-' + m.key + '" style="background:var(--mode-' + m.key + ')" aria-hidden="true"></span>' + esc(m.label) + "</th>").join("") +
        "</tr></thead><tbody>" +
        plans.map(p => {
          const custom = !BUILTIN_PLANS.some(b => b.id === p.id);
          return "<tr>" +
            '<td class="plan-cell"><a href="#/plans/' + esc(p.id) + '">' +
              (custom ? "✎ " : "Plan " + esc(p.letter) + " — ") + esc(p.name) + "</a>" +
              (p.tagline ? "<small>" + esc(p.tagline) + "</small>" : "") + "</td>" +
            MODES.map(m => {
              const items = (p.modes && p.modes[m.key]) || [];
              return "<td>" + (items.length
                ? "<ul>" + items.map(i => "<li>" + esc(i) + "</li>").join("") + "</ul>"
                : '<span class="gap">No coverage — gap</span>') + "</td>";
            }).join("") +
          "</tr>";
        }).join("") +
      "</tbody></table>";
  }

  /* ---------- routing ---------- */
  const VIEWS = ["overview", "plans", "engine", "roadmap", "builder", "coverage"];

  function route() {
    const hash = location.hash || "#/overview";
    const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    let view = parts[0] || "overview";
    const planId = view === "plans" && parts[1] ? decodeURIComponent(parts[1]) : null;

    if (!VIEWS.includes(view)) view = "overview";

    $$(".view").forEach(v => { v.hidden = true; });
    if (planId) {
      renderPlanDetail(planId);
      $("#view-plan-detail").hidden = false;
    } else {
      $("#view-" + view).hidden = false;
      if (view === "plans") renderPlanGrids();
      if (view === "coverage") renderCoverageMatrix();
    }
    $$(".site-nav a").forEach(a => a.classList.toggle("active", a.getAttribute("data-route") === view));
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderFitStrips();
    renderScience();
    renderDiscovery();
    renderPlanGrids();
    renderInputsTable();
    renderSimSliders();
    renderSimOutput();
    renderGuardrails();
    renderRoadmap();
    $("#w-minutes").addEventListener("input", renderRoadmap);
    $("#w-retention").addEventListener("input", renderRoadmap);
    initBuilder();
    renderCoverageMatrix();
    window.addEventListener("hashchange", route);
    route();
  });
})();
