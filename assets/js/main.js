/* ============================================================
   CONTENT — edit these arrays to personalise the site.
   Keep PROJECTS statuses honest: the site counters are computed from them.
   ============================================================ */
const REPO = "https://github.com/midhun-das-l/technical-portfolio/tree/main/";

// Tools used (or being learned) across the projects in this repo.
// Only list a tool here once a project in the repo actually uses it.
const SKILLS = [
  { title: "DATA ENGINEERING", accent: "#00f0ff",
    note: "SQL analytics · lakehouse pipelines · warehousing",
    tags: ["SQL", "DuckDB", "PostgreSQL", "PySpark", "Databricks", "Delta Lake", "Snowflake"] },
  { title: "DATA SCIENCE", accent: "#f9f002",
    note: "EDA · hypothesis testing · feature pipelines",
    tags: ["Python", "Pandas", "NumPy", "SciPy", "Statsmodels", "Plotly", "Jupyter"] },
  { title: "MACHINE LEARNING", accent: "#ff2a6d",
    note: "tabular models · NLP · computer vision",
    tags: ["scikit-learn", "XGBoost", "SHAP", "PyTorch", "Hugging Face", "YOLO"] },
  { title: "MLOPS", accent: "#b026ff",
    note: "serving · containers · monitoring",
    tags: ["FastAPI", "Docker", "Kubernetes", "Helm", "MLflow", "Evidently", "GitHub Actions"] },
  { title: "GENERATIVE AI", accent: "#00f0ff",
    note: "RAG · knowledge graphs · agents · evaluation",
    tags: ["LangChain", "LangGraph", "Neo4j", "Vector DBs", "RAGAS", "Gradio"] },
  { title: "SYSTEM ARCHITECTURE", accent: "#ff2a6d",
    note: "design docs for the systems built here",
    tags: ["Mermaid", "ADRs", "Cloud design", "Observability"] },
];

// status: "shipped" | "progress" | "planned"
// Update a project's status (and description) as soon as real work lands.
const PROJECTS = [
  // Track A: one dataset (Olist e-commerce), raw data → monitored model
  { cat: "Data-Engineering", status: "progress", path: "Data-Engineering/SQL/olist-ecommerce-analytics", title: "Olist E-commerce SQL Analytics", desc: "Real Brazilian e-commerce data (100k orders, 9 tables) loaded into DuckDB, typed staging layer, data-quality checks and business analysis in SQL." },
  { cat: "Data-Engineering", status: "planned", path: "Data-Engineering/Databricks", title: "Olist Lakehouse Pipeline", desc: "Bronze → Silver → Gold Delta Lake pipeline on Databricks for the same Olist data." },
  { cat: "Data-Engineering", status: "planned", path: "Data-Engineering/Snowflake", title: "Olist Snowflake Warehouse", desc: "Gold layer modelled in Snowflake with a Snowpark transform and cost notes." },
  { cat: "Data-Science", status: "planned", path: "Data-Science/EDA", title: "Olist Exploratory Analysis", desc: "Exploratory analysis of the Gold tables, written up as findings." },
  { cat: "Data-Science", status: "planned", path: "Data-Science/Statistical-Analysis", title: "Does Late Delivery Hurt Reviews?", desc: "Hypothesis test on delivery delay vs review score, with effect size and caveats." },
  { cat: "Data-Science", status: "planned", path: "Data-Science/Feature-Engineering", title: "Leakage-safe Churn Features", desc: "Point-in-time feature pipeline for predicting repeat purchase." },
  { cat: "Machine-Learning", status: "planned", path: "Machine-Learning/Predictive-Analytics", title: "Repeat-purchase Model", desc: "Churn / repeat-purchase model evaluated against a baseline, explained with SHAP." },
  { cat: "MLOps", status: "planned", path: "MLOps/Model-Deployment", title: "Model Serving API", desc: "FastAPI + Docker service for the Olist model, deployed with a public URL." },
  { cat: "MLOps", status: "planned", path: "MLOps/Docker-Kubernetes", title: "Serving on Kubernetes", desc: "The same service on a local kind cluster, packaged with Helm." },
  { cat: "MLOps", status: "planned", path: "MLOps/Model-Monitoring", title: "Drift Monitoring", desc: "Evidently drift reports and a retraining trigger for the deployed model." },
  // Track B: one public document set, RAG → GraphRAG → agent → app
  { cat: "Generative-AI", status: "planned", path: "Generative-AI/RAG", title: "Document Q&A with Evaluation", desc: "Hybrid-search RAG with citations, scored against a 50-question evaluation set." },
  { cat: "Generative-AI", status: "planned", path: "Generative-AI/GraphRAG", title: "GraphRAG vs RAG", desc: "Knowledge graph over the same documents, compared with plain RAG on multi-step questions." },
  { cat: "Generative-AI", status: "planned", path: "Generative-AI/AI-Agents", title: "Research Agent", desc: "LangGraph agent using the RAG system as a tool, with logged traces and failure analysis." },
  { cat: "Generative-AI", status: "planned", path: "Generative-AI/LLM-Applications", title: "Q&A Demo App", desc: "Public Gradio / Streamlit front end over the RAG and agent." },
  // Standalone
  { cat: "Machine-Learning", status: "planned", path: "Machine-Learning/NLP", title: "Banking77 Intent Classifier", desc: "Fine-tuned DistilBERT vs a TF-IDF baseline on 77 real banking intents." },
  { cat: "Machine-Learning", status: "planned", path: "Machine-Learning/Computer-Vision", title: "Steel Surface Defect Detection", desc: "YOLO on the NEU surface-defect dataset, with error analysis." },
  { cat: "System-Architecture", status: "planned", path: "System-Architecture", title: "Architecture Docs", desc: "Design docs and diagrams for the systems actually built above." },
];

