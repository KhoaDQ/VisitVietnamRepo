import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import 'antd/dist/antd.css';
import './Foody.css';
import {AddFoodyModal} from './AddFoodyModal.js';
import {EditFoodyModal} from './EditFoodyModal.js';
import { Collapse } from 'antd';
const { Panel } = Collapse;


export class Foody extends Component{

    
    constructor(props){
        super(props);
        this.state={foodies:[], places:[], isFoods:[], isCakes:[], isDrinks:[], locations:[],
            addModalShow:false, editModalShow:false,
            Mall_visible:3, Food_visible:6, Drink_visible:6, Cake_visible:6, Product_visible:6
        }
        this.loadMoreM = this.loadMoreM.bind(this);
        this.loadMoreF = this.loadMoreF.bind(this);
        this.loadMoreD = this.loadMoreD.bind(this);
        this.loadMoreC = this.loadMoreC.bind(this);
        this.loadMoreP = this.loadMoreP.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    callback(key) {
        console.log(key);
    }

    // Call API
    refreshList(){
        fetch(process.env.REACT_APP_API+'foody')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({foodies:data})
            }
        )
    }

    getAllPlacesFoody(){
        fetch(process.env.REACT_APP_API+'Foody/GetAllPlacesFoody')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({places:data})
            }
        )
    }

    getAllFood(){
        fetch(process.env.REACT_APP_API+'Foody/GetAllFood')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({isFoods:data})
            }
        )
    }

    getAllDrink(){
        fetch(process.env.REACT_APP_API+'Foody/GetAllDrink')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({isDrinks:data})
            }
        )
    }

    getAllCake(){
        fetch(process.env.REACT_APP_API+'Foody/GetAllCake')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({isCakes:data})
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
        this.refreshList();
        this.getAllPlacesFoody();
        this.getAllCake();
        this.getAllDrink();
        this.getAllFood();
        this.getAllLocation();
    }

    deleteFoody(foodyId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'foody/'+foodyId,{
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
    loadMoreM(){
        this.setState((old)=>{
            return {Mall_visible:old.Mall_visible+3};
        })
    }

    loadMoreF(){
        this.setState((old)=>{
            return {Food_visible:old.Food_visible+3};
        })
    }

    loadMoreD(){
        this.setState((old)=>{
            return {Drink_visible:old.Drink_visible+3};
        })
    }

    loadMoreC(){
        this.setState((old)=>{
            return {Cake_visible:old.Cake_visible+3};
        })
    }

    loadMoreP(){
        this.setState((old)=>{
            return {Product_visible:old.Product_visible+3};
        })
    }


    render(){
        
        const {foodies,places, isCakes, isFoods, isDrinks,locations,
            Id,Name,Type,MiniType,Price,Note,PicFileName,PlaceId}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            <div className="Container Foody">
                
                <div className="Admin">
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>MiniType</th>
                                <th>Note</th>
                                <th>PicFileName</th>
                                <th>PlaceId</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodies.map(foody=>
                                <tr key={foody.Id}>
                                    <td>{foody.Id}</td>
                                    <td>{foody.Name}</td>
                                    <td>{foody.Type}</td>
                                    <td>{foody.MiniType}</td>
                                    <td>{foody.Note}</td>
                                    <td>{foody.PicFileName}</td>
                                    <td>{foody.PlaceId}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editModalShow:true, 
                                                                        Id:foody.Id,
                                                                        Name:foody.Name,
                                                                        Type:foody.Type,
                                                                        MiniType:foody.MiniType,
                                                                        Note:foody.Note,
                                                                        PicFileName:foody.PicFileName,
                                                                        PlaceId:foody.PlaceId})}>
                                                Edit Foody
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deleteFoody(foody.Id)}>
                                                Delete Foody
                                            </Button>

                                            <EditFoodyModal show={this.state.editModalShow} 
                                            onHide={()=>{editModalClose(); this.refreshList();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            MiniType={MiniType}
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
                            Add Foody
                        </Button>

                        <AddFoodyModal show={this.state.addModalShow} 
                        onHide={()=>{this.refreshList(); addModalClose();}}/>
                    </ButtonToolbar>
                </div>
                {/* End: Admin */}

                <div id="slider" className="Banner">
                    <div className="text-content">
                        <div className="text-heading">Foody</div>
                        <div className="text-desc">Description</div>
                    </div>
                </div>
                <div className="Container__background pt-5 pb-5">
                    <div className="Container__Content">

                        <ul id="nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#mall">Mall</a></li>
                            <li><a href="#food">food</a></li>
                            <li><a href="#drink">drink</a></li>
                            <li><a href="#cake">cake</a></li>
                            <li><a href="#all">all</a></li>
                            <li>
                                <a href="#">
                                    More
                                    <i class="nav-arrow-down ti-angle-down"></i>
                                </a>
                                <ul class="subnav">
                                    <li><a href="#">More</a></li>
                                    <li><a href="#">More</a></li>
                                    <li><a href="#">More</a></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="Content__Mall" id="mall">
                            <div className="Mall">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Restaurant</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3">
                                {places.slice(0,this.state.Mall_visible).map(place=>
                                <div class="col-sm-4 member-item mt-3">                                
                                    <div key={place.Id} className="member-item-content">
                                        <img src={this.ImageSrc+place.PicFileName} alt={place.PicFileName} className="member-img border-img"/>
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
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        <div className="Content__Food mt-5" id="food">
                            <div className="Food">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Food</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {isFoods.slice(0,this.state.Food_visible).map(foody=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={foody.Id} className="member-item-content">
                                        <img src={this.ImageSrc+foody.PicFileName} alt={foody.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">                                            
                                            <div className="item-header mt-1">{foody.Name}</div>
                                            <div className="item-info mt-1">Price: {foody.Price}</div>
                                            {places.map(place=>
                                                <div>
                                                    <div key={foody.Id} className="d-inline mt-2">
                                                        {(foody.PlaceId)==(place.Id) &&
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
                                {this.state.Food_visible < this.state.isFoods.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreF}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        <div className="Content__Drink mt-5" id="drink">
                            <div className="Drink">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Drink</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {isDrinks.slice(0,this.state.Drink_visible).map(foody=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={foody.Id} className="member-item-content">
                                        <img src={this.ImageSrc+foody.PicFileName} alt={foody.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header mt-1">{foody.Name}</div>
                                            <div className="item-info mt-1">Price: {foody.Price}</div>
                                            {places.map(place=>
                                                <div>
                                                    <div key={foody.Id} className="d-inline mt-2">
                                                        {(foody.PlaceId)==(place.Id) &&
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
                                {this.state.Drink_visible < this.state.isDrinks.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreD}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        <div className="Content__Cake mt-5" id="cake">
                            <div className="Cake">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Cake</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {isCakes.slice(0,this.state.Cake_visible).map(foody=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={foody.Id} className="member-item-content">
                                        <img src={this.ImageSrc+foody.PicFileName} alt={foody.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header mt-1">{foody.Name}</div>
                                            <div className="item-info mt-1">Price: {foody.Price}</div>
                                            {places.map(place=>
                                                <div>
                                                    <div key={foody.Id} className="d-inline mt-2">
                                                        {(foody.PlaceId)==(place.Id) &&
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
                                {this.state.Cake_visible < this.state.isCakes.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreC}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                        <div className="Content__Product mt-5" id="all">
                            <div className="Product">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Product</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {foodies.slice(0,this.state.Product_visible).map(foody=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={foody.Id} className="member-item-content">
                                        <img src={this.ImageSrc+foody.PicFileName} alt={foody.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header mt-1">{foody.Name}</div>
                                            <div className="item-info mt-1">Price: {foody.Price}</div>
                                            {places.map(place=>
                                                <div>
                                                    <div key={foody.Id} className="d-inline mt-2">
                                                        {(foody.PlaceId)==(place.Id) &&
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
                                {this.state.Product_visible < this.state.foodies.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreP}>More</Button>}
                            </div>
                            <div className="hide-item border-bottom mb-5"></div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

