import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="section">
      <h2>Login</h2>
      <Link to="/home" className="btn">
        Home
      </Link>
    </section>
  );
};

export default Login;
