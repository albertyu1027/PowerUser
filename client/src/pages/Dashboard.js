import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import API from "../utils/API";

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      KwhChartData:{},
      CostChartData:{}
    }
  }

  getChartData(userData){
    //Ajax call
    API.getUploads()
      .then(res => {
        let datasets = [];
        let dataset = {
          label:"",
          backgroundColor: "",
          data: []
        }
        let months = [];
        let bills = [];
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
        // loop throuh kwh data
        for (var i = 1; i < res.data.length; i++) {
          months.push(res.data[i].kwh);
        }
          months.sort()
        // loop throuh cost data
        for (var i = 1; i < res.data.length; i++) {
          bills.push(res.data[i].bill);
        }
        console.log(res.data);
        console.log(months);
        this.setState({
          KwhChartData:{
            labels: months,
            datasets:[
              {
                label:'population',
                data:bills,
                backgroundColor:backgroundColor
              }
            ]
          },
          CostChartData:{
            labels: months,
            datasets:[
              {
                label:'population',
                data:bills,
                backgroundColor:backgroundColor
              }
            ]
          }
        })

      })
      .catch(err => console.log(err));
  }


  componentDidMount(){
      this.getChartData();
    }


  render(){
    return(
      <div className="chart">
        <Bar
	         data={this.state.KwhChartData}
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
    )
  }
}



export default Dashboard;
