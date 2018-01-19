import React, { Component } from "react";
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Chart from "./pages/FrdChart";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Nav from "./components/Nav";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/frd" component={Chart} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </div>
  </Router>
);

<div className="App">
  <Chart />
</div>;

export default App;
