import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Event.css';
import {AddEventModal} from './AddEventModal.js';
import {EditEventModal} from './EditEventModal.js';
import {DetailsModal} from '../../Component/DetailsIModal';
import { nodeName } from 'jquery';



export class Event extends Component{

    
    constructor(props){
        super(props);
        this.state={events:[], eventsUpcoming:[], eventsYear:[], eventsDay:[], articles:[],
            addModalShow:false, editModalShow:false, DetailsModalShow:false,
            Event_Year_visible:3, Event_Day_visible:3,
            // isAdmin:false
        }
        this.loadMoreY = this.loadMoreY.bind(this);
        this.loadMoreD = this.loadMoreD.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    // Call API
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

    getAllArticleEvent(){
        fetch(process.env.REACT_APP_API+'article/GetAllArticleEvent')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({articles:data})
            }
        )
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.refreshList();
        this.get4EventUpcoming();
        this.getAllEventDay();
        this.getAllEventYear();
        this.getAllArticleEvent();
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
        
        const {eventsDay,eventsYear,eventsUpcoming,events,articles,
            Id,Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let DetailsModalClose=()=>this.setState({DetailsModalShow:false});

        let styleAdmin={}
        if (this.props.isAdmin){
            styleAdmin = {display: 'block'}
        }

        return(
            
            <div className="Container Event">
                
                <div className="Admin" style={styleAdmin}>
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

                                            {this.state.editModalShow && this.state.Id  == event.Id &&
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
                                            Status={Status}/>}
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

                <div id="slider" className="Banner">
                    <div className="text-content ">                        
                        <div className="text-heading">Event</div>
                        <div className="text-desc">Do you want to participate in traditional events? Or are you interested in talk shows, music programs? They are all gathered here. Check it now</div>
                    </div>                 
                </div>

                <div className="Container__Content">
                    <div id="Background-Highlight">
                    <div className="Content__Highlight pt-4" >
                        <div className="Highlight">
                            <div className="Line bg-light"></div>
                            <div className="Header text-black">Highlight</div>
                        </div>
                        <div className="row member-list ml-3 mr-3 mt-5">
                            {articles.map(article=>
                            <div className="col-sm-4 member-item">                                
                                <div key={article.Id}>
                                    <div className="member-item-content"
                                    onClick={()=>this.setState({DetailsModalShow:true, 
                                        Id:article.Id,
                                        Name:article.Name,
                                        Type:article.Type,
                                        Description:article.Description,
                                        PicFileName:article.PicFileName,
                                        Status:article.Status})}
                                    >
                                        <img src={this.ImageSrc+article.PicFileName} alt={article.PicFileName} className="member-img border-img"/>
                                        <div className="item-content text-center">
                                            <h3 className="item-header">{article.Name}</h3>
                                        </div>                                     
                                    </div>
                                    <DetailsModal show={this.state.DetailsModalShow} 
                                            onHide={()=>{DetailsModalClose();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            Description={Description}
                                            PicFileName={PicFileName}
                                            Status={Status}/>
                                </div>                                                                                               
                            </div>
                            )}
                        </div>
                    </div>
                    </div>

                    <div id="Background-YearDay">
                    <div className="Content__Upcoming pt-4" >
                        <div className="Highlight">
                            <div className="Line bg-light"></div>
                            <div className="Header text-black">Upcoming</div>
                        </div>
                        <div className="row member-list ml-3 mr-3">
                            {eventsUpcoming.map(event=>
                            <div className="col-sm-4 member-item mt-5">                                
                                <div key={event.Id} className="member-item-content">
                                    <div
                                        onClick={()=>this.setState({DetailsModalShow:true, 
                                            Id:event.Id,
                                            Name:event.Name,
                                            Type:event.Type,
                                            Description:event.Description,
                                            PicFileName:event.PicFileName,
                                            Details:event.Details,
                                            StartDate:event.StartDate,
                                            EndDate:event.EndDate,
                                            Status:event.Status})}
                                    >
                                    <img src={this.ImageSrc+event.PicFileName} alt={event.PicFileName} className="member-img border-img"/>
                                    <div className="item-content">
                                        <div className="item-header">{event.Name}</div>
                                        <div className="item-description">{event.Description}</div>
                                        <div className="item-date">Start date: {event.StartDate}</div>
                                        <div className="item-date">End date: {event.EndDate}</div>
                                    </div> 
                                    </div>
                                    <DetailsModal show={this.state.DetailsModalShow} 
                                            onHide={()=>{DetailsModalClose();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            Description={Description}
                                            PicFileName={PicFileName}
                                            Details={Details}
                                            StartDate={StartDate}
                                            EndDate={EndDate}
                                            Status={Status}/>  
                                </div>                                                            
                            </div>
                            )}
                        </div>
                    </div>

                    <div className="Content__Event-Year pt-4">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-warning">Annual Event</div>
                        </div>
                        <div className="row member-list ml-3 mr-3">
                            {eventsYear.slice(0,this.state.Event_Year_visible).map(event=>
                                <div className="col-sm-4 member-item mt-5">                                
                                    <div key={event.Id} className="member-item-content">
                                        <div
                                        onClick={()=>this.setState({DetailsModalShow:true, 
                                            Id:event.Id,
                                            Name:event.Name,
                                            Type:event.Type,
                                            Description:event.Description,
                                            PicFileName:event.PicFileName,
                                            Details:event.Details,
                                            StartDate:event.StartDate,
                                            EndDate:event.EndDate,
                                            Status:event.Status})}
                                        >
                                        <img src={this.ImageSrc+event.PicFileName} alt={event.PicFileName} className="member-img border-img"/>
                                        <div className="item-content">
                                            <div className="item-header">{event.Name}</div>
                                            <div className="item-description">{event.Description}</div>
                                            <div className="item-date">Start date: {event.StartDate}</div>
                                            <div className="item-date">End date: {event.EndDate}</div>
                                        </div> 
                                        </div>
                                        <DetailsModal show={this.state.DetailsModalShow} 
                                            onHide={()=>{DetailsModalClose();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            Description={Description}
                                            PicFileName={PicFileName}
                                            Details={Details}
                                            StartDate={StartDate}
                                            EndDate={EndDate}
                                            Status={Status}/>  
                                    </div>                           
                                </div>
                            )}                    
                        </div>
                        <div className="col-md-12 Contain-Load-Mores">
                            {this.state.Event_Year_visible < this.state.eventsYear.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreY}>More</Button>}
                        </div>
                    </div>

                    <div className="clear"></div>

                    <div className="Content__Event-Day">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-success">Event</div>
                        </div>

                        <div className="row member-list ml-3 mr-3">
                        {eventsDay.slice(0,this.state.Event_Day_visible).map(event=>
                            <div className="col-sm-4 member-item mt-5">                                
                                <div key={event.Id} className="member-item-content">
                                    <div
                                        onClick={()=>this.setState({DetailsModalShow:true, 
                                            Id:event.Id,
                                            Name:event.Name,
                                            Type:event.Type,
                                            Description:event.Description,
                                            PicFileName:event.PicFileName,
                                            Details:event.Details,
                                            StartDate:event.StartDate,
                                            EndDate:event.EndDate,
                                            Status:event.Status})}
                                        >
                                    <img src={this.ImageSrc+event.PicFileName} alt={event.PicFileName} className="member-img border-img"/>
                                    <div className="item-content">
                                        <div className="item-header">{event.Name}</div>
                                        <div className="item-description">{event.Description}</div>
                                        <div className="item-date">Start date: {event.StartDate}</div>
                                        <div className="item-date">End date: {event.EndDate}</div>
                                    </div> 
                                    </div> 
                                    <DetailsModal show={this.state.DetailsModalShow} 
                                            onHide={()=>{DetailsModalClose();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            Description={Description}
                                            PicFileName={PicFileName}
                                            Details={Details}
                                            StartDate={StartDate}
                                            EndDate={EndDate}
                                            Status={Status}/>
                                </div>                                                               
                            </div>
                        )}                    
                        </div>

                        <div className="col-md-12 Contain-Load-Mores">
                            {this.state.Event_Day_visible < this.state.eventsDay.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreD}>More</Button>}
                        </div>
                    </div>

                    <div className="clear"></div>

                    <div className="Content__Best-Of-Year">

                    </div>

                    <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
}

