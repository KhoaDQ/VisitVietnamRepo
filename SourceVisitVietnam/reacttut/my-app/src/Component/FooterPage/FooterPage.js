import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Component } from "react";

export class FooterPage extends Component {
    render(){
        return (
            <MDBFooter color="green" className="font-small">
            <MDBContainer fluid className="text-center text-md-left bg-info">
                <MDBRow>
                <MDBCol md="6" className="">
                    <h5 className="title">ABOUT US</h5>
                    <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                    Here you can use rows and columns here to organize your footer
                    content.
                    Here you can use rows and columns here to organize your footer
                    content.
                    Here you can use rows and columns here to organize your footer
                    content.
                    </p>
                </MDBCol>
                <MDBCol md="6">
                    <h5 className="title">CONTACT WITH US</h5>
                    <ul>
                    <li className="list-unstyled">
                        <a href="#!">Link 1.1</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 4</a>
                    </li>
                    </ul>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3 bg-dark">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: 
                    <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                    <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> 
                </MDBContainer>
            </div>
            </MDBFooter>
        );
    }
}