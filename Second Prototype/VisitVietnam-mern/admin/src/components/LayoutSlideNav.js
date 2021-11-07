import React, { Component } from "react";
import "../css/styles.css";
import "../js/scripts";
import "bootstrap";
import { NavLink } from "react-router-dom";

export class LayoutSlideNav extends Component {
  render() {
    return (
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">
                  Administration system
                </div>
                <NavLink className="nav-link" to="/">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </NavLink>
                <div className="sb-sidenav-menu-heading">System</div>

                {/* MAIN */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePlaceLayouts"
                  aria-expanded="false"
                  aria-controls="collapsePlaceLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Place
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapsePlaceLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_place">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_place">
                      Create new
                    </NavLink>
                  </nav>
                </div>

                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseArticleLayouts"
                  aria-expanded="false"
                  aria-controls="collapseArticleLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Article
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseArticleLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_article">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_article">
                      Create new
                    </NavLink>
                  </nav>
                </div>

                {/* OUT */}
                <div className="sb-sidenav-menu-heading">Addons</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-area"></i>
                  </div>
                  Charts
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table"></i>
                  </div>
                  Tables
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