const ROADMAP = [
  { when: "PHASE 1", status: "progress", title: "Track A: data & modelling", desc: "SQL analytics → Databricks → Snowflake → EDA → statistics → features → model, all on the Olist dataset." },
  { when: "PHASE 2", status: "planned", title: "Track A: production", desc: "Deploy the model as an API, run it on Kubernetes, add drift monitoring." },
  { when: "PHASE 3", status: "planned", title: "Track B: generative AI", desc: "RAG with evaluation → GraphRAG comparison → agent → public demo app." },
  { when: "PHASE 4", status: "planned", title: "NLP, vision & architecture", desc: "Banking77 and NEU defect projects, then design docs for everything built." },
];

const STATUS_LABEL = { shipped: "shipped", progress: "in progress", planned: "planned" };

const TERMINAL = [
  ["p", "$ "], ["k", "whoami"], ["", "\n"],
  ["", "Midhun Das — data & AI engineer.\n"],
  ["p", "$ "], ["k", "cat focus.txt"], ["", "\n"],
  ["s", "[Data]"], ["", "  SQL · Databricks · Snowflake\n"],
  ["s", "[ML]"], ["", "    Data Science · ML · MLOps\n"],
  ["s", "[GenAI]"], ["", " RAG · GraphRAG · AI Agents\n"],
  ["p", "$ "], ["k", "git log --oneline -1"], ["", "\n"],
  ["", "> building in public, one real project at a time_"],
];

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);

// Skills
$("#skills-grid").innerHTML = SKILLS.map(s => `
  <div class="skill-card reveal" style="--accent:${s.accent}">
    <h4>▸ ${s.title}</h4>
    <p class="note">${s.note}</p>
    <div class="tags">${s.tags.map(t => `<span>${t}</span>`).join("")}</div>
  </div>`).join("");

// Projects + filters
const cats = ["ALL", ...new Set(PROJECTS.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) =>
  `<button class="${i === 0 ? "active" : ""}" data-cat="${c}">${c.toLowerCase()}</button>`).join("");
