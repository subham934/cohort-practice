import React from 'react'
import { Link, useParams } from 'react-router'


const RandomAbout = () => {
  const params = useParams()

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3ff70] px-5 py-16 text-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-fuchsia-500 blur-2xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400 blur-2xl" />

      <section className="relative mx-auto max-w-7xl">
        <div className="flex items-center justify-between border-b-2 border-slate-950 pb-4 text-xs font-black uppercase tracking-[.25em]">
          <span>Unexpected since forever</span>
          <span>Issue № 404</span>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-20">
          <div>
            <span className="inline-block -rotate-3 rounded-full bg-slate-950 px-5 py-2 text-xs font-black uppercase tracking-[.2em] text-white">A delightfully random detour</span>
            <h1 className="mt-8 text-6xl font-black uppercase leading-[.78] tracking-[-.075em] sm:text-8xl lg:text-[9rem]">
              About<br /><span className="text-fuchsia-600">anything.</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg font-medium leading-8">This is the corner where tidy plans take a coffee break. Strange ideas, happy accidents, and the occasional brilliant question are all welcome here.</p>
          </div>

          <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
            <div className="absolute inset-5 rotate-6 rounded-[3rem] border-4 border-slate-950 bg-fuchsia-500 shadow-[14px_14px_0_#0f172a]" />
            <div className="absolute inset-14 -rotate-6 rounded-full bg-cyan-300" />
            <span className="relative text-[9rem] font-black leading-none text-slate-950">?</span>
            <span className="absolute right-2 top-2 rotate-12 rounded-full border-2 border-slate-950 bg-white px-4 py-2 text-xs font-black uppercase">Why not?</span>
          </div>
        </div>

        <div className="grid gap-4 border-t-2 border-slate-950 pt-8 md:grid-cols-3">
          {[
            ['01', 'Stay curious', 'The best ideas often begin as slightly ridiculous questions.'],
            ['02', 'Make a mess', 'Experiments are allowed. Perfection can wait outside.'],
            ['03', 'Keep moving', 'Follow the interesting path—even when it takes a weird turn.'],
          ].map(([number, title, copy], index) => (
            <article key={title} className={`rounded-3xl border-2 border-slate-950 p-6 shadow-[6px_6px_0_#0f172a] ${index === 1 ? 'bg-cyan-300' : index === 2 ? 'bg-fuchsia-500 text-white' : 'bg-white'}`}>
              <span className="text-xs font-black">{number}</span>
              <h2 className="mt-8 text-2xl font-black uppercase">{title}</h2>
              <p className={`mt-3 leading-7 ${index === 2 ? 'text-fuchsia-100' : 'text-slate-700'}`}>{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-950 p-7 text-white sm:flex-row sm:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-lime-300">You discovered</p><p className="mt-1 text-xl font-bold">/{params.random}</p></div>
          <Link to="/about" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-slate-950">← Back to About</Link>
        </div>
      </section>
    </main>
  )
}

export default RandomAbout
