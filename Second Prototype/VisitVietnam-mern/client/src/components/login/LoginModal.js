import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import axios from "axios";

export class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdmin: false,
            username: "",
            password: "",
            user: "",
            errorMessage: "",
            token: "",
            name:"",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.usernameChange= this.usernameChange.bind(this);
        this.passwordChange= this.passwordChange.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        const data = {
            Email: e.target.Username.value,
            Password: e.target.Password.value,
        };

        await axios
            .post(process.env.REACT_APP_API + "/auth/login", data)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        token: res.data.token,
                        user: res.data.user,
                        name: res.data.user.Name
                    });
                } else {
                    this.setState({ errorMessage: res.data.error });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    
        if (this.state.token != null && this.state.token != "") {
            this.setState({
                isAdmin: true,
                errorMessage:"",
            });
            localStorage.setItem("token", this.state.token);
            setTimeout(() => {
                this.afterSubmit();
            }, 100);
        };
    }

    afterSubmit(){
        this.props.handleAdminLogin({
            isAdmin: this.state.isAdmin,
            name: this.state.name,
        });
        this.props.handleHideLoginForm(false);
    }

    usernameChange(event){
        this.setState({username: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    render(){
        return (
            <div className="container">
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                        </Modal.Title>
                        {this.state.loginNotAdmin === true &&
                          <div className="text-center text-warning">Info: You are not Admin</div>}
                        {this.state.errorMessage !== null && this.state.errorMessage !== "" &&
                          <div className="text-center text-danger">Error: {this.state.errorMessage}</div>}
                </Modal.Header>
                
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Username">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" name="Username" required onChange={this.usernameChange}
                                    placeholder="Username"/>
                                </Form.Group>

                                <Form.Group controlId="Password">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="text" name="Password" onChange={this.passwordChange}
                                    placeholder="Password"/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        {/* <Col sm={6}>
                            <Image width="200px" height="200px" src={this.ImageSrc}/>
                            <input onChange={this.handleFileSelected} type="File"/>
                        </Col> */}
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                        <Button variant="danger" onClick={() => {
                            this.props.onHide();
                            this.setState({
                                password: "",
                                username: "",
                                errorMessage:""
                            })
                        }}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}