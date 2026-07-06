import React, { useState } from 'react'

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className='w-full h-[10%] bg-amber-500 px-4 py-5 font-bold text-2xl uppercase flex justify-between items-center'>
      <h1 className=' bg-purple-500 bg-clip-text text-transparent'>Navbar</h1>

      <h2 className='font-bold font-3xl text-transparent [-webkit-text-stroke:1px_white]'>{theme}</h2>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='bg-black/50 text-white px-4 py-2 rounded-3xl cursor-pointer'>
        Toggle
      </button>
    </div>
  )
}

export default Navbar