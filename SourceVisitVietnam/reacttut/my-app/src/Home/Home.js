import React,{Component} from 'react';
import '../assets/css/base.css';
import './Home.css';



export class Home extends Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="Home">
                <div id="slider" className="Banner">
                    <div className="text-content">
                        <div className="text-heading">Home</div>
                        <div className="text-desc">Description</div>
                    </div>
                </div>
            </div>
        )
    }
}