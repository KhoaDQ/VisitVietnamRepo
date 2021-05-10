import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './HomeStay.css';
import {AddHomeStayModal} from './AddHomeStayModal.js';
import {EditHomeStayModal} from './EditHomeStayModal.js';
import {AddPlaceModal} from '../Place/AddPlaceModal.js';
import {EditPlaceModal} from '../Place/EditPlaceModal.js';
import {AddLocationModal} from '../Place/Location/AddLocationModal.js';
import {EditLocationModal} from '../Place/Location/EditLocationModal.js';
import {AddPlaceEventModal} from '../Place/PlaceEvent/AddPlaceEventModal.js';
import {EditPlaceEventModal} from '../Place/PlaceEvent/EditPlaceEventModal.js';

export class HomeStay extends Component{

    
    constructor(props){
        super(props);
        this.state={HomeStays:[], Places:[], PlaceEvents:[], Locations:[],
                    addModalShow:false, editModalShow:false, 
                    addPModalShow:false, editPModalShow:false,
                    addLModalShow:false, editLModalShow:false,
                    addEModalShow:false, editEModalShow:false,
        }

        this.refreshList = this.refreshList.bind(this);
        // this.refreshListPlaceEvents = this.refreshListPlaceEvents.bind(this);
        // this.refreshListPlaces = this.refreshListPlaces.bind(this);
        // this.refreshListLocations = this.refreshListLocations.bind(this);
        // this.deleteHomeStay = this.deleteHomeStay.bind(this);
        // this.deletePlace = this.deletePlace.bind(this);
        // this.deleteLocation = this.deleteLocation.bind(this);
        // this.deletePlaceEvent = this.deletePlaceEvent.bind(this);
    }
    
    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    refreshList(){
        fetch(process.env.REACT_APP_API+'HomeStay')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({HomeStays:data})
            }
        )
    }

    refreshListPlaces(){
        fetch(process.env.REACT_APP_API+'Place')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Places:data})
            }
        )
    }

    refreshListPlaceEvents(){
        fetch(process.env.REACT_APP_API+'PlaceEvent')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({PlaceEvents:data})
            }
        )
    }

    refreshListLocations(){
        fetch(process.env.REACT_APP_API+'Location')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Locations:data})
            }
        )
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.refreshList();
        this.refreshListPlaces();
        this.refreshListLocations();
        this.refreshListPlaceEvents();
    }


    deleteHomeStay(HomeStayId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'HomeStay/'+HomeStayId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            });

            setTimeout(() => {
                this.refreshList();
             }, 100);            
        }
    }    

    // Delete Place
    deletePlace(PlaceId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Place/'+PlaceId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })

            setTimeout(() => {
                this.refreshListPlaces();
             }, 100);
        }
    }

    // Delete Location
    deleteLocation(LocationId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Location/'+LocationId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })

            setTimeout(() => {
                this.refreshListLocations();
             }, 100);
        }
    }

    // Delete PlaceEvent
    deletePlaceEvent(PlaceEventId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'PlaceEvent/'+PlaceEventId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })

            setTimeout(() => {
                this.refreshListPlaceEvents();
             }, 100);
        }
    }

    render(){
        
        const {HomeStays,Places,Locations,PlaceEvents,
            Description,Type,AvgPrice,Comment,Star,PicFileName,PlaceId,
            pId,pName,pType,pSlogan,pOverview,pPhone,pEmail,pFacebook,pLinkWeb,pEventOfPlace,pPicFileName,
            eId,eName,eType,eDescription,ePicFileName,eDetails,eStartDate,eEndDate,eStatus,ePlaceId,
            lId,lDetails,lStreet,lWard,lDistrict,lCity,lPlaceId
        }=this.state;

        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let addPModalClose=()=>this.setState({addPModalShow:false});
        let editPModalClose=()=>this.setState({editPModalShow:false});
        let addLModalClose=()=>this.setState({addLModalShow:false});
        let editLModalClose=()=>this.setState({editLModalShow:false});
        let addEModalClose=()=>this.setState({addEModalShow:false});
        let editEModalClose=()=>this.setState({editEModalShow:false});

        return(

            <div className="Container">
                
                <div className="Admin">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Type</th>
                                <th>AvgPrice</th>
                                <th>Comment</th>                                
                                <th>Star</th>                                
                                <th>PicFileName</th>
                                <th>PlaceId</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {HomeStays.map(HomeStay=>
                                <tr key={HomeStay.PlaceId}>
                                    <td>{HomeStay.Description}</td>
                                    <td>{HomeStay.Type}</td>
                                    <td>{HomeStay.AvgPrice}</td>
                                    <td>{HomeStay.Comment}</td>
                                    <td>{HomeStay.Star}</td>
                                    <td>{HomeStay.PicFileName}</td>
                                    <td>{HomeStay.PlaceId}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                                onClick={()=>this.setState({editModalShow:true, 
                                                                            Description:HomeStay.Description,
                                                                            Type:HomeStay.Type,
                                                                            AvgPrice:HomeStay.AvgPrice,
                                                                            Comment:HomeStay.Comment,
                                                                            Star:HomeStay.Star,
                                                                            PicFileName:HomeStay.PicFileName,
                                                                            PlaceId:HomeStay.PlaceId})
                                            }>
                                                Edit HomeStay
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                                onClick={()=>
                                                            this.deleteHomeStay(HomeStay.PlaceId)}>
                                                Delete HomeStay
                                            </Button>

                                            <EditHomeStayModal show={this.state.editModalShow} 
                                            onHide={()=>{editModalClose(); this.refreshList();}}
                                            Description={Description}
                                            Type={Type}
                                            AvgPrice={AvgPrice}
                                            Comment={Comment}
                                            Star={Star}
                                            PicFileName={PicFileName}
                                            PlaceId={PlaceId}/>
                                        </ButtonToolbar>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                    <ButtonToolbar>
                        <Button variant='primary'
                            onClick={()=>this.setState({addModalShow:true})}>
                            Add HomeStay
                        </Button>

                        <AddHomeStayModal show={this.state.addModalShow} 
                        onHide={()=>{this.refreshList(); addModalClose();}}/>  
                    </ButtonToolbar>
                </div>
                
                <div className="Admin">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Slogan</th>
                                <th>Overview</th>                                
                                <th>Phone</th>                                
                                <th>Email</th>
                                <th>Facebook</th>
                                <th>LinkWeb</th>
                                <th>EventOfPlace</th>
                                <th>PicFileName</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Places.map(Place=>
                                <tr key={Place.Id}>
                                    <td>{Place.Id}</td>
                                    <td>{Place.Name}</td>
                                    <td>{Place.Type}</td>
                                    <td>{Place.Slogan}</td>
                                    <td>{Place.Overview}</td>
                                    <td>{Place.Phone}</td>
                                    <td>{Place.Email}</td>
                                    <td>{Place.Facebook}</td>
                                    <td>{Place.LinkWeb}</td>
                                    <td>{Place.EventOfPlace}</td>
                                    <td>{Place.PicFileName}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editPModalShow:true, 
                                                                        pId:Place.Id,
                                                                        pName:Place.Name,
                                                                        pType:Place.Type,
                                                                        pSlogan:Place.Slogan,
                                                                        pOverview:Place.Overview,
                                                                        pPhone:Place.Phone,
                                                                        pEmail:Place.Email,
                                                                        pFacebook:Place.Facebook,
                                                                        pLinkWeb:Place.LinkWeb,
                                                                        pEventOfPlace:Place.EventOfPlace,
                                                                        pPicFileName:Place.PicFileName
                                                                        })}>
                                                Edit Place
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deletePlace(Place.Id)}>
                                                Delete Place
                                            </Button>

                                            <EditPlaceModal show={this.state.editPModalShow} 
                                            onHide={()=>{editPModalClose(); this.refreshListPlaces();}}
                                            Id={pId}
                                            Name={pName}
                                            Type={pType}
                                            Slogan={pSlogan}
                                            Overview={pOverview}
                                            Phone={pPhone}
                                            Email={pEmail}
                                            Facebook={pFacebook}
                                            LinkWeb={pLinkWeb}
                                            EventOfPlace={pEventOfPlace}
                                            PicFileName={pPicFileName}/>
                                        </ButtonToolbar>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                    <ButtonToolbar>
                        <Button variant='primary'
                        onClick={()=>this.setState({addPModalShow:true})}>
                            Add Place
                        </Button>

                        <AddPlaceModal show={this.state.addPModalShow} 
                        onHide={()=>{this.refreshListPlaces(); addPModalClose();}}/>
                    </ButtonToolbar>
                </div>

                <div className="Admin">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Details</th>
                                <th>Street</th>
                                <th>Ward</th>
                                <th>District</th>                                
                                <th>City</th>                                
                                <th>PlaceId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Locations.map(Location=>
                                <tr key={Location.Id}>
                                    <td>{Location.Id}</td>
                                    <td>{Location.Details}</td>
                                    <td>{Location.Street}</td>
                                    <td>{Location.Ward}</td>
                                    <td>{Location.District}</td>
                                    <td>{Location.City}</td>
                                    <td>{Location.PlaceId}</td>

                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editLModalShow:true, 
                                                                        lId:Location.Id,
                                                                        lDetails:Location.Details,
                                                                        lStreet:Location.Street,
                                                                        lWard:Location.Ward,
                                                                        lDistrict:Location.District,
                                                                        lCity:Location.City,
                                                                        lPlaceId:Location.PlaceId                                                                        
                                                                        })}>
                                                Edit Location
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deleteLocation(Location.Id)}>
                                                Delete Location
                                            </Button>

                                            <EditLocationModal show={this.state.editLModalShow} 
                                            onHide={()=>{editLModalClose(); this.refreshListLocations();}}
                                            Id={lId}
                                            Details={lDetails}
                                            Street={lStreet}
                                            Ward={lWard}
                                            District={lDistrict}
                                            City={lCity}
                                            PlaceId={lPlaceId}/>

                                        </ButtonToolbar>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                    <ButtonToolbar>
                        <Button variant='primary'
                        onClick={()=>this.setState({addLModalShow:true})}>
                            Add Location
                        </Button>

                        <AddLocationModal show={this.state.addLModalShow} 
                        onHide={()=>{this.refreshListLocations(); addLModalClose();}}/>
                    </ButtonToolbar>

                </div>

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
                                <th>PlaceId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PlaceEvents.map(PlaceEvent=>
                                <tr key={PlaceEvent.Id}>
                                    <td>{PlaceEvent.Id}</td>
                                    <td>{PlaceEvent.Name}</td>
                                    <td>{PlaceEvent.Type}</td>
                                    <td>{PlaceEvent.Description}</td>
                                    <td>{PlaceEvent.PicFileName}</td>
                                    <td>{PlaceEvent.Details}</td>
                                    <td>{PlaceEvent.StartDate}</td>
                                    <td>{PlaceEvent.EndDate}</td>
                                    <td>{PlaceEvent.Status}</td>
                                    <td>{PlaceEvent.PlaceId}</td>

                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editEModalShow:true, 
                                                                        eId:PlaceEvent.Id,
                                                                        eName:PlaceEvent.Name,                                                      
                                                                        eType:PlaceEvent.Type,                                                      
                                                                        eDescription:PlaceEvent.Description,                                                      
                                                                        ePicFileName:PlaceEvent.PicFileName,                                                      
                                                                        eDetails:PlaceEvent.Details,                                                      
                                                                        eStartDate:PlaceEvent.StartDate,                                                      
                                                                        eEndDate:PlaceEvent.EndDate,                                                      
                                                                        eStatus:PlaceEvent.Status,                                                      
                                                                        ePlaceId:PlaceEvent.PlaceId                                                     
                                                                        })}>
                                                Edit PlaceEvent
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deletePlaceEvent(PlaceEvent.Id)}>
                                                Delete PlaceEvent
                                            </Button>

                                            <EditPlaceEventModal show={this.state.editEModalShow} 
                                            onHide={()=>{editEModalClose(); this.refreshListPlaceEvents();}}
                                            Id={eId}
                                            Name={eName}
                                            Type={eType}
                                            Description={eDescription}
                                            PicFileName={ePicFileName}
                                            Details={eDetails}
                                            StartDate={eStartDate}
                                            EndDate={eEndDate}
                                            Status={eStatus}
                                            PlaceId={ePlaceId}/>
                                        </ButtonToolbar>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                    <ButtonToolbar>
                        <Button variant='primary'
                        onClick={()=>this.setState({addEModalShow:true})}>
                            Add PlaceEvent
                        </Button>

                        <AddPlaceEventModal show={this.state.addEModalShow} 
                        onHide={()=>{this.refreshListPlaceEvents(); addEModalClose();}}/>
                    </ButtonToolbar>
                </div>


            </div>
        )
    }
}

