import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import '../../assets/css/base.css';

export class Event extends Component{
    constructor(props){
        super(props);
        this.state={events:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'event')
        .then(response=>response.json())
        .then(
            data=>{
                this.setState({events:data})
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
        const {events,Id,Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status}=this.state;
        return(
            <div className = "Container">
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
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event=>
                            <tr key={event.Id}>
                                <td>{event.Id}</td>
                                <td>{event.Name}</td>
                                <td>{event.Type}</td>
                                <td>{event.Description}</td>
                                <td>{event.PicFileName}</td>
                                <td>{event.Details}</td>
                                <td>{event.StartDate}</td>
                                <td>{event.EndDate}</td>
                                <td>{event.Status}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}