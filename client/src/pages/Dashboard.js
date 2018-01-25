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
      userData: this.props.location.state.userData,
      redirectTo: "/login"
    };
  }
  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
    if (this.props.location.state) {
      this.setState({
        userData: this.props.location.state.userData
      });
    }
  }

  renderContent() {
    //Without User Authentication- Redirect Back to Login page
    if (!this.props.location.state) {
      return <Redirect to="/login" />;
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

  render() {
    return this.renderContent();
  }
}

export default Dashboard;
