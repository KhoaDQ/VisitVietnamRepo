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

import { ListEvent } from "./components/contentComponents/event/ListEvent";
import { EditEvent } from "./components/contentComponents/event/EditEvent";
import { CreateEvent } from "./components/contentComponents/event/CreateEvent";

import { ListFood } from "./components/contentComponents/food/ListFood";
import { EditFood } from "./components/contentComponents/food/EditFood";
import { CreateFood } from "./components/contentComponents/food/CreateFood";

import { ListHoliday } from "./components/contentComponents/holiday/ListHoliday";
import { EditHoliday } from "./components/contentComponents/holiday/EditHoliday";
import { CreateHoliday } from "./components/contentComponents/holiday/CreateHoliday";

import { ListLocation } from "./components/contentComponents/location/ListLocation";
import { EditLocation } from "./components/contentComponents/location/EditLocation";
import { CreateLocation } from "./components/contentComponents/location/CreateLocation";

import { ListOutfit } from "./components/contentComponents/outfit/ListOutfit";
import { EditOutfit } from "./components/contentComponents/outfit/EditOutfit";
import { CreateOutfit } from "./components/contentComponents/outfit/CreateOutfit";

import { ListResidence } from "./components/contentComponents/residence/ListResidence";
import { EditResidence } from "./components/contentComponents/residence/EditResidence";
import { CreateResidence } from "./components/contentComponents/residence/CreateResidence";

import { ListReview } from "./components/contentComponents/review/ListReview";
import { EditReview } from "./components/contentComponents/review/EditReview";
import { CreateReview } from "./components/contentComponents/review/CreateReview";

import { ListSouvenir } from "./components/contentComponents/souvenir/ListSouvenir";
import { EditSouvenir } from "./components/contentComponents/souvenir/EditSouvenir";
import { CreateSouvenir } from "./components/contentComponents/souvenir/CreateSouvenir";

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
      //Event
      editEventId: "",
      //Food
      editFoodId: "",
      //Holiday
      editHolidayId: "",
      //Location
      editLocationId: "",
      //Outfit
      editOutfitId: "",
      //Residence
      editResidenceId: "",
      //Review
      editReviewId: "",
      //Souvenir
      editSouvenirId: "",
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

  //Event
  handleEditEventIdFunction = (content) => {
    this.setState({
      editEventId: content,
    });
  };

  //Food
  handleEditFoodIdFunction = (content) => {
    this.setState({
      editFoodId: content,
    });
  };

  //Holiday
  handleEditHolidayIdFunction = (content) => {
    this.setState({
      editHolidayId: content,
    });
  };

  //Location
  handleEditLocationIdFunction = (content) => {
    this.setState({
      editLocationId: content,
    });
  };

  //Outfit
  handleEditOutfitIdFunction = (content) => {
    this.setState({
      editOutfitId: content,
    });
  };

  //Residence
  handleEditResidenceIdFunction = (content) => {
    this.setState({
      editResidenceId: content,
    });
  };

  //Review
  handleEditReviewIdFunction = (content) => {
    this.setState({
      editReviewId: content,
    });
  };

  //Souvenir
  handleEditSouvenirIdFunction = (content) => {
    this.setState({
      editSouvenirId: content,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="sb-nav-fixed">
          {this.state.isAdmin === false && (
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
                <Route
                  path="/list_event"
                  render={(props) => (
                    <ListEvent
                      {...props}
                      handleEditEventId={this.handleEditEventIdFunction}
                      handleDetailEventId={this.handleDetailEventIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_event"
                  render={(props) => <CreateEvent {...props} />}
                />
                <Route
                  path="/edit_event"
                  render={(props) => (
                    <EditEvent {...props} eventId={this.state.editEventId} />
                  )}
                />
                <Route
                  path="/list_food"
                  render={(props) => (
                    <ListFood
                      {...props}
                      handleEditFoodId={this.handleEditFoodIdFunction}
                      handleDetailFoodId={this.handleDetailFoodIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_food"
                  render={(props) => <CreateFood {...props} />}
                />
                <Route
                  path="/edit_food"
                  render={(props) => (
                    <EditFood {...props} foodId={this.state.editFoodId} />
                  )}
                />
                <Route
                  path="/list_holiday"
                  render={(props) => (
                    <ListHoliday
                      {...props}
                      handleEditHolidayId={this.handleEditHolidayIdFunction}
                      handleDetailHolidayId={this.handleDetailHolidayIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_holiday"
                  render={(props) => <CreateHoliday {...props} />}
                />
                <Route
                  path="/edit_holiday"
                  render={(props) => (
                    <EditHoliday
                      {...props}
                      holidayId={this.state.editHolidayId}
                    />
                  )}
                />
                <Route
                  path="/list_location"
                  render={(props) => (
                    <ListLocation
                      {...props}
                      handleEditLocationId={this.handleEditLocationIdFunction}
                      handleDetailLocationId={
                        this.handleDetailLocationIdFunction
                      }
                    />
                  )}
                />
                <Route
                  path="/create_location"
                  render={(props) => <CreateLocation {...props} />}
                />
                <Route
                  path="/edit_location"
                  render={(props) => (
                    <EditLocation
                      {...props}
                      locationId={this.state.editLocationId}
                    />
                  )}
                />
                <Route
                  path="/list_outfit"
                  render={(props) => (
                    <ListOutfit
                      {...props}
                      handleEditOutfitId={this.handleEditOutfitIdFunction}
                      handleDetailOutfitId={this.handleDetailOutfitIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_outfit"
                  render={(props) => <CreateOutfit {...props} />}
                />
                <Route
                  path="/edit_outfit"
                  render={(props) => (
                    <EditOutfit {...props} outfitId={this.state.editOutfitId} />
                  )}
                />
                <Route
                  path="/list_residence"
                  render={(props) => (
                    <ListResidence
                      {...props}
                      handleEditResidenceId={this.handleEditResidenceIdFunction}
                      handleDetailResidenceId={
                        this.handleDetailResidenceIdFunction
                      }
                    />
                  )}
                />
                <Route
                  path="/create_residence"
                  render={(props) => <CreateResidence {...props} />}
                />
                <Route
                  path="/edit_residence"
                  render={(props) => (
                    <EditResidence
                      {...props}
                      residenceId={this.state.editResidenceId}
                    />
                  )}
                />
                <Route
                  path="/list_review"
                  render={(props) => (
                    <ListReview
                      {...props}
                      handleEditReviewId={this.handleEditReviewIdFunction}
                      handleDetailReviewId={this.handleDetailReviewIdFunction}
                    />
                  )}
                />
                <Route
                  path="/create_review"
                  render={(props) => <CreateReview {...props} />}
                />
                <Route
                  path="/edit_review"
                  render={(props) => (
                    <EditReview {...props} reviewId={this.state.editReviewId} />
                  )}
                />
                <Route
                  path="/list_souvenir"
                  render={(props) => (
                    <ListSouvenir
                      {...props}
                      handleEditSouvenirId={this.handleEditSouvenirIdFunction}
                      handleDetailSouvenirId={
                        this.handleDetailSouvenirIdFunction
                      }
                    />
                  )}
                />
                <Route
                  path="/create_souvenir"
                  render={(props) => <CreateSouvenir {...props} />}
                />
                <Route
                  path="/edit_Souvenir"
                  render={(props) => (
                    <EditSouvenir
                      {...props}
                      souvenirId={this.state.editSouvenirId}
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
