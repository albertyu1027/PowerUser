import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = props => (
  <nav className="navbar navbar-inverse sticky-top">
    <div className="container-fluid">
      <div className="navbar-header">
        {console.log(props)}
        <button
          to="/dash"
          className="btn btn-info"
          onClick={() => props.changePath("/home")}
        >
          Home
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => props.changePath("/upload")}
        >
          Upload
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => props.changePath("/frd")}
        >
          Compete
        </button>
        <Link to="" className="navbar-brand pull-right">
          Logout
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
