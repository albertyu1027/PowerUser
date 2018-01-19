import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { Link } from "react-router-dom";

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Albert",
            backgroundColor: "#3e95cd",
            data: [133,221,783,488,150,230,600,800,599,488,388,288]
          }, {
            label: "Kaylynn",
            backgroundColor: "#8e5ea2",
            data: [408,547,675,734,170,130,400,600,299,588,188,988]
          },
          {
            label: "Bishr",
            backgroundColor: "#C14242",
            data: [200,399,459,500,150,260,600,800,599,488,388,288]
          },
          {
            label: "Jeff",
            backgroundColor: "#433FBF",
            data: [100,250,477,650,150,230,600,740,599,488,388,288]
          }
          ]
        },
      };
    }

    addFriend = event => {
      alert("Friend Added")
    }

    // sumThings = event => {
    //   for (var i=0; i<4; i++){
    //     {this.state.chartData.datasets[i].data}
    //   }

    // }

    render() {
      return (
        <div className="chart">
            <h1> Compete With Your Friends! </h1>
            <Bar
            	data={this.state.chartData}
            	options={{}}
            />

            <br />
            <button onClick={this.addFriend}>
              Add A Friend!
            </button>
            <br />

            <h2> Leaderboard </h2>
            <ul>First Place 😎 - {this.state.chartData.datasets[1].label}</ul>
            <ul>Second Place 😇 - {this.state.chartData.datasets[2].label}</ul>
            <ul>Third Place 😅 - {this.state.chartData.datasets[0].label}</ul>
            <ul></ul>

        </div>
        )
      }
    }


export default Chart;
