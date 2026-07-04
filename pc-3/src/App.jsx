import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Courses from './components/Courses';
import About from './components/About';
import Home from './components/Home';
import MoreAbout from './components/MoreAbout';
import LessAbout from './components/LessAbout';
import AllCourses from './components/AllCourses';
import Kodr from './components/Kodr';
import Kodex from './components/Kodex';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:aboutId" element={<MoreAbout />} />
        <Route path="/about/detail" element={<LessAbout />} />
        {/* <Route path="/courses"  >
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/kodr" element={<Kodr />} />
          <Route path="kodex" element={<Kodex />} />
        </Route> */}
        {/* We can do the above if we want and that would solve the problem of overlap like we saw last time */}

        <Route path="/courses" element={<Courses />}>
          <Route index element={<AllCourses />} />
          <Route path="/courses/kodr" element={<Kodr />} />
          <Route path="kodex" element={<Kodex />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
