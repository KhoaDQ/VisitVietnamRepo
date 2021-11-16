import { Button } from "react-bootstrap";
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

  callback(key) {}

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
      Note,
      PicFileName,
      Status,
    } = this.state;
    let DetailsModalClose = () => this.setState({ DetailsModalShow: false });

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
                  <div key={place._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
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
                  <div key={brand._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <div
                        onClick={() =>
                          this.setState({
                            DetailsModalShow: true,
                            Id: brand._id,
                            Name: brand.Name,
                            PicFileName: brand.attachment,
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
                      {this.state.DetailsModalShow &&
                        this.state.Id === brand._id && (
                          <DetailsModal
                            show={this.state.DetailsModalShow}
                            onHide={() => {
                              DetailsModalClose();
                            }}
                            Id={Id}
                            Name={Name}
                            Note={Note}
                            PicFileName={PicFileName}
                            Status={Status}
                          />
                        )}
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
                  <div key={clothes._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        src={clothes.attachment}
                        alt={clothes.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header">{clothes.Name}</div>
                        <div className="item-info">Price: {clothes.Price}</div>
                        {places.map((place) => (
                          <div key={place._id}>
                            <div className="d-inline mt-2">
                              {clothes.PlaceId === place._id && (
                                <div>
                                  <div className="mt-1">Shop: {place.Name}</div>
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
