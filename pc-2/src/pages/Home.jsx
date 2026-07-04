import React from 'react'

const Home = () => {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#f7f7f2] text-slate-950">
      <section className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-10 lg:py-28">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Learning, reimagined
          </span>
          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Turn curiosity into
            <span className="block bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">real-world skill.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Practical courses, thoughtful mentors, and a community that helps you move from learning to doing.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-violet-600">Explore courses</button>
            <button className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 transition hover:border-violet-300 hover:text-violet-600">See how it works</button>
          </div>
          <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-7">
            <div><p className="text-2xl font-black">12k+</p><p className="text-sm text-slate-500">active learners</p></div>
            <div><p className="text-2xl font-black">4.9/5</p><p className="text-sm text-slate-500">average rating</p></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-violet-500 to-cyan-400 opacity-30 blur-sm" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/30 sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-300">Your learning path</p>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">68% complete</span>
            </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <div className="mb-5 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-500 text-xl">✦</div>
                <div><p className="font-bold">Creative development</p><p className="text-sm text-slate-400">Module 08 · In progress</p></div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" /></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-violet-500 p-5"><p className="text-3xl font-black">24</p><p className="mt-1 text-sm text-violet-100">Lessons finished</p></div>
              <div className="rounded-2xl bg-white p-5 text-slate-950"><p className="text-3xl font-black">7</p><p className="mt-1 text-sm text-slate-500">Day streak 🔥</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
