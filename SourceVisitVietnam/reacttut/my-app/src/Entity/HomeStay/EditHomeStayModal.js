import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditHomeStayModal extends Component{
constructor(props){
    super(props);
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
    fetch(process.env.REACT_APP_API+'HomeStay',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Description:e.target.Description.value,
            Type:e.target.Type.value,
            AvgPrice:e.target.AvgPrice.value,
            Comment:e.target.Comment.value,
            Star:e.target.Star.value,
            PicFileName:this.PhotoFileName,
            PlaceId:e.target.PlaceId.value
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

    fetch(process.env.REACT_APP_API+'HomeStay/SaveFile',{
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
                    Edit HomeStay
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="PlaceId">
                                <Form.Label>PlaceId</Form.Label>
                                <Form.Control type="text" name="PlaceId"  disabled
                                defaultValue={this.props.PlaceId}
                                placeholder="PlaceId"/>
                            </Form.Group>

                            <Form.Group controlId="Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="Description" required 
                                defaultValue={this.props.Description}
                                placeholder="Description"/>
                            </Form.Group>

                            <Form.Group controlId="Type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" name="Type"
                                defaultValue={this.props.Type}
                                placeholder="Type"/>
                            </Form.Group>

                            <Form.Group controlId="AvgPrice">
                                <Form.Label>AvgPrice</Form.Label>
                                <Form.Control typeof="text" name="AvgPrice" 
                                defaultValue={this.props.AvgPrice}
                                placeholder="AvgPrice"/>
                            </Form.Group>

                            <Form.Group controlId="Comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control type="text" name="Comment"  
                                defaultValue={this.props.Comment}
                                placeholder="Comment"/>
                            </Form.Group>

                            <Form.Group controlId="Star">
                                <Form.Label>Star</Form.Label>
                                <Form.Control type="text" name="Star"  
                                defaultValue={this.props.Star}
                                placeholder="Star"/>
                            </Form.Group>                            

                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Update HomeStay
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