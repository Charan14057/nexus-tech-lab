const stackItems = ['React', 'Vite', 'Tailwind CSS', 'Supabase']

function App() {
  return (
    <div className="relative isolate overflow-hidden bg-[#0B0C10] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:26px_26px] opacity-25" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0C10]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8" aria-label="Primary">
          <a href="#top" className="font-['Space_Grotesk'] text-lg font-semibold tracking-wide text-white">
            Nexus Tech Lab
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_18px_rgba(0,242,254,0.35)] transition hover:bg-cyan-300/20 hover:shadow-[0_0_22px_rgba(0,242,254,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C10]"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:px-8 md:pt-24">
        <section className="space-y-8 text-center md:text-left">
          <p className="inline-block rounded-full border border-cyan-300/35 bg-cyan-300/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">
            Premium Web Agency
          </p>
          <h1 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Digitizing Local.
          </h1>
          <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
            We craft high-performance websites, custom web applications, and digital solutions engineered to scale
            real-world businesses.
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#051015] shadow-[0_0_22px_rgba(0,242,254,0.5)] transition hover:translate-y-[-1px] hover:shadow-[0_0_30px_rgba(0,242,254,0.68)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C10]"
          >
            Let&apos;s Build Together
          </a>
        </section>

        <section className="mt-20" aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
            Core Stack
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium tracking-wide text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
            Featured Work
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-cyan-200/25 bg-white/[0.03] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <div className="mb-3 inline-flex rounded-full border border-cyan-200/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                In Development
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white">Local Print Shop Platform</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Engineering an end-to-end digital ordering, dynamic tracking, and catalog system to streamline local
                print operations.
              </p>
            </article>
            {[1, 2].map((item) => (
              <article
                key={item}
                className="flex min-h-[210px] items-center justify-center rounded-2xl border border-dashed border-cyan-300/40 bg-white/[0.02] p-6 text-center text-sm font-medium text-cyan-100/90"
              >
                Next Project Landing Soon...
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 scroll-mt-28" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
            Let&apos;s Talk
          </h2>
          <form className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:max-w-2xl" action="#" method="post">
            <label className="grid gap-2 text-sm text-slate-200">
              Business Name
              <input
                name="businessName"
                type="text"
                required
                className="rounded-xl border border-white/20 bg-[#121212] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                placeholder="Your business"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-200">
              Contact Email
              <input
                name="contactEmail"
                type="email"
                required
                className="rounded-xl border border-white/20 bg-[#121212] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                placeholder="you@business.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-200">
              What are we building?
              <textarea
                name="projectIdea"
                rows="5"
                required
                className="rounded-xl border border-white/20 bg-[#121212] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                placeholder="Tell us about your project goals."
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#051015] shadow-[0_0_18px_rgba(0,242,254,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,242,254,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C10]"
            >
              Send Inquiry
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 sm:px-8">
        <p>© 2026 Nexus Tech Lab. All rights reserved.</p>
        <a
          className="mt-2 inline-block text-cyan-200 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C10]"
          href="mailto:asknexustechlab@gmail.com"
        >
          asknexustechlab@gmail.com
        </a>
      </footer>
    </div>
  )
}

export default App
