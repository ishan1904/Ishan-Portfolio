const projects = [
  {
    title: "AI Academic Assistant",
    status: "Featured Project",
    description:
      "An AI-powered academic workflow system using OCR, LLM evaluation, structured grading, caching, and fallback logic.",
    tech: ["Python", "Flask", "Gemini OCR", "Groq", "LLMs", "Caching"],
  },
  {
    title: "ResumeFlow AI",
    status: "In Development",
    description:
      "A planned visual resume tailoring platform that maps resumes to job descriptions and generates ATS-aware edits through a node-based workflow.",
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

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Projects built around AI - ML, and real-world systems.
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          I focus on projects that combine AI, data pipelines, backend systems,
          reliability, and user-facing product design.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.09]"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
              {project.status}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
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