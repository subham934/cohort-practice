import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from './UserContext';

const Sections = () => {
    const userData = useContext(UserDataContext);
  return (
    <div className='h-[90vh] text-black bg-zinc-600 flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>All Sections</h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            {userData.map((elem, id) => {
                return (
                    <div key={id} className='w-75 rounded-2xl bg-amber-100  '>
                        <h1 className='text-blue-500 font-extrabold text-center mt-2'>{elem.name}</h1>
                        <h2 className='text-amber-900 text-center'>{elem.age}</h2>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sections