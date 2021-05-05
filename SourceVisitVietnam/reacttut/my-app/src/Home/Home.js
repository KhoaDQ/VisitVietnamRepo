import React,{Component} from 'react';
import '../assets/css/base.css';
import './Home.css';


export class Home extends Component{
    render(){
        return(
            <div className="Home">
                <img src="./public-img/background-vietnam.jpg" className="Banner"></img>
            </div>
        )
    }
}