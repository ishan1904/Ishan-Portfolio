const supportingProjects = [
  {
    title: "ResumeFlow AI",
    status: "In Development",
    description:
      "Visual resume tailoring platform that maps resumes to job descriptions and generates ATS-aware edits through an editable workflow interface.",
    tech: ["Next.js", "Node.js", "LLMs", "PDF Parsing"],
  },
  {
    title: "Driver Drowsiness Detection",
    status: "Legacy Upgrade",
    description:
      "Computer vision project for detecting driver fatigue using facial cues, eye tracking logic, and real-time alert mechanisms.",
    tech: ["Python", "OpenCV", "Computer Vision", "ML"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-24"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Featured Work
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Projects that show the system behind the model.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          A mix of applied AI, machine learning, document intelligence,
          computer vision, and product-focused engineering.
        </p>
      </div>

      {/* Featured project */}
      <article className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-xl">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Project Highlight
            </p>

            <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
              AI Academic Assistant
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
             A full-stack AI academic workflow platform that turns imperfect academic
              documents into structured, reliable AI-assisted workflows.
              The system combines OCR, LLM orchestration, RAG pipelines, validation
              layers, caching, and backend infrastructure to handle real-world academic
              workflows reliably at scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Python",
                "Flask",
                "LLMs",
                "RAG",
                "OCR",
                "SQLite",
                "PostgreSQL",
                "Railway",
                "Caching",
                "Validation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                View Case Study
              </a>

              <a
                href="https://github.com/ishan1904/academic-assistant"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

              <span className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-gray-500">
                Demo Coming Soon
              </span>
            </div>
          </div>

          {/* System architecture */}
          <div className="border-t border-white/10 bg-black/30 p-8 lg:border-l lg:border-t-0 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300/70">
              System Architecture
            </p>

            <h4 className="mt-3 text-xl font-semibold text-white">
              From imperfect documents to structured intelligence.
            </h4>

            <div className="relative mt-8 space-y-5">
              {[
                {
                  label: "Input",
                  title: "Academic Documents",
                  detail: "PDF uploads · imperfect scans",
                },
                {
                  label: "Extraction",
                  title: "OCR & Parsing",
                  detail: "Gemini OCR · text normalization",
                },
                {
                  label: "Retrieval",
                  title: "RAG Layer",
                  detail: "context retrieval · relevance",
                },
                {
                  label: "Reasoning",
                  title: "LLM Orchestration",
                  detail: "evaluation · structured generation",
                },
                {
                  label: "Output",
                  title: "Structured Feedback",
                  detail: "validated responses · fallback logic",
                },
              ].map((step, index, array) => (
                <div key={step.title} className="relative pl-12">
                  {/* Vertical connector */}
                  {index < array.length - 1 && (
                    <div className="absolute left-[15px] top-8 h-[calc(100%+20px)] w-px bg-gradient-to-b from-cyan-300/25 to-white/5" />
                  )}

                  {/* Node */}
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06]">
                    <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {step.label}
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    {step.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Reliability layer */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-purple-300/70">
                Reliability Layer
              </p>

              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-white">Caching</p>
                  <p className="mt-1 text-xs text-gray-500">reuse & latency control</p>
                </div>

                <div>
                  <p className="font-medium text-white">Validation</p>
                  <p className="mt-1 text-xs text-gray-500">structured output checks</p>
                </div>

                <div>
                  <p className="font-medium text-white">Fallbacks</p>
                  <p className="mt-1 text-xs text-gray-500">resilient workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Supporting projects */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {supportingProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.08]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
              {project.status}
            </p>

            <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}