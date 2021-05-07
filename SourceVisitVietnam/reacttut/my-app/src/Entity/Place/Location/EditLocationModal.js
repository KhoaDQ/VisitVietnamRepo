import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditLocationModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Location',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:event.target.Id.value,
                Details:event.target.Details.value,
                Street:event.target.Street.value,
                Ward:event.target.Ward.value,
                District:event.target.District.value,
                City:event.target.City.value,
                PlaceId:event.target.PlaceId.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
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
                            Edit Location
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Id">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text" name="Id" required
                                    disabled
                                    defaultValue={this.props.Id} 
                                    placeholder="Id"/>
                                </Form.Group>

                                <Form.Group controlId="Details">
                                    <Form.Label>Details</Form.Label>
                                    <Form.Control type="text" name="Details"
                                    defaultValue={this.props.Details} 
                                    placeholder="Details"/>
                                </Form.Group>

                                <Form.Group controlId="Street">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" name="Street"
                                    defaultValue={this.props.Street} 
                                    placeholder="Street"/>
                                </Form.Group>

                                <Form.Group controlId="Ward">
                                    <Form.Label>Ward</Form.Label>
                                    <Form.Control type="text" name="Ward"
                                    defaultValue={this.props.Ward} 
                                    placeholder="Ward"/>
                                </Form.Group>

                                <Form.Group controlId="District">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control type="text" name="District"
                                    defaultValue={this.props.District} 
                                    placeholder="District"/>
                                </Form.Group>

                                <Form.Group controlId="City">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" name="City"
                                    defaultValue={this.props.City} 
                                    placeholder="City"/>
                                </Form.Group>

                                <Form.Group controlId="PlaceId">
                                    <Form.Label>PlaceId</Form.Label>
                                    <Form.Control type="text" name="PlaceId"
                                    defaultValue={this.props.PlaceId} 
                                    placeholder="PlaceId"/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update Location
                                    </Button>
                                </Form.Group>
                                </Form>
                            </Col>
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