import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="info" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 mx-5 bg-info text-white text-uppercase" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 mx-2 bg-info text-white text-uppercase" to="/event">
                            Event
                        </NavLink>
                        <NavLink className="d-inline p-2 mx-2 bg-info text-white text-uppercase" to="/foody">
                            Foody
                        </NavLink>
                        <NavLink className="d-inline p-2 mx-2 bg-info text-white text-uppercase" to="/homestay">
                            HomeStay
                        </NavLink>
                        <NavLink className="d-inline p-2 mx-2 bg-info text-white text-uppercase" to="/clothes">
                            Clothes
                        </NavLink>
                        <NavLink className="d-inline p-2 mx-2 bg-info text-white text-uppercase" to="/gift">
                            Gift
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                
                

                <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">GO</Button>
                </Form>
            </Navbar>
        )
    }
}