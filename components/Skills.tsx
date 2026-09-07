const skillGroups = [
  {
    title: "Machine Learning",
    skills: [
      "Predictive Modeling",
      "Deep Learning",
      "Computer Vision",
      "Time-Series",
      "Reinforcement Learning",
      "Scikit-learn",
    ],
  },
  {
    title: "Generative AI & NLP",
    skills: [
      "LLMs",
      "RAG",
      "Transformers",
      "LangChain",
      "LangGraph",
      "Hugging Face",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "PySpark",
      "Airflow",
      "Databricks",
      "ETL / ELT",
      "Snowflake",
      "BigQuery",
    ],
  },
  {
    title: "MLOps & Deployment",
    skills: [
      "MLflow",
      "Docker",
      "Kubernetes",
      "Kubeflow",
      "CI/CD",
      "Monitoring",
    ],
  },
  {
    title: "Cloud & APIs",
    skills: [
      "AWS",
      "Azure",
      "IBM Cloud",
      "FastAPI",
      "Flask",
      "REST APIs",
    ],
  },
  {
    title: "Responsible AI",
    skills: [
      "SHAP",
      "LIME",
      "Bias Mitigation",
      "Model Explainability",
      "Privacy-aware ML",
      "Model Governance",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-20"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Technical Expertise
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          The stack behind the systems.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          A practical mix of modeling, retrieval, data infrastructure,
          deployment, and observability across the AI/ML lifecycle.
        </p>
      </div>

      <div className="mt-16 space-y-14">
        {/* Core Intelligence */}
        <div className="grid gap-8 md:grid-cols-[80px_1fr]">
          <div className="relative hidden md:block">
            <span className="text-xs font-medium tracking-[0.25em] text-cyan-300">
              01
            </span>

            <div className="absolute left-[10px] top-8 bottom-0 w-px bg-gradient-to-b from-cyan-300/40 to-white/5" />

            <div className="absolute left-[7px] top-7 h-[7px] w-[7px] rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.6)]" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/70">
              Core Intelligence
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Build the intelligence.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
              Modeling, retrieval, and generative systems that turn data into
              useful predictions and reasoning.
            </p>

            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {skillGroups.slice(0, 2).map((group) => (
                <div key={group.title}>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {group.title}
                  </h3>

                  <div className="mt-3 h-px w-12 bg-gradient-to-r from-cyan-300/70 to-transparent" />

                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {group.skills.map((skill, index) => (
                      <span
                        key={skill}
                        className={`text-sm md:text-base ${
                          index < 2
                            ? "font-medium text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {skill}

                        {index < group.skills.length - 1 && (
                          <span className="ml-3 text-cyan-300/30">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Production Engineering */}
        <div className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[80px_1fr]">
          <div className="relative hidden md:block">
            <span className="text-xs font-medium tracking-[0.25em] text-cyan-300">
              02
            </span>

            <div className="absolute left-[10px] top-8 bottom-0 w-px bg-gradient-to-b from-cyan-300/30 to-white/5" />

            <div className="absolute left-[7px] top-7 h-[7px] w-[7px] rounded-full bg-cyan-300/80 shadow-[0_0_10px_rgba(103,232,249,0.45)]" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/70">
              Production Engineering
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Turn models into reliable systems.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
              Data pipelines, deployment infrastructure, APIs, and observability
              for production AI/ML.
            </p>

            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {skillGroups.slice(2, 5).map((group) => (
                <div key={group.title}>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <div className="mt-3 h-px w-10 bg-gradient-to-r from-cyan-300/60 to-transparent" />

                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {group.skills.map((skill, index) => (
                      <span
                        key={skill}
                        className={`text-sm ${
                          index < 2
                            ? "font-medium text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {skill}

                        {index < group.skills.length - 1 && (
                          <span className="ml-3 text-cyan-300/25">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust & Governance */}
        <div className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[80px_1fr]">
          <div className="relative hidden md:block">
            <span className="text-xs font-medium tracking-[0.25em] text-purple-300">
              03
            </span>

            <div className="absolute left-[7px] top-7 h-[7px] w-[7px] rounded-full bg-purple-300/80 shadow-[0_0_10px_rgba(216,180,254,0.45)]" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-purple-300/70">
              Trust & Governance
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Build systems you can understand and trust.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
              Explainability, governance, bias mitigation, and privacy-aware
              practices for responsible AI/ML systems.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">
                {skillGroups[5].title}
              </h3>

              <div className="mt-3 h-px w-10 bg-gradient-to-r from-purple-300/60 to-transparent" />

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {skillGroups[5].skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`text-sm ${
                      index < 2
                        ? "font-medium text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {skill}

                    {index < skillGroups[5].skills.length - 1 && (
                      <span className="ml-3 text-purple-300/30">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}