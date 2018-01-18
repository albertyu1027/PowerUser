import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['User1', 'User2', 'User3', 'User4', 'User5'],
        datasets:[
          {
            label: 'Users',
            data: [ 7000, 2000, 3000, 6000, 4000 ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)' ]
            }
           ]
          }
      };
    }

    addFriend = event => {
      alert("Friend Added")
    }

    render() {
      return (
        <div className="chart">
            <h1> Compete With Your Friends! </h1>
            <button onClick={this.addFriend}> 
            Add Friends! 
            </button>
            <Bar
            	data={this.state.chartData}
            	options={{}}
            />
        </div>
        )
      }
    }


export default Chart;
