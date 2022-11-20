import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h2>Error</h2>
      <p>Page not found</p>
      <Link to="/" className="btn">
        Back to Login
      </Link>
    </section>
  );
};

export default Error;
