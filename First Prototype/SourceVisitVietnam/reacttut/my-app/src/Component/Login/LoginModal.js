import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state={
            isAdmin:false,
            username:"", password:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.usernameChange= this.usernameChange.bind(this);
        this.passwordChange= this.passwordChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (e.target.Username.value == "Admin" && e.target.Password.value == "Admin")
        this.setState({isAdmin:true});
        setTimeout(() => {
            this.afterSubmit();
         }, 100);   
    }

    afterSubmit(){
        this.props.handleAdminLogin(this.state.isAdmin);
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
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}