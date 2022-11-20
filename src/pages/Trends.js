import React from "react";
import { Link } from "react-router-dom";

const Trends = () => {
  return (
    <section className="section">
      <h2>Trends</h2>
      <Link to="/" className="btn">
        Change User
      </Link>
      <Link to="/home" className="btn">
        Home
      </Link>
    </section>
  );
};

export default Trends;
