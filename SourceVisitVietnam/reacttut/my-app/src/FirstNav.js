import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import logo from './logo.svg';

export class FirstNav extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="md">
                <Navbar.Brand className="d-inline m-2 bg-dark text-white">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    VisitVietnam</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Nav>
                    <NavLink className="d-inline m-2 bg-dark text-white" to="/contact">
                        Contact
                    </NavLink>
                    
                </Nav>
                
            </Navbar>
        )
    }
}