import React,{Component} from 'react';
import BackToTop from 'react-back-to-top-button';
import './App.css';
import {Home} from '../Home/Home';
import {Search} from '../Search/Search';
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
    this.state={scrollToTopShow:true,
                strSearchApp:"",
                isAdmin:false
    }
  }

  componentDidMount(){
    console.log(this.state.isAdmin);
  }

  handleSearchFunction = (content) => {
    this.setState({
      strSearchApp:content,
    })
  }

  handleAdminLoginFunction = (content) => {
    this.setState({
      isAdmin:content,
    })

    console.log(this.state.isAdmin);
  }

  render(){
    
    const{scrollToTopShow}=this.state;
    let ScrollToTopHide=()=>this.setState({scrollToTopShow:false})
    return (
      <BrowserRouter>
        <div className="contain">
          <FirstNav handleAdminLogin={this.handleAdminLoginFunction}/>
          
          <Navigation handleSearchContent={this.handleSearchFunction}/>

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route 
              path="/event" 
              render={props => <Event {...props} isAdmin={this.state.isAdmin}/>}
            />
            <Route 
              path="/foody" 
              render={props => <Foody {...props} isAdmin={this.state.isAdmin}/>}
            />
            <Route 
              path="/homeStay" 
              render={props => <HomeStay {...props} isAdmin={this.state.isAdmin}/>}
            />
            <Route 
              path="/clothes" 
              render={props => <Clothes {...props} isAdmin={this.state.isAdmin}/>}
            />
            <Route 
              path="/gift" 
              render={props => <Gift {...props} isAdmin={this.state.isAdmin}/>}
            />
            <Route
              path="/search"
              render={props => <Search {...props} strSearch={this.state.strSearchApp} />}
            />
          </Switch>

          <div className="border-bottom"></div>
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

