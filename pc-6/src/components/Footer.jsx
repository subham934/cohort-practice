import React from 'react';
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Footer = () => {
  const data = useContext(ThemeDataContext);
//   const { theme, setTheme } = useContext(ThemeDataContext);

  return (
    <div className="foot flex h-[10%] w-full items-center justify-between border-t border-white/20 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 px-8 text-white shadow-[0_-8px_30px_rgba(15,23,42,0.25)]">
      <h1 className="text-2xl font-bold uppercase tracking-[0.2em] text-indigo-200">
        Footer
      </h1>
      {data.theme}
      <button
        onClick={() => {
          if (data.theme == 'Light') {
            data.setTheme('Dark');
          } else {
            data.setTheme('Light');
          }
        }}
        className="cursor-pointer rounded-full border border-indigo-300/40 bg-white/10 px-5 py-2 font-semibold tracking-wide text-indigo-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white/20 hover:shadow-indigo-500/20 active:translate-y-0"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Footer;
