import { Button, ButtonToolbar, Table } from "react-bootstrap";
import React, { Component } from "react";
import "../../assets/css/base.css";
import "./Outfit.css";
import { DetailsModal } from "../../components/DetailsIModal";

import { Collapse } from "antd";
const { Panel } = Collapse;

export class Outfit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outfits: [],
      places: [],
      brands: [],
      locations: [],
      DetailsModalShow: false,
      Mall_visible: 3,
      Brand_visible: 3,
      Product_visible: 6,
    };
    this.loadMoreM = this.loadMoreM.bind(this);
    this.loadMoreB = this.loadMoreB.bind(this);
    this.loadMoreP = this.loadMoreP.bind(this);
  }

  callback(key) {
    console.log(key);
  }

  getAllPlacesOutfit() {
    fetch(process.env.REACT_APP_API + "/places/getAllPlacesOutfit")
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

  getAllBrand() {
    fetch(process.env.REACT_APP_API + "/outfits/getAllBrand")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ brands: data });
      });
  }

  getAllProducts() {
    fetch(process.env.REACT_APP_API + "/outfits/getAllOutfit")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ outfits: data });
      });
  }

  componentDidMount() {
    this.getAllPlacesOutfit();
    this.getAllBrand();
    this.getAllProducts();
    this.getAllLocation();
    window.scrollTo(0, 0);
  }

  // Function
  loadMoreM() {
    this.setState((old) => {
      return { Mall_visible: old.Mall_visible + 3 };
    });
  }

  loadMoreB() {
    this.setState((old) => {
      return { Brand_visible: old.Brand_visible + 3 };
    });
  }

  loadMoreP() {
    this.setState((old) => {
      return { Product_visible: old.Product_visible + 3 };
    });
  }

  render() {
    const {
      outfits,
      places,
      brands,
      locations,
      Id,
      Name,
      Type,
      Gender,
      RangeAge,
      Price,
      Note,
      attachment,
      PlaceId,
      Status,
    } = this.state;
    let DetailsModalClose = () => this.setState({ DetailsModalShow: false });
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    let styleAdmin = {};
    if (this.props.isAdmin) {
      styleAdmin = { display: "block" };
    }

    return (
      <div className="Container Outfit">
        <div id="slider">
          <div className="text-content">
            <div className="text-heading">Clothes</div>
            <div className="text-desc">
              Someplace or brands which you can find what your need
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
                  <div className="col-sm-4 member-item mt-5">
                    <div key={place._id} className="member-item-content">
                      <img
                        src={place.attachment}
                        alt={place.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header">{place.Name}</div>
                        <div className="item-slogan">{place.Slogan}</div>
                        <Collapse className="mt-2" onChange={this.callback}>
                          <Panel header="Overview" key="1">
                            <p>
                              <div className="item-overview">
                                {place.Overview}
                              </div>
                            </p>
                          </Panel>
                          <Panel header="Contact" key="2">
                            <p>
                              <div className="item-info">{place.Phone}</div>
                            </p>
                            <p>
                              <div className="item-info">{place.Email}</div>
                            </p>
                            <p>
                              <div className="item-info">{place.Facebook}</div>
                            </p>
                            <p>
                              <div className="item-info">{place.LinkWeb}</div>
                            </p>
                          </Panel>
                          <Panel header="Address" key="3">
                            <p>
                              <div className="location-list mt-3">
                                {locations.map((location) => (
                                  <div
                                    key={location._id}
                                    className="d-inline mt-2"
                                  >
                                    {location.PlaceId == place._id && (
                                      <div>
                                        - {location.Details},{location.Street},
                                        {location.Ward},{location.District},
                                        {location.City}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </p>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
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

            <div className="Content__Brand mt-5">
              <div className="Brand">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_brand.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Brands</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {brands.slice(0, this.state.Brand_visible).map((brand) => (
                  <div className="col-sm-4 member-item mt-5">
                    <div key={brand._id} className="member-item-content">
                      <div
                        onClick={() =>
                          this.setState({
                            DetailsModalShow: true,
                            Id: brand._id,
                            Name: brand.Name,
                            attachment: brand.attachment,
                            Note: brand.Note,
                            Status: brand.Status,
                          })
                        }
                      >
                        <img
                          src={brand.attachment}
                          alt={brand.attachment}
                          className="member-img border-img"
                        />
                      </div>
                      <DetailsModal
                        show={this.state.DetailsModalShow}
                        onHide={() => {
                          DetailsModalClose();
                        }}
                        Id={Id}
                        Name={Name}
                        Note={Note}
                        attachment={attachment}
                        Status={Status}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Brand_visible < this.state.brands.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreB}>
                    More
                  </Button>
                )}
              </div>
            </div>

            <div className="Content__Product mt-5">
              <div className="Product">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/background-vietnam.jpg"
                  alt=""
                ></img>
                <div className="Header d-inline">Product</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {outfits.slice(0, this.state.Product_visible).map((clothes) => (
                  <div className="col-sm-4 member-item mt-5">
                    <div key={clothes._id} className="member-item-content">
                      <img
                        src={clothes.attachment}
                        alt={clothes.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header">{clothes.Name}</div>
                        <div className="item-info">Price: {clothes.Price}</div>
                        {places.map((place) => (
                          <div>
                            <div key={clothes._id} className="d-inline mt-2">
                              {clothes.PlaceId == place._id && (
                                <div>
                                  <div className="mt-1">Shop: {place.Name}</div>
                                  <Collapse className="mt-1">
                                    <Panel header="Address" key="1">
                                      <p>
                                        <div className="location-list mt-3">
                                          {locations.map((location) => (
                                            <div
                                              key={location._id}
                                              className="d-inline mt-2"
                                            >
                                              {location.PlaceId ==
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
                                      </p>
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
                {this.state.Product_visible < this.state.outfits.length && (
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
