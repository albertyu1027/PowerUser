import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import API from "../utils/API";


class Chart extends Component{
  constructor(props) {
    super(props);
      this.state = {
      chartData:{},
    };  
  }

    addFriend = event => {
    var searchEmail = prompt("What is your friend's email address?");
    console.log(searchEmail);

    //AJAX call
    API.getUploads()
    .then(res => {
        console.log(res.data)
        let frdCostArr = []

        for (var i =0; i<res.data.length; i++) {
        frdCostArr.push(res.data[i].cost)
        }
        console.log(frdCostArr)

        var sum = frdCostArr.reduce(add, 0);

        function add(a, b) {
        return a + b;
        }

        console.log(sum)
        
        if (searchEmail == res.data[0].username) {
        alert("hi");
        }
        else {
        alert("Sorry, "+ searchEmail + " is not your friend...yet");
        return;
        }

        var newData = {
          label: res.data[0].username,
          backgroundColor: "rgba(255,99,132,0.6)",
          data: frdCostArr
        }
        console.log(newData)

        this.setState({datasets: this.state.chartData.datasets.push(newData)});
        
        console.log(this.state)

    })

    .catch(err => console.log(err));

    };


componentDidMount(){

  console.log(this.state)
  console.log(this.props)

  API.getUploads()
  .then(res => {
        console.log(res.data)
        var costArr = []

        for (var i =0; i<res.data.length; i++) {
          costArr.push(res.data[i].cost)
        }
        console.log(costArr)

        this.setState({
          chartData:{
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
                backgroundColor: "#8e5ea2",
                data: costArr
              }
              ]
          }
        });


    })

    .catch(err => console.log(err));
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom'
  }

  render() {
    return(
      <div className = "chart">
        <Bar 
        data={this.state.chartData} 
        options={{
          title:{
            display: this.props.displayTitle,
            text: 'Spend Less Than Your Friends',
            fontSize: 30
          },
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition
          }
        }} />
        <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.addFriend}>
          Compare with a Friend!
        </button>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>

              <h2> Leaderboard </h2>
              <ul>First Place 😎 - You Spent____ this year</ul>
              <ul>
                Second Place 😇 - </ul>
              <ul>Third Place 😅 - </ul>
              <ul />
            </div>

      </div>
      )
  }
}

export default Chart;
