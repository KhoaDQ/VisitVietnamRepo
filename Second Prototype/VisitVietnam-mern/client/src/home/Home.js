import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/base.css";
import "./Home.css";
import { DetailsModal } from "../components/DetailsIModal";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlestoppick: [],
      Bitexco: [],
      BenThanhMarket: [],
      DamSenPark: [],
      TheCityPostOffice: [],
      TheLandmark81: [],
      TheWalkingStreet: [],
      DetailsModalShow: false,
    };
  }

  ImageSrc = process.env.REACT_APP_PHOTOPATH;

  getAllArticleTopPickMaster() {
    fetch(process.env.REACT_APP_API + "/articles/getAllArticleTopPickMaster")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articlestoppick: data });
      });
  }

  getPlaceBitexco() {
    fetch(process.env.REACT_APP_API + "/places/getPlaceBitexco")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Bitexco: data });
      });
  }

  getPlaceBenThanhMarket() {
    fetch(process.env.REACT_APP_API + "/places/getPlaceBenThanhMarket")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ BenThanhMarket: data });
      });
  }

  getPlaceDamSenPark() {
    fetch(process.env.REACT_APP_API + "/places/getPlaceDamSenPark")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ DamSenPark: data });
      });
  }

  getPlaceTheLandmark81() {
    fetch(process.env.REACT_APP_API + "/places/getPlaceTheLandmark81")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ TheLandmark81: data });
      });
  }

  getPlaceTheCityPostOffice() {
    fetch(process.env.REACT_APP_API + "/places/getPlaceTheCityPostOffice")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ TheCityPostOffice: data });
      });
  }

  getPlaceTheWalkingStreet() {
    fetch(process.env.REACT_APP_API + "/places/getPlaceTheWalkingStreet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ TheWalkingStreet: data });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getAllArticleTopPickMaster();
    this.getPlaceBitexco();
    this.getPlaceBenThanhMarket();
    this.getPlaceDamSenPark();
    this.getPlaceTheCityPostOffice();
    this.getPlaceTheLandmark81();
    this.getPlaceTheWalkingStreet();
  }

  render() {
    const {
      articlestoppick,
      Bitexco,
      DamSenPark,
      BenThanhMarket,
      TheCityPostOffice,
      TheWalkingStreet,
      TheLandmark81,
      Id,
      Name,
      Type,
      Description,
      Status,
      PicFileName,
      Overview,
    } = this.state;
    let DetailsModalClose = () => this.setState({ DetailsModalShow: false });
    return (
      <div className="Container Home">
        <div id="slider" className="Banner">
          <div className="text-content">
            <div className="text-heading">Home</div>
            <div className="text-desc">
              We provide the most important information and useful guidance to
              make your trip to Vietnam comfortable and smooth. I'm sure we're
              giving you what you really need
            </div>
          </div>
        </div>

        <div className="Container-background pt-5 pb-5">
          <div className="Container__Content">
            <div className="Content__TopPicks mb-5 mt-4">
              <div className="TopPicks">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_toppick.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Top picks</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3 mt-5">
                {articlestoppick !== null &&
                  articlestoppick.length !== 0 &&
                  articlestoppick.map((article) => (
                    <div key={article._id} className="col-sm-4 member-item">
                      <div>
                        <div
                          className="member-item-content"
                          onClick={() =>
                            this.setState({
                              DetailsModalShow: true,
                              Id: article._id,
                              Name: article.Name,
                              Type: article.Type,
                              Description: article.Description,
                              PicFileName: article.attachment,
                              Status: article.Status,
                            })
                          }
                        >
                          <img
                            src={article.attachment}
                            alt={article.attachment}
                            className="member-img border-img"
                          />
                          <div className="item-content text-center">
                            <h3 className="item-header">{article.Name}</h3>
                          </div>
                        </div>

                        {this.state.DetailsModalShow &&
                          this.state.Id === article._id && (
                            <DetailsModal
                              show={this.state.DetailsModalShow}
                              onHide={() => {
                                DetailsModalClose();
                              }}
                              Id={Id}
                              Name={Name}
                              Type={Type}
                              Description={Description}
                              PicFileName={PicFileName}
                              Status={Status}
                            />
                          )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="Content__VibrantNeighbourhood mb-5">
              <div className="TopPicks">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_vibrant.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Vibrant neighbourhood</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row ml-3 mr-3 mt-5">
                {Bitexco !== null &&
                  Bitexco.length !== 0 &&
                  Bitexco.map((thing) => (
                    <div key={thing._id} className="col-sm-4">
                      <div>
                        <div
                          className="member-item-content"
                          onClick={() =>
                            this.setState({
                              DetailsModalShow: true,
                              Id: thing._id,
                              Name: thing.Name,
                              Overview: thing.Overview,
                              PicFileName: thing.attachment,
                            })
                          }
                        >
                          <img
                            src={thing.attachment}
                            alt={thing.attachment}
                            className="member-img-col border-img-full"
                          />
                        </div>
                        {this.state.DetailsModalShow &&
                          this.state.Id === thing._id && (
                            <DetailsModal
                              show={this.state.DetailsModalShow}
                              onHide={() => {
                                DetailsModalClose();
                              }}
                              Id={Id}
                              Name={Name}
                              Overview={Overview}
                              PicFileName={PicFileName}
                            />
                          )}
                      </div>
                    </div>
                  ))}
                <div className="col-sm-8">
                  {DamSenPark !== null &&
                    DamSenPark.length !== 0 &&
                    DamSenPark.map((thing) => (
                      <div key={thing._id} className="row">
                        <div className="col-sm-12">
                          <div>
                            <div
                              className="member-item-content mb-4"
                              onClick={() =>
                                this.setState({
                                  DetailsModalShow: true,
                                  Id: thing._id,
                                  Name: thing.Name,
                                  Overview: thing.Overview,
                                  PicFileName: thing.attachment,
                                })
                              }
                            >
                              <img
                                src={thing.attachment}
                                alt={thing.attachment}
                                className="member-img border-img-full"
                              />
                            </div>
                            {this.state.DetailsModalShow &&
                              this.state.Id === thing._id && (
                                <DetailsModal
                                  show={this.state.DetailsModalShow}
                                  onHide={() => {
                                    DetailsModalClose();
                                  }}
                                  Id={Id}
                                  Name={Name}
                                  Overview={Overview}
                                  PicFileName={PicFileName}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                  {BenThanhMarket !== null &&
                    BenThanhMarket.length !== 0 &&
                    BenThanhMarket.map((thing) => (
                      <div key={thing._id} className="row">
                        <div className="col-sm-12">
                          <div>
                            <div
                              className="member-item-content"
                              onClick={() =>
                                this.setState({
                                  DetailsModalShow: true,
                                  Id: thing._id,
                                  Name: thing.Name,
                                  Overview: thing.Overview,
                                  PicFileName: thing.attachment,
                                })
                              }
                            >
                              <img
                                src={thing.attachment}
                                alt={thing.attachment}
                                className="member-img border-img-full"
                              />
                            </div>
                            {this.state.DetailsModalShow &&
                              this.state.Id === thing._id && (
                                <DetailsModal
                                  show={this.state.DetailsModalShow}
                                  onHide={() => {
                                    DetailsModalClose();
                                  }}
                                  Id={Id}
                                  Name={Name}
                                  Overview={Overview}
                                  PicFileName={PicFileName}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="Content__PopularPlaces mb-5">
              <div className="TopPicks">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_places.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Popular places</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row ml-3 mr-3 mt-5">
                {TheLandmark81 !== null &&
                  TheLandmark81.length !== 0 &&
                  TheLandmark81.map((thing) => (
                    <div key={thing._id} className="col-sm-4">
                      <div>
                        <div
                          className="member-item-content"
                          onClick={() =>
                            this.setState({
                              DetailsModalShow: true,
                              Id: thing._id,
                              Name: thing.Name,
                              Overview: thing.Overview,
                              PicFileName: thing.attachment,
                            })
                          }
                        >
                          <img
                            src={thing.attachment}
                            alt={thing.attachment}
                            className="member-img-col border-img-full"
                          />
                        </div>
                        {this.state.DetailsModalShow &&
                          this.state.Id === thing._id && (
                            <DetailsModal
                              show={this.state.DetailsModalShow}
                              onHide={() => {
                                DetailsModalClose();
                              }}
                              Id={Id}
                              Name={Name}
                              Overview={Overview}
                              PicFileName={PicFileName}
                            />
                          )}
                      </div>
                    </div>
                  ))}
                <div className="col-sm-8">
                  {TheCityPostOffice !== null &&
                    TheCityPostOffice.length !== 0 &&
                    TheCityPostOffice.map((thing) => (
                      <div key={thing._id} className="row">
                        <div className="col-sm-12">
                          <div>
                            <div
                              className="member-item-content mb-4"
                              onClick={() =>
                                this.setState({
                                  DetailsModalShow: true,
                                  Id: thing._id,
                                  Name: thing.Name,
                                  Overview: thing.Overview,
                                  PicFileName: thing.attachment,
                                })
                              }
                            >
                              <img
                                src={thing.attachment}
                                alt={thing.attachment}
                                className="member-img border-img-full"
                              />
                            </div>
                            {this.state.DetailsModalShow &&
                              this.state.Id === thing._id && (
                                <DetailsModal
                                  show={this.state.DetailsModalShow}
                                  onHide={() => {
                                    DetailsModalClose();
                                  }}
                                  Id={Id}
                                  Name={Name}
                                  Overview={Overview}
                                  PicFileName={PicFileName}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                  {TheWalkingStreet !== null &&
                    TheWalkingStreet.length !== 0 &&
                    TheWalkingStreet.map((thing) => (
                      <div key={thing._id} className="row">
                        <div className="col-sm-12">
                          <div>
                            <div
                              className="member-item-content"
                              onClick={() =>
                                this.setState({
                                  DetailsModalShow: true,
                                  Id: thing._id,
                                  Name: thing.Name,
                                  Overview: thing.Overview,
                                  PicFileName: thing.attachment,
                                })
                              }
                            >
                              <img
                                src={thing.attachment}
                                alt={thing.attachment}
                                className="member-img border-img-full"
                              />
                            </div>
                            {this.state.DetailsModalShow &&
                              this.state.Id === thing._id && (
                                <DetailsModal
                                  show={this.state.DetailsModalShow}
                                  onHide={() => {
                                    DetailsModalClose();
                                  }}
                                  Id={Id}
                                  Name={Name}
                                  Overview={Overview}
                                  PicFileName={PicFileName}
                                />
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="Content__FoodHighlights mb-5">
              <div className="TopPicks">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_food.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Food highlights</div>
              </div>
              {/* <div className="border-bottom"></div> */}
              <div
                id="sliderFoodHighlights"
                className="Banner mt-5 border-img-full"
              >
                <div className="text-content">
                  <h2 className="text-heading text-dark">
                    Where high rating food review
                  </h2>
                  <div className="row ml-1">
                    <h3 className="text-desc text-dark">Read more</h3>
                    <NavLink to="/foody">
                      <button
                        className="text-red ti-angle-double-right ml-2"
                        to="/foody"
                      ></button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="Content__GoShopping mb-5">
              <div className="TopPicks">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_shopping.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Go shopping</div>
              </div>
              {/* <div className="border-bottom"></div> */}

              <div id="sliderShopping" className="Banner mt-5 border-img-full">
                <div className="text-content">
                  <h2 className="text-heading text-dark">
                    Discover Vietnamese brands appeared{" "}
                  </h2>
                  <div className="row ml-1">
                    <h3 className="text-desc text-dark">Fashion</h3>
                    <NavLink to="/clothes">
                      <button className="text-red ti-angle-double-right ml-2"></button>
                    </NavLink>
                  </div>
                  <div className="row ml-1">
                    <h3 className="text-desc text-dark">Souvenir</h3>
                    <NavLink to="/gift">
                      <button className="text-red ti-angle-double-right ml-2"></button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}
