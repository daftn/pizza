// Renders the calculator, ingredient tables and method placeholders for a recipe page.
// Data comes from the page's front matter via <script id="recipe-data">.
(function () {
  const data = JSON.parse(document.getElementById("recipe-data").textContent);
  const doughGroups = data.dough || [];
  const toppingGroups = data.toppings || [];
  const yieldInfo = data.yield || {};
  const scaleMode = data.scale === "batch" ? "batch" : "balls";

  const calcEl = document.getElementById("calculator");
  const ingredientsEl = document.getElementById("ingredients");
  const methodEl = document.getElementById("method");
  const methodTemplate = methodEl.innerHTML;

  const unit = yieldInfo.unit || (doughGroups.length ? "dough ball" : "pizza");
  const units = yieldInfo.units || unit + "s";

  // --- Reference batch (exactly as written in the front matter) ---

  const doughItems = doughGroups.flatMap((g) => g.items || []);
  const realItems = doughItems.filter((i) => !i.stage);
  const sum = (arr, f) => arr.reduce((t, x) => t + (f(x) || 0), 0);

  const refTotal = sum(realItems, (i) => i.g);
  const refFlour = sum(realItems.filter((i) => i.flour), (i) => i.g);
  const refWater = sum(realItems.filter((i) => i.water), (i) => i.g);
  const refCount = yieldInfo.count || 1;
  const refWeight = yieldInfo.weight || (refTotal ? refTotal / refCount : 0);
  // Dough written beyond count × weight is a bowl-loss buffer; it scales along with the batch but isn't shown.
  const defaultCount = yieldInfo.default_count || refCount;
  const defaultWeight = yieldInfo.default_weight || refWeight;
  // Optional `yield.sizes` ({ inches: grams per ball }) for size buttons and the "Makes" size.
  const sizes = Object.entries(yieldInfo.sizes || {})
    .map(([inches, g]) => ({ inches: parseFloat(inches), g }))
    .filter((s) => s.inches > 0 && s.g > 0)
    .sort((a, b) => a.g - b.g);

  // --- State, seeded from the URL so a batch can be shared ---

  const params = new URLSearchParams(location.search);
  const num = (v, fallback) => {
    const n = parseFloat(v);
    return isFinite(n) && n > 0 ? n : fallback;
  };
  // Pizza pages (toppings only) have no calculator: amounts are for one pizza.
  const state = {
    count: doughGroups.length ? num(params.get("count"), defaultCount) : defaultCount,
    weight: num(params.get("weight"), defaultWeight),
    mult: num(params.get("x"), 1),
  };

  function factors() {
    if (scaleMode === "batch") {
      return { dough: state.mult, pizzas: refCount * state.mult };
    }
    return {
      dough: refTotal ? (state.count * state.weight) / (refCount * refWeight) : 0,
      pizzas: state.count,
    };
  }

  // --- Formatting ---

  function fmt(n) {
    if (!isFinite(n)) return "?";
    const dp = n < 1 ? 2 : n < 100 ? 1 : 0;
    return String(parseFloat(n.toFixed(dp)));
  }
  const grams = (n) => fmt(n) + "g";
  const pct = (n) => fmt(n) + "%";

  function qtyText(item, times) {
    if (item.qty == null) return item.text || "";
    const u = item.unit === "g" ? "g" : item.unit ? " " + item.unit : "";
    const q = Array.isArray(item.qty)
      ? item.qty.map((v) => fmt(v * times)).join("–")
      : fmt(item.qty * times);
    return q + u;
  }

  // Total grams of a topping group per pizza, only when every required item is a plain gram weight.
  function toppingGroupGrams(group) {
    const required = (group.items || []).filter((i) => !i.optional);
    const plain = required.every((i) => i.unit === "g" && typeof i.qty === "number");
    return plain && required.length ? sum(required, (i) => i.qty) : null;
  }

  // Weight of a dough group, including any earlier stages folded into it (e.g. poolish into final dough).
  const stageGrams = (name, f, seen = new Set()) => {
    const g = doughGroups.find((x) => x.name === name);
    if (!g || seen.has(name)) return NaN;
    seen.add(name);
    return sum(g.items || [], (i) => (i.stage ? stageGrams(i.stage, f, seen) : i.g * f));
  };

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // Pizza diameter for a ball weight, from `sizes`. Diameter grows with √weight, so interpolate on that
  // between the two nearest sizes (or scale from the end one). Returns { inches, exact }.
  function sizeFor(weight) {
    const hit = sizes.find((s) => Math.abs(weight - s.g) <= s.g * 0.02);
    if (hit) return { inches: hit.inches, exact: true };
    const i = sizes.findIndex((s) => s.g > weight);
    let inches;
    if (i > 0) {
      const a = sizes[i - 1], b = sizes[i];
      inches = a.inches + ((b.inches - a.inches) * (Math.sqrt(weight) - Math.sqrt(a.g))) / (Math.sqrt(b.g) - Math.sqrt(a.g));
    } else {
      const end = i === 0 ? sizes[0] : sizes[sizes.length - 1];
      inches = end.inches * Math.sqrt(weight / end.g);
    }
    return { inches: Math.round(inches * 2) / 2, exact: false };
  }

  // --- Calculator ---

  function renderCalculator() {
    if (!doughGroups.length) return;
    let inputs;
    if (scaleMode === "batch") {
      inputs = `
        <label class="field"><span>Batches</span>
          <input type="number" inputmode="decimal" min="0.25" step="0.25" data-key="mult" value="${fmt(state.mult)}">
        </label>`;
    } else {
      inputs = `
        <label class="field"><span>${esc(units)}</span>
          <input type="number" inputmode="numeric" min="1" step="1" data-key="count" value="${fmt(state.count)}">
        </label>
        <span class="times" aria-hidden="true">×</span>
        <label class="field"><span>Grams each</span>
          <input type="number" inputmode="decimal" min="1" step="1" data-key="weight" value="${fmt(state.weight)}">
        </label>`;
    }
    calcEl.innerHTML = `
      <div class="calc-inputs">${inputs}
        <button type="button" class="reset">Reset</button>
      </div>
      ${sizes.length && scaleMode !== "batch" ? `<div class="calc-sizes"><span>Size</span>${sizes
        .map((s) => `<button type="button" data-g="${s.g}">${fmt(s.inches)}″<small>${grams(s.g)}</small></button>`)
        .join("")}</div>` : ""}
      <div class="calc-stats"></div>`;

    calcEl.querySelectorAll(".calc-sizes button").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.weight = parseFloat(btn.dataset.g);
        calcEl.querySelector('input[data-key="weight"]').value = fmt(state.weight);
        update();
      });
    });
    calcEl.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => {
        const v = parseFloat(input.value);
        if (isFinite(v) && v > 0) {
          state[input.dataset.key] = v;
          update();
        }
      });
    });
    calcEl.querySelector(".reset").addEventListener("click", () => {
      Object.assign(state, { count: defaultCount, weight: defaultWeight, mult: 1 });
      renderCalculator();
      update();
    });
  }

  function renderStats(f) {
    const stats = [];
    if (doughGroups.length) {
      stats.push(["Total dough", grams(refTotal * f.dough)]);
      if (scaleMode === "batch") stats.push([units, fmt(f.pizzas)]);
      if (refWater && refFlour) stats.push(["Hydration", pct((refWater / refFlour) * 100)]);
    }
    if (sizes.length && scaleMode !== "batch") {
      const s = sizeFor(state.weight);
      stats.push(["Makes", `${fmt(f.pizzas)} × ${s.exact ? "" : "~"}${fmt(s.inches)}-inch ${esc(yieldInfo.size_noun || "pies")}`]);
    } else if (yieldInfo.label) stats.push(["Makes", `${fmt(f.pizzas)} × ${esc(yieldInfo.label)}`]);
    calcEl.querySelectorAll(".calc-sizes button").forEach((btn) => {
      btn.classList.toggle("active", Math.abs(parseFloat(btn.dataset.g) - state.weight) < 0.5);
    });
    if (yieldInfo.cut) stats.push(["Cut", esc(yieldInfo.cut)]);
    const el = calcEl.querySelector(".calc-stats");
    if (el) el.innerHTML = stats.map(([k, v]) => `<div class="stat"><span>${esc(k)}</span><strong>${v}</strong></div>`).join("");
  }

  // --- Tables ---

  function doughTable(group, f) {
    const rows = (group.items || []).map((i) => {
      if (i.stage) {
        return `<tr class="stage-ref"><td>${esc(i.name || i.stage)}<small>All of it</small></td><td class="num">${grams(stageGrams(i.stage, f))}</td><td class="num"></td></tr>`;
      }
      const bp = refFlour ? pct((i.g / refFlour) * 100) : "";
      return `<tr><td>${esc(i.name)}${i.note ? `<small>${esc(i.note)}</small>` : ""}</td><td class="num">${grams(i.g * f)}</td><td class="num muted">${bp}</td></tr>`;
    });
    return `
      <div class="group">
        <div class="group-head"><h3>${esc(group.name)}</h3>${doughGroups.length > 1 ? `<span>${grams(stageGrams(group.name, f))}</span>` : ""}</div>
        ${group.note ? `<p class="group-note">${esc(group.note)}</p>` : ""}
        <table><thead><tr><th>Ingredient</th><th class="num">Weight</th><th class="num">Baker's %</th></tr></thead><tbody>${rows.join("")}</tbody></table>
      </div>`;
  }

  // `per_batch: true` groups (e.g. a sauce made by the can) don't multiply by the pizza count.
  const perLabel = (group) => (group.per_batch ? "batch" : yieldInfo.unit || "pizza");

  function toppingTable(group, pizzas) {
    const showTotal = !group.per_batch && pizzas !== 1;
    const rows = (group.items || []).map((i) => {
      const total = i.qty == null ? `<td class="num muted">—</td>` : `<td class="num">${esc(qtyText(i, pizzas))}</td>`;
      return `<tr class="${i.optional ? "optional" : ""}"><td>${esc(i.name)}${i.optional ? ' <em class="tag">optional</em>' : ""}${i.note ? `<small>${esc(i.note)}</small>` : ""}</td><td class="num">${esc(qtyText(i, 1))}</td>${showTotal ? total : ""}</tr>`;
    });
    const g = toppingGroupGrams(group);
    return `
      <div class="group">
        <div class="group-head"><h3>${esc(group.name)}</h3>${g ? `<span>${grams(g)} per ${esc(perLabel(group))}</span>` : ""}</div>
        ${group.note ? `<p class="group-note">${esc(group.note)}</p>` : ""}
        <table><thead><tr><th>Item</th><th class="num">Per ${esc(perLabel(group))}</th>${showTotal ? `<th class="num">All ${fmt(pizzas)}</th>` : ""}</tr></thead><tbody>${rows.join("")}</tbody></table>
      </div>`;
  }

  // --- Method placeholders: [[id]], [[count]], [[weight]], [[total]], [[group:Name]], [[table:Name]] ---

  function tokenValue(key, f) {
    if (key === "count") return fmt(scaleMode === "batch" ? f.pizzas : state.count);
    if (key === "weight") return grams(scaleMode === "batch" ? refWeight * f.dough : state.weight);
    if (key === "total") return grams(refTotal * f.dough);
    if (key.startsWith("group:")) {
      const name = key.slice(6).trim();
      if (doughGroups.some((g) => g.name === name)) return grams(stageGrams(name, f.dough));
      const tg = toppingGroups.find((g) => g.name === name);
      const tgGrams = tg && toppingGroupGrams(tg);
      return tgGrams ? grams(tgGrams) : null;
    }
    const d = realItems.find((i) => i.id === key);
    if (d) return grams(d.g * f.dough);
    const t = toppingGroups.flatMap((g) => g.items || []).find((i) => i.id === key);
    if (t) return qtyText(t, 1) || null;
    return null;
  }

  // For topping placeholders, the "Per …" label they don't scale past; null for anything the calculator scales.
  function fixedLabel(key) {
    let group;
    if (key.startsWith("group:")) group = toppingGroups.find((g) => g.name === key.slice(6).trim());
    else if (!realItems.some((i) => i.id === key)) group = toppingGroups.find((g) => (g.items || []).some((i) => i.id === key));
    return group ? "Per " + perLabel(group) : null;
  }

  function renderMethod(f) {
    const placed = new Set();
    let html = methodTemplate.replace(/<p>\s*\[\[table:([^\]]+)\]\]\s*<\/p>/g, (m, rawName) => {
      const name = rawName.trim();
      const dg = doughGroups.find((g) => g.name === name);
      const tg = toppingGroups.find((g) => g.name === name);
      if (!dg && !tg) return `<p class="token-missing">Unknown table: ${esc(name)}</p>`;
      placed.add(name);
      return dg ? doughTable(dg, f.dough) : toppingTable(tg, f.pizzas);
    });
    // Leave placeholders inside <code> alone so they can be documented literally.
    html = html
      .split(/(<code>[\s\S]*?<\/code>)/)
      .map((part, i) =>
        i % 2
          ? part
          : part.replace(/\[\[([^\]]+)\]\]/g, (m, rawKey) => {
              const key = rawKey.trim();
              const v = tokenValue(key, f);
              if (v == null) return `<span class="token-missing" title="No ingredient with this id">${esc(rawKey)}</span>`;
              // Topping amounts are per pizza and don't move with the calculator, so style them apart.
              const fixed = fixedLabel(key);
              return fixed
                ? `<span class="qty-fixed" title="${esc(fixed)}">${esc(v)}</span>`
                : `<span class="qty">${esc(v)}</span>`;
            })
      )
      .join("");
    methodEl.innerHTML = html;
    return placed;
  }

  // --- Update loop ---

  function update() {
    const f = factors();
    renderStats(f);
    const placed = renderMethod(f);
    ingredientsEl.innerHTML =
      doughGroups.filter((g) => !placed.has(g.name)).map((g) => doughTable(g, f.dough)).join("") +
      toppingGroups.filter((g) => !placed.has(g.name)).map((g) => toppingTable(g, f.pizzas)).join("");

    const next = new URLSearchParams();
    if (scaleMode === "batch") {
      if (state.mult !== 1) next.set("x", fmt(state.mult));
    } else {
      if (state.count !== defaultCount) next.set("count", fmt(state.count));
      if (state.weight !== defaultWeight) next.set("weight", fmt(state.weight));
    }
    const qs = next.toString();
    history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
  }

  if (doughGroups.length && !refFlour) console.warn("recipe: no dough item is marked flour: true");

  renderCalculator();
  update();
})();
