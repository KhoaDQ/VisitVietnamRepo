import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Event.css';
import {AddEventModal} from './AddEventModal.js';
import {EditEventModal} from './EditEventModal.js';

export class Modal extends Component{

    
    constructor(props){
        super(props);
        this.state={events:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'event')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({events:data})
            }
        )
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEvent(eventId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'event/'+eventId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {events,Id,Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className="Container">
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
                            <div className="">
                                <Table className="mt-4" striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                            <th>PicFileName</th>
                                            <th>Details</th>
                                            <th>StartDate</th>
                                            <th>EndDate</th>
                                            <th>Status</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events.map(event=>
                                            <tr key={event.Id}>
                                                <td>{event.Id}</td>
                                                <td>{event.Name}</td>
                                                <td>{event.Type}</td>
                                                <td>{event.Description}</td>
                                                <td>{event.PicFileName}</td>
                                                <td>{event.Details}</td>
                                                <td>{event.StartDate}</td>
                                                <td>{event.EndDate}</td>
                                                <td>{event.Status}</td>
                                                <td>
                                                    <ButtonToolbar>
                                                        <Button variant='info' className="p-1 mr-2"
                                                        onClick={()=>this.setState({editModalShow:true, 
                                                                                    Id:event.Id,
                                                                                    Name:event.Name,
                                                                                    Type:event.Type,
                                                                                    Description:event.Description,
                                                                                    PicFileName:event.PicFileName,
                                                                                    Details:event.Details,
                                                                                    StartDate:event.StartDate,
                                                                                    EndDate:event.EndDate,
                                                                                    Status:event.Status})}>
                                                            Edit Event
                                                        </Button>

                                                        <Button variant='danger' className="p-1 mr-2"
                                                        onClick={()=>this.deleteEvent(event.Id)}>
                                                            Delete Event
                                                        </Button>

                                                        <EditEventModal show={this.state.editModalShow} 
                                                        onHide={editModalClose}
                                                        Id={Id}
                                                        Name={Name}
                                                        Type={Type}
                                                        Description={Description}
                                                        PicFileName={PicFileName}
                                                        Details={Details}
                                                        StartDate={StartDate}
                                                        EndDate={EndDate}
                                                        Status={Status}/>
                                                    </ButtonToolbar>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </Table>

                                <ButtonToolbar>
                                    <Button variant='primary'
                                    onClick={()=>this.setState({addModalShow:true})}>
                                        Add Event
                                    </Button>

                                    <AddEventModal show={this.state.addModalShow} 
                                    onHide={addModalClose}/>
                                </ButtonToolbar>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        )
    }
}