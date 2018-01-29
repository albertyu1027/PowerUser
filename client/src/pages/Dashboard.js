import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Container } from "../components/Grid";
import { Redirect, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Upload from "./Upload";
import Chart from "./FrdChart";
import API from "../utils/API";

const data = [133,411,411,411,411,411,300,400,411, 411,411,411];
const frdData1 = [0,0,0,0,0,0,0,0,0,0,0,0];
const frdData2 = [0,0,0,0,0,0,0,0,0,0,0,0];
const frdData3 = [0,0,0,0,0,0,0,0,0,0,0,0];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Boston", "Ca", "Lowell"],
        datasets: [
          {
            label: "population",
            data: [617594, 181045, 153060],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(255,99,132,0.6)",
              "rgba(255,99,132,0.6)"
            ]
          }
        ]
      },
      pathTo: null
    };
    this.changePath = this.changePath.bind(this);
  }

  componentDidMount() {

  var costData = []
  API.getUploads()
  .then(res => {
    for (var i=0; i<res.data.length; i++){
    costData.push(res.data[i].cost)
    console.log(costData)
    }

  })

  .catch(err => console.log(err));


    //If there is user data assign it to this.state.userData
    if (this.props.location.state) {
      this.setState(
        {
          userData: this.props.location.state.userData
        },
        function() {
          console.log(this.state);
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
                initialData={data} 
                addfriend1={frdData1}
                addfriend2={frdData2}
                addfriend3={frdData3}/>
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
                data={this.state.chartData}
                options={{
                  title: {
                    display: true,
                    text: "Energy Consumption",
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
