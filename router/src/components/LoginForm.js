import React, { useState, Component } from "react";

class LoginForm extends Component {
  /*  componentDidMount() {
    this.username.current.focus();
  }
 */

  state = {
    account: { username: "", password: "" },
  };

  /*Schema = {
    username: Joi.string().required().email.label("Username"),
  };
 */
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //call the server
    //    const username = this.Username.current.value;
    console.log("Submittled");
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
              value={account.username}
              onChange={this.handleChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
