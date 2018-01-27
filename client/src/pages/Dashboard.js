import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Container } from "../components/Grid";
import { Redirect, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Upload from "./Upload";
import Chart from "./FrdChart";

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
      pathTo: null
    };
    this.changePath = this.changePath.bind(this);
  }
  componentDidMount() {
    //If there is user data assign it to this.state.userData
    if (this.props.location.state) {
      this.setState(
        {
          userData: this.props.location.state.userData
        },
        function() {
          console.log(this.state);
        }
      );
    }
  }
  changePath(text) {
    console.log(text);
    this.setState({
      pathTo: text
    });
  }

  renderContent() {
    //Without User Authentication- Redirect Back to Login page
    if (!this.props.location.state) {
      return <Redirect to="/login" />;
    }
    if (this.state.pathTo == "/frd") {
      return (
        <div>
          <Nav changePath={this.changePath} />
          <Chart user={this.state.userData} />
        </div>
      );
    }
    if (this.state.pathTo == "/upload") {
      return (
        <div>
          <Nav changePath={this.changePath} />

          <Upload user={this.state.userData} />
        </div>
      );
    } else {
      //Otherwise return the chart data
      return (
        <div>
          <Nav changePath={this.changePath} />
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
