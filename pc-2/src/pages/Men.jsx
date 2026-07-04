import React from 'react'

const Men = () => {
  const edits = [
    { code: '01', name: 'The blue hour', note: 'Tailoring / SS26', shade: 'bg-blue-600' },
    { code: '02', name: 'Off-duty form', note: 'Essentials / 14 pieces', shade: 'bg-sky-300' },
    { code: '03', name: 'Future utility', note: 'Outerwear / Limited', shade: 'bg-indigo-900' },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">
      <section className="relative min-h-[82vh] border-b border-blue-300/20">
        <img src="/images/men-hero.png" alt="Man wearing a modern navy tailored outfit" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030816]/90 via-[#06142d]/45 to-transparent" />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(147,197,253,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,.35)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between border-b border-white/20 pb-5 text-[10px] font-bold uppercase tracking-[.28em] text-blue-200">
            <span>Men / Edition 026</span><span>Designed for motion</span>
          </div>
          <div className="max-w-2xl py-16">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.35em] text-sky-300"><span className="h-px w-10 bg-sky-300" />New collection</span>
            <h1 className="mt-7 text-6xl font-black uppercase leading-[.82] tracking-[-.07em] sm:text-8xl lg:text-[8.5rem]">Beyond<br /><span className="text-blue-400">the usual.</span></h1>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <button className="rounded-sm bg-blue-500 px-7 py-4 text-xs font-black uppercase tracking-[.2em] transition hover:bg-sky-300 hover:text-slate-950">Explore SS26</button>
              <p className="max-w-xs border-l border-blue-300/40 pl-5 text-sm leading-6 text-blue-100/70">Sharp layers. Clean lines. A new uniform made for the city after dark.</p>
            </div>
          </div>
          <div className="flex justify-between text-xs font-semibold uppercase tracking-[.2em] text-blue-200/70"><span>Scroll to discover</span><span>↓</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.3em] text-blue-400">Selected edits</p><h2 className="mt-4 text-4xl font-black uppercase tracking-[-.04em] sm:text-5xl">Built in<br />blue.</h2><p className="mt-5 max-w-xs leading-7 text-slate-400">A tightly curated wardrobe where technical detail meets effortless form.</p></div>
          <div className="divide-y divide-blue-200/15 border-y border-blue-200/15">
            {edits.map((edit) => (
              <article key={edit.code} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-5 py-6 sm:grid-cols-[4rem_1fr_10rem_auto]">
                <span className="font-mono text-sm text-blue-400">{edit.code}</span>
                <div><h3 className="text-xl font-bold uppercase tracking-tight sm:text-2xl">{edit.name}</h3><p className="mt-1 text-xs uppercase tracking-[.15em] text-slate-500">{edit.note}</p></div>
                <div className={`hidden h-14 origin-right rounded-sm transition group-hover:scale-x-110 sm:block ${edit.shade}`} />
                <span className="grid h-11 w-11 place-items-center border border-blue-300/30 text-blue-200 transition group-hover:bg-blue-500 group-hover:text-white">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Men
