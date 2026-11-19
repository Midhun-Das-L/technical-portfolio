/* ============================================================
   CONTENT — edit these arrays to personalise the site.
   Everything marked PLACEHOLDER should be replaced.
   ============================================================ */
const REPO = "https://github.com/midhun-das-l/technical-portfolio/tree/main/";

const SKILLS = [
  { title: "GENERATIVE AI", accent: "#00f0ff",
    bars: [["LLM Applications", 92], ["RAG / GraphRAG", 90], ["AI Agents", 85]],
    tags: ["LangChain", "LlamaIndex", "LangGraph", "OpenAI", "Claude", "Hugging Face", "Vector DBs"] },
  { title: "MACHINE LEARNING", accent: "#ff2a6d",
    bars: [["NLP", 88], ["Computer Vision", 78], ["Predictive Analytics", 86]],
    tags: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "spaCy", "OpenCV"] },
  { title: "DATA SCIENCE", accent: "#f9f002",
    bars: [["EDA & Visualisation", 90], ["Statistics", 84], ["Feature Engineering", 88]],
    tags: ["Pandas", "NumPy", "SciPy", "Statsmodels", "Plotly", "Jupyter"] },
  { title: "MLOPS", accent: "#b026ff",
    bars: [["Model Deployment", 85], ["Docker / Kubernetes", 80], ["Monitoring", 78]],
    tags: ["FastAPI", "Docker", "Kubernetes", "MLflow", "GitHub Actions", "Prometheus"] },
  { title: "DATA ENGINEERING", accent: "#00f0ff",
    bars: [["SQL", 92], ["Databricks / Spark", 84], ["Snowflake", 82]],
    tags: ["PySpark", "Delta Lake", "Airflow", "dbt", "Snowpark", "AWS / Azure"] },
  { title: "SYSTEM ARCHITECTURE", accent: "#ff2a6d",
    bars: [["AI Platform Design", 82], ["Scalability", 78], ["Cloud Architecture", 80]],
    tags: ["Microservices", "Event-driven", "Caching", "Observability", "Security"] },
];

// PLACEHOLDER projects — one per folder in the repo
const PROJECTS = [
  { cat: "Generative-AI", path: "Generative-AI/RAG", title: "Enterprise Document Q&A", desc: "Hybrid search RAG over internal docs with re-ranking, citations and an evaluation harness." },
  { cat: "Generative-AI", path: "Generative-AI/GraphRAG", title: "Knowledge Graph Navigator", desc: "Entity & relation extraction into a graph store, powering multi-hop reasoning over documents." },
  { cat: "Generative-AI", path: "Generative-AI/LLM-Applications", title: "Contract Intelligence Assistant", desc: "Structured extraction and summarisation of legal contracts with guardrails and human review." },
  { cat: "Generative-AI", path: "Generative-AI/AI-Agents", title: "Autonomous Research Agent", desc: "Tool-using multi-agent workflow that plans, searches, analyses and writes reports." },
  { cat: "Machine-Learning", path: "Machine-Learning/NLP", title: "Customer Intent Classifier", desc: "Fine-tuned transformer routing support tickets across 40+ intents in real time." },
  { cat: "Machine-Learning", path: "Machine-Learning/Computer-Vision", title: "Defect Detection Vision", desc: "Object detection model identifying manufacturing defects from production-line images." },
  { cat: "Machine-Learning", path: "Machine-Learning/Predictive-Analytics", title: "Churn & Demand Forecasting", desc: "Gradient-boosted and time-series models predicting churn risk and weekly demand." },
  { cat: "Data-Science", path: "Data-Science/EDA", title: "Retail Sales EDA", desc: "Interactive exploratory analysis uncovering seasonality, segments and anomalies." },
  { cat: "Data-Science", path: "Data-Science/Statistical-Analysis", title: "A/B Testing Framework", desc: "Frequentist and Bayesian experiment analysis with power calculations." },
  { cat: "Data-Science", path: "Data-Science/Feature-Engineering", title: "Feature Store Pipelines", desc: "Reusable, leakage-safe feature transforms for tabular ML models." },
  { cat: "MLOps", path: "MLOps/Model-Deployment", title: "Model Serving API", desc: "FastAPI inference service with batching, versioning and CI/CD to the cloud." },
  { cat: "MLOps", path: "MLOps/Docker-Kubernetes", title: "ML on Kubernetes", desc: "Helm-packaged training and serving workloads with autoscaling and GPU scheduling." },
  { cat: "MLOps", path: "MLOps/Model-Monitoring", title: "Drift Watchtower", desc: "Data & prediction drift monitoring with alerting and automated retraining triggers." },
  { cat: "Data-Engineering", path: "Data-Engineering/SQL", title: "Analytics SQL Toolkit", desc: "Window functions, CTE patterns and optimised queries for business analytics." },
  { cat: "Data-Engineering", path: "Data-Engineering/Databricks", title: "Lakehouse Medallion Pipeline", desc: "Bronze → Silver → Gold Delta Lake pipelines orchestrated with Databricks Workflows." },
  { cat: "Data-Engineering", path: "Data-Engineering/Snowflake", title: "Snowflake ELT Warehouse", desc: "Streams, tasks and Snowpark transforms powering a cost-aware data warehouse." },
  { cat: "System-Architecture", path: "System-Architecture", title: "AI Platform Blueprints", desc: "Architecture designs for multi-tenant RAG platforms and real-time ML systems." },
];

const TERMINAL = [
  ["p", "$ "], ["k", "whoami"], ["", "\n"],
  ["", "Midhun Das — building AI that ships.\n"],
  ["p", "$ "], ["k", "cat focus.txt"], ["", "\n"],
  ["s", "[GenAI]"], ["", " RAG · GraphRAG · LLM Apps · AI Agents\n"],
  ["s", "[ML]"], ["", "    NLP · Computer Vision · Predictive Analytics\n"],
  ["s", "[Ops]"], ["", "   MLOps · Data Engineering · System Architecture\n"],
  ["p", "$ "], ["k", "status"], ["", "\n"],
  ["", "> available for new missions_"],
];

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);

// Skills
$("#skills-grid").innerHTML = SKILLS.map(s => `
  <div class="skill-card reveal" style="--accent:${s.accent}">
    <h4>▸ ${s.title}</h4>
    ${s.bars.map(([n, v]) => `
      <div class="bar"><label>${n}<span>${v}%</span></label>
        <div class="track"><div class="fill" data-w="${v}"></div></div></div>`).join("")}
    <div class="tags">${s.tags.map(t => `<span>${t}</span>`).join("")}</div>
  </div>`).join("");

// Projects + filters
const cats = ["ALL", ...new Set(PROJECTS.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) =>
  `<button class="${i === 0 ? "active" : ""}" data-cat="${c}">${c.toLowerCase()}</button>`).join("");
$("#cards").innerHTML = PROJECTS.map(p => `
  <article class="card reveal" data-cat="${p.cat}">
    <div class="path">~/${p.path}</div>
    <h4>${p.title}</h4>
    <p>${p.desc}</p>
    <a href="${REPO}${p.path}" target="_blank" rel="noopener">&gt; access_repo →</a>
  </article>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("active", x === b));
  document.querySelectorAll(".card").forEach(c =>
    c.classList.toggle("hidden", b.dataset.cat !== "ALL" && c.dataset.cat !== b.dataset.cat));
});

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
  t.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%");
  t.querySelectorAll("[data-count]").forEach(n => {
    const end = +n.dataset.count; let v = 0;
    const step = () => { v++; n.textContent = v; if (v < end) requestAnimationFrame(step); };
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
