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

    //newdata will be API call to upload model
    // var newdata = [133,411,411,411,411,411,411,411,411, 411,411,411];

    // var newdata2 = {label: "Albert", backgroundColor: "#433FBF", data: newdata};
    // var what = (this.state.chartData.datasets[0].data);
    // var what2= {label: this.state.chartData.datasets[0].label,
    //             backgroundColor: "#433FBF", 
    //             data: newdata}
    // console.log(what);
    // console.log(what2);
    // console.log(what = newdata.slice(0));
    
  // this.setState = update(this.state, {
  // chartData: {datasets: {$splice: [[0, 0, newdata2]]}}
  // });

    // this.setState = update(this.state.chartData.datasets, {0: {data: {$push:
    // newdata
    // }}});
    // // this.setState= this.state.chartData.datasets[0].data.splice(0,0, newdata)
    // console.log(this.setState)
    // console.log(this.state)


//   function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }
  }

  render() {
    console.log('this.props of Chart: ', this.props)
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
