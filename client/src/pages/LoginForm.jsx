import React, { Component } from "react";
// import "./login.css";
import { Redirect, Link } from "react-router-dom";
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import API from "../utils/API";
import { Container } from "../components/Grid";


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedin: false,
      redirectTo: null,
      user: null
    };
    // this.googleSignin = this.googleSignin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // loginUser(username, password) {
  //   API.loginUser({ username, password }).then(response => {
  //     console.log(response);
  //     if (response.status === 200) {
  //       // update the state
  //       this.setState({
  //         loggedIn: true,
  //         user: response.data.user
  //       });
  //     }
  //   });
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    API.loginUser({
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      // console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user,
          redirectTo: "/dash"
        });
      }
    });
  }

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirectTo,
            state: { userData: this.state.user }
          }}
        />
      );
    } else {
      return (
        <div>
          <Container>
            <div className="LoginForm">
              <img
                alt="Power User Img"
                src="./images/power-user-img.png"
                height="300px"
                width="300px"
              />

              <form>
                <div className="input-group with-addon-icon-left">
                  <span className="input-group-addon">
                    <i className="fa fa-user" />
                  </span>
                  <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-group with-addon-icon-left">
                  <span className="input-group-addon">
                    <i className="fa fa-unlock-alt" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button
                  id="submit-userauth"
                  type="button"
                  className="btn btn-outline-success"
                  onClick={this.handleSubmit}
                  disabled={!(this.state.username && this.state.password)}
                >
                  Login
                </button>
              </form>
              <Link to="/signup">
                {" "}
                <p
                  style={{
                    color: "blue",
                    textAlign: "center",
                    marginTop: "10px"
                  }}
                >
                  Not A User? Sign Up Today
                </p>
              </Link>

              {/* <Link to="/auth/google"> */}
              {/* <GoogleButton /> */}
              {/* <img src={googleButton} alt="sign into Google Button" /> */}
              {/* </Link> */}
            </div>
          </Container>
        </div>
      );
    }
  }
}

export default LoginForm;
