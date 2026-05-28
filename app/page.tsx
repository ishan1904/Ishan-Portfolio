export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            AI/ML Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Building reliable AI systems for real-world workflows.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I design production-grade AI/ML systems across LLM workflows,
            document intelligence, data pipelines, and MLOps.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}