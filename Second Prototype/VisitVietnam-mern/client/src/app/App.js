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

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollToTopShow: true };
  }

  render() {
    const { scrollToTopShow } = this.state;
    let ScrollToTopHide = () => this.setState({ scrollToTopShow: false });

    return (
      <BrowserRouter>
        <div className="contain">
          <FirstNav />

          <Navigation />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/holiday" render={(props) => <Holiday {...props} />} />
            <Route path="/food" render={(props) => <Food {...props} />} />
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
            <BackToTop
              className="btt"
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
