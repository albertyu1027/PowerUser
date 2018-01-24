import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Container } from "../components/Grid";
import { Redirect, Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Boston", "Ca", "Lowell"],
        datasets: [
          {
            label: "population",
            data: [617594, 181045, 153060],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(255,99,132,0.6)",
              "rgba(255,99,132,0.6)"
            ]
          }
        ]
      },
      userData: this.props.location.state.userData
    };
  }
  componentDidMount() {
    console.log(this.state);
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Container>
          <div className="chart">
            <Bar
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: "Energy Consumption",
                  fontSize: 25
                }
              }}
            />
            <p>{this.state.user}</p>
          </div>
        </Container>
      );
    }
  }
}

export default Dashboard;
