//import { result } from 'lodash';
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../css/styles.css";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAdmin: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.setState({ checkAdmin: false })
    setTimeout(() => {
      this.afterSubmit();
    }, 100);
  };

  afterSubmit() {
      this.props.handleAdminLogout(this.state.checkAdmin);
  };
  
  render() {
    return (
      <div className="myNav">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand ps-3" href="/index.html">
            Admin App
          </a>

          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="/#!"
          >
            <i className="fas fa-bars"></i>
          </button>

          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Form onSubmit={this.handleSubmit}>
                  <Button type="submit" className="dropdown-item">
                    Logout
                  </Button>
                </Form>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
