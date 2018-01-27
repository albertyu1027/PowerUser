import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Albert",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 488, 150, 230, 600, 800, 599, 488, 388, 288]
          },
          {
            label: "Kaylynn",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734, 170, 130, 400, 600, 299, 588, 188, 988]
          },
          {
            label: "Bishr",
            backgroundColor: "#C14242",
            data: [200, 399, 459, 500, 150, 260, 600, 800, 599, 488, 388, 288]
          },
          {
            label: "Jeff",
            backgroundColor: "#433FBF",
            data: [100, 250, 477, 650, 150, 230, 600, 740, 599, 488, 388, 288]
          }
        ]
      }
    };
  }

  //need to add a function to refresh the chart.

  addFriend = event => {
    var searchEmail = prompt("What is your friend's email address?");
    console.log(searchEmail);
  };

  // sumThings = event => {
  //   for (var i=0; i<4; i++){
  //     {this.state.chartData.datasets[i].data}
  //   }

  // }
  componentDidMount() {
    //User data is this.props.user
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Container>
          <div className="chart">
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Compete With Your Friends!{" "}
            </h1>
            <Bar data={this.state.chartData} options={{}} />

            <br />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={this.addFriend}
                >
                  Add A Friend!
                </button>
              </div>
              <br />
              <h2> Leaderboard </h2>
              <ul>First Place 😎 - {this.state.chartData.datasets[1].label}</ul>
              <ul>
                Second Place 😇 - {this.state.chartData.datasets[2].label}
              </ul>
              <ul>Third Place 😅 - {this.state.chartData.datasets[0].label}</ul>
              <ul />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Chart;
