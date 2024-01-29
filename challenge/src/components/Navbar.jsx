import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary px-3 mb-3 fs-4">
      <NavLink to="/" className="navbar-brand fs-3">
        <h1>Enkhbat B</h1>
      </NavLink>
    </nav>
  );
};

export default Navbar;
