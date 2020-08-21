import React, { Component } from "react";

import Classes from "./Contact.module.css";

class Contact extends Component {
  state = {
    email: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
    error: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    if (this.submitValidation()) {
      this.setState({ error: "" });
      alert("Submit successfully !");
      this.props.history.replace("/");
    } else {
      this.setState({ error: "Please enter valid email / message" });
    }
  };
  onChangeHandler = (event) => {
    const value = event.target.value;
    const input = { ...this.state[event.target.name] };
    input.value = value;
    const error = this.inputErrorHandler([event.target.name][0], value);
    input.error = error;
    this.setState({ [event.target.name]: input });
  };

  submitValidation = () => {
    return (
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email.value) ||
      this.state.message.value.length > 3
    );
  };
  inputErrorHandler = (name, value) => {
    //check value
    if (name === "email") {
      return /.+@.+\.[A-Za-z]+$/.test(value)
        ? ""
        : "Please enter valid email address!";
    }
    if (name === "message") {
      return value.length < 3 ? "Please enter valid message!" : "";
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form className={Classes.Contact} onSubmit={this.submitHandler}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email.value}
              onChange={this.onChangeHandler}
            />

            <small id="emailHelp" class="text-danger">
              {this.state.email.error}
            </small>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              name="message"
              value={this.state.message.value}
              onChange={this.onChangeHandler}
            ></textarea>
            <small id="messageHelp" class="text-danger">
              {this.state.message.error}
            </small>
          </div>
          <small id="help" class="text-danger" style={{ display: "block" }}>
            {this.state.error}
          </small>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ margin: "7px" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Contact;
