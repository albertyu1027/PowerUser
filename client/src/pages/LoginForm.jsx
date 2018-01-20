import React, { Component } from "react";
// import "./login.css";
import { Redirect, Link } from "react-router-dom";
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import googleButton from "../components/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";
import { Container } from "../components/Grid";
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
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

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    this.props._login(this.state.username, this.state.password);
    this.setState({
      redirectTo: "/"
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
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
                  type="text"
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
              >
                Login
              </button>
            </form>

            <Link to="/auth/google">
              {/* <GoogleButton /> */}
              <img src={googleButton} alt="sign into Google Button" />
            </Link>
          </div>
        </Container>
      );
    }
  }
}

export default LoginForm;