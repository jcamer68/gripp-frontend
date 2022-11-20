// import React from "react";
import { NavLink } from "react-router-dom";

import * as React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      {/* <Link to="/home">Home</Link> */}
      <NavLink to="/trends">Trends</NavLink>
      <NavLink to="/community">Community</NavLink>
    </nav>
  );
};

export default Navbar;
