import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditArticleModal extends Component{
constructor(props){
    super(props);
    // this.state={Articles:[]};
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleFileSelected=this.handleFileSelected.bind(this);
}

PhotoFileName = "anonymous.png";
ImageSrc = process.env.REACT_APP_PHOTOPATH+this.PhotoFileName;

handleSubmit(e){
    e.preventDefault();
    fetch(process.env.REACT_APP_API+'Article',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Id:e.target.Id.value,
            Name:e.target.Name.value,
            Type:e.target.Type.value,
            Description:e.target.Description.value,
            PicFileName:this.PhotoFileName,
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

    fetch(process.env.REACT_APP_API+'Article/SaveFile',{
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
                    Edit Article
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

                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="Name" required 
                                defaultValue={this.props.Name}
                                placeholder="Name"/>
                            </Form.Group>

                            <Form.Group controlId="Type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" name="Type" required 
                                defaultValue={this.props.Type}
                                placeholder="Type"/>
                            </Form.Group>

                            <Form.Group controlId="Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="Description" required 
                                defaultValue={this.props.Description}
                                placeholder="Description"/>
                            </Form.Group>

                            <Form.Group controlId="Status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" name="Status" required 
                                defaultValue={this.props.Status}
                                placeholder="Status"/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Update Article
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={6}>
                        <Image width="200px" height="200px" src={process.env.REACT_APP_PHOTOPATH+this.props.PicFileName}/>
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