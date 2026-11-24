/* ============================================================
   CONTENT — edit these arrays to personalise the site.
   Keep PROJECTS statuses honest: the site counters are computed from them.
   ============================================================ */
// Clock in the top bar (IANA time zone + short label)
const TIMEZONE = "Asia/Dubai";
const TZ_LABEL = "GST";

const REPO = "https://github.com/midhun-das-l/technical-portfolio/tree/main/";

// Shown in the scrolling strip under the hero. Only list tools a project actually uses.
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

const STATUS_LABEL = { shipped: "Delivered", progress: "In progress", planned: "Planned" };
const CAT_LABEL = c => c.replace(/-/g, " ");
const pad2 = n => String(n).padStart(2, "0");

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);

// Marquee (list doubled so the loop is seamless)
$("#marquee").innerHTML = [...TOOLS, ...TOOLS].map(t => `<span>${t}</span>`).join("");
$("#marquee").setAttribute("aria-hidden", "true");
$(".marquee").setAttribute("aria-label", "Platforms and tools: " + TOOLS.join(", "));

// Services accordion
$("#services-list").innerHTML = SERVICES.map((s, i) => `
  <li class="svc${i === 0 ? " open" : ""}">
    <button aria-expanded="${i === 0}"><span class="no">(${pad2(i + 1)})</span><span class="name">${s.title}</span><span class="plus" aria-hidden="true">+</span></button>
    <div class="svc-body"><div class="svc-inner"><div>
      <p>${s.desc}</p>
      <ul>${s.items.map(x => `<li>${x}</li>`).join("")}</ul>
      <p class="tools">${s.tools}</p>
    </div></div></div>
  </li>`).join("");
$("#services-list").addEventListener("click", e => {
  const btn = e.target.closest("button"); if (!btn) return;
  const li = btn.parentElement, open = !li.classList.contains("open");
  li.classList.toggle("open", open); btn.setAttribute("aria-expanded", open);
});

// Work index
const ORDER = { shipped: 0, progress: 1, planned: 2 };
const sorted = [...PROJECTS].sort((a, b) => ORDER[a.status] - ORDER[b.status]);
$("#work-count").textContent = `(${pad2(PROJECTS.length)})`;
const cats = ["All", ...new Set(PROJECTS.map(p => p.cat))];
$("#filters").innerHTML = cats.map((c, i) =>
  `<button class="${i === 0 ? "active" : ""}" data-cat="${c}" role="tab" aria-selected="${i === 0}">${CAT_LABEL(c)}</button>`).join("");
$("#index").innerHTML = sorted.map((p, i) => `
  <li class="row" data-cat="${p.cat}">
    <a href="${REPO}${p.path}" target="_blank" rel="noopener">
      <span class="r-no">${pad2(i + 1)}</span>
      <span class="r-title">${p.title}<span class="r-desc">${p.desc}</span></span>
      <span class="r-area">${CAT_LABEL(p.cat)}</span>
      <span class="r-status ${p.status}">${STATUS_LABEL[p.status]}</span>
      <span class="r-arrow" aria-hidden="true">→</span>
    </a>
  </li>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => {
    x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b);
  });
  document.querySelectorAll(".row").forEach(r =>
    r.classList.toggle("hidden", b.dataset.cat !== "All" && r.dataset.cat !== b.dataset.cat));
});

// Roadmap
$("#roadmap-list").innerHTML = ROADMAP.map(r => `
  <li class="phase rm-${r.status}">
    <div class="meta"><span>${r.when.replace("PHASE", "Phase")}</span><span>${STATUS_LABEL[r.status]}</span></div>
    <h3>${r.title}</h3>
    <p>${r.desc}</p>
  </li>`).join("");

// Numbers are computed from PROJECTS, so they can never drift from reality
const count = st => PROJECTS.filter(p => p.status === st).length;
$("#stat-domains").textContent = pad2(new Set(PROJECTS.map(p => p.cat)).size);
$("#stat-total").textContent = pad2(PROJECTS.length);
$("#stat-progress").textContent = pad2(count("progress"));
if (count("shipped") > 0) $("#stat-last").textContent = pad2(count("shipped"));
else { $("#stat-last").textContent = pad2(TOOLS.length); $("#stat-last-label").textContent = "Platforms & tools"; }

// Hero chips (practice areas) and project count
$("#hero-chips").innerHTML = ["All", ...new Set(PROJECTS.map(p => p.cat))].map((c, i) =>
  `<li>${CAT_LABEL(c)}${i === 0 ? ` ${PROJECTS.length}` : ""}</li>`).join("");
$("#hero-count").textContent = `(${pad2(PROJECTS.length)})`;

// Live clock
const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: TIMEZONE });
const tick = () => { $("#clock").textContent = fmt.format(new Date()); };
$("#tz").textContent = TZ_LABEL; tick(); setInterval(tick, 15000);

// Scroll reveal
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("visible"); io.unobserve(e.target);
}), { threshold: 0, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".statement, .three, .numbers, .block-head, .svc, .row, .phase, .contact > *").forEach(el => {
  el.classList.add("reveal"); io.observe(el);
});

// Mobile menu
const menuBtn = $(".menu-btn"), nav = $("#site-nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open); menuBtn.textContent = open ? "Close" : "Menu";
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); menuBtn.textContent = "Menu"; } });

$("#year").textContent = new Date().getFullYear();
