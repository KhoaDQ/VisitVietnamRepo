import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Component } from "react";
import './FooterPage.css'
import '../../assets/fonts/themify-icons/themify-icons.css';

export class FooterPage extends Component {
    render(){
        return (
            <MDBFooter color="green" className="font-small">
            <MDBContainer fluid className="text-center text-md-left bg-light">
                <MDBRow>
                    <MDBCol md="6" >
                        <div className="Col">
                            <h5 className="title text-dark">ABOUT US</h5>
                            <p className="about-text text-dark">
                            Here you can use rows and columns here to organize your footer
                            content.
                            Here you can use rows and columns here to organize your footer
                            content.
                            Here you can use rows and columns here to organize your footer
                            content.
                            Here you can use rows and columns here to organize your footer
                            content.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="Col pull-right">
                        <h5 className="title text-dark">CONTACT WITH US</h5>
                            <div class="socials-list">
                                <a href=""><i className ="ti-facebook text-dark"></i></a>
                                <a href=""><i className ="ti-instagram text-dark"></i></a>
                                <a href=""><i className ="ti-youtube text-dark"></i></a>
                                <a href=""><i className ="ti-pinterest text-dark"></i></a>
                                <a href=""><i className ="ti-twitter text-dark"></i></a>
                                <a href=""><i className ="ti-linkedin text-dark"></i></a>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
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