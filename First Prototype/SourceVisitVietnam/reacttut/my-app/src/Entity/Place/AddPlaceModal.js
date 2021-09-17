import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddPlaceModal extends Component{
constructor(props){
    super(props);
    // this.state={events:[]};
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleFileSelected=this.handleFileSelected.bind(this);
}

PhotoFileName = "anonymous.png";
ImageSrc = process.env.REACT_APP_PHOTOPATH+this.PhotoFileName;

// componentDidMount(){
//     fetch(process.env.REACT_APP_API+'event')
//     .then(response=>response.json())
//     .then(data=>{
//         this.setState({deps:data});
//     });
// }

handleSubmit(e){
    e.preventDefault();
    fetch(process.env.REACT_APP_API+'Place',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            //Id:null,
            Name:e.target.Name.value,
            Type:e.target.Type.value,
            Slogan:e.target.Slogan.value,
            Overview:e.target.Overview.value,
            Phone:e.target.Phone.value,
            Email:e.target.Email.value,
            Facebook:e.target.Facebook.value,
            LinkWeb:e.target.LinkWeb.value,
            EventOfPlace:e.target.EventOfPlace.value,
            PicFileName:this.PhotoFileName
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

    fetch(process.env.REACT_APP_API+'Place/SaveFile',{
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
                    Add Place
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

                            <Form.Group controlId="Slogan">
                                <Form.Label>Slogan</Form.Label>
                                <Form.Control typeof="text" name="Slogan" 
                                placeholder="Slogan"/>
                            </Form.Group>

                            <Form.Group controlId="Overview">
                                <Form.Label>Overview</Form.Label>
                                <Form.Control type="text" name="Overview"  
                                placeholder="Overview"/>
                            </Form.Group>

                            <Form.Group controlId="Phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" name="Phone"  
                                placeholder="Phone"/>
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="Email"  
                                placeholder="Email"/>
                            </Form.Group>

                            <Form.Group controlId="Facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type="text" name="Facebook"  
                                placeholder="Facebook"/>
                            </Form.Group>

                            <Form.Group controlId="LinkWeb">
                                <Form.Label>LinkWeb</Form.Label>
                                <Form.Control type="text" name="LinkWeb"  
                                placeholder="LinkWeb"/>
                            </Form.Group>

                            <Form.Group controlId="EventOfPlace">
                                <Form.Label>EventOfPlace</Form.Label>
                                <Form.Control type="text" name="EventOfPlace"  
                                placeholder="EventOfPlace"/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Add Place
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