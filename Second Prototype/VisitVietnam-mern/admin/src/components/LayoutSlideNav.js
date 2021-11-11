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

                {/* PLACE */}
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

                {/* ARTICLE */}
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

                {/* EVENT */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEventLayouts"
                  aria-expanded="false"
                  aria-controls="collapseEventLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Event
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseEventLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_event">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_event">
                      Create new
                    </NavLink>
                  </nav>
                </div>

                {/* FOOD */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFoodLayouts"
                  aria-expanded="false"
                  aria-controls="collapseFoodLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Food
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseFoodLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_food">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_food">
                      Create new
                    </NavLink>
                  </nav>
                </div>

                {/* HOLIDAY */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHolidayLayouts"
                  aria-expanded="false"
                  aria-controls="collapseHolidayLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Holiday
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseHolidayLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_holiday">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_holiday">
                      Create new
                    </NavLink>
                  </nav>
                </div>
                {/* LOCATION */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLocationLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLocationLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Location
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseLocationLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_location">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_location">
                      Create new
                    </NavLink>
                  </nav>
                </div>
                {/* OUTFIT */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOutfitLayouts"
                  aria-expanded="false"
                  aria-controls="collapseOutfitLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Outfit
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseOutfitLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_outfit">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_outfit">
                      Create new
                    </NavLink>
                  </nav>
                </div>
                {/* RESIDENCE */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseResidenceLayouts"
                  aria-expanded="false"
                  aria-controls="collapseResidenceLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Residence
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseResidenceLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_residence">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_residence">
                      Create new
                    </NavLink>
                  </nav>
                </div>

                {/* REVIEW */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseReviewLayouts"
                  aria-expanded="false"
                  aria-controls="collapseReviewLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Review
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseReviewLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_review">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_review">
                      Create new
                    </NavLink>
                  </nav>
                </div>

                {/* SOUVENIR */}
                <a
                  className="nav-link collapsed"
                  href="/#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSouvenirLayouts"
                  aria-expanded="false"
                  aria-controls="collapseSouvenirLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                  Souvenir
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  className="collapse"
                  id="collapseSouvenirLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <NavLink className="nav-link" to="/list_souvenir">
                      List
                    </NavLink>
                    <NavLink className="nav-link" to="/create_souvenir">
                      Create new
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Admin VisitVietnam
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
