import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import '../../assets/css/base.css';
import './Event.css';

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
            <div className="Container">
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

                <img src="./public-img/background-vietnam.jpg" className="Banner"></img>
                <div className="Container__Content">
                    <div className="Content__Highlight">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-danger">Highlight</div>
                        </div>
                        <div className="row member-list">
                            <div class="col-sm-3 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-3 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-3 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-3 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div className="Content__Event-Year">
                        <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-warning">Annual Event</div>
                        </div>
                        <div className="row member-list">
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>                            
                        </div>
                        <div className="row member-list">
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div className="Content__Event-Day">
                    <div className="Highlight">
                            <div className="Line"></div>
                            <div className="Header text-success">Event</div>
                        </div>
                        <div className="row member-list">
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div className="row member-list">
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                            <div class="col-sm-4 member-item">
                                <img src="./public-img/background-vietnam.jpg" alt="Xuan Phuong" class="member-img"/>
                                <div className="item-content">
                                    <div className="item-header">HEADER</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Description</div>
                                    <div className="item-date">Start date:</div>
                                    <div className="item-date">End date</div>
                                </div>                                
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="Content__Best-Of-Year">

                    </div>
                </div>
            </div>
        )
    }
}