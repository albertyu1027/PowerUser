import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
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
      state: "",
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
    axios
      .post("/auth/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("youre good");
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
      <Container fluid>
        <div className="SignupForm">
          <Form>
            <FormGroup
              controlId="formBasicText"
              // validationState={this.getValidationState()}
            >
              <h1>Signup form</h1>

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
                  <i className="fa fa-bed" />
                </span>
                <input
                  type="text"
                  name="City"
                  className="form-control"
                  placeholder="City"
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
                  name="State"
                  className="form-control"
                  placeholder="State"
                  value={this.state.state}
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

              <div className="input-group with-addon-icon-left">
                <span className="input-group-addon">
                  <i className="fa fa-unlock-alt" />
                </span>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.handleSubmit}
              >
                Sign up
              </button>
            </FormGroup>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignupForm;
