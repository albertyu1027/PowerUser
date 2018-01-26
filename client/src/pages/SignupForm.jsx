import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      city: "",
      stateLocation: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return "success";
  //   else if (length > 5) return "warning";
  //   else if (length > 0) return "error";
  // }
  handleSubmit(event) {
    event.preventDefault();
    // TODO - validate!
    API.signUpNewUser({
      username: this.state.username,
      password: this.state.password,
      city: this.state.city,
      stateLocation: this.state.stateLocation
    }).then(response => {
      console.log(response);
      if (!response.data.errmsg) {
        console.log("you're good");
        this.setState({
          redirectTo: "/dash"
        });
      } else {
        console.log("duplicate");
      }
    });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <Container>
        <div className="SignupForm">
          <Form>
            {/* <FormGroup
              controlId="formBasicText"
              // validationState={this.getValidationState()}
            > */}
            <h1>Sign Up!!!</h1>

            <div className="input-group with-addon-icon-left">
              <span className="input-group-addon">
                <i className="fa fa-user" />
              </span>
              <input
                type="email"
                name="username"
                className="form-control"
                placeholder="Enter Your Email"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group with-addon-icon-left">
              <span className="input-group-addon">
                <i className="fa fa-bed" />
              </span>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Enter Your City"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group with-addon-icon-left">
              <span className="input-group-addon">
                <i className="fa fa-home" />
              </span>
              <input
                type="text"
                name="stateLocation"
                className="form-control"
                placeholder="Enter Your State"
                value={this.state.stateLocation}
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
                placeholder="Enter Your Password"
              />
            </div>

            <div className="input-group with-addon-icon-left">
              <span className="input-group-addon">
                <i className="fa fa-unlock-alt" />
              </span>
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Confirm Your Password"
              />
            </div>
            <button
              id="signup-button"
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleSubmit}
              disabled={
                !(
                  this.state.username &&
                  this.state.password &&
                  this.state.confirmPassword &&
                  this.state.city &&
                  this.state.stateLocation
                )
              }
            >
              Sign up
            </button>
            {/* </FormGroup> */}
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignupForm;
