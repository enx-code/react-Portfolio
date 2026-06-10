import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleGlowMove = (event) => {
    const link = event.currentTarget;
    const rect = link.getBoundingClientRect();

    link.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    link.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  const getNavLinkClass = ({ isActive }) =>
    `nav-link navbar-glow-link${isActive ? " active" : ""}`;

  return (
    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 fs-4">
        <NavLink to="/" className="navbar-brand fs-3">
          <h1>Enkhbat B</h1>
        </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className={getNavLinkClass} onMouseMove={handleGlowMove}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={getNavLinkClass} onMouseMove={handleGlowMove}>
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work" className={getNavLinkClass} onMouseMove={handleGlowMove}>
              Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={getNavLinkClass} onMouseMove={handleGlowMove}>
              Contact Me
            </NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
