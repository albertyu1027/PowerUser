import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Chart from './pages/FrdChart';
import UserDash from './pages/UserDash';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Chart />
//         <UserDash />
//       </div>
//     );
//   }
// }

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Chart} />
        <Route exact path="/user" component={UserDash} />
      </Switch>
    </div>
  </Router>;

export default App;
