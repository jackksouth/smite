import React, { Component } from 'react'
import logo from '../shared/assets/register.png'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src={logo} alt="" />
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleRegister(this.state);
            history.push('/');
          }}>
            <div className="l-part">
              <h3>Register</h3>
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  class="input-1"
                  value={username}
                  onChange={this.handleChange}
                />
              </label>
              <br />

              <label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="input-2"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  class="input-1"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <button class="button" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
