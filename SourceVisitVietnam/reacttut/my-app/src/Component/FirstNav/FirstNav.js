import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './FirstNav.css';
import logo from '../../logo.svg';

export class FirstNav extends Component{
    render(){
        return(
            <div className="FirstNav" bg="dark">
            <Navbar bg="dark" className="FirstNav-bar p-0">
                <Navbar.Brand className="d-inline bg-dark text-white p-0">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    VisitVietnam
                </Navbar.Brand>

                <Nav>
                    <NavLink className="d-inline bg-dark text-white p-0" to="/contact">
                        Contact
                    </NavLink>
                </Nav>
            </Navbar>
            </div>
        )
    }
}