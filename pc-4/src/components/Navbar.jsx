import React from 'react';

const Navbar = ({ children, brand }) => {
  return (
    <div className="h-[10vh] w-full bg-emerald-200 flex justify-between items-center px-5">
      {children}
      <h1 className="text-3xl text-pink-500 font-bold">{brand}</h1>
    </div>
  );
};

export default Navbar;
