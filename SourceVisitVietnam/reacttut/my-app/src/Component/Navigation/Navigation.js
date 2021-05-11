import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Navigation.css';

export class Navigation extends Component{
    render(){
        return(
            <div className="Navigation">
            <Navbar bg="light" className="Navigation-Navbar pt-0 pb-0">
                <Navbar.Collapse id="basic-navbar-nav" className="route-button">
                    <Nav>
                        <NavLink className="d-inline px-5 bg-light text-dark text-uppercase font-weight-bold btn" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline px-3 bg-light text-dark text-uppercase font-weight-bold btn" to="/event">
                            Event
                        </NavLink>
                        <NavLink className="d-inline px-3 bg-light text-dark text-uppercase font-weight-bold btn" to="/foody">
                            Foody
                        </NavLink>
                        <NavLink className="d-inline px-3 bg-light text-dark text-uppercase font-weight-bold btn" to="/homestay">
                            HomeStay
                        </NavLink>
                        <NavLink className="d-inline px-3 bg-light text-dark text-uppercase font-weight-bold btn" to="/clothes">
                            Clothes
                        </NavLink>
                        <NavLink className="d-inline px-3 bg-light text-dark text-uppercase font-weight-bold btn" to="/gift">
                            Gift
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

                <Form inline className="Navigation-Search">
                    <FormControl type="text" placeholder="Search" className="Form p-0 m-0" />
                    <Button type="submit" className="Btn p-2 m-0" >GO</Button>
                </Form>
            </Navbar>
            </div>
        )
        
    }
}