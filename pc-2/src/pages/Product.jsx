import React from 'react';
import { useNavigate } from 'react-router';

const Product = () => {
  const navigate = useNavigate();

  return (
    <main
      id="products"
      className="relative min-h-screen overflow-hidden bg-[#f3f0ff] px-5 py-16 text-slate-950 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-violet-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Shop the latest edit
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Choose your
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">signature style.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Two distinct collections. One modern point of view. Step inside and find the edit that feels like you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <button
            onClick={() => navigate('/products/men')}
            className="group relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-[#071a3d] p-8 text-left text-white shadow-2xl shadow-blue-950/20 transition duration-500 hover:-translate-y-2 hover:shadow-blue-900/30 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[55px] border-blue-400/20 transition duration-700 group-hover:scale-110 group-hover:rotate-12" />
            <div className="absolute bottom-12 right-10 h-44 w-32 rotate-6 rounded-t-full bg-gradient-to-b from-cyan-300 to-blue-600 shadow-[0_0_60px_rgba(34,211,238,.3)] transition duration-500 group-hover:rotate-12 group-hover:scale-105" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.25em] text-blue-200">
                <span>Collection 01</span><span>SS / 2026</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.28em] text-cyan-300">Cool. Clean. Considered.</p>
                <h2 className="mt-3 text-5xl font-black uppercase tracking-[-.05em] sm:text-6xl">Men</h2>
                <div className="mt-6 flex items-center gap-3 text-sm font-bold">
                  Explore collection
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-lg transition group-hover:translate-x-2 group-hover:bg-cyan-300 group-hover:text-slate-950">→</span>
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate('/products/women')}
            className="group relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-300 via-pink-500 to-fuchsia-700 p-8 text-left text-white shadow-2xl shadow-fuchsia-900/20 transition duration-500 hover:-translate-y-2 hover:shadow-fuchsia-900/30 sm:p-10 lg:mt-10"
          >
            <div className="absolute -right-16 top-8 h-60 w-60 rounded-full bg-pink-100/25 blur-sm transition duration-700 group-hover:scale-125" />
            <div className="absolute bottom-10 right-12 h-48 w-36 -rotate-6 rounded-full rounded-tr-none border-2 border-white/40 bg-rose-200/30 backdrop-blur-sm transition duration-500 group-hover:-rotate-12 group-hover:scale-105" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.25em] text-pink-50">
                <span>Collection 02</span><span>SS / 2026</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.28em] text-pink-100">Bold. Fluid. Unapologetic.</p>
                <h2 className="mt-3 font-serif text-6xl italic tracking-[-.05em] sm:text-7xl">Women</h2>
                <div className="mt-6 flex items-center gap-3 text-sm font-bold">
                  Explore collection
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg text-fuchsia-700 transition group-hover:translate-x-2 group-hover:bg-pink-100">→</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <p className="mt-10 text-center text-xs font-bold uppercase tracking-[.22em] text-slate-400">Free expression · Thoughtful design · Made for now</p>
      </section>
    </main>
  );
};

export default Product;
