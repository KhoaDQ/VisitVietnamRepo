import {Button,ButtonToolbar, Table} from 'react-bootstrap';
import React,{Component} from 'react';
import '../../assets/css/base.css';
import './Foody.css';
import {AddFoodyModal} from './AddFoodyModal.js';
import {EditFoodyModal} from './EditFoodyModal.js';

export class Foody extends Component{

    
    constructor(props){
        super(props);
        this.state={foodies:[],addModalShow:false, editModalShow:false}

        // this.state={events:[], eventsUpcoming:[], eventsYear:[], eventsDay:[],
        //     addModalShow:false, editModalShow:false, 
        //     Event_Year_visible:3, Event_Day_visible:3}
        // this.loadMoreY = this.loadMoreY.bind(this);
        // this.loadMoreD = this.loadMoreD.bind(this);
    }

    ImageSrc = process.env.REACT_APP_PHOTOPATH;

    refreshList(){
        fetch(process.env.REACT_APP_API+'foody')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({foodies:data})
            }
        )
    }

    componentDidMount(){
        this.refreshList();
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

    render(){
        
        const {foodies,
            Id,Name,Type,MiniType,Price,Note,PicFileName,PlaceId}=this.state;
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
            </div>
        )
    }
}

