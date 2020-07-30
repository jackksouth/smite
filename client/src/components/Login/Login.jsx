import React, { Component } from 'react'
import './Login.scss'
import logo from '../shared/assets/login.png'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLogin, history } = this.props;

    return (
      <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src={logo} alt="" className="logo" />
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin(this.state);
            history.push('/')
          }}>
            <div className="l-part">
              <h3>Login</h3>
              <label>
                <input
                  type="text"
                  name="username"
                  className="input-1"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <div className="overlap-text">
                <label>
                  <input
                    type="password"
                    name="password"
                    className="input-2"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <br />
              <button className='button'>Submit</button>
            </div>
          </form>
        </div>
        <div className="sub-content">
          <div className="s-part">
            <a href="/Register">Sign up</a>
          </div>
        </div>
      </div>
    )
  }
}