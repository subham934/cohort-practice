import React from 'react'

const Women = () => {
  const moods = [
    { title: 'Soft power', detail: 'Fluid tailoring', color: 'bg-pink-200', shape: 'rounded-t-full' },
    { title: 'Colour story', detail: 'Rose to raspberry', color: 'bg-fuchsia-500', shape: 'rounded-[2.5rem]' },
    { title: 'Main character', detail: 'Evening statements', color: 'bg-rose-700', shape: 'rounded-bl-[5rem]' },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff4f7] text-[#3c1027]">
      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="relative min-h-[86vh] overflow-hidden rounded-[2rem] bg-rose-300">
          <img src="/images/women-hero.png" alt="Woman wearing a modern pink tailored outfit" className="absolute inset-0 h-full w-full object-cover object-[45%_center]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#671438]/65 via-transparent to-rose-950/10" />
          <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border-[2px] border-pink-100/40" /><div className="absolute -right-10 top-28 h-72 w-72 rounded-full border border-pink-100/30" />

          <div className="relative mx-auto grid min-h-[86vh] max-w-7xl grid-rows-[auto_1fr_auto] px-6 py-8 sm:px-10 lg:px-14">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.28em] text-white"><span>Maison Rose</span><span>Women / 2026</span></div>
            <div className="flex items-center justify-end py-16">
              <div className="max-w-xl text-right text-white">
                <p className="text-xs font-bold uppercase tracking-[.4em] text-pink-100">The new femininity</p>
                <h1 className="mt-6 font-serif text-6xl italic leading-[.86] tracking-[-.055em] sm:text-8xl lg:text-[8rem]">Wear your<br />own rules.</h1>
                <p className="ml-auto mt-7 max-w-sm text-base leading-7 text-pink-50/90">Romantic colour meets fearless form. Pieces designed to take up space beautifully.</p>
                <button className="mt-8 rounded-full bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[.18em] text-rose-700 shadow-xl shadow-rose-950/20 transition hover:bg-pink-200">Enter the collection</button>
              </div>
            </div>
            <div className="flex items-end justify-between text-[10px] font-bold uppercase tracking-[.25em] text-white/80"><span>Limited summer edit</span><span className="rounded-full border border-white/50 px-4 py-2">Scroll ↓</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.3em] text-fuchsia-600">Pick your mood</p><h2 className="mt-4 font-serif text-5xl italic tracking-[-.04em] sm:text-6xl">Three ways to glow.</h2></div>
          <p className="max-w-sm leading-7 text-rose-900/60">Play with proportion, texture, and every shade of pink. There is no quiet corner in this collection.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[1fr_1.15fr_.85fr] md:items-end">
          {moods.map((mood, index) => (
            <article key={mood.title} className={`group relative overflow-hidden p-7 text-white ${mood.color} ${mood.shape} ${index === 1 ? 'h-96' : index === 0 ? 'h-80' : 'h-72'}`}>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 transition duration-500 group-hover:scale-150" />
              <span className="text-xs font-bold uppercase tracking-[.25em] text-white/70">0{index + 1}</span>
              <div className="absolute bottom-7 left-7 right-7"><p className="text-sm text-white/75">{mood.detail}</p><div className="mt-2 flex items-end justify-between"><h3 className="font-serif text-3xl italic">{mood.title}</h3><span className="text-xl">↗</span></div></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Women
