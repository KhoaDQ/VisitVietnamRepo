import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/styles.css";
import "./js/scripts";
import "bootstrap";
import { Navigation } from "./components/Navigation";
import { LayoutSlideNav } from "./components/LayoutSlideNav";
import { Login } from "./components/Login";
import { SlideNavContent } from "./components/SlideNavContent";

import { ListPlace } from "./components/contentComponents/place/ListPlace";
import { EditPlace } from "./components/contentComponents/place/EditPlace";
import { CreatePlace } from "./components/contentComponents/place/CreatePlace";

import { ListArticle } from "./components/contentComponents/article/ListArticle";
import { EditArticle } from "./components/contentComponents/article/EditArticle";
import { CreateArticle } from "./components/contentComponents/article/CreateArticle";

import { Footer } from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearchApp: "",
      isAdmin: false,
      //Place
      editPlaceId: "",
      //Article
      editArticleId: "",
    };
  }

  componentDidMount() {
    console.log(this.state.isAdmin);
  }

  //Login
  handleAdminLoginFunction = (content) => {
    this.setState({
      isAdmin: content,
    });
  };

  handleAdminLogoutFunction = (content) => {
    this.setState({
      isAdmin: content,
    });
  };

  //Place
  handleEditPlaceIdFunction = (content) => {
    this.setState({
      editPlaceId: content,
    });
  };

  //Article
  handleEditArticleIdFunction = (content) => {
    this.setState({
      editArticleId: content,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="sb-nav-fixed">
          {this.state.isAdmin == false && (
            <div>
              <Login handleAdminLogin={this.handleAdminLoginFunction} />
            </div>
          )}

          {this.state.isAdmin && (
            <div>
              <Navigation handleAdminLogout={this.handleAdminLogoutFunction} />
              <LayoutSlideNav />
              <Switch>
                <Route path="/" component={SlideNavContent} exact />
                <Route
                  path="/list_place"
                  render={(props) => (
                    <ListPlace
                      {...props}
                      handleEditPlaceId={this.handleEditPlaceIdFunction}
                      handleDetailPlaceId={this.handleDetailPlaceIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_place"
                  render={(props) => <CreatePlace {...props} />}
                />
                <Route
                  path="/edit_place"
                  render={(props) => (
                    <EditPlace {...props} placeId={this.state.editPlaceId} />
                  )}
                />
                <Route
                  path="/list_article"
                  render={(props) => (
                    <ListArticle
                      {...props}
                      handleEditArticleId={this.handleEditArticleIdFunction}
                      handleDetailArticleId={this.handleDetailArticleIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_article"
                  render={(props) => <CreateArticle {...props} />}
                />
                <Route
                  path="/edit_article"
                  render={(props) => (
                    <EditArticle
                      {...props}
                      articleId={this.state.editArticleId}
                    />
                  )}
                />
              </Switch>
              <Footer />
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}
