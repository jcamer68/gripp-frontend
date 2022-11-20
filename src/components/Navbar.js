// import React from "react";
import { Link } from "react-router-dom";

import * as React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {/* <Link to="/home">Home</Link> */}
      <Link to="/trends">Trends</Link>
    </nav>
  );
};

export default Navbar;
