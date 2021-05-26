import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'; 
import '../assets/css/base.css';
import './Home.css';
import {DetailsModal} from '../Component/DetailsIModal';



export class Home extends Component{

    constructor(props){
        super(props);
        this.state={articlestoppick:[], bitexco:[], BenThanhMarket:[], DamSenPark:[], TheCityPostOffice:[], TheLandmark81:[], TheWalkingStreet:[]
            ,DetailsModalShow:false
        }
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    getAllArticleTopPickMaster(){
        fetch(process.env.REACT_APP_API+'article/GetAllArticleTopPickMaster')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({articlestoppick:data})
            }
        )
    }

    getPlaceBitexco(){
        fetch(process.env.REACT_APP_API+'place/GetPlaceBitexco')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({bitexco:data})
            }
        )
    }

    getPlaceBenThanhMarket(){
        fetch(process.env.REACT_APP_API+'place/GetPlaceBenThanhMarket')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({BenThanhMarket:data})
            }
        )
    }

    getPlaceDamSenPark(){
        fetch(process.env.REACT_APP_API+'place/GetPlaceDamSenPark')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({DamSenPark:data})
            }
        )
    }

    getPlaceTheLandmark81(){
        fetch(process.env.REACT_APP_API+'place/GetPlaceTheLandmark81')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({TheLandmark81:data})
            }
        )
    }

    getPlaceTheCityPostOffice(){
        fetch(process.env.REACT_APP_API+'place/GetPlaceTheCityPostOffice')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({TheCityPostOffice:data})
            }
        )
    }

    getPlaceTheWalkingStreet(){
        fetch(process.env.REACT_APP_API+'place/GetPlaceTheWalkingStreet')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({TheWalkingStreet:data})
            }
        )
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.getAllArticleTopPickMaster();
        this.getPlaceBitexco();
        this.getPlaceBenThanhMarket();
        this.getPlaceDamSenPark();
        this.getPlaceTheCityPostOffice();
        this.getPlaceTheLandmark81();
        this.getPlaceTheWalkingStreet();
    }

    render(){
        const {articlestoppick, bitexco, DamSenPark, BenThanhMarket, TheCityPostOffice, TheWalkingStreet, TheLandmark81,
            Id, Name, Type, Description, Status, PicFileName
        } = this.state;
        let DetailsModalClose=()=>this.setState({DetailsModalShow:false});
        return(
            <div className="Container Home">
                <div id="slider" className="Banner">
                    <div className="text-content">
                        <div className="text-heading">Home</div>
                        <div className="text-desc">Description</div>
                        <button className="text-red">Let's go</button>
                    </div>
                </div>

                <div className="Container-background pt-5 pb-5">
                    <div className="Container__Content">
                        <div className="Content__TopPicks mb-5 mt-4">
                            <div className="TopPicks">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Top picks</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row member-list ml-3 mr-3 mt-5">
                            {articlestoppick.map(article=>
                            <div class="col-sm-4 member-item">
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
                        <div className="Content__VibrantNeighbourhood mb-5">
                            <div className="TopPicks">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Vibrant neighbourhood</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row ml-3 mr-3 mt-5">
                                {bitexco.map(thing=>
                                <div className="col-sm-4">
                                    <div key={thing.Id} className="member-item-content">
                                        <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} class="member-img-col border-img-full"/>                                    
                                    </div> 
                                </div>
                                )}
                                <div className="col-sm-8">
                                    {DamSenPark.map(thing=>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <div key={thing.Id} className="member-item-content mb-4">
                                                <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} class="member-img border-img-full"/>                                    
                                            </div> 
                                            </div>
                                        </div>
                                    )}
                                    {BenThanhMarket.map(thing=>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <div key={thing.Id} className="member-item-content">
                                                <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} class="member-img border-img-full"/>                                    
                                            </div> 
                                            </div> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="Content__PopularPlaces mb-5">
                            <div className="TopPicks">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Popular places</div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="row ml-3 mr-3 mt-5">
                                {TheLandmark81.map(thing=>
                                <div className="col-sm-4">
                                    <div key={thing.Id} className="member-item-content">
                                        <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} class="member-img-col border-img-full"/>                                    
                                    </div> 
                                </div>
                                )}
                                <div className="col-sm-8">
                                    {TheCityPostOffice.map(thing=>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <div key={thing.Id} className="member-item-content mb-4">
                                                <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} class="member-img border-img-full"/>                                    
                                            </div> 
                                            </div>
                                        </div>
                                    )}
                                    {TheWalkingStreet.map(thing=>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <div key={thing.Id} className="member-item-content">
                                                <img src={this.ImageSrc+thing.PicFileName} alt={thing.PicFileName} class="member-img border-img-full"/>                                    
                                            </div> 
                                            </div> 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="Content__FoodHighlights mb-5">
                            <div className="TopPicks">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Food highlights</div>
                            </div>
                            {/* <div className="border-bottom"></div> */}
                            <div id="sliderFoodHighlights" className="Banner mt-5 border-img-full">
                                <div className="text-content">
                                    <h2 className="text-heading text-dark">Where high rating food review</h2>
                                    <div className="row ml-1">
                                            <h3 className="text-desc text-dark">Read more</h3>
                                            <NavLink to="/foody">
                                            <button className="text-red ti-angle-double-right ml-2" to="/foody"></button>
                                            </NavLink>
                                            
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="Content__GoShopping mb-5">
                            <div className="TopPicks">                                                     
                                <img className="Circle-Icon d-inline" src="./public-img/background-vietnam.jpg" alt=""></img>
                                <div className="Header d-inline">Go shopping</div>
                            </div>
                            {/* <div className="border-bottom"></div> */}
                            
                            <div id="sliderShopping" className="Banner mt-5 border-img-full">
                                <div className="text-content">
                                    <h2 className="text-heading text-dark">Discover Vietnamese brands appeared </h2>
                                    <div className="row ml-1">
                                            <h3 className="text-desc text-dark">Fashion</h3>
                                            <NavLink to="/clothes">
                                            <button className="text-red ti-angle-double-right ml-2"></button>
                                            </NavLink>
                                    </div>
                                    <div className="row ml-1">
                                            <h3 className="text-desc text-dark">Souvenir</h3>
                                            <NavLink to="/gift">
                                            <button className="text-red ti-angle-double-right ml-2"></button>
                                            </NavLink>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="clear"></div>

            </div>
        )
    }
}