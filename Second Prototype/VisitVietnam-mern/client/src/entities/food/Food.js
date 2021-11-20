import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../../assets/css/base.css";
import "antd/dist/antd.css";
import "./Food.css";
import { ReviewModal } from "../../components/review/ReviewModal";
import { Collapse } from "antd";
const { Panel } = Collapse;

export class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReviewModalShow: false,
      foodies: [],
      places: [],
      isFoods: [],
      isCakes: [],
      isDrinks: [],
      locations: [],
      Mall_visible: 3,
      Food_visible: 6,
      Drink_visible: 6,
      Cake_visible: 6,
      Product_visible: 6,
    };
    this.loadMoreM = this.loadMoreM.bind(this);
    this.loadMoreF = this.loadMoreF.bind(this);
    this.loadMoreD = this.loadMoreD.bind(this);
    this.loadMoreC = this.loadMoreC.bind(this);
    this.loadMoreP = this.loadMoreP.bind(this);
  }

  ImageSrc = process.env.REACT_APP_PHOTOPATH;

  callback(key) {}

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/foods")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ foodies: data });
      });
  }

  getAllPlacesFood() {
    fetch(process.env.REACT_APP_API + "/places/getAllPlacesFood")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ places: data });
      });
  }

  getAllFood() {
    fetch(process.env.REACT_APP_API + "/foods/getAllFood")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isFoods: data });
      });
  }

  getAllDrink() {
    fetch(process.env.REACT_APP_API + "/foods/getAllDrink")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isDrinks: data });
      });
  }

  getAllCake() {
    fetch(process.env.REACT_APP_API + "/foods/getAllCake")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isCakes: data });
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
    this.refreshList();
    this.getAllPlacesFood();
    this.getAllCake();
    this.getAllDrink();
    this.getAllFood();
    this.getAllLocation();
  }

  // Function
  loadMoreM() {
    this.setState((old) => {
      return { Mall_visible: old.Mall_visible + 3 };
    });
  }

  loadMoreF() {
    this.setState((old) => {
      return { Food_visible: old.Food_visible + 3 };
    });
  }

  loadMoreD() {
    this.setState((old) => {
      return { Drink_visible: old.Drink_visible + 3 };
    });
  }

  loadMoreC() {
    this.setState((old) => {
      return { Cake_visible: old.Cake_visible + 3 };
    });
  }

  loadMoreP() {
    this.setState((old) => {
      return { Product_visible: old.Product_visible + 3 };
    });
  }

  render() {
    const { foodies, places, isCakes, isFoods, isDrinks, locations , PlaceId, Name} =
      this.state;

    let ReviewModalClose = () => this.setState({ ReviewModalShow: false });
    
    return (
      <div className="Container Food">
        <div id="slider" className="Banner">
          <div className="text-content">
            <div className="text-heading">Food</div>
            <div className="text-desc">Itinerary for the intrepid foodie.</div>
          </div>
        </div>

        <div className="Container__background pt-5 pb-5">
          <div className="Container__Content">
            <ul id="nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#mall">Mall</a>
              </li>
              <li>
                <a href="#food">food</a>
              </li>
              <li>
                <a href="#drink">drink</a>
              </li>
              <li>
                <a href="#cake">cake</a>
              </li>
              <li>
                <a href="#all">all</a>
              </li>
            </ul>

            <div className="Content__Mall" id="mall">
              <div className="Mall">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_restaurant.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Restaurant</div>
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
                        <div className="item-header px-3">{place.Name}</div>
                        <div className="item-slogan px-3">{place.Slogan}</div>
                        <Collapse className="mt-2" onChange={this.callback}>
                          <Panel header="Overview" key="1">
                            <div>
                              <p className="item-overview">{place.Overview}</p>
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
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            <div className="Content__Food mt-5" id="food">
              <div className="Food">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_foodi.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Food</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {isFoods.slice(0, this.state.Food_visible).map((food) => (
                  <div key={food._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        src={food.attachment}
                        alt={food.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header mt-1">{food.Name}</div>
                        <div className="item-info mt-1">
                          Price: {food.Price}
                        </div>
                        {places.map((place) => (
                          <div key={place._id}>
                            <div className="d-inline mt-2">
                              {food.PlaceId === place._id && (
                                <div>
                                  <div className="mt-1">
                                    Restaurant: {place.Name}
                                  </div>
                                  <Collapse className="mt-1">
                                    <Panel header="Address" key="1">
                                      <p>
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
                {this.state.Food_visible < this.state.isFoods.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreF}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            <div className="Content__Drink mt-5" id="drink">
              <div className="Drink">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_drink.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Drink</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {isDrinks.slice(0, this.state.Drink_visible).map((food) => (
                  <div key={food._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        src={food.attachment}
                        alt={food.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header mt-1">{food.Name}</div>
                        <div className="item-info mt-1">
                          Price: {food.Price}
                        </div>
                        {places.map((place) => (
                          <div key={food._id}>
                            <div className="d-inline mt-2">
                              {food.PlaceId === place._id && (
                                <div>
                                  <div className="mt-1">
                                    Restaurant: {place.Name}
                                  </div>
                                  <Collapse className="mt-1">
                                    <Panel header="Address" key="1">
                                      <p>
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
                {this.state.Drink_visible < this.state.isDrinks.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreD}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            <div className="Content__Cake mt-5" id="cake">
              <div className="Cake">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_cake.png"
                  alt=""
                ></img>
                <div className="Header d-inline">Cake</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {isCakes.slice(0, this.state.Cake_visible).map((food) => (
                  <div key={food._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        src={food.attachment}
                        alt={food.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header mt-1">{food.Name}</div>
                        <div className="item-info mt-1">
                          Price: {food.Price}
                        </div>
                        {places.map((place) => (
                          <div key={place._id}>
                            <div className="d-inline mt-2">
                              {food.PlaceId === place._id && (
                                <div>
                                  <div className="mt-1">
                                    Restaurant: {place.Name}
                                  </div>
                                  <Collapse className="mt-1">
                                    <Panel header="Address" key="1">
                                      <p>
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
                {this.state.Cake_visible < this.state.isCakes.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreC}>
                    More
                  </Button>
                )}
              </div>
              <div className="hide-item border-bottom mb-5"></div>
            </div>

            <div className="Content__Product mt-5" id="all">
              <div className="Product">
                <img
                  className="Circle-Icon d-inline"
                  src="./public-img/icon_allfood.png"
                  alt=""
                ></img>
                <div className="Header d-inline">All</div>
              </div>
              <div className="border-bottom"></div>
              <div className="row member-list  ml-3 mr-3">
                {foodies.slice(0, this.state.Product_visible).map((food) => (
                  <div key={food._id} className="col-sm-4 member-item mt-5">
                    <div className="member-item-content">
                      <img
                        src={food.attachment}
                        alt={food.attachment}
                        className="member-img border-img"
                      />
                      <div className="item-content m-0 p-3">
                        <div className="item-header mt-1">{food.Name}</div>
                        <div className="item-info mt-1">
                          Price: {food.Price}
                        </div>
                        {places.map((place) => (
                          <div key={place._id}>
                            <div className="d-inline mt-2">
                              {food.PlaceId === place._id && (
                                <div>
                                  <div className="mt-1">
                                    Restaurant: {place.Name}
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
                {this.state.Product_visible < this.state.foodies.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreP}>
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
