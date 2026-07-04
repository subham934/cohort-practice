import React from 'react'
import {Routes, Route} from 'react-router'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Courses from './pages/Courses';
import Men from './pages/Men';
import Women from './pages/Women';
import RandomAbout from './pages/RandomAbout';
import Cohort1 from './pages/Cohort1';
import AnyCourse from './pages/AnyCourse';
import CourseDetail from './pages/CourseDetail';


const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/courses" element={<Courses/>} />

        {/* Nested Routes */}
        <Route path="/products/men" element={<Men/>} />
        <Route path="/products/women" element={<Women/>} />

        {/* Dynamic Route */}
        <Route path="/about/:random" element={<RandomAbout/>} />

        {/* Nested Routes */}
        <Route path="/courses/cohort1" element={<Cohort1/>} />

        {/* Dynamic Route */}
        <Route path="/courses/:ID" element={<AnyCourse/>} />

        {/* Nested Dynamic Route */}
        <Route path="/courses/:ID/detail" element={<CourseDetail/>} />
      </Routes>
    </div>
  )
}

export default App;

