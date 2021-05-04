import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Navigation.css';

export class Navigation extends Component{
    render(){
        return(
            <div className="Navigation">
            <Navbar bg="info" className="Navigation-Navbar">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline mx-2 bg-info text-white text-uppercase" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline mx-2 bg-info text-white text-uppercase" to="/event">
                            Event
                        </NavLink>
                        <NavLink className="d-inline mx-2 bg-info text-white text-uppercase" to="/foody">
                            Foody
                        </NavLink>
                        <NavLink className="d-inline mx-2 bg-info text-white text-uppercase" to="/homestay">
                            HomeStay
                        </NavLink>
                        <NavLink className="d-inline mx-2 bg-info text-white text-uppercase" to="/clothes">
                            Clothes
                        </NavLink>
                        <NavLink className="d-inline mx-2 bg-info text-white text-uppercase" to="/gift">
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