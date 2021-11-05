import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./Navigation.css";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch() {}

  handleChange(event) {}

  render() {
    return (
      <div className="Navigation">
        <Navbar bg="white" className="Navigation-Navbar pt-0 pb-0">
          <Navbar.Collapse id="basic-navbar-nav" className="route-button">
            <Nav>
              <NavLink
                className="d-inline px-5 bg-white text-dark text-uppercase font-weight-bold btn"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="d-inline px-3 bg-white text-dark text-uppercase font-weight-bold btn"
                to="/holiday"
              >
                Holiday
              </NavLink>
              <NavLink
                className="d-inline px-3 bg-white text-dark text-uppercase font-weight-bold btn"
                to="/food"
              >
                Food
              </NavLink>
              <NavLink
                className="d-inline px-3 bg-white text-dark text-uppercase font-weight-bold btn"
                to="/residence"
              >
                Residence
              </NavLink>
              <NavLink
                className="d-inline px-3 bg-white text-dark text-uppercase font-weight-bold btn"
                to="/outfit"
              >
                Outfit
              </NavLink>
              <NavLink
                className="d-inline px-3 bg-white text-dark text-uppercase font-weight-bold btn"
                to="/souvenir"
              >
                Souvenir
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <Form className="Navigation-Search">
            <FormControl
              value={this.state.strSearch}
              type="text"
              placeholder="Search"
              ref="search"
              className="Form p-0 m-0"
              onChange={this.handleChange}
            />
            <NavLink
              onClick={this.handleSearch}
              className=" border-img-full btn p-2 m-0"
              to="/search"
            >
              GO
            </NavLink>
          </Form>
        </Navbar>
      </div>
    );
  }
}
