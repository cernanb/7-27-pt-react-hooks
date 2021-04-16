import React, { Component } from "react";

export default class FormClass extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  onChange = (e) => {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  };

  onUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    console.log("submitting");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <div>
            <label>Username: </label>
            <input
              onChange={this.onChange}
              type="text"
              name="username"
              value={this.state.username}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              onChange={this.onChange}
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              onChange={this.onChange}
              type="password"
              name="password"
              value={this.state.password}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
