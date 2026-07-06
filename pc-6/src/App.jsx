import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App