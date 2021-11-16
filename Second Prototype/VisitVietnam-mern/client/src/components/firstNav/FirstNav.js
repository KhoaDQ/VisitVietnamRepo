import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./FirstNav.css";

export class FirstNav extends Component {
  render() {
    return (
      <div className="FirstNav" bg="dark">
        <Navbar bg="dark" className="FirstNav-bar p-0">
          <Navbar.Brand
            className="d-inline bg-dark text-white p-0 isHover"
            onClick={() => {
              window.location.reload();
            }}
          >
            <img
              alt=""
              src="./public-img/logoVisit.png"
              width="30"
              height="30"
              className="d-inline-block align-top border-img-full"
            />{" "}
            VisitVietnam
          </Navbar.Brand>

          <Nav>
            <NavLink
              className="d-inline bg-dark text-white p-0 Contact"
              to="/contact"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
