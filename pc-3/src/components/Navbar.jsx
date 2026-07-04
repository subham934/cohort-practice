import React from 'react';
import { NavLink } from 'react-router';
const Navbar = () => {
  return (
    <div className="nav">
      <h1>Navbar</h1>
      <div className="navlink">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
          to={'/courses'}
        >
          Courses
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
