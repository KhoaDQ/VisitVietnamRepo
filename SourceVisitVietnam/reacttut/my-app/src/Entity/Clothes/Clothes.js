import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Clothes.css';
import {AddClothesModal} from './AddClothesModal.js';
import {EditClothesModal} from './EditClothesModal.js';

export class Clothes extends Component{

    
    constructor(props){
        super(props);
        this.state={outfits:[], addModalShow:false, editModalShow:false}

        // this.state={events:[], eventsUpcoming:[], eventsYear:[], eventsDay:[],
        //     addModalShow:false, editModalShow:false, 
        //     Event_Year_visible:3, Event_Day_visible:3}
        // this.loadMoreY = this.loadMoreY.bind(this);
        // this.loadMoreD = this.loadMoreD.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    refreshList(){
        fetch(process.env.REACT_APP_API+'Clothes')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({outfits:data})
            }
        )
    }

    componentDidMount(){
        this.refreshList();
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

    render(){
        
        const {outfits,
            Id,Name,Type,Gender,RangeAge,Price,Note,PicFileName,PlaceId}=this.state;
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
            </div>
        )
    }
}

