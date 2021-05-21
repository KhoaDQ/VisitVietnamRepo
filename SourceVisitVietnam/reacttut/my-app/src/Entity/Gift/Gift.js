import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Gift.css';
import {AddGiftModal} from './AddGiftModal.js';
import {EditGiftModal} from './EditGiftModal.js';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export class Gift extends Component{

    
    constructor(props){
        super(props);
        this.state={gifts:[], places:[], locations:[],
            addModalShow:false, editModalShow:false,
            Mall_visible:3, Product_visible:6
        }
    }
    
    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    callback(key) {
        console.log(key);
    }

    // Call API
    refreshList(){
        fetch(process.env.REACT_APP_API+'Gift')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({gifts:data})
            }
        )
    }

    getAllPlacesShoppingGifts(){
        fetch(process.env.REACT_APP_API+'Gift/GetAllPlacesShoppingGifts')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({places:data})
            }
        )
    }

    getAllLocation(){
        fetch(process.env.REACT_APP_API+'Location/GetAllLocation/')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({locations:data})
            }
        )
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.getAllPlacesShoppingGifts();
        this.refreshList();
    }

    deleteGift(GiftId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Gift/'+GiftId,{
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


    render(){
        
        const {gifts,places,locations,
            Id,Name,Type,Price,Note,PicFileName,PlaceId}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            <div className="Container Gift">
                
                <div className="Admin">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Note</th>                                
                                <th>PicFileName</th>
                                <th>PlaceId</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gifts.map(Gift=>
                                <tr key={Gift.Id}>
                                    <td>{Gift.Id}</td>
                                    <td>{Gift.Name}</td>
                                    <td>{Gift.Type}</td>
                                    <td>{Gift.Price}</td>
                                    <td>{Gift.Note}</td>
                                    <td>{Gift.PicFileName}</td>
                                    <td>{Gift.PlaceId}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editModalShow:true, 
                                                                        Id:Gift.Id,
                                                                        Name:Gift.Name,
                                                                        Type:Gift.Type,
                                                                        Price:Gift.Price,
                                                                        Note:Gift.Note,
                                                                        PicFileName:Gift.PicFileName,
                                                                        PlaceId:Gift.PlaceId})}>
                                                Edit Gift
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deleteGift(Gift.Id)}>
                                                Delete Gift
                                            </Button>

                                            <EditGiftModal show={this.state.editModalShow} 
                                            onHide={()=>{editModalClose(); this.refreshList();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            Price={Price}
                                            Note={Note}
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
                            Add Gift
                        </Button>

                        <AddGiftModal show={this.state.addModalShow} 
                        onHide={()=>{this.refreshList(); addModalClose();}}/>
                    </ButtonToolbar>
                </div>

                <div id="slider">
                    <div className="text-content">
                        <div className="text-heading">Gifts</div>
                        <div className="text-desc">Description</div>
                    </div>
                </div>
                
                <div className="Container__background pt-5 pb-5">
                    <div className="Container__Content">
                        <div className="Content__Mall">
                            <div className="Mall">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Mall shopping</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {places.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PicFileName} alt={place.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header">{place.Name}</div>
                                            <div className="item-slogan">{place.Slogan}</div>
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
                                                        {locations.map(location=>
                                                            <div key={location.Id} className="d-inline mt-2">
                                                                {(location.Id)=(place.Id) &&
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
                                {this.state.Mall_visible < this.state.places.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                            </div>
                        </div>

                        <div className="Content__Product mt-5">
                            <div className="Product">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Souvenir</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {gifts.slice(0,this.state.Product_visible).map(gift=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={gift.Id} className="member-item-content">
                                        <img src={this.ImageSrc+gift.PicFileName} alt={gift.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header">{gift.Name}</div>
                                            <div className="item-info">Price: {gift.Price}</div>
                                            {places.map(place=>
                                                <div>
                                                    <div key={gift.Id} className="d-inline mt-2">
                                                        {(gift.PlaceId)==(place.Id) &&
                                                            <div>
                                                            <div className="mt-1">Restaurant: {place.Name}</div>                                                  
                                                            <Collapse className="mt-1">
                                                            <Panel header="Address" key="1">
                                                                    <p>
                                                                        <div className="location-list mt-3">
                                                                        {locations.map(location=>
                                                                            <div key={location.Id} className="d-inline mt-2">
                                                                                {(location.Id)=(place.Id) &&
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
                                                            
                                                    }
                                                    </div> 
                                                </div>
                                            )}
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Product_visible < this.state.gifts.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreP}>More</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

