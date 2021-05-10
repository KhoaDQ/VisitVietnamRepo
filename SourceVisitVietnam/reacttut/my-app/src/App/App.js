import React,{Component} from 'react';
import BackToTop from 'react-back-to-top-button';
import './App.css';
import {Home} from '../Home/Home';
import {Event} from '../Entity/Event/Event';
import {Gift} from '../Entity/Gift/Gift';
import {Clothes} from '../Entity/Clothes/Clothes';
import {HomeStay} from '../Entity/HomeStay/HomeStay';
import {Foody} from '../Entity/Foody/Foody.js';
import {Navigation} from '../Component/Navigation/Navigation';
import {FooterPage} from '../Component/FooterPage/FooterPage';
import {FirstNav} from '../Component/FirstNav/FirstNav';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../assets/fonts/themify-icons/themify-icons.css';


export class App extends Component {

  constructor(props){
    super(props);
    this.state={scrollToTopShow:true}
  }

  componentDidMount(){

  }

  render(){
    const{scrollToTopShow}=this.state;
    let ScrollToTopHide=()=>this.setState({scrollToTopShow:false})
    return (
      <BrowserRouter>
        <div className="contain">
          <FirstNav/>
          
          <Navigation/>

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/event" component={Event}/>
            <Route path="/foody" component={Foody}/>
            <Route path="/homeStay" component={HomeStay}/>
            <Route path="/clothes" component={Clothes}/>
            <Route path="/gift" component={Gift}/>
          </Switch>

          <FooterPage/>
          
          <div className="ContainScrollTop">
            <BackToTop className="btt"
            showOnScrollDown
            showAt={100}
            // speed={3000}
            // easing="easeInOutQuint"
            >
              <div className="Circle-Icon">
                <div className="ti-angle-up"></div>
              </div>
            </BackToTop>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

