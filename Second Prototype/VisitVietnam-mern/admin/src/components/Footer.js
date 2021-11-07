import React, { Component } from "react";
import "../css/styles.css";

export class Footer extends Component {
  render() {
    return (
      <div id="myFooter">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <footer className="py-4 bg-light">
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
