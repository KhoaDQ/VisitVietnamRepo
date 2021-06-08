import React,{Component} from 'react';
import {filter, includes} from 'lodash';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import './Search.css';
const { Panel } = Collapse;

export class Search extends Component{

    constructor(props){
        super(props);
        this.state={foodies:[], outfits:[], gifts:[], places:[], locations:[],
            Product_visible:6,
            ProductGift_visible:6,
            ProductClothes_visible:6,
            Mall_visible:6
        }


        this.loadMoreP = this.loadMoreP.bind(this);
        this.loadMoreG = this.loadMoreG.bind(this);
        this.loadMoreC = this.loadMoreC.bind(this);
        this.loadMoreM = this.loadMoreM.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    callback(key) {
        console.log(key);
    }

    // Call API
    refreshListFoody(){
        fetch(process.env.REACT_APP_API+'foody')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({foodies:data})
            }
        )
    }

    refreshListGift(){
        fetch(process.env.REACT_APP_API+'Gift')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({gifts:data})
            }
        )
    }

    refreshListClothes(){
        fetch(process.env.REACT_APP_API+'Clothes')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({outfits:data})
            }
        )
    }

    getAllPlaces(){
        fetch(process.env.REACT_APP_API+'Place')
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
        this.refreshListFoody();
        this.refreshListGift();
        this.refreshListClothes();
        this.getAllPlaces();
        this.getAllLocation();
    }

    loadMoreP(){
        this.setState((old)=>{
            return {Product_visible:old.Product_visible+3};
        })
    }

    loadMoreG(){
        this.setState((old)=>{
            return {ProductGift_visible:old.ProductGift_visible+3};
        })
    }
    
    loadMoreC(){
        this.setState((old)=>{
            return {ProductClothes_visible:old.ProductClothes_visible+3};
        })
    }

    loadMoreM(){
        this.setState((old)=>{
            return {Mall_visible:old.Mall_visible+3};
        })
    }

    render(){

        let itemsFood = [];
        let itemsGift = [];
        let itemsClothes = [];
        let itemsPlaces = [];
                
        const {foodies,outfits,gifts,places,locations
        } = this.state;

        itemsFood = filter(
            foodies, (item) => {
                return includes(item.Name, this.props.strSearch);
            }
        );

        itemsGift = filter(
            gifts, (item) => {
                return includes(item.Name, this.props.strSearch);
            }
        );

        itemsClothes = filter(
            outfits, (item) => {
                return includes(item.Name, this.props.strSearch);
            }
        );

        itemsPlaces = filter(
            places, (item) => {
                return includes(item.Name, this.props.strSearch);
            }
        );
        return(
            <div className="Container Search">
                <div className="Container__Content">
                    <div className="title-search"><h1>This is search result for '{this.props.strSearch}'</h1></div>

                    {/* Places */}
                    <div className="Content__Product mt-5">
                        <div className="Product">                                                     
                            {/* <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img> */}
                            <div className="Header d-inline">Places</div>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="row member-list  ml-3 mr-3">
                            {itemsPlaces.slice(0,this.state.Mall_visible).map(thing=>
                            <div className="col-sm-12 member-item">                                
                                <div key={thing.Id} className="member-item-content row">
                                    <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} className="member-img border-img col-sm-2 my-1"/>
                                    <div className="item-content m-0 p-3 col-sm-8">
                                        <div className="item-header mt-1">{thing.Name}</div>
                                        <div className="item-slogan">{thing.Slogan}</div>
                                        <Collapse className="mt-2" onChange={this.callback}>
                                                <Panel header="Details" key="1">
                                        <div className="item-slogan">{thing.Overview}</div>
                                        <p><div className="item-info">{thing.Phone}</div></p>
                                        <p><div className="item-info">{thing.Email}</div></p>
                                        <p><div className="item-info">{thing.Facebook}</div></p>
                                        <p><div className="item-info">{thing.LinkWeb}</div></p>

                                        
                                                                                       
                                            <div className="location-list mt-3">
                                            {locations.map(location=>
                                                <div key={location.Id} className="d-inline mt-2">
                                                    {(location.PlaceId)==(thing.Id) &&
                                                    <div>- {location.Details},                                             
                                                    {location.Street},                                         
                                                    {location.Ward},                                             
                                                    {location.District},                                                
                                                    {location.City}</div>}
                                                </div>                                               
                                            )}
                                            </div>
                                            </Panel>
                                        </Collapse>
                                    </div>                                                         
                                                                                       
                                        
                                </div> 
                                </div>                                                               
                            )}
                        </div>
                        <div className="col-md-12 Contain-Load-Mores">
                            {this.state.Mall_visible < itemsPlaces.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreM}>More</Button>}
                        </div>
                        <div className="hide-item border-bottom mb-5"></div>
                    </div>

                    {/* Foody */}
                    <div className="Content__Product mt-5">
                        <div className="Product">                                                     
                            {/* <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img> */}
                            <div className="Header d-inline">Foody</div>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="row member-list  ml-3 mr-3">
                            {itemsFood.slice(0,this.state.Product_visible).map(foody=>
                            <div className="col-sm-12 member-item">                                
                                <div key={foody.Id} className="member-item-content row">
                                    <img src={this.ImageSrc+foody.PicFileName} alt={foody.PicFileName} className="member-img border-img col-sm-2 my-1"/>
                                    <div className="item-content m-0 p-3 col-sm-8">
                                        <div className="item-header mt-1">{foody.Name}</div>
                                        <div className="item-info mt-1">Price: {foody.Price}</div>
                                        {places.map(place=>
                                            <div>
                                                <div key={foody.Id} className="d-inline mt-2">
                                                    {(foody.PlaceId)==(place.Id) &&
                                                        <div>
                                                        <div className="mt-1">Restaurant: {place.Name}</div>                                                  
                                                        {/* <Collapse className="mt-1">
                                                        <Panel header="Address" key="1">
                                                                <p>
                                                                    
                                                                </p>
                                                            </Panel>
                                                        </Collapse> */}
                                                        <div className="location-list mt-3">
                                                        {locations.map(location=>
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
                            {this.state.Product_visible < itemsFood.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreP}>More</Button>}
                        </div>
                        <div className="hide-item border-bottom mb-5"></div>
                    </div>

                    {/* Clothes */}
                    <div className="Content__Product mt-5">
                        <div className="Product">                                                     
                            {/* <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img> */}
                            <div className="Header d-inline">Clothes</div>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="row member-list  ml-3 mr-3">
                            {itemsClothes.slice(0,this.state.ProductClothes_visible).map(item=>
                            <div className="col-sm-12 member-item">                                
                                <div key={item.Id} className="member-item-content row">
                                    <img src={this.ImageSrc+item.PicFileName} alt={item.PicFileName} className="member-img border-img col-sm-2 my-1"/>
                                    <div className="item-content m-0 p-3 col-sm-8">
                                        <div className="item-header mt-1">{item.Name}</div>
                                        <div className="item-info mt-1">Price: {item.Price}</div>
                                        {places.map(place=>
                                            <div>
                                                <div key={item.Id} className="d-inline mt-2">
                                                    {(item.PlaceId)==(place.Id) &&
                                                        <div>
                                                        <div className="mt-1">Restaurant: {place.Name}</div>                                                  
                                                        {/* <Collapse className="mt-1">
                                                        <Panel header="Address" key="1">
                                                                <p>
                                                                    
                                                                </p>
                                                            </Panel>
                                                        </Collapse> */}
                                                        <div className="location-list mt-3">
                                                            {locations.map(location=>
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
                            {this.state.ProductClothes_visible < itemsClothes.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreC}>More</Button>}
                        </div>
                        <div className="hide-item border-bottom mb-5"></div>
                    </div>

                    {/* Gift */}
                    <div className="Content__Product mt-5">
                        <div className="Product">                                                     
                            {/* <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img> */}
                            <div className="Header d-inline">Gift</div>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="row member-list  ml-3 mr-3">
                            {itemsGift.slice(0,this.state.ProductGift_visible).map(item=>
                            <div className="col-sm-12 member-item">                                
                                <div key={item.Id} className="member-item-content row">
                                    <img src={this.ImageSrc+item.PicFileName} alt={item.PicFileName} className="member-img border-img col-sm-2 my-1"/>
                                    <div className="item-content m-0 p-3 col-sm-8">
                                        <div className="item-header mt-1">{item.Name}</div>
                                        <div className="item-info mt-1">Price: {item.Price}</div>
                                        {places.map(place=>
                                            <div>
                                                <div key={item.Id} className="d-inline mt-2">
                                                    {(item.PlaceId)==(place.Id) &&
                                                        <div>
                                                        <div className="mt-1">Restaurant: {place.Name}</div>                                                  
                                                        {/* <Collapse className="mt-1">
                                                        <Panel header="Address" key="1">
                                                                <p>
                                                                    
                                                                </p>
                                                            </Panel>
                                                        </Collapse> */}
                                                        <div className="location-list mt-3">
                                                                    {locations.map(location=>
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
                            {this.state.ProductGift_visible < itemsGift.length &&
                            <Button className="Load-Mores" onClick={this.loadMoreG}>More</Button>}
                        </div>
                        <div className="hide-item border-bottom mb-5"></div>
                    </div>

                </div>
            </div>
        )
    }

}