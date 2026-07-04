import React from 'react';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar brand={'Minarva'}>
        <h1 className="text-4xl font-bold text-purple-700">Navbar</h1>
      </Navbar>

      <Sections>
        <h1 className=" text-3xl text-emerald-500">Hulk Smash</h1>
        <h2 className=" text-3xl text-emerald-500">Avenger Assemble</h2>
      </Sections>

      <Footer/>
    </div>
  );
};

export default App;
