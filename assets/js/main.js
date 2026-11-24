/* ============================================================
   CONTENT — edit these arrays to personalise the site.
   Keep PROJECTS statuses honest: the site counters are computed from them.
   ============================================================ */
const REPO = "https://github.com/midhun-das-l/technical-portfolio/tree/main/";

// Shown in the dark strip under the hero. Only list tools a project actually uses.
const TOOLS = ["Databricks", "Snowflake", "PySpark", "PostgreSQL", "scikit-learn", "PyTorch", "MLflow", "Docker", "Kubernetes", "LangGraph", "Neo4j"];

// Services: what you deliver, phrased for a hiring manager or client.
const SERVICES = [
  { title: "Data Engineering", desc: "Reliable pipelines and warehouses that turn raw operational data into trusted analytics tables.",
    items: ["Lakehouse pipelines (Bronze → Silver → Gold)", "Warehouse modelling and SQL analytics", "Data-quality checks"],
    tools: "SQL · DuckDB · PySpark · Databricks · Delta Lake · Snowflake" },
  { title: "Data Science", desc: "Analysis that answers a business question with evidence, effect sizes and stated caveats.",
    items: ["Exploratory analysis and reporting", "Hypothesis testing", "Leakage-safe feature pipelines"],
    tools: "Python · Pandas · SciPy · Statsmodels · Plotly" },
  { title: "Machine Learning", desc: "Predictive models measured against a baseline and explained in terms stakeholders can act on.",
    items: ["Tabular prediction (churn, demand)", "NLP and text classification", "Computer vision"],
    tools: "scikit-learn · XGBoost · SHAP · PyTorch · Hugging Face · YOLO" },
  { title: "MLOps", desc: "Taking models out of notebooks and into monitored, reproducible production services.",
    items: ["Model serving APIs", "Containers and Kubernetes", "Drift monitoring and retraining"],
    tools: "FastAPI · Docker · Kubernetes · Helm · MLflow · Evidently" },
  { title: "Generative AI", desc: "LLM applications grounded in your documents, with evaluation instead of guesswork.",
    items: ["RAG with citations and evaluation sets", "Knowledge graphs (GraphRAG)", "Tool-using AI agents"],
    tools: "LangChain · LangGraph · Neo4j · Vector DBs · RAGAS" },
  { title: "Solution Architecture", desc: "Clear design documents so teams understand, operate and extend what was built.",
    items: ["Architecture diagrams", "Decision records (ADRs)", "Observability design"],
    tools: "Mermaid · ADRs · Cloud design" },
];

// Approach: how you run an engagement.
const STEPS = [
  { title: "Discover", desc: "Understand the business problem, the data available and what success looks like." },
  { title: "Build", desc: "Develop the pipeline, model or LLM application against a baseline and an evaluation set." },
  { title: "Deploy", desc: "Ship it as a service people can use, containerised and documented." },
  { title: "Monitor", desc: "Track quality and drift in production and report results honestly, limitations included." },
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

const STATUS_LABEL = { shipped: "Delivered", progress: "In delivery", planned: "Planned" };
const CAT_LABEL = c => c.replace(/-/g, " ");

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);
const badge = st => `<span class="status status-${st}">${STATUS_LABEL[st]}</span>`;

$("#tool-strip").innerHTML = TOOLS.map(t => `<li>${t}</li>`).join("");

$("#services-grid").innerHTML = SERVICES.map((s, i) => `
  <article class="service reveal">
    <span class="num">0${i + 1}</span>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <ul>${s.items.map(x => `<li>${x}</li>`).join("")}</ul>
    <p class="tools">${s.tools}</p>
  </article>`).join("");

$("#steps").innerHTML = STEPS.map(s => `
  <li class="step reveal"><h3>${s.title}</h3><p>${s.desc}</p></li>`).join("");

// Featured case study: first in-progress (or delivered) project
const feat = PROJECTS.find(p => p.status === "shipped") || PROJECTS.find(p => p.status === "progress") || PROJECTS[0];
$("#featured").innerHTML = `
  <div class="featured-side">
    <div>
      <p class="tagline">Featured · ${CAT_LABEL(feat.cat)}</p>
      <h3>${feat.title}</h3>
    </div>
    <a class="btn btn-gold" href="${REPO}${feat.path}" target="_blank" rel="noopener">Read the case study</a>
  </div>
  <div class="featured-main">
    <dl>
      <div><dt>Status</dt><dd>${badge(feat.status)}</dd></div>
      <div><dt>Scope</dt><dd>${feat.desc}</dd></div>
      <div><dt>Repository</dt><dd>${feat.path}</dd></div>
    </dl>
  </div>`;
$("#featured").classList.add("reveal");

// Case studies + filters
const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) =>
  `<button class="${i === 0 ? "active" : ""}" data-cat="${c}" role="tab" aria-selected="${i === 0}">${CAT_LABEL(c)}</button>`).join("");
const ORDER = { shipped: 0, progress: 1, planned: 2 };
$("#cases").innerHTML = [...PROJECTS].filter(p => p !== feat).sort((a, b) => ORDER[a.status] - ORDER[b.status]).map(p => `
  <article class="case reveal" data-cat="${p.cat}">
    <div class="case-head"><span class="cat">${CAT_LABEL(p.cat)}</span>${badge(p.status)}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${REPO}${p.path}" target="_blank" rel="noopener">${p.status === "planned" ? "View project plan" : "View case study"}</a>
  </article>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => {
    x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b);
  });
  document.querySelectorAll(".case").forEach(c =>
    c.classList.toggle("hidden", b.dataset.cat !== "All" && c.dataset.cat !== b.dataset.cat));
});

// Roadmap
$("#roadmap-list").innerHTML = ROADMAP.map(r => `
  <li class="phase rm-${r.status}">
    <div class="meta">${r.when.replace("PHASE", "Phase")} ${badge(r.status)}</div>
    <h3>${r.title}</h3>
    <p>${r.desc}</p>
  </li>`).join("");

// Metrics are computed from PROJECTS, so they can never drift from reality
const count = st => PROJECTS.filter(p => p.status === st).length;
// Until something ships, the last tile shows tools in use instead of a zero
if (count("shipped") > 0) $("#stat-shipped").textContent = count("shipped");
else { $("#stat-shipped").textContent = TOOLS.length; $("#stat-shipped").nextElementSibling.textContent = "Platforms & tools in use"; }
$("#stat-progress").textContent = count("progress");
$("#stat-total").textContent = PROJECTS.length;
$("#stat-domains").textContent = new Set(PROJECTS.map(p => p.cat)).size;

// Subtle reveal on scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("visible");
  io.unobserve(e.target);
}), { threshold: 0, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".section-head, .phase, .about-body").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Mobile nav
const toggle = $(".nav-toggle"), nav = $(".nav nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); } });

$("#year").textContent = new Date().getFullYear();
