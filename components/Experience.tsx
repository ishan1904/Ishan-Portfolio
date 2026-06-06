const experiences = [
  {
    company: "Pfizer",
    role: "AI/ML Engineer",
    period: "Aug 2025 – Present",
    impact:
      "Built predictive ML systems, NLP-driven ticket automation, and real-time analytics dashboards for production infrastructure workflows.",
    highlights: [
      "Reduced incident recurrence by 18%",
      "Cut manual triage effort by 40%",
      "Built Power BI risk dashboards",
    ],
    tech: ["Azure", "NLP", "Power BI", "ML Pipelines"],
  },
  {
    company: "Hexaware Technologies",
    role: "AI/ML Engineer",
    period: "Jun 2022 – Jul 2023",
    impact:
      "Designed production ML systems across NLP, computer vision, recommendation use cases, and scalable model-serving APIs.",
    highlights: [
      "Implemented MLflow, Airflow, Docker, Kubernetes",
      "Reduced production model drift by 20%",
      "Built Flask/FastAPI model APIs",
    ],
    tech: ["MLflow", "Airflow", "Docker", "Kubernetes", "FastAPI"],
  },
  {
    company: "Karbh IT Solutions",
    role: "Data Scientist",
    period: "Mar 2021 – May 2022",
    impact:
      "Developed ML models, NLP pipelines, dashboards, and data integrations across structured and unstructured sources.",
    highlights: [
      "Improved model performance by 15%",
      "Built Tableau dashboards",
      "Integrated SQL, MongoDB, Hadoop, and web data",
    ],
    tech: ["Python", "SQL", "NLP", "Tableau", "Hadoop"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Applied AI/ML work in production environments.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          A timeline of roles focused on building, deploying, and improving
          intelligent systems across enterprise data and ML workflows.
        </p>
      </div>

      <div className="mt-14 space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:bg-white/[0.08]"
          >
            <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="text-sm text-cyan-300">{experience.period}</p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {experience.company}
                </h3>
                <p className="mt-1 text-gray-400">{experience.role}</p>
              </div>

              <div>
                <p className="text-base leading-7 text-gray-300">
                  {experience.impact}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.highlights.map((item) => (
                    <li key={item} className="text-sm text-gray-400">
                      • {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}