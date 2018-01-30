import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import update from 'react-addons-update';

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
            label: this.props.user.local.username,
            backgroundColor: "#3e95cd",
            data: this.props.initialData,
          },
          {
            label: "",
            backgroundColor: "#8e5ea2",
            data: this.props.addfriend1,
          },
          {
            label: "",
            backgroundColor: "#C14242",
            data: this.props.addfriend2,
          },
          {
            label: "",
            backgroundColor: "#433FBF",
            data: this.props.addfriend3,
          }
        ]
      }
    };
  }

  //need to add a function to refresh the chart.



  componentDidMount() {
    //User data is this.props.user
    console.log(this.props);
  }

  render() {
    console.log('this.props of Chart: ', this.props)
    return (
      <div>
        <Container>
          <div className="chart">
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Spend Less than Your Friends!{" "}
            </h1>
            <Bar data={this.state.chartData} options={{}} />

            <br />

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
            <div style={{ display: "flex", justifyContent: "center" }}>

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
