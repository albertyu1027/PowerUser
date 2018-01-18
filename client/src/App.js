import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './pages/FrdChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart />
      </div>
    );
  }
}

export default App;
