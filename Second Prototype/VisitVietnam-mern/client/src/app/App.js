import "./App.css";
import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
import { Navigation } from "../components/navigation/Navigation";
import { FooterPage } from "../components/footerPage/FooterPage";
import { FirstNav } from "../components/firstNav/FirstNav";
import { Home } from "../home/Home";
import { Search } from "../search/Search";
import { Holiday } from "../entities/holiday/Holiday";
import { Souvenir } from "../entities/souvenir/Souvenir";
import { Outfit } from "../entities/outfit/Outfit";
import { Residence } from "../entities/residence/Residence";
import { Food } from "../entities/food/Food";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/fonts/themify-icons/themify-icons.css";
import axios from "axios";

export class App extends Component {
  constructor(props){
    super(props);
    this.state={scrollToTopShow:true,
                strSearchApp:"",
                isAdmin:false,
                name:"",
    }
  }

  handleAdminLoginFunction = (content) => {
    this.setState({
      isAdmin: content.isAdmin,
      name: content.name
    })

    console.log(this.state.isAdmin);
  }

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const option = {
      method: "get",
      url: `${process.env.REACT_APP_API}/auth`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios(option);
    this.setState({
      isAdmin: response.data.isAdmin,
      name: response.data.name
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="contain">
          <FirstNav stateAdmin={this.state.isAdmin} stateName={this.state.name} handleAdminLogin={this.handleAdminLoginFunction}/>

          <Navigation />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/holiday" render={(props) => <Holiday {...props} />} />
            <Route path="/food" render={(props) => <Food {...props} UserName = {this.state.name}/>} />
            <Route
              path="/residence"
              render={(props) => <Residence {...props} />}
            />
            <Route path="/outfit" render={(props) => <Outfit {...props} />} />
            <Route
              path="/souvenir"
              render={(props) => <Souvenir {...props} />}
            />
            <Route path="/search" render={(props) => <Search {...props} />} />
          </Switch>

          <div className="border-bottom"></div>
          <FooterPage />

          <div className="ContainScrollTop">
            <BackToTop className="btt" showOnScrollDown showAt={100}>
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
