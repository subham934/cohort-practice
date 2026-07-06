import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Section = () => {
  
    let data = useContext(ThemeDataContext);

    return (
    <div className='w-full h-[80%] bg-blue-400'>
        <h2>Section</h2>
        <p>{data.theme}</p>
    </div>
  )
}

export default Section