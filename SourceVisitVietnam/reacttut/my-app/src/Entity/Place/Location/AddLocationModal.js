import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddLocationModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Location',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //LocationId:null,
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
            Add Location
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Details">
                        <Form.Label>Details</Form.Label>
                        <Form.Control type="text" name="Details"
                        placeholder="Details"/>
                    </Form.Group>

                    <Form.Group controlId="Street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" name="Street"
                        placeholder="Street"/>
                    </Form.Group>

                    <Form.Group controlId="Ward">
                        <Form.Label>Ward</Form.Label>
                        <Form.Control type="text" name="Ward"
                        placeholder="Ward"/>
                    </Form.Group>

                    <Form.Group controlId="District">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" name="District"
                        placeholder="District"/>
                    </Form.Group>

                    <Form.Group controlId="City">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="City"
                        placeholder="City"/>
                    </Form.Group>

                    <Form.Group controlId="PlaceId">
                        <Form.Label>PlaceId</Form.Label>
                        <Form.Control type="text" name="PlaceId" required
                        placeholder="PlaceId"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Location
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