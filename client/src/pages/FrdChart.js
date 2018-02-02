// Import React
import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
// Import Nav component
import Nav from "../components/Nav";
// Import custom React 
import API from "../utils/API";

// Object with colors for each friend on the chart
var shards_clr = ["#007bff","#c4183c","#17c671","#00b8d8"];

// Chart component
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      displayTitle: true,
      displayLegend: true,
      legendPosition: 'bottom',
      // Initialize leaderboard
      leaderboard: {},
      // Sorted friends array
      sortedFriends: []
    };
  }

  addFriend = () => {
    // Store the email the email that is entered
    var searchEmail = prompt("What is your friend's email address?");
  
    // Alert the user if they do not enter an email
    if (!searchEmail) {
      alert("Please enter a valid email");
      return;
    }

    // AJAX call
    API.getUsername(searchEmail)
      .then(res => {
        var frdCostArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var friend_data = res.data;

        // Alert if the user does not exist in Mongo
        if (friend_data.length === 0) {
          alert("User is not in the database");
          return;
        }

        // Each time a user is added the bar-chart color is removed from the array. The user can not add any more friends when the array reaches a length of zero
        if (shards_clr.length === 0) {
          alert("You have reached the max number of friends");
          return;
        }
  
        // Setup a temporary new friend obect. This is pushed to the React state at the end of this function
        var new_friend_data = {
          label: null,
          backgroundColor: shards_clr[shards_clr.length-1],
          data: null
        };
  
        // Reset the leaderboard each time the API call runs. This prevents user's from appearing in the leaderboard multiple times
        this.state.leaderboard[res.data[0].username] = 0;
  
        // Loop/Map over the res.data array (aka friend_data)
        friend_data.map( (month) => {
          // Add the friend's username to the chart
          new_friend_data.label = month.username;
          // Update each month on the chart with the cost of each month
          frdCostArr[month.date] = month.cost;
          // Update the state.leaderboard array with the friend/user's total for the year
          this.state.leaderboard[month.username] += month.cost;
        });
  
        // Update the data property with the array of cost data for the bar chart
        new_friend_data.data = frdCostArr;
  
        // Update React state for the bar chart
        this.setState({
          datasets: this.state.chartData.datasets.push(new_friend_data)
        });

        // Call the sortUsers() method to sort the users and update the leaderboard
        this.sortUsers();
        // Remove a color from the bar chart array
        shards_clr.pop();
  
      })
      .catch((err) => {
        // Log any errors from the API response
        console.log(err);
      });
  }
  
  sortUsers() {

    // Store the state.leaderboard and state.sortedFriends arrays in variables. This is just to keep the code clean.
    var leaderboard = this.state.leaderboard;
    var sortedFriends = this.state.sortedFriends;
    // Empty the friends tabel each time sortUsers is run (prevents duplication of the table rows)
    var friendTable = "";
    // Clear out the sorted array, also prevents any duplication
    sortedFriends = [];

    // Stored the leaderboard object into an array, so we can sort the users by their cost/values
    for (var friend in leaderboard) {
      sortedFriends.push([friend, leaderboard[friend]]);
    }
    // Sort the users by their cost/values
    sortedFriends.sort(function(a, b) {
      return a[1] - b[1];
    });

    // Build the leaderboard table rows
    sortedFriends.map( (friend, index) => {
      friendTable += `<tr>
      <th>${index + 1}</th>
      <td>${friend[0]}</td>
      <td>$${friend[1]}</td>
      </tr>`;
    });

    // Update the table on the user's screeen
    document.getElementById("leaderboard_list").innerHTML = friendTable;

  }
  
  componentDidMount() {
    // Reset the colors array each time teh component loads (incase the load is not a page refresh, but navigating from page to page)
    shards_clr = ["#007bff","#c4183c","#17c671","#00b8d8"];

    // Get the user's data from MongoDB
    API.getUpload(this.props.user._id)
      .then(res => {
        // Initialize 12months of rows for each user. This is incase they have less than 3 months of data
        var costArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // Store the API response (in this case user's uploads) in the user_data variable
        var user_data = res.data;
        // Set the user's total cost to zero
        var total_cost = 0;
        // Add the user to the state.leaderboard object
        this.state.leaderboard[res.data[0].username] = 0;
  
        // Loop/Map over the res.data array (aka user data)
        user_data.map((month) => {
          // Add the cost for each month to the chart
          costArr[month.date] = month.cost;
          // Update the user's total for all months
          this.state.leaderboard[month.username] += month.cost;
        });
  
        // Initialize the state when the page loads
        this.setState({
          chartData: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [{
              label: this.props.user.local.username,
              backgroundColor: shards_clr[shards_clr.length-1],
              data: costArr
            }]
          }
        });
        // Remove the user's color from the color array.
        shards_clr.pop();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Render the component on the user's screen
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
              <tbody id="leaderboard_list">
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    )
  }
}

export default Chart;
