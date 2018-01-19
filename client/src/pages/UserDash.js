import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class UserDash extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Boston', 'Ca', 'Lowell'],
        datasets:[
          {
            label:'population',
            data:[
              617594,
              181045,
              153060
            ],
            backgroundColor:[
              'rgba(255,99,132,0.6)',
              'rgba(255,99,132,0.6)',
              'rgba(255,99,132,0.6)'
            ]
          }
        ]
      }
    }
  }



  render(){
    return(
      <div className="chart">
        <Bar
	         data={this.state.chartData}
	         options={{
             title:{
               display: true,
               text:'Engergy Consumption',
               fontSize: 25
             }
           }}
        />
      </div>
    )
  }
}

export default UserDash;