const ORDER = { shipped: 0, progress: 1, planned: 2 };
$("#cards").innerHTML = [...PROJECTS].sort((a, b) => ORDER[a.status] - ORDER[b.status]).map(p => `
  <article class="card reveal" data-cat="${p.cat}">
    <div class="card-head"><span class="path">~/${p.path}</span><span class="status status-${p.status}">${STATUS_LABEL[p.status]}</span></div>
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
    <a href="${REPO}${p.path}" target="_blank" rel="noopener">&gt; ${p.status === "planned" ? "view_plan" : "access_repo"} →</a>
  </article>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("active", x === b));
  document.querySelectorAll(".card").forEach(c =>
    c.classList.toggle("hidden", b.dataset.cat !== "ALL" && c.dataset.cat !== b.dataset.cat));
});

// Roadmap
$("#roadmap-list").innerHTML = ROADMAP.map(r => `
  <li class="rm-${r.status}">
    <time>${r.when} · <span class="status status-${r.status}">${STATUS_LABEL[r.status]}</span></time>
    <h4>${r.title}</h4>
    <p>${r.desc}</p>
  </li>`).join("");

// Stats are computed from PROJECTS, so they can never drift from reality
const count = st => PROJECTS.filter(p => p.status === st).length;
$("#stat-shipped").dataset.count = count("shipped");
$("#stat-progress").dataset.count = count("progress");
$("#stat-planned").dataset.count = count("planned");
$("#stat-domains").dataset.count = new Set(PROJECTS.map(p => p.cat)).size;

// Terminal typing
(function type() {
  const el = $("#typed");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cursor = '<span class="cursor">&nbsp;</span>';
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const render = (n) => {
    let left = n, html = "";
    for (const [cls, txt] of TERMINAL) {
      if (left <= 0) break;
      const part = esc(txt.slice(0, left)); left -= txt.length;
      html += cls ? `<span class="${cls}">${part}</span>` : part;
    }
    el.innerHTML = html + cursor;
  };
  const total = TERMINAL.reduce((a, [, t]) => a + t.length, 0);
  if (reduce) return render(total);
  let i = 0;
  const tick = () => { render(++i); if (i < total) setTimeout(tick, 18 + Math.random() * 30); };
  setTimeout(tick, 500);
})();

// Reveal on scroll, skill bars, counters
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const t = e.target;
  t.classList.add("visible");
    t.querySelectorAll("[data-count]").forEach(n => {
    const end = +n.dataset.count; let v = 0;
    n.textContent = 0;
    const step = () => { if (v >= end) return; n.textContent = ++v; requestAnimationFrame(step); };
    step();
  });
  io.unobserve(t);
}), { threshold: 0, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".section-title, .panel, .stats, .timeline li").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Mobile nav
const toggle = $(".nav-toggle"), nav = $(".nav nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("open"); });

$("#year").textContent = new Date().getFullYear();

// Digital rain background
(function rain() {
  const c = $("#rain"), ctx = c.getContext("2d");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const chars = "アイウエオカキクケコサシスセソ01<>/{}[]=+*AIMLRAG";
  let cols, drops, fs = 16;
  const resize = () => {
    c.width = innerWidth; c.height = innerHeight;
    cols = Math.floor(c.width / fs); drops = Array(cols).fill(0).map(() => Math.random() * -50);
  };
  resize(); addEventListener("resize", resize);
  setInterval(() => {
    ctx.fillStyle = "rgba(7,7,13,0.08)"; ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = fs + "px monospace";
    drops.forEach((y, i) => {
      ctx.fillStyle = Math.random() > 0.97 ? "#ff2a6d" : "#00f0ff";
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
      drops[i] = y * fs > c.height && Math.random() > 0.975 ? 0 : y + 1;
    });
  }, 55);
})();
