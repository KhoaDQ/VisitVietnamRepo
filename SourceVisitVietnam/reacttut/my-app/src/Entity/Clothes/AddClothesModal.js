import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddClothesModal extends Component{
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
    fetch(process.env.REACT_APP_API+'Clothes',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            //Id:null,
            Name:e.target.Name.value,
            Type:e.target.Type.value,
            Gender:e.target.Gender.value,
            RangeAge:e.target.RangeAge.value,
            Price:e.target.Price.value,
            Note:e.target.Note.value,
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

    fetch(process.env.REACT_APP_API+'Clothes/SaveFile',{
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
                    Add Clothes
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
                                defaultValue={this.props.Type}
                                placeholder="Type"/>
                            </Form.Group>

                            <Form.Group controlId="Gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" name="Gender" 
                                defaultValue={this.props.Gender}
                                placeholder="Gender"/>
                            </Form.Group>

                            <Form.Group controlId="RangeAge">
                                <Form.Label>RangeAge</Form.Label>
                                <Form.Control type="text" name="RangeAge" 
                                defaultValue={this.props.RangeAge}
                                placeholder="RangeAge"/>
                            </Form.Group>

                            <Form.Group controlId="Price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control typeof="text" name="Price" 
                                defaultValue={this.props.Price}
                                placeholder="Price"/>
                            </Form.Group>

                            <Form.Group controlId="Note">
                                <Form.Label>Note</Form.Label>
                                <Form.Control type="text" name="Note"  
                                defaultValue={this.props.Note}
                                placeholder="Note"/>
                            </Form.Group>

                            <Form.Group controlId="PlaceId">
                                <Form.Label>PlaceId</Form.Label>
                                <Form.Control type="text" name="PlaceId"  
                                defaultValue={this.props.PlaceId}
                                placeholder="PlaceId"/>
                            </Form.Group>

                            {/* <Form.Group controlId="Department">
                                <Form.Label>Department</Form.Label>
                                <Form.Control as="select">
                                {this.state.deps.map(dep=>
                                    <option key={dep.DepartmentId}>{dep.DepartmentName}</option>)}
                                </Form.Control>
                            </Form.Group> */}
                            
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Add Clothes
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