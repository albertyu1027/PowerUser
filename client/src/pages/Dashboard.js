import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import API from "../utils/API";

class Dashboard extends Component{

    state = {
      chartData:{
        labels: [1],
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

    loadUpload = () => {
      API.getUploads()
        .then(res => {
          let newlabels = this.state.chartData.labels.slice()
          newlabels.push(100)
          console.log(newlabels)
          this.setState({labels:newlabels})

           // this.setState({ 'labels': this.state.chartData.labels.concat([100])});
           // console.log(this.state.chartData.labels)
         // this.state.chartData.labels[0]=res.data[1].kwh;
         //  //console.log(res.data[1].kwh)
       })
        .catch(err => console.log(err));
    };


    componentDidMount(){
      this.loadUpload()
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



export default Dashboard;
