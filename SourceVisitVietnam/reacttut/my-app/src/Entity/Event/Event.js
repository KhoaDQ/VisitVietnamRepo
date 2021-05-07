import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Event.css';
import {AddEventModal} from './AddEventModal.js';
import {EditEventModal} from './EditEventModal.js';

export class Event extends Component{

    
    constructor(props){
        super(props);
        this.state={events:[], eventsUpcoming:[], eventsYear:[], eventsDay:[],
            addModalShow:false, editModalShow:false, 
            Event_Year_visible:3, Event_Day_visible:3}
        this.loadMoreY = this.loadMoreY.bind(this);
        this.loadMoreD = this.loadMoreD.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    refreshList(){
        fetch(process.env.REACT_APP_API+'event')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({events:data})
            }
        )
    }

    get4EventUpcoming(){
        fetch(process.env.REACT_APP_API+'event/Get4EventUpcoming')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({eventsUpcoming:data})
            }
        )
    }

    getAllEventYear(){
        fetch(process.env.REACT_APP_API+'event/GetAllEventYear')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({eventsYear:data})
            }
        )
    }

    getAllEventDay(){
        fetch(process.env.REACT_APP_API+'event/GetAllEventDay')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({eventsDay:data})
            }
        )
    }

    componentDidMount(){
        this.refreshList();
        this.get4EventUpcoming();
        this.getAllEventDay();
        this.getAllEventYear();
    }

    deleteEvent(eventId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'event/'+eventId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })
            setTimeout(() => {
                this.refreshList();
             }, 100);
        }
    }

    // Function
    loadMoreY(){
        this.setState((old)=>{
            return {Event_Year_visible:old.Event_Year_visible+3};
        })
    }

    loadMoreD(){
        this.setState((old)=>{
            return {Event_Day_visible:old.Event_Day_visible+3};
        })
    }
    

    render(){
        
        const {eventsDay,eventsYear,eventsUpcoming,events,
            Id,Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            <div className="Container">
                
                <div className="Admin">
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
                                            onHide={()=>{editModalClose(); this.refreshList();}}
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
                        onHide={()=>{this.refreshList(); addModalClose();}}/>
                    </ButtonToolbar>
                </div>

                <img src="./public-img/background-vietnam.jpg" className="Banner"></img>

                <div className="Container__Content">
                    <div className="Content__Highlight">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-danger">Highlight</div>
                        </div>
                        <div className="row member-list">
                            {eventsUpcoming.map(event=>
                            <div class="col-sm-3 member-item">                                
                                <div key={event.Id}>
                                    <img src={this.ImageSrc+event.PicFileName} alt={event.PicFileName} class="member-img"/>
                                    <div className="item-content">
                                        <div className="item-header">{event.Name}</div>
                                        <div className="item-description">{event.Description}</div>
                                        <div className="item-date">Start date: {event.StartDate}</div>
                                        <div className="item-date">End date: {event.EndDate}</div>
                                    </div> 
                                </div>                                                               
                            </div>
                            )}
                        </div>
                    </div>

                    <div className="Content__Event-Year">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-warning">Annual Event</div>
                        </div>
                        <div className="row member-list">
                            {eventsYear.slice(0,this.state.Event_Year_visible).map(event=>
                                <div class="col-sm-4 member-item">                                
                                    <div key={event.Id}>
                                        <img src={this.ImageSrc+event.PicFileName} alt={event.PicFileName} class="member-img"/>
                                        <div className="item-content">
                                            <div className="item-header">{event.Name}</div>
                                            <div className="item-description">{event.Description}</div>
                                            <div className="item-date">Start date: {event.StartDate}</div>
                                            <div className="item-date">End date: {event.EndDate}</div>
                                        </div> 
                                    </div>                                                               
                                </div>
                            )}                    
                        </div>
                        <div className="col-md-12 Contain-Load-Mores">
                            {this.state.Event_Year_visible < this.state.eventsYear.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreY}>Load more</Button>}
                        </div>
                    </div>

                    <div className="clear"></div>

                    <div className="Content__Event-Day">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-success">Event</div>
                        </div>

                        <div className="row member-list">
                        {eventsDay.slice(0,this.state.Event_Day_visible).map(event=>
                            <div class="col-sm-4 member-item">                                
                                <div key={event.Id}>
                                    <img src={this.ImageSrc+event.PicFileName} alt={event.PicFileName} class="member-img"/>
                                    <div className="item-content">
                                        <div className="item-header">{event.Name}</div>
                                        <div className="item-description">{event.Description}</div>
                                        <div className="item-date">Start date: {event.StartDate}</div>
                                        <div className="item-date">End date: {event.EndDate}</div>
                                    </div> 
                                </div>                                                               
                            </div>
                        )}                    
                        </div>

                        <div className="col-md-12 Contain-Load-Mores">
                            {this.state.Event_Day_visible < this.state.eventsDay.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreD}>Load more</Button>}
                        </div>
                    </div>

                    <div className="clear"></div>

                    <div className="Content__Best-Of-Year">

                    </div>

                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

