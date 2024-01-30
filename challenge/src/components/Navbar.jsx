import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3 fs-4">
      {/* <nav className="navbar bg-body-tertiary px-3 mb-3 fs-4"> */}
        <NavLink to="/" className="navbar-brand fs-3">
          <h1>Enkhbat B</h1>
        </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work" className="nav-link">
              Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact Me
            </NavLink>
          </li>
        </ul>
      {/* </nav> */}
    </nav>
  );
};

export default Navbar;
