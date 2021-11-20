import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./FirstNav.css";
import { LoginModal } from '../login/LoginModal';

export class FirstNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAdmin: this.props.stateAdmin,
      name:this.props.stateName,
      LoginModalShow: false
    };
        
    this.handleLogin = this.handleLogin.bind(this);
  };

  handleAdminLoginFunction = (content) => {
    this.setState({
      isAdmin: content.isAdmin,
      name: content.name
    });
    this.handleLogin();
  };

  handleHideLoginFormFunction= (content) => {
    this.setState({
      LoginModalShow: content
    });
  };

  handleLogin(){
    this.props.handleAdminLogin({
      isAdmin: this.state.isAdmin,
      name: this.state.name,
    });
  };

  handleLogout(){
    this.setState({
      isAdmin: false,
    });
    localStorage.removeItem("token");
    setTimeout(() => {
      this.props.handleAdminLogin({
      isAdmin: this.state.isAdmin,
      name: this.state.name,
    });
    }, 100);
  };
  
  render() {
    let LoginModalClose = () => this.setState({ LoginModalShow: false });
    return (
      <div className="FirstNav" bg="dark">
        <Navbar bg="dark" className="FirstNav-bar p-0">
          <Navbar.Brand
            className="d-inline bg-dark text-white p-0 isHover"
            onClick={() => {
              window.location.reload();
            }}
          >
            <img
              alt=""
              src="./public-img/logoVisit.png"
              width="30"
              height="30"
              className="d-inline-block align-top border-img-full"
            />{" "}
            VisitVietnam
          </Navbar.Brand>

          <Nav>
            {this.props.stateAdmin === false && <Button className="btn" onClick={()=>this.setState({LoginModalShow:true})}>Login</Button>}
            {this.props.stateAdmin === true && 
                <div className = "text-white mt-1">Hello {this.props.stateName}</div>
              }
            {this.props.stateAdmin === true && 
                <Button className="btn " onClick={() => { this.handleLogout(); }}>Logout</Button>
            }
            <NavLink
              className="d-inline bg-dark text-white p-0 Contact"
              to="/contact"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Contact
            </NavLink>
            
          </Nav>
        </Navbar>
        
        <LoginModal handleAdminLogin={this.handleAdminLoginFunction}
          handleHideLoginForm={this.handleHideLoginFormFunction}
          show={this.state.LoginModalShow} onHide={() => { LoginModalClose(); }}></LoginModal>
      </div>
    );
  }
}
