// import React from "react";
import { NavLink } from "react-router-dom";

import * as React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      {/* <Link to="/home">Home</Link> */}
      <NavLink
        to="/trends"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Trends
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Community
      </NavLink>
    </nav>
  );
};

export default Navbar;
