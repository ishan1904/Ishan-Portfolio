export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl md:p-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Let&apos;s Connect
        </p>

        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Open to AI/ML engineering opportunities.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
          I’m interested in roles across applied AI, machine learning systems,
          LLM workflows, data platforms, and production MLOps.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/Ishan_Rajvi_AI_ML.pdf"
            className="rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/ishan1904"
            target="_blank"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ishan-rajvi/"
            target="_blank"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ishandrajvi1904@gmail.com"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}