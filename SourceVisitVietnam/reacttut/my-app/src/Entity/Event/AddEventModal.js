import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddEventModal extends Component{
constructor(props){
    super(props);
    // this.state={events:[]};
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleFileSelected=this.handleFileSelected.bind(this);
}

PhotoFileName = "anonymous.png";
ImageSrc = process.env.REACT_APP_PHOTOPATH+this.PhotoFileName;

handleSubmit(e){
    e.preventDefault();
    fetch(process.env.REACT_APP_API+'event',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            //Id:null,
            Name:e.target.Name.value,
            Type:e.target.Type.value,
            Description:e.target.Description.value,
            PicFileName:this.PhotoFileName,
            Details:e.target.Details.value,
            StartDate:e.target.StartDate.value,
            EndDate:e.target.EndDate.value,
            Status:e.target.Status.value,
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


handleFileSelected(e){
    e.preventDefault();
    this.PhotoFileName=e.target.files[0].name;
    const formData = new FormData();
    formData.append(
        "myFile",
        e.target.files[0],
        e.target.files[0].name
    );

    fetch(process.env.REACT_APP_API+'Event/SaveFile',{
        method:'POST',
        body:formData
    })
    .then(res=>res.json())
    .then((result)=>{
        this.ImageSrc=process.env.REACT_APP_PHOTOPATH+result;
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
                    Add Event
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="Name" required 
                                placeholder="Name"/>
                            </Form.Group>

                            <Form.Group controlId="Type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" name="Type"
                                placeholder="Type"/>
                            </Form.Group>

                            <Form.Group controlId="Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="Description"
                                placeholder="Description"/>
                            </Form.Group>

                            <Form.Group controlId="Details">
                                <Form.Label>Details</Form.Label>
                                <Form.Control typeof="text" name="Details"
                                placeholder="Details"/>
                            </Form.Group>

                            <Form.Group controlId="Status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" name="Status"
                                placeholder="Status"/>
                            </Form.Group>

                            {/* <Form.Group controlId="Department">
                                <Form.Label>Department</Form.Label>
                                <Form.Control as="select">
                                {this.state.deps.map(dep=>
                                    <option key={dep.DepartmentId}>{dep.DepartmentName}</option>)}
                                </Form.Control>
                            </Form.Group> */}

                            <Form.Group controlId="StartDate">
                                <Form.Label>StartDate</Form.Label>
                                <Form.Control 
                                type="date"
                                name="StartDate"
                                
                                placeholder="StartDate"
                                />
                            </Form.Group>

                            <Form.Group controlId="EndDate">
                                <Form.Label>EndDate</Form.Label>
                                <Form.Control 
                                type="date"
                                name="EndDate"
                                
                                placeholder="EndDate"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Add Event
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={6}>
                        <Image width="200px" height="200px" src={this.ImageSrc}/>
                        <input onChange={this.handleFileSelected} type="File"/>
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