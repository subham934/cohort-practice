import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Products', 'Courses'];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-black shadow-lg shadow-violet-500/20">
            L
          </div>
          <div>
            <p className="text-base font-bold leading-none tracking-tight">
              Learnova
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Learn. Build. Grow.
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navItems.map((item, index) => (
            <NavLink
              key={item}
              to={`${item === 'Home' ? '/' : item.toLowerCase()}`}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        <button className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
          Get started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
