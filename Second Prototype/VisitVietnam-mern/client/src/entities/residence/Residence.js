import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../../assets/css/base.css";
import "./Residence.css";
import { ReviewModal } from "../../components/review/ReviewModal";

import { Collapse } from "antd";
const { Panel } = Collapse;

export class Residence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReviewModalShow: false,
      Places: [],
      PlaceEvents: [],
      Locations: [],
      Articles: [],
      Hotels: [],
      Hostels: [],
      Homestays: [],
      Villas: [],
      Bungalows: [],
      Resorts: [],
      addModalShow: false,
      editModalShow: false,
      addPModalShow: false,
      editPModalShow: false,
      addLModalShow: false,
      editLModalShow: false,
      addEModalShow: false,
      editEModalShow: false,
      addAModalShow: false,
      editAModalShow: false,
      Hotel_visible: 6,
      Hostel_visible: 6,
      Residence_visible: 6,
      Villa_visible: 6,
      Bungalow_visible: 6,
      Resort_visible: 6,
    };
    this.loadMoreHotel = this.loadMoreHotel.bind(this);
    this.loadMoreHostel = this.loadMoreHostel.bind(this);
    this.loadMoreHomestay = this.loadMoreHomestay.bind(this);
    this.loadMoreVilla = this.loadMoreVilla.bind(this);
    this.loadMoreBungalow = this.loadMoreBungalow.bind(this);
    this.loadMoreResort = this.loadMoreResort.bind(this);
  }

  callback(key) {}

  refreshListLocations() {
    fetch(process.env.REACT_APP_API + "/locations")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Locations: data });
      });
  }

  getAllHotel() {
    fetch(process.env.REACT_APP_API + "/residences/getAllHotel")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Hotels: data });
      });
  }

  getAllHostel() {
    fetch(process.env.REACT_APP_API + "/residences/getAllHostel")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Hostels: data });
      });
  }

  getAllHomestay() {
    fetch(process.env.REACT_APP_API + "/residences/getAllHomestay")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Homestays: data });
      });
  }

  getAllVilla() {
    fetch(process.env.REACT_APP_API + "/residences/getAllVilla")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Villas: data });
      });
  }

  getAllBungalow() {
    fetch(process.env.REACT_APP_API + "/residences/getAllBungalow")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Bungalows: data });
      });
  }

  getAllResort() {
    fetch(process.env.REACT_APP_API + "/residences/getAllResort")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Resorts: data });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refreshListLocations();
    this.getAllHotel();
    this.getAllHostel();
    this.getAllHomestay();
    this.getAllVilla();
    this.getAllBungalow();
    this.getAllResort();
  }

  // Function
  loadMoreHotel() {
    this.setState((old) => {
      return { Hotel_visible: old.Hotel_visible + 3 };
    });
  }

  loadMoreHostel() {
    this.setState((old) => {
      return { Hostel_visible: old.Hostel_visible + 3 };
    });
  }

  loadMoreHomestay() {
    this.setState((old) => {
      return { Homestay_visible: old.Homestay_visible + 3 };
    });
  }

  loadMoreBungalow() {
    this.setState((old) => {
      return { Bungalow_visible: old.Bungalow_visible + 3 };
    });
  }

  loadMoreVilla() {
    this.setState((old) => {
      return { Villa_visible: old.Villa_visible + 3 };
    });
  }

  loadMoreResort() {
    this.setState((old) => {
      return { Resort_visible: old.Resort_visible + 3 };
    });
  }

  render() {
    const {
      Locations,
      Hotels,
      Hostels,
      Homestays,
      Villas,
      Bungalows,
      Resorts,
      PlaceId,
      Name,
    } = this.state;

    let ReviewModalClose = () => this.setState({ ReviewModalShow: false });

    return (
      <div className="Container Residence">
        <div id="slider" className="Banner">
          <div className="text-content ">
            <div className="text-heading">Residence</div>
            <div className="text-desc">
              After a period of moving full of excitement but inevitable
              fatigue. We know you're in need of a place to stay. Take a look at
              them below.
            </div>
          </div>
        </div>

        <div className="Container__background pt-5 pb-5">
          <div className="Container__Content">
            <ul id="nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#Hotel">Hotel</a>
              </li>
              <li>
                <a href="#Hostel">Hostel</a>
              </li>
              <li>
                <a href="#Homestay">Homestay</a>
              </li>
              <li>
                <a href="/">
                  More
                  <i className="nav-arrow-down ti-angle-down"></i>
                </a>
                <ul className="subnav">
              <li>
                <a href="#Villa">Villa</a>
              </li>
                  <li>
                    <a href="#Bungalow">Bungalow</a>
                  </li>
                  <li>
                    <a href="#Resort">Resort</a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Budget Hotel */}
            <div className="Content__Hotel" id="Hotel">
              <div className="Hotel">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_budgethotel.png"
                  alt=""
                ></img>
                <div className="Header d-inline text-in-dark">Budget Hotel</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {Hotels.slice(0, this.state.Hotel_visible).map((place) => (
                  <div key={place._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        onClick={() =>
                            this.setState({
                              ReviewModalShow: true,
                              PlaceId: place._id,
                              Name: place.Name
                            })
                          }
                        src={place.PlaceAttachment}
                        alt={place.PlaceAttachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header px-3">{place.Name}</div>
                        <div className="item-slogan px-3">{place.Slogan}</div>
                        <Collapse className="mt-2" onChange={this.callback}>
                          <Panel header="Overview" key="1">
                            <div className="item-overview">
                              {place.Overview}
                            </div>
                          </Panel>
                          <Panel header="Contact" key="2">
                            <div>
                              <p className="item-info">{place.Phone}</p>
                              <p className="item-info">{place.Email}</p>
                              <p className="item-info">{place.Facebook}</p>
                              <p className="item-info">{place.LinkWeb}</p>
                            </div>
                          </Panel>
                          <Panel header="Address" key="3">
                            <div>
                              <div className="location-list mt-3">
                                {Locations.map((location) => (
                                  <div
                                    key={location._id}
                                    className="d-inline mt-2"
                                  >
                                    {location.PlaceId === place._id && (
                                      <div>
                                        - {location.Details},{location.Street},
                                        {location.Ward},{location.District},
                                        {location.City}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    {this.state.ReviewModalShow && this.state.PlaceId === place._id
                      && (<ReviewModal
                      show={this.state.ReviewModalShow}
                      onHide={() => { ReviewModalClose() }}
                      PlaceId={PlaceId}
                      Name={Name}
                      UserName={this.props.UserName}
                    />)}
                  </div>
                ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Hotel_visible < this.state.Hotels.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreHotel}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            {/* Hostel */}
            <div className="Content__Hostel mt-5" id="Hostel">
              <div className="Hostel">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_hostel.png"
                  alt=""
                ></img>
                <div className="Header d-inline text-in-dark">Hostel</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {Hostels.slice(0, this.state.Hostel_visible).map((place) => (
                  <div key={place._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        onClick={() =>
                            this.setState({
                              ReviewModalShow: true,
                              PlaceId: place._id,
                              Name: place.Name
                            })
                          }
                        src={place.PlaceAttachment}
                        alt={place.PlaceAttachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header px-3">{place.Name}</div>
                        <div className="item-slogan px-3">{place.Slogan}</div>
                        <Collapse className="mt-2" onChange={this.callback}>
                          <Panel header="Overview" key="1">
                            <div className="item-overview">
                              {place.Overview}
                            </div>
                          </Panel>
                          <Panel header="Contact" key="2">
                            <div>
                              <p className="item-info">{place.Phone}</p>
                              <p className="item-info">{place.Email}</p>
                              <p className="item-info">{place.Facebook}</p>
                              <p className="item-info">{place.LinkWeb}</p>
                            </div>
                          </Panel>
                          <Panel header="Address" key="3">
                            <div>
                              <div className="location-list mt-3">
                                {Locations.map((location) => (
                                  <div
                                    key={location._id}
                                    className="d-inline mt-2"
                                  >
                                    {location.PlaceId === place._id && (
                                      <div>
                                        - {location.Details},{location.Street},
                                        {location.Ward},{location.District},
                                        {location.City}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    {this.state.ReviewModalShow && this.state.PlaceId === place._id
                      && (<ReviewModal
                      show={this.state.ReviewModalShow}
                      onHide={() => { ReviewModalClose() }}
                      PlaceId={PlaceId}
                      Name={Name}
                      UserName={this.props.UserName}
                    />)}
                  </div>
                ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Hostel_visible < this.state.Hostels.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreHostel}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            {/* Homestay */}
            <div className="Content__Homestay mt-5" id="Homestay">
              <div className="Homestay">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_homestay.png"
                  alt=""
                ></img>
                <div className="Header d-inline text-in-dark">Homestay</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {Homestays.slice(0, this.state.Homestay_visible).map(
                  (place) => (
                    <div key={place._id} className="col-sm-4 member-item mt-5">
                      <div className="member-item-content">
                        <img
                          onClick={() =>
                            this.setState({
                              ReviewModalShow: true,
                              PlaceId: place._id,
                              Name: place.Name
                            })
                          }
                          src={place.PlaceAttachment}
                          alt={place.PlaceAttachment}
                          className="member-img border-img"
                        />
                        <div className="item-content m-0 p-3">
                          <div className="item-header px-3">{place.Name}</div>
                          <div className="item-slogan px-3">{place.Slogan}</div>
                          <Collapse className="mt-2" onChange={this.callback}>
                            <Panel header="Overview" key="1">
                              <div className="item-overview">
                                {place.Overview}
                              </div>
                            </Panel>
                            <Panel header="Contact" key="2">
                              <div>
                                <p className="item-info">{place.Phone}</p>
                                <p className="item-info">{place.Email}</p>
                                <p className="item-info">{place.Facebook}</p>
                                <p className="item-info">{place.LinkWeb}</p>
                              </div>
                            </Panel>
                            <Panel header="Address" key="3">
                              <div>
                                <div className="location-list mt-3">
                                  {Locations.map((location) => (
                                    <div
                                      key={location._id}
                                      className="d-inline mt-2"
                                    >
                                      {location.PlaceId === place._id && (
                                        <div>
                                          - {location.Details},{location.Street}
                                          ,{location.Ward},{location.District},
                                          {location.City}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Panel>
                          </Collapse>
                        </div>
                      </div>
                      {this.state.ReviewModalShow && this.state.PlaceId === place._id
                      && (<ReviewModal
                      show={this.state.ReviewModalShow}
                      onHide={() => { ReviewModalClose() }}
                      PlaceId={PlaceId}
                      Name={Name}
                      UserName={this.props.UserName}
                      />)}
                    </div>
                  )
                )}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Homestay_visible < this.state.Homestays.length && (
                  <Button
                    className="Load-Mores"
                    onClick={this.loadMoreHomestay}
                  >
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            {/* Villa */}
            <div className="Content__Villa mt-5" id="Villa">
              <div className="Villa">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_villa.png"
                  alt=""
                ></img>
                <div className="Header d-inline text-in-dark">Villa</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {Villas.slice(0, this.state.Villa_visible).map((place) => (
                  <div key={place._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        onClick={() =>
                            this.setState({
                              ReviewModalShow: true,
                              PlaceId: place._id,
                              Name: place.Name
                            })
                          }
                        src={place.PlaceAttachment}
                        alt={place.PlaceAttachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header px-3">{place.Name}</div>
                        <div className="item-slogan px-3">{place.Slogan}</div>
                        <Collapse className="mt-2" onChange={this.callback}>
                          <Panel header="Overview" key="1">
                            <div className="item-overview">
                              {place.Overview}
                            </div>
                          </Panel>
                          <Panel header="Contact" key="2">
                            <div>
                              <p className="item-info">{place.Phone}</p>
                              <p className="item-info">{place.Email}</p>
                              <p className="item-info">{place.Facebook}</p>
                              <p className="item-info">{place.LinkWeb}</p>
                            </div>
                          </Panel>
                          <Panel header="Address" key="3">
                            <div>
                              <div className="location-list mt-3">
                                {Locations.map((location) => (
                                  <div
                                    key={location._id}
                                    className="d-inline mt-2"
                                  >
                                    {location.PlaceId === place._id && (
                                      <div>
                                        - {location.Details},{location.Street},
                                        {location.Ward},{location.District},
                                        {location.City}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    {this.state.ReviewModalShow && this.state.PlaceId === place._id
                      && (<ReviewModal
                      show={this.state.ReviewModalShow}
                      onHide={() => { ReviewModalClose() }}
                      PlaceId={PlaceId}
                      Name={Name}
                      UserName={this.props.UserName}
                    />)}
                  </div>
                ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Villa_visible < this.state.Villas.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreVilla}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            {/* Bungalow */}
            <div className="Content__Bungalow mt-5" id="Bungalow">
              <div className="Bungalow">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_bungalow.png"
                  alt=""
                ></img>
                <div className="Header d-inline text-in-dark">Bungalow</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {Bungalows.slice(0, this.state.Bungalow_visible).map(
                  (place) => (
                    <div key={place._id} className="col-sm-4 member-item mt-5">
                      <div className="member-item-content">
                        <img
                          onClick={() =>
                            this.setState({
                              ReviewModalShow: true,
                              PlaceId: place._id,
                              Name: place.Name
                            })
                          }
                          src={place.PlaceAttachment}
                          alt={place.PlaceAttachment}
                          className="member-img border-img"
                        />
                        <div className="item-content m-0 p-3">
                          <div className="item-header px-3">{place.Name}</div>
                          <div className="item-slogan px-3">{place.Slogan}</div>
                          <Collapse className="mt-2" onChange={this.callback}>
                            <Panel header="Overview" key="1">
                              <div className="item-overview">
                                {place.Overview}
                              </div>
                            </Panel>
                            <Panel header="Contact" key="2">
                              <div>
                                <p className="item-info">{place.Phone}</p>
                                <p className="item-info">{place.Email}</p>
                                <p className="item-info">{place.Facebook}</p>
                                <p className="item-info">{place.LinkWeb}</p>
                              </div>
                            </Panel>
                            <Panel header="Address" key="3">
                              <div>
                                <div className="location-list mt-3">
                                  {Locations.map((location) => (
                                    <div
                                      key={location._id}
                                      className="d-inline mt-2"
                                    >
                                      {location.PlaceId === place._id && (
                                        <div>
                                          - {location.Details},{location.Street}
                                          ,{location.Ward},{location.District},
                                          {location.City}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Panel>
                          </Collapse>
                        </div>
                      </div>
                      {this.state.ReviewModalShow && this.state.PlaceId === place._id
                      && (<ReviewModal
                      show={this.state.ReviewModalShow}
                      onHide={() => { ReviewModalClose() }}
                      PlaceId={PlaceId}
                      Name={Name}
                      UserName={this.props.UserName}
                      />)}
                    </div>
                  )
                )}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Bungalow_visible < this.state.Bungalows.length && (
                  <Button
                    className="Load-Mores"
                    onClick={this.loadMoreBungalow}
                  >
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            {/* Resort */}
            <div className="Content__Resort mt-5" id="Resort">
              <div className="Resort">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_resort.png"
                  alt=""
                ></img>
                <div className="Header d-inline text-in-dark">Resort</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {Resorts.slice(0, this.state.Resort_visible).map((place) => (
                  <div key={place._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        onClick={() =>
                            this.setState({
                              ReviewModalShow: true,
                              PlaceId: place._id,
                              Name: place.Name
                            })
                          }
                        src={place.PlaceAttachment}
                        alt={place.PlaceAttachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header px-3">{place.Name}</div>
                        <div className="item-slogan px-3">{place.Slogan}</div>
                        <Collapse className="mt-2" onChange={this.callback}>
                          <Panel header="Overview" key="1">
                            <div className="item-overview">
                              {place.Overview}
                            </div>
                          </Panel>
                          <Panel header="Contact" key="2">
                            <div>
                              <p className="item-info">{place.Phone}</p>
                              <p className="item-info">{place.Email}</p>
                              <p className="item-info">{place.Facebook}</p>
                              <p className="item-info">{place.LinkWeb}</p>
                            </div>
                          </Panel>
                          <Panel header="Address" key="3">
                            <div>
                              <div className="location-list mt-3">
                                {Locations.map((location) => (
                                  <div
                                    key={location._id}
                                    className="d-inline mt-2"
                                  >
                                    {location.PlaceId === place._id && (
                                      <div>
                                        - {location.Details},{location.Street},
                                        {location.Ward},{location.District},
                                        {location.City}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                    {this.state.ReviewModalShow && this.state.PlaceId === place._id
                      && (<ReviewModal
                      show={this.state.ReviewModalShow}
                      onHide={() => { ReviewModalClose() }}
                      PlaceId={PlaceId}
                      Name={Name}
                      UserName={this.props.UserName}
                    />)}
                  </div>
                ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Resort_visible < this.state.Resorts.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreResort}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
