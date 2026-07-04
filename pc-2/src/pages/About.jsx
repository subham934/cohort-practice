import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <main id="about" className="min-h-screen bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Why we exist</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">Education should feel like momentum.</h1>
            <Link to="/about/randomabout" className="mt-7 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white">
              Visit Random About <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-400">We make focused, project-led learning for ambitious people. No endless theory—just clear ideas, useful practice, and expert feedback that gets you moving.</p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ['01', 'Learn by making', 'Every concept becomes a practical project you can share, improve, and feel proud of.'],
            ['02', 'Guidance that matters', 'Get useful feedback from people who know the craft and care about your progress.'],
            ['03', 'Grow together', 'Join a generous community that celebrates questions, experiments, and honest progress.'],
          ].map(([number, title, copy], index) => (
            <article key={title} className={`rounded-3xl border p-7 ${index === 1 ? 'border-violet-400/40 bg-violet-500 text-white' : 'border-white/10 bg-white/5'}`}>
              <span className={`text-xs font-black tracking-widest ${index === 1 ? 'text-violet-200' : 'text-cyan-300'}`}>{number}</span>
              <h2 className="mt-12 text-2xl font-bold">{title}</h2>
              <p className={`mt-3 leading-7 ${index === 1 ? 'text-violet-100' : 'text-slate-400'}`}>{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-8 rounded-3xl bg-[#f7f7f2] p-8 text-slate-950 sm:flex-row sm:items-center lg:p-10">
          <div><p className="text-4xl font-black tracking-tight">Built for lifelong learners.</p><p className="mt-2 text-slate-600">Small steps. Strong skills. Meaningful careers.</p></div>
          <div className="flex gap-10"><div><p className="text-3xl font-black text-violet-600">40+</p><p className="text-sm text-slate-500">mentors</p></div><div><p className="text-3xl font-black text-violet-600">18</p><p className="text-sm text-slate-500">countries</p></div></div>
        </div>
      </section>
    </main>
  )
}

export default About
