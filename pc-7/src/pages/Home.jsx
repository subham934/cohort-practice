import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen flex-col gap-2">
      <h1 className='bg-amber-300 px-5 py-2 text-3xl font-bold rounded-2xl'>This is Home Page</h1>

      <button
        className="bg-black/50 text-white px-4 py-2 rounded-3xl cursor-pointer"
        onClick={() => {
          navigate('/products');
        }}
      >
        Explore All Products
      </button>
    </div>
  );
};

export default Home;
