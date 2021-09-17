import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './FirstNav.css';
import logo from '../../logo.svg';
import { LoginModal } from '../Login/LoginModal';
// import { bottom } from '@popperjs/core';

export class FirstNav extends Component{
    constructor(props){
        super(props);
        this.state={
            isAdmin:false,
            LoginModalShow:false
        }
        
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleAdminLoginFunction= (content) => {
        this.setState({
          isAdmin:content,
        })
        this.handleLogin();
    }

    handleLogin(){
        this.props.handleAdminLogin(this.state.isAdmin);
    }

    handleLogout(){
        this.setState({
            isAdmin:false,
          })

        setTimeout(()=>{
            this.props.handleAdminLogin(this.state.isAdmin);
        },100)
    }

    render(){
        let LoginModalClose = () => this.setState({LoginModalShow:false});

        return(
            <div className="FirstNav" bg="dark">
            <Navbar bg="dark" className="FirstNav-bar p-0">
                <Navbar.Brand className="d-inline bg-dark text-white p-0 isHover" onClick={()=>{window.location.reload()}}>
                    <img
                    alt=""
                    src="./public-img/logoVisit.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top border-img-full"
                    />{' '}
                    VisitVietnam
                </Navbar.Brand>

                <Nav>
                    <NavLink className="d-inline bg-dark text-white p-0 Contact" to="/contact" onClick={()=>window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'})}>
                        Contact
                    </NavLink>

                    <Button className="btn" onClick={()=>this.setState({LoginModalShow:true})}>Login</Button>
                    {this.state.isAdmin &&
                    <Button className="btn" onClick={()=>{this.handleLogout();}}>Logout</Button>}

                    
                </Nav>
                
            </Navbar>
            <LoginModal handleAdminLogin={this.handleAdminLoginFunction} show={this.state.LoginModalShow} onHide={()=>{LoginModalClose();}}></LoginModal>
            </div>
        )
    }
}