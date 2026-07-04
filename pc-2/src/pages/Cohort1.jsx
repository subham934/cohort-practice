import React from 'react'

const Cohort1 = () => {
  const modules = [
    { number: '01', title: 'Foundations', detail: 'Mindset, tools & creative process', status: 'Completed' },
    { number: '02', title: 'Build & iterate', detail: 'Projects, critique & refinement', status: 'In progress' },
    { number: '03', title: 'Ship your work', detail: 'Portfolio, storytelling & launch', status: 'Up next' },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f4ee] text-slate-950">
      <section className="relative border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-[.25em] text-slate-300">Live cohort · Batch 01</span>
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">12 weeks · 24 learners</span>
          </div>

          <div className="grid gap-12 pt-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.3em] text-cyan-300">Creative Development Program</p>
              <h1 className="mt-5 text-6xl font-black leading-[.88] tracking-[-.065em] sm:text-7xl lg:text-8xl">Learn together.<br /><span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">Build for real.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">An intensive, project-first learning experience for people ready to turn curiosity into confident creative work.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Next session</p><p className="mt-2 text-2xl font-bold">Design Critique</p></div><span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500 text-xl">↗</span></div>
              <div className="mt-7 h-px bg-white/10" />
              <div className="mt-5 flex items-center justify-between text-sm"><span className="text-slate-400">Tuesday · 6:30 PM</span><span className="font-bold text-cyan-300">Starts in 2 days</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.25em] text-violet-600">Your roadmap</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">A clear path from idea to impact.</h2>
            <p className="mt-5 max-w-md leading-7 text-slate-600">Each phase combines short lessons, live workshops, and one meaningful project.</p>
            <div className="mt-8 rounded-2xl bg-violet-100 p-5"><div className="flex justify-between text-sm font-bold"><span>Overall progress</span><span className="text-violet-700">46%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white"><div className="h-full w-[46%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" /></div></div>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <article key={module.number} className={`group flex flex-col gap-6 rounded-3xl border p-6 transition hover:-translate-y-0.5 hover:shadow-xl sm:flex-row sm:items-center ${index === 1 ? 'border-violet-300 bg-violet-600 text-white shadow-lg shadow-violet-500/20' : 'border-slate-200 bg-white'}`}>
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-sm font-black ${index === 1 ? 'bg-white text-violet-700' : 'bg-slate-100 text-slate-500'}`}>{module.number}</span>
                <div className="flex-1"><h3 className="text-xl font-black">{module.title}</h3><p className={`mt-1 ${index === 1 ? 'text-violet-100' : 'text-slate-500'}`}>{module.detail}</p></div>
                <span className={`w-fit rounded-full px-4 py-2 text-xs font-bold ${index === 0 ? 'bg-emerald-100 text-emerald-700' : index === 1 ? 'bg-violet-400/30 text-white' : 'bg-slate-100 text-slate-500'}`}>{module.status}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[['12', 'Live workshops'], ['03', 'Portfolio projects'], ['1:1', 'Mentor feedback']].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-white p-7"><p className="text-4xl font-black tracking-tight text-violet-600">{value}</p><p className="mt-2 font-semibold text-slate-600">{label}</p></div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Cohort1
