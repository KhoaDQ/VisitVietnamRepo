import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import '../../assets/css/base.css';

export class Foody extends Component{

    constructor(props){
        super(props);
        this.state={foods:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'foody')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({foods:data})
            }
        )
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {foods,Id,Name,Type,MiniType,Price,Note,PicFileName,PlaceId}=this.state;
        return(
            <div className = "Container">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>MiniType</th>
                            <th>Price</th>
                            <th>Note</th>
                            <th>PicFileName</th>
                            <th>PlaceId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map(food=>
                            <tr key={food.Id}>
                                <td>{food.Id}</td>
                                <td>{food.Name}</td>
                                <td>{food.Type}</td>
                                <td>{food.MiniType}</td>
                                <td>{food.Price}</td>
                                <td>{food.Note}</td>
                                <td>{food.PicFileName}</td>
                                <td>{food.PlaceId}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}