/* ============================================================
   CONTENT — edit these arrays to personalise the site.
   Keep PROJECTS statuses honest: the site counters are computed from them.
   ============================================================ */
const REPO = "https://github.com/midhun-das-l/technical-portfolio/tree/main/";

// Tools used (or being learned) across the projects in this repo.
// Only list a tool here once a project in the repo actually uses it.
const SKILLS = [
  { title: "Data Engineering", note: "SQL analytics · lakehouse pipelines · warehousing",
    tags: ["SQL", "DuckDB", "PostgreSQL", "PySpark", "Databricks", "Delta Lake", "Snowflake"] },
  { title: "Data Science", note: "EDA · hypothesis testing · feature pipelines",
    tags: ["Python", "Pandas", "NumPy", "SciPy", "Statsmodels", "Plotly", "Jupyter"] },
  { title: "Machine Learning", note: "Tabular models · NLP · computer vision",
    tags: ["scikit-learn", "XGBoost", "SHAP", "PyTorch", "Hugging Face", "YOLO"] },
  { title: "MLOps", note: "Serving · containers · monitoring",
    tags: ["FastAPI", "Docker", "Kubernetes", "Helm", "MLflow", "Evidently", "GitHub Actions"] },
  { title: "Generative AI", note: "RAG · knowledge graphs · agents · evaluation",
    tags: ["LangChain", "LangGraph", "Neo4j", "Vector DBs", "RAGAS", "Gradio"] },
  { title: "System Architecture", note: "Design docs for the systems built here",
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

const STATUS_LABEL = { shipped: "Shipped", progress: "In progress", planned: "Planned" };
const CAT_LABEL = c => c.replace(/-/g, " ");

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);
const badge = st => `<span class="status status-${st}">${STATUS_LABEL[st]}</span>`;

// Skills
$("#skills-grid").innerHTML = SKILLS.map(s => `
  <div class="skill-card reveal">
    <h3>${s.title}</h3>
    <p class="note">${s.note}</p>
    <div class="tags">${s.tags.map(t => `<span>${t}</span>`).join("")}</div>
  </div>`).join("");

// "Currently building" panel: first in-progress project
const now = PROJECTS.find(p => p.status === "progress") || PROJECTS[0];
$("#now-project").innerHTML = `
  <div class="now-project">
    ${badge(now.status)}
    <h3>${now.title}</h3>
    <p>${now.desc}</p>
    <a href="${REPO}${now.path}" target="_blank" rel="noopener">View on GitHub →</a>
  </div>`;

// Projects + filters
const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) =>
  `<button class="${i === 0 ? "active" : ""}" data-cat="${c}" role="tab" aria-selected="${i === 0}">${CAT_LABEL(c)}</button>`).join("");
const ORDER = { shipped: 0, progress: 1, planned: 2 };
$("#cards").innerHTML = [...PROJECTS].sort((a, b) => ORDER[a.status] - ORDER[b.status]).map(p => `
  <article class="card reveal" data-cat="${p.cat}">
    <div class="card-head"><span class="cat">${CAT_LABEL(p.cat)}</span>${badge(p.status)}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${REPO}${p.path}" target="_blank" rel="noopener">${p.status === "planned" ? "Read the plan" : "View code"} <span>→</span></a>
  </article>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => {
    x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b);
  });
  document.querySelectorAll(".card").forEach(c =>
    c.classList.toggle("hidden", b.dataset.cat !== "All" && c.dataset.cat !== b.dataset.cat));
});

// Roadmap
$("#roadmap-list").innerHTML = ROADMAP.map(r => `
  <li class="rm-${r.status}">
    <div class="meta">${r.when.replace("PHASE", "Phase")} ${badge(r.status)}</div>
    <h3>${r.title}</h3>
    <p>${r.desc}</p>
  </li>`).join("");

// Stats are computed from PROJECTS, so they can never drift from reality
const count = st => PROJECTS.filter(p => p.status === st).length;
$("#stat-shipped").textContent = count("shipped");
$("#stat-progress").textContent = count("progress");
$("#stat-planned").textContent = count("planned");
$("#stat-domains").textContent = new Set(PROJECTS.map(p => p.cat)).size;

// Subtle reveal on scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("visible");
  io.unobserve(e.target);
}), { threshold: 0, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".section-head, .prose, .stats, .timeline li, .contact").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Theme toggle (respects system setting until the visitor chooses)
$("#theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Mobile nav
const toggle = $(".nav-toggle"), nav = $(".nav nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); } });

$("#year").textContent = new Date().getFullYear();
