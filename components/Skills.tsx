const skillGroups = [
  {
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "NLP",
      "RAG",
      "Transformers",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "PySpark",
      "Airflow",
      "ETL Pipelines",
      "Snowflake",
      "BigQuery",
    ],
  },
  {
    title: "MLOps",
    skills: [
      "MLflow",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Monitoring",
    ],
  },
  {
    title: "Cloud & APIs",
    skills: [
      "AWS",
      "Azure",
      "FastAPI",
      "Flask",
      "REST APIs",
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
        A practical mix of modeling, retrieval, data infrastructure, deployment,
        and observability across the AI/ML lifecycle.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white">
              {group.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}