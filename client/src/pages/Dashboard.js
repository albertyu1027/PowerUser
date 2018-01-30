import React, { Component } from "react";
import { Bar} from "react-chartjs-2";
import { Container } from "../components/Grid";
import { Redirect, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Upload from "./Upload";
import Chart from "./FrdChart";
import API from "../utils/API";


const data = [133,411,411,411,411,411,300,400,411, 411,411,411];
const frdData1 = [133,411,411,411,411,411,300,400,411, 411,411,411];
const frdData2 = [0,0,0,0,0,0,0,0,0,0,0,0];
const frdData3 = [0,0,0,0,0,0,0,0,0,0,0,0];


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      KwhChartData:{},
      CostChartData:{},
      pathTo: null
    };
    this.changePath = this.changePath.bind(this);
  }

    getChartData(userData){
    //Ajax call
    API.getUpload(userData)
      .then(res => {
        let datasets = [];

        let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let sortedMonthNames = [];
        let months = [];
        let bills = [];
        let kwh = [];
        let backgroundColor = [
          'rgba(255,99,132,0.6)',
          'rgba(255, 0, 0, 0.3)',
          'rgba(0, 255, 0, 0.3)',
          'rgba(0, 0, 255, 0.3)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)',
          'rgba(255,99,132,0.6)'
        ];

        console.log(res.data)

        // loop throuh month data
        for (var i = 0; i < res.data.length; i++) {
          months.push(res.data[i].date);
        }
        console.log(months)
          months.sort();

          // loop throuh sorted month data
          for (let i = 0; i < months.length; i++) {
            sortedMonthNames.push(monthName[months[i]]);
          }

          console.log(sortedMonthNames);

        // loop throuh cost data
        for (let i = 0; i < res.data.length; i++) {
          bills.push(res.data[i].cost);
        }

        // loop throuh kwh data
        for (let i = 0; i < res.data.length; i++) {
          kwh.push(res.data[i].kwhUsage);
        }

        // loop throuh cost data
        for (let i = 0; i<months.length; i++){
          var dataset = {
            label:sortedMonthNames[i],
            backgroundColor: backgroundColor[i],
            data: [kwh[i]]
          };
          datasets.push(dataset);
        }
        console.log(datasets);
        console.log(res.data);
        console.log(months);
        this.setState({
          KwhChartData:{
            labels: sortedMonthNames,
            datasets: datasets
          },
          CostChartData:{
            labels: sortedMonthNames,
            datasets:[
              {
                label:'population',
                data:bills,
                backgroundColor:backgroundColor
              }
            ]
          }
        });

      })
      .catch(err => console.log(err));
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
          console.log(this.state.userData._id);
          this.getChartData(this.state.userData._id);
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
          <Chart user={this.state.userData}
                FrdData={this.state.chartData}
                // initialData={data}
                addfriend1={frdData1}
                // addfriend2={frdData2}
                // addfriend3={frdData3}
                />

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
           data={this.state.KwhChartData}
           style={{display: 'flex', justifyContent: 'center'}}
           options={{
             title:{
               display: true,
               text:'Engergy Consumption',
               fontSize: 25
             }
           }}
        />
        <Bar
           data={this.state.CostChartData}
           options={{
             title:{
               display: true,
               text:'Cost',
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