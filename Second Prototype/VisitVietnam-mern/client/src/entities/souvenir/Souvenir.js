import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../../assets/css/base.css";
import "./Souvenir.css";
import { ReviewModal } from "../../components/review/ReviewModal";

import { Collapse } from "antd";
const { Panel } = Collapse;

export class Souvenir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReviewModalShow: false,
      souvenirs: [],
      places: [],
      locations: [],
      Mall_visible: 3,
      Product_visible: 6,
    };
    this.loadMoreP = this.loadMoreP.bind(this);
  }

  callback(key) {}

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/souvenirs")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ souvenirs: data });
      });
  }

  getAllPlacesSouvenir() {
    fetch(process.env.REACT_APP_API + "/places/getAllPlacesSouvenir")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ places: data });
      });
  }

  getAllLocation() {
    fetch(process.env.REACT_APP_API + "/locations")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ locations: data });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getAllPlacesSouvenir();
    this.getAllLocation();
    this.refreshList();
  }

  // Function

  loadMoreP() {
    this.setState((old) => {
      return { Product_visible: old.Product_visible + 3 };
    });
  }

  render() {
    const { souvenirs, places, locations, PlaceId, Name} = this.state;
    let ReviewModalClose = () => this.setState({ ReviewModalShow: false });

    return (
      <div className="Container Souvenir">
        <div id="slider">
          <div className="text-content">
            <div className="text-heading">Souvenir</div>
            <div className="text-desc">
              Each souvenir has its own unique meaning, keeping and recalling
              unforgettable memories. It is usually gifts associated with
              memories, or can be the personal imprints of the sender to the
              recipient so that the relationship between the two parties becomes
              deeper and deeper.
            </div>
          </div>
        </div>

        <div className="Container__background pt-5 pb-5">
          <div className="Container__Content">
            <div className="Content__Mall">
              <div className="Mall">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_mall.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Mall shopping</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list ml-3 mr-3">
                {places.slice(0, this.state.Mall_visible).map((place) => (
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
                        src={place.attachment}
                        alt={place.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header">{place.Name}</div>
                        <div className="item-slogan">{place.Slogan}</div>
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
                                {locations.map((location) => (
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
                {this.state.Mall_visible < this.state.places.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreM}>
                    More
                  </Button>
                )}
              </div>
            </div>

            <div className="Content__Product mt-5">
              <div className="Product">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_souvenir.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Souvenir</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {souvenirs
                  .slice(0, this.state.Product_visible)
                  .map((souvenir) => (
                    <div
                      key={souvenir._id}
                      className="col-sm-4 member-item mt-5"
                    >
                      <div className="member-item-content">
                        <img
                          src={souvenir.attachment}
                          alt={souvenir.attachment}
                          className="member-img border-img"
                        />
                        <div className="item-content m-0 p-3">
                          <div className="item-header">{souvenir.Name}</div>
                          <div className="item-info">
                            Price: {souvenir.Price}
                          </div>
                          {places.map((place) => (
                            <div key={place._id}>
                              <div className="d-inline mt-2">
                                {souvenir.PlaceId === place._id && (
                                  <div>
                                    <div className="mt-1">
                                      Shop: {place.Name}
                                    </div>
                                    <Collapse className="mt-1">
                                      <Panel header="Address" key="1">
                                        <div>
                                          <div className="location-list mt-3">
                                            {locations.map((location) => (
                                              <div
                                                key={location._id}
                                                className="d-inline mt-2"
                                              >
                                                {location.PlaceId ===
                                                  place._id && (
                                                  <div>
                                                    - {location.Details},
                                                    {location.Street},
                                                    {location.Ward},
                                                    {location.District},
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
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Product_visible < this.state.souvenirs.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreP}>
                    More
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
