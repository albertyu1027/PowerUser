import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {
  Form,
} from "react-bootstrap";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
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

  emailCheck(emailInput) {
    // console.log(string.length);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
      return true;
    }
  }
  lengthCheck(password) {
    if (password.length > 5) {
      return true;
    }
  }

  checkPassword(pass1, pass2) {
    if (pass1 === pass2 && pass2) {
      return true;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    // TODO - validate!
    API.signUpNewUser({
      username: this.state.username,
      password: this.state.password,
      city: this.state.city,
      stateLocation: this.state.stateLocation,
      firstName: this.state.firstName
    }).then(response => {
      console.log(response);
      if (!response.data.errmsg) {
        console.log("you're good");
        this.setState({
          redirectTo: "/login"
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
            <h1
              style={{
                color: "blue",
                textAlign: "center",
                marginBottom: "30px"
              }}
            >
              Sign Up!!!
            </h1>

            <div className="input-group with-addon-icon-left">
              <span className="input-group-addon">
                <i className="fa fa-address-card" />
              </span>
              <input
                type="email"
                name="username"
                className={
                  this.emailCheck(this.state.username)
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Enter Your Email"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <div className="valid-feedback">
                The Force Is Strong With This One...
              </div>
              <div className="invalid-feedback">
                Your Powers Are Weak Old Man!
              </div>
            </div>

            <div className="input-group with-addon-icon-left">
              <span className="input-group-addon">
                <i className="fa fa-user" />
              </span>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Enter Your First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <div className="valid-feedback">
                The Force Is Strong With This One...
              </div>
              <div className="invalid-feedback">
                Your Powers Are Weak Old Man!
              </div>
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
                className={
                  this.lengthCheck(this.state.password)
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Enter Your Password"
              />
              <div className="valid-feedback">Winter Is Coming</div>
              <div className="invalid-feedback">
                We'll Need Something Stronger
              </div>
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
                className={
                  this.checkPassword(
                    this.state.password,
                    this.state.confirmPassword
                  )
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Confirm Your Password"
              />
              <div className="valid-feedback">
                You Have Chosen Wisely. Your Passwords Match!
              </div>
              <div className="invalid-feedback">
                You Have Chosen Unwisely. Your Passwords Do Not Match!
              </div>
            </div>
            <button
              id="signup-button"
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleSubmit}
              disabled={
                !(this.state.username &&
                  this.state.password &&
                  this.state.confirmPassword &&
                  this.state.city &&
                  this.state.stateLocation &&
                  this.checkPassword(
                    this.state.password,
                    this.state.confirmPassword
                  ) &&
                  this.emailCheck(this.state.username),
                  this.lengthCheck(this.state.password))
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
