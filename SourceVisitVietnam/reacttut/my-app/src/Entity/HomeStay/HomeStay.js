import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './HomeStay.css';
import {AddHomeStayModal} from './AddHomeStayModal.js';
import {EditHomeStayModal} from './EditHomeStayModal.js';
import {AddPlaceModal} from '../Place/AddPlaceModal.js';
import {EditPlaceModal} from '../Place/EditPlaceModal.js';
import {AddArticleModal} from '../Article/AddArticleModal.js';
import {EditArticleModal} from '../Article/EditArticleModal.js';
import {AddLocationModal} from '../Place/Location/AddLocationModal.js';
import {EditLocationModal} from '../Place/Location/EditLocationModal.js';
import {AddPlaceEventModal} from '../Place/PlaceEvent/AddPlaceEventModal.js';
import {EditPlaceEventModal} from '../Place/PlaceEvent/EditPlaceEventModal.js';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export class HomeStay extends Component{
    
    constructor(props){
        super(props);
        this.state={HomeStays:[], Places:[], PlaceEvents:[], Locations:[], Articles:[], Hotels:[],Hostels:[],Homestays:[], Villas:[], Bungalows:[], Resorts:[],
                    addModalShow:false, editModalShow:false, 
                    addPModalShow:false, editPModalShow:false,
                    addLModalShow:false, editLModalShow:false,
                    addEModalShow:false, editEModalShow:false,
                    addAModalShow:false, editAModalShow:false,
        }

        this.refreshList = this.refreshList.bind(this);
    }
    
    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    callback(key) {
        console.log(key);
    }

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

    refreshListArticles(){
        fetch(process.env.REACT_APP_API+'Article')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Articles:data})
            }
        )
    }

    getAllHotel(){
        fetch(process.env.REACT_APP_API+'homestay/GetAllHotel')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Hotels:data})
            }
        )
    }

    getAllHostel(){
        fetch(process.env.REACT_APP_API+'homestay/GetAllHostel')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Hostels:data})
            }
        )
    }

    getAllHomestay(){
        fetch(process.env.REACT_APP_API+'homestay/GetAllHomestay')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Homestays:data})
            }
        )
    }

    getAllVilla(){
        fetch(process.env.REACT_APP_API+'homestay/GetAllVilla')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Villas:data})
            }
        )
    }

    getAllBungalow(){
        fetch(process.env.REACT_APP_API+'homestay/GetAllBungalow')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Bungalows:data})
            }
        )
    }

    getAllResort(){
        fetch(process.env.REACT_APP_API+'homestay/GetAllResort')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({Resorts:data})
            }
        )
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.refreshList();
        this.refreshListPlaces();
        this.refreshListLocations();
        this.refreshListPlaceEvents();
        this.refreshListArticles();
        this.getAllHotel();
        this.getAllHostel();
        this.getAllHomestay();
        this.getAllVilla();
        this.getAllBungalow();
        this.getAllResort();
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

    // Delete Article
    deleteArticle(ArticleId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Article/'+ArticleId,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'}
            })

            setTimeout(() => {
                this.refreshListArticles();
             }, 100);
        }
    }

    render(){
        
        const {HomeStays,Places,Locations,PlaceEvents,Articles,Hotels,Hostels,Homestays,Villas,Bungalows,Resorts,
            Description,Type,AvgPrice,Comment,Star,PicFileName,PlaceId,
            pId,pName,pType,pSlogan,pOverview,pPhone,pEmail,pFacebook,pLinkWeb,pEventOfPlace,pPicFileName,
            eId,eName,eType,eDescription,ePicFileName,eDetails,eStartDate,eEndDate,eStatus,ePlaceId,
            aId,aName,aType,aDescription,aPicFileName,aStatus,
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
        let addAModalClose=()=>this.setState({addAModalShow:false});
        let editAModalClose=()=>this.setState({editAModalShow:false});

        return(

            <div className="Container HomeStay">
                
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

                <div className="Admin">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>PicFileName</th>                                
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Articles.map(Article=>
                                <tr key={Article.Id}>
                                    <td>{Article.Id}</td>
                                    <td>{Article.Name}</td>
                                    <td>{Article.Type}</td>
                                    <td>{Article.Description}</td>
                                    <td>{Article.PicFileName}</td>
                                    <td>{Article.Status}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editAModalShow:true, 
                                                                        aId:Article.Id,
                                                                        aName:Article.Name,                                                      
                                                                        aType:Article.Type,                                                      
                                                                        aDescription:Article.Description,                                                      
                                                                        aPicFileName:Article.PicFileName,                                                                                                  
                                                                        aStatus:Article.Status                                                                                                          
                                                                        })}>
                                                Edit Article
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deleteArticle(Article.Id)}>
                                                Delete Article
                                            </Button>

                                            <EditArticleModal show={this.state.editAModalShow} 
                                            onHide={()=>{editAModalClose(); this.refreshListArticles();}}
                                            Id={aId}
                                            Name={aName}
                                            Type={aType}
                                            Description={aDescription}
                                            PicFileName={aPicFileName}
                                            Status={aStatus}/>
                                        </ButtonToolbar>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                    <ButtonToolbar>
                        <Button variant='primary'
                        onClick={()=>this.setState({addAModalShow:true})}>
                            Add Article
                        </Button>

                        <AddArticleModal show={this.state.addAModalShow} 
                        onHide={()=>{this.refreshListArticles(); addAModalClose();}}/>
                    </ButtonToolbar>
                </div>

                <div id="slider" className="Banner">
                    <div className="text-content ">                        
                        <div className="text-heading">Homestay</div>
                        <div className="text-desc">Description</div>
                    </div>                 
                </div>

                <div className="Container__background pt-5 pb-5">
                    <div className="Container__Content">

                        <ul id="nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#Hotel">Hotel</a></li>
                            <li><a href="#Hostel">Hostel</a></li>
                            <li><a href="#Homestay">Homestay</a></li>
                            <li><a href="#Villa">Villa</a></li>
                            <li>
                                <a href="#">
                                    More
                                    <i class="nav-arrow-down ti-angle-down"></i>
                                </a>
                                <ul class="subnav">
                                    <li><a href="#Bungalow">Bungalow</a></li>
                                    <li><a href="#Resort">Resort</a></li>
                                    <li><a href="#">More</a></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Budget Hotel */}
                        <div className="Content__Hotel" id="Hotel">
                            <div className="Hotel">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline text-in-dark">Budget Hotel</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {Hotels.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PlacePicFileName} alt={place.PlacePicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header px-3">{place.Name}</div>
                                            <div className="item-slogan px-3">{place.Slogan}</div>
                                            <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Overview" key="1">
                                                    <p><div className="item-overview">{place.Overview}</div></p>
                                                </Panel>
                                                <Panel header="Contact" key="2">
                                                    <p><div className="item-info">{place.Phone}</div></p>
                                                    <p><div className="item-info">{place.Email}</div></p>
                                                    <p><div className="item-info">{place.Facebook}</div></p>
                                                    <p><div className="item-info">{place.LinkWeb}</div></p>
                                                </Panel>
                                                <Panel header="Address" key="3">
                                                    <p>
                                                        <div className="location-list mt-3">
                                                        {Locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.PlaceId)==(place.Id) &&
                                                                <div>- {location.Details},                                             
                                                                {location.Street},                                         
                                                                {location.Ward},                                             
                                                                {location.District},                                                
                                                                {location.City}</div>}
                                                            </div>                                               
                                                        )}
                                                        </div>
                                                    </p>
                                                </Panel>
                                            </Collapse>                                                                                                                                
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Mall_visible < this.state.Hotels.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>
                        
                        {/* Hostel */}
                        <div className="Content__Hostel" id="Hostel">
                            <div className="Hostel">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline text-in-dark">Hostel</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {Hostels.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PlacePicFileName} alt={place.PlacePicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header px-3">{place.Name}</div>
                                            <div className="item-slogan px-3">{place.Slogan}</div>
                                            <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Overview" key="1">
                                                    <p><div className="item-overview">{place.Overview}</div></p>
                                                </Panel>
                                                <Panel header="Contact" key="2">
                                                    <p><div className="item-info">{place.Phone}</div></p>
                                                    <p><div className="item-info">{place.Email}</div></p>
                                                    <p><div className="item-info">{place.Facebook}</div></p>
                                                    <p><div className="item-info">{place.LinkWeb}</div></p>
                                                </Panel>
                                                <Panel header="Address" key="3">
                                                    <p>
                                                        <div className="location-list mt-3">
                                                        {Locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.PlaceId)==(place.Id) &&
                                                                <div>- {location.Details},                                             
                                                                {location.Street},                                         
                                                                {location.Ward},                                             
                                                                {location.District},                                                
                                                                {location.City}</div>}
                                                            </div>                                               
                                                        )}
                                                        </div>
                                                    </p>
                                                </Panel>
                                            </Collapse>                                                                                                                                
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Mall_visible < this.state.Hotels.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        {/* Homestay */}
                        <div className="Content__Homestay" id="Homestay">
                            <div className="Homestay">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline text-in-dark">Homestay</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {Homestays.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PlacePicFileName} alt={place.PlacePicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header px-3">{place.Name}</div>
                                            <div className="item-slogan px-3">{place.Slogan}</div>
                                            <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Overview" key="1">
                                                    <p><div className="item-overview">{place.Overview}</div></p>
                                                </Panel>
                                                <Panel header="Contact" key="2">
                                                    <p><div className="item-info">{place.Phone}</div></p>
                                                    <p><div className="item-info">{place.Email}</div></p>
                                                    <p><div className="item-info">{place.Facebook}</div></p>
                                                    <p><div className="item-info">{place.LinkWeb}</div></p>
                                                </Panel>
                                                <Panel header="Address" key="3">
                                                    <p>
                                                        <div className="location-list mt-3">
                                                        {Locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.PlaceId)==(place.Id) &&
                                                                <div>- {location.Details},                                             
                                                                {location.Street},                                         
                                                                {location.Ward},                                             
                                                                {location.District},                                                
                                                                {location.City}</div>}
                                                            </div>                                               
                                                        )}
                                                        </div>
                                                    </p>
                                                </Panel>
                                            </Collapse>                                                                                                                                
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Mall_visible < this.state.Hotels.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        {/* Villa */}
                        <div className="Content__Villa" id="Villa">
                            <div className="Villa">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline text-in-dark">Villa</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {Villas.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PlacePicFileName} alt={place.PlacePicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header px-3">{place.Name}</div>
                                            <div className="item-slogan px-3">{place.Slogan}</div>
                                            <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Overview" key="1">
                                                    <p><div className="item-overview">{place.Overview}</div></p>
                                                </Panel>
                                                <Panel header="Contact" key="2">
                                                    <p><div className="item-info">{place.Phone}</div></p>
                                                    <p><div className="item-info">{place.Email}</div></p>
                                                    <p><div className="item-info">{place.Facebook}</div></p>
                                                    <p><div className="item-info">{place.LinkWeb}</div></p>
                                                </Panel>
                                                <Panel header="Address" key="3">
                                                    <p>
                                                        <div className="location-list mt-3">
                                                        {Locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.PlaceId)==(place.Id) &&
                                                                <div>- {location.Details},                                             
                                                                {location.Street},                                         
                                                                {location.Ward},                                             
                                                                {location.District},                                                
                                                                {location.City}</div>}
                                                            </div>                                               
                                                        )}
                                                        </div>
                                                    </p>
                                                </Panel>
                                            </Collapse>                                                                                                                                
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Mall_visible < this.state.Hotels.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        {/* Bungalow */}
                        <div className="Content__Bungalow" id="Bungalow">
                            <div className="Bungalow">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline text-in-dark">Bungalow</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {Bungalows.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PlacePicFileName} alt={place.PlacePicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header px-3">{place.Name}</div>
                                            <div className="item-slogan px-3">{place.Slogan}</div>
                                            <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Overview" key="1">
                                                    <p><div className="item-overview">{place.Overview}</div></p>
                                                </Panel>
                                                <Panel header="Contact" key="2">
                                                    <p><div className="item-info">{place.Phone}</div></p>
                                                    <p><div className="item-info">{place.Email}</div></p>
                                                    <p><div className="item-info">{place.Facebook}</div></p>
                                                    <p><div className="item-info">{place.LinkWeb}</div></p>
                                                </Panel>
                                                <Panel header="Address" key="3">
                                                    <p>
                                                        <div className="location-list mt-3">
                                                        {Locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.PlaceId)==(place.Id) &&
                                                                <div>- {location.Details},                                             
                                                                {location.Street},                                         
                                                                {location.Ward},                                             
                                                                {location.District},                                                
                                                                {location.City}</div>}
                                                            </div>                                               
                                                        )}
                                                        </div>
                                                    </p>
                                                </Panel>
                                            </Collapse>                                                                                                                                
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Mall_visible < this.state.Hotels.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        {/* Resort */}
                        <div className="Content__Resort" id="Resort">
                            <div className="Resort">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline text-in-dark">Resort</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {Resorts.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PlacePicFileName} alt={place.PlacePicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header px-3">{place.Name}</div>
                                            <div className="item-slogan px-3">{place.Slogan}</div>
                                            <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Overview" key="1">
                                                    <p><div className="item-overview">{place.Overview}</div></p>
                                                </Panel>
                                                <Panel header="Contact" key="2">
                                                    <p><div className="item-info">{place.Phone}</div></p>
                                                    <p><div className="item-info">{place.Email}</div></p>
                                                    <p><div className="item-info">{place.Facebook}</div></p>
                                                    <p><div className="item-info">{place.LinkWeb}</div></p>
                                                </Panel>
                                                <Panel header="Address" key="3">
                                                    <p>
                                                        <div className="location-list mt-3">
                                                        {Locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.PlaceId)==(place.Id) &&
                                                                <div>- {location.Details},                                             
                                                                {location.Street},                                         
                                                                {location.Ward},                                             
                                                                {location.District},                                                
                                                                {location.City}</div>}
                                                            </div>                                               
                                                        )}
                                                        </div>
                                                    </p>
                                                </Panel>
                                            </Collapse>                                                                                                                                
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Mall_visible < this.state.Hotels.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

