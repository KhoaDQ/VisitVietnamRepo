import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Gift.css';
import {AddGiftModal} from './AddGiftModal.js';
import {EditGiftModal} from './EditGiftModal.js';

export class Gift extends Component{

    
    constructor(props){
        super(props);
        this.state={gifts:[],addModalShow:false, editModalShow:false}

        // this.state={events:[], eventsUpcoming:[], eventsYear:[], eventsDay:[],
        //     addModalShow:false, editModalShow:false, 
        //     Event_Year_visible:3, Event_Day_visible:3}
        // this.loadMoreY = this.loadMoreY.bind(this);
        // this.loadMoreD = this.loadMoreD.bind(this);
    }
    
    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    refreshList(){
        fetch(process.env.REACT_APP_API+'Gift')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({gifts:data})
            }
        )
    }

    componentDidMount(){
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

    render(){
        
        const {gifts,
            Id,Name,Type,Price,Note,PicFileName,PlaceId}=this.state;
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
            </div>
        )
    }
}

