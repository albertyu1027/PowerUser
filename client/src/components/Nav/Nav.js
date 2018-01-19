import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-inverse sticky-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/dash" className="navbar-brand">
          Home
        </Link>

        <Link to="/upload" className="navbar-brand">
          Upload
        </Link>

        <Link to="/frd" className="navbar-brand">
          Compete
        </Link>
        <Link to="/login" className="navbar-brand">
          Login
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
