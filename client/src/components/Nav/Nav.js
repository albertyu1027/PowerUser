import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = props => (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src="images/power-user-img.png" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse pull-right" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <button to="/dash"
    className="btn btn-info pull-right"
    onClick={() => props.changePath("/home")}
  >Home</button>
  <button
    className="btn btn-outline-warning pull-right"
    onClick={() => props.changePath("/upload")}
  >Upload</button>
  <button
    className="btn btn-outline-success pull-right"
    onClick={() => props.changePath("/frd")}
  >Compete</button>
  <Link to="" className="navbar-brand pull-right">
    Logout
  </Link>
    </div>
  </div>
</nav>

);

export default Nav;
