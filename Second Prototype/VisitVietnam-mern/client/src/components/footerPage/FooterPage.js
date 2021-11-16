import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Component } from "react";
import "./FooterPage.css";
import "../../assets/fonts/themify-icons/themify-icons.css";

export class FooterPage extends Component {
  render() {
    return (
      <MDBFooter color="white" className="font-small">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <div className="Col">
                <div className="ml-4">
                  <h5 className="title text-dark">VisitVietnam.com</h5>
                  <p className="about-text text-dark">
                    We are students in University of Information Technology.
                    Wish you have a good experience when using our website
                  </p>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="Col">
                <h5 className="title text-dark">Need quick answer?</h5>
                <p className="text-dark">
                  Get them via our chatbot on Facebook.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="Col">
                <h5 className="title text-dark">CONTACT WITH US</h5>
                <div className="socials-list">
                  <a href="https://www.facebook.com/1ngaykhongxa">
                    <i className="ti-facebook text-dark"></i>
                  </a>
                  <a href="https://www.instagram.com/justin_jobs/">
                    <i className="ti-instagram text-dark"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCajGtCAFAh2bgb5Ucjs9NqA">
                    <i className="ti-youtube text-dark"></i>
                  </a>
                  <a href="/">
                    <i className="ti-twitter text-dark"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/khoa-dang-6a5164171/">
                    <i className="ti-linkedin text-dark"></i>
                  </a>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div id="Background-Footer" className="Banner"></div>

        <div className="footer-copyright text-center py-2 bg-dark">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://www.facebook.com/1ngaykhongxa"> Dang Quoc Khoa </a>
            -
            <a href="https://www.facebook.com/dhhjustinjobs"> Do Hoang Hiep </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
