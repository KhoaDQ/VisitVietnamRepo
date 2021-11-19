import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:"",
      errorMessage:"",
      isAdmin: false,
      username: "",
      password: "",
      token: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }
  // process.env.REACT_APP_API
  async handleSubmit(e) {
    e.preventDefault();

    const data = {
      Email: e.target.Username.value,
      Password: e.target.Password.value,
    };

    await axios
      .post(process.env.REACT_APP_API + "/auth/login", data)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ token: res.data.token });
          this.setState({ user: res.data.user });
        } else {
          this.setState({ errorMessage: res.data.error });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
    if (this.state.token != null && this.state.user.Role === "Admin") {
      this.setState({ isAdmin: true });
      localStorage.setItem("token", this.state.token);
      setTimeout(() => {
        this.afterSubmit();
      }, 100)
    }
  }

  afterSubmit() {
    this.props.handleAdminLogin(this.state.isAdmin);
  }

  usernameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <div id="layoutAuthentication" className="bg-primary">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-4">
                          Login
                        </h3>
                        {this.state.errorMessage !== null && this.state.errorMessage !== "" &&
                          <div className="text-center text-danger">Error: {this.state.errorMessage}</div>}
                      </div>
                      <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              type="text"
                              placeholder="name@example.com"
                              name="Username"
                              onChange={this.usernameChange}
                            />
                            <label>Email address</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                              name="Password"
                              onChange={this.passwordChange}
                            />
                            <label>Password</label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label className="form-check-label">
                              Remember Password
                            </label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Button
                              variant="primary"
                              className="btn btn-primary"
                              type="submit"
                            >
                              Login
                            </Button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small">
                          <a href="/register.html">Need an account? Sign up!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div id="layoutAuthentication_footer">
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright &copy; Your Website 2021
                  </div>
                  <div>
                    <a href="/#">Privacy Policy</a>
                    &middot;
                    <a href="/#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
