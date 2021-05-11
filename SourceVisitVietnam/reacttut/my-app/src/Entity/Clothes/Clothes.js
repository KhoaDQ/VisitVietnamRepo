import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Clothes.css';
import {AddClothesModal} from './AddClothesModal.js';
import {EditClothesModal} from './EditClothesModal.js';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export class Clothes extends Component{

    
    constructor(props){
        super(props);
        this.state={outfits:[], places:[], brands:[], locations:[],
            addModalShow:false, editModalShow:false,
            Mall_visible:3, Brand_visible:3, Product_visible:6
        }
        this.loadMoreM = this.loadMoreM.bind(this);
        this.loadMoreB = this.loadMoreB.bind(this);
        this.loadMoreP = this.loadMoreP.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    callback(key) {
        console.log(key);
    }

    // Call API
    refreshList(){
        fetch(process.env.REACT_APP_API+'Clothes')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({outfits:data})
            }
        )
    }

    getAllPlacesShoppingClothes(){
        fetch(process.env.REACT_APP_API+'Clothes/GetAllPlacesShoppingClothes')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({places:data})
            }
        )
    }

    getAllClothesIsBrand(){
        fetch(process.env.REACT_APP_API+'Clothes/GetAllClothesIsBrand')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({brands:data})
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

    // getAllLocation(id){
    //     fetch(process.env.REACT_APP_API+'Clothes/GetAllLocation/'+id)
    //     .then(response=>response.json())
    //     .then(
    //         data=>{
    //             this.setState({brands:data})
    //         }
    //     )
    // }

    componentDidMount(){
        this.refreshList();
        this.getAllPlacesShoppingClothes();
        this.getAllClothesIsBrand();
        window.scrollTo(0, 0);
    }

    deleteClothes(ClothesId){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Clothes/'+ClothesId,{
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

    loadMoreB(){
        this.setState((old)=>{
            return {Brand_visible:old.Brand_visible+3};
        })
    }

    loadMoreP(){
        this.setState((old)=>{
            return {Product_visible:old.Product_visible+3};
        })
    }

    render(){
        
        const {outfits,places,brands,locations,
            Id,Name,Type,Gender,RangeAge,Price,Note,PicFileName,PlaceId,
            Slogan,Overview,Phone,Email,Facebook,LinkWeb,EventOfPlace,

        }=this.state;
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
                                <th>Gender</th>
                                <th>RangeAge</th>
                                <th>Price</th>
                                <th>Note</th>                                
                                <th>PicFileName</th>
                                <th>PlaceId</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {outfits.map(Clothes=>
                                <tr key={Clothes.Id}>
                                    <td>{Clothes.Id}</td>
                                    <td>{Clothes.Name}</td>
                                    <td>{Clothes.Type}</td>
                                    <td>{Clothes.Gender}</td>
                                    <td>{Clothes.RangeAge}</td>
                                    <td>{Clothes.Price}</td>
                                    <td>{Clothes.Note}</td>
                                    <td>{Clothes.PicFileName}</td>
                                    <td>{Clothes.PlaceId}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='info' className="p-1 mr-2"
                                            onClick={()=>this.setState({editModalShow:true, 
                                                                        Id:Clothes.Id,
                                                                        Name:Clothes.Name,
                                                                        Type:Clothes.Type,
                                                                        Gender:Clothes.Gender,
                                                                        RangeAge:Clothes.RangeAge,
                                                                        Price:Clothes.Price,
                                                                        Note:Clothes.Note,
                                                                        PicFileName:Clothes.PicFileName,
                                                                        PlaceId:Clothes.PlaceId})}>
                                                Edit Clothes
                                            </Button>

                                            <Button variant='danger' className="p-1 mr-2"
                                            onClick={()=>this.deleteClothes(Clothes.Id)}>
                                                Delete Clothes
                                            </Button>

                                            <EditClothesModal show={this.state.editModalShow} 
                                            onHide={()=>{editModalClose(); this.refreshList();}}
                                            Id={Id}
                                            Name={Name}
                                            Type={Type}
                                            Gender={Gender}
                                            RangeAge={RangeAge}
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
                            Add Clothes
                        </Button>

                        <AddClothesModal show={this.state.addModalShow} 
                        onHide={()=>{this.refreshList(); addModalClose();}}/>
                    </ButtonToolbar>
                </div>
                {/* End: Admin */}

                <div id="slider">
                    <div className="text-content">
                        <div className="text-heading">Clothes</div>
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

                        <div className="Content__Brand mt-5">
                            <div className="Brand">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Brands</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {brands.slice(0,this.state.Brand_visible).map(brand=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={brand.Id} className="member-item-content">
                                        <img src={this.ImageSrc+brand.PicFileName} alt={brand.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-about">{brand.Note}</div>
                                        </div> 
                                    </div>                                                               
                                </div>
                                )}
                            </div>
                            <div className="col-md-12 Contain-Load-Mores">
                                {this.state.Brand_visible < this.state.brands.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreB}>More</Button>}
                            </div>
                        </div>

                        <div className="Content__Product mt-5">
                            <div className="Product">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Product</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list  ml-3 mr-3">
                                {outfits.slice(0,this.state.Product_visible).map(clothes=>
                                <div class="col-sm-4 member-item mt-5">                                
                                    <div key={clothes.Id} className="member-item-content">
                                        <img src={this.ImageSrc+clothes.PicFileName} alt={clothes.PicFileName} className="member-img border-img"/>
                                        <div className="item-content m-0 p-3">
                                            <div className="item-header">{clothes.Name}</div>
                                            <div className="item-info">Gender: {clothes.Gender}</div>
                                            <div className="item-info">Age: {clothes.RangeAge}</div>
                                            <div className="item-info">Price: {clothes.Price}</div>
                                            {places.map(place=>
                                                <div>
                                                    <div key={clothes.Id} className="d-inline mt-2">
                                                        {(clothes.PlaceId)==(place.Id) &&
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
                                {this.state.Product_visible < this.state.outfits.length &&
                                <Button className="Load-Mores" onClick={this.loadMoreP}>More</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

