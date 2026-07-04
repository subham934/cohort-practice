import React from 'react';
import { Link } from 'react-router';
const About = () => {
  return (
    <div>
      <h1 className="text">About</h1>
      <div className="link">
        <Link to="/about/detail" className="btn">
          Nested Detail
        </Link>
        <Link to="/about/Dynamicdetail" className="btn">
           Dynamic Detail
        </Link>
      </div>
    </div>
  );
};

export default About;
