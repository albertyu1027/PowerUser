import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import API from "../utils/API";

var shards_clr = {
  blue: "#007bff",
  red: "#c4183c",
  green: "#17c671",
  teal: "#00b8d8"
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      displayTitle: true,
      displayLegend: true,
      legendPosition: 'bottom'
    };
  }

  addFriend = () => {
    var searchEmail = prompt("What is your friend's email address?");

    if (!searchEmail) {
      alert("Please enter a valid email");
      return;
    }
    //AJAX call
    API.getUsername(searchEmail)
      .then(res => {

        var frdCostArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var friend_data = res.data;

        var new_friend_data = {
          label: null,
          backgroundColor: "rgba(255,99,132,0.6)",
          data: null
        };

        friend_data.map((month) => {
          new_friend_data.label = month.username;
          frdCostArr[month.date] = month.cost;
        });

        new_friend_data.data = frdCostArr;

        this.setState({
          datasets: this.state.chartData.datasets.push(new_friend_data)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {

    API.getUpload(this.props.user._id)
      .then(res => {

        var costArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var user_data = res.data;

        user_data.map((month) => {
          costArr[month.date] = month.cost;
        });

        this.setState({
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
                backgroundColor: shards_clr.blue,
                data: costArr
              }
            ]
          }
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-8">
            <div className="chart">
              <Bar data={ this.state.chartData } options={ { title: { display: true, text: 'Spend Less Than Your Friends', fontSize: 30 }, legend: { display: this.props.displayLegend, position: this.props.legendPosition } } } />
              <div style={ { display: "flex", justifyContent: "center" } }>
                <button type="button" className="btn btn-outline-success" onClick={ this.addFriend }>
                  Compare with a Friend!
                </button>
              </div>
              <br />
            </div>
          </div>
          <div className="col-md-4">
            <h2>LEADERBOARD</h2>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Place</th>
                  <th scope="col">Name</th>
                  <th scope="col">Energy Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Albert</td>
                  <td>$1000</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Kaylynn</td>
                  <td>$2000</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Adham</td>
                  <td>$3000</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Jeff</td>
                  <td>$4000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    )
  }
}

export default Chart;
