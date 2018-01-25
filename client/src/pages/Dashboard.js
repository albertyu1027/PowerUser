import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Container } from "../components/Grid";
import { Redirect, Link } from "react-router-dom";
import Nav from "../components/Nav";

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
      }
    };
  }
  componentDidMount() {
    this.setState(
      {
        userData: this.props.location.state.userData
      },
      function() {
        console.log(this.state);
      }
    );
  }

  renderContent() {
    //Without User Authentication- Redirect Back to Login page
    if (!this.props.location.state) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <Nav />
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
        </div>
      );
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Dashboard;
