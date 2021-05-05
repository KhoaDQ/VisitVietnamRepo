import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Component } from "react";
import './FooterPage.css'
import '../../assets/fonts/themify-icons/themify-icons.css';

export class FooterPage extends Component {
    render(){
        return (
            <MDBFooter color="green" className="font-small">
            <MDBContainer fluid className="text-center text-md-left bg-info">
                <MDBRow>
                    <MDBCol md="6" >
                        <div className="Col">
                            <h5 className="title">ABOUT US</h5>
                            <p className="about-text">
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
                        <h5 className="title">CONTACT WITH US</h5>
                            <div class="socials-list">
                                <a href=""><i class ="ti-facebook"></i></a>
                                <a href=""><i class ="ti-instagram"></i></a>
                                <a href=""><i class ="ti-youtube"></i></a>
                                <a href=""><i class ="ti-pinterest"></i></a>
                                <a href=""><i class ="ti-twitter"></i></a>
                                <a href=""><i class ="ti-linkedin"></i></a>
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