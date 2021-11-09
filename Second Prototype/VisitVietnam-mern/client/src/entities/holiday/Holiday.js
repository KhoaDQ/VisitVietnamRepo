import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "../../assets/css/base.css";
import "./Holiday.css";
import { DetailsModal } from "../../components/DetailsIModal";
import Moment from "moment";

export class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidaysUpcoming: [],
      holidaysYear: [],
      holidaysDay: [],
      articles: [],
      DetailsModalShow: false,
      Holiday_Year_visible: 3,
      Holiday_Day_visible: 3,
    };
    this.loadMoreY = this.loadMoreY.bind(this);
    this.loadMoreD = this.loadMoreD.bind(this);
  }

  get4HolidayUpcoming() {
    fetch(process.env.REACT_APP_API + "/holidays/get4HolidayUpcoming")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ holidaysUpcoming: data });
      });
  }

  getAllHolidayYear() {
    fetch(process.env.REACT_APP_API + "/holidays")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ holidaysYear: data });
      });
  }

  getAllHolidayDay() {
    fetch(process.env.REACT_APP_API + "/events")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ holidaysDay: data });
      });
  }

  getAllArticleEvent() {
    fetch(process.env.REACT_APP_API + "/articles/getAllArticleEvent")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.get4HolidayUpcoming();
    this.getAllHolidayDay();
    this.getAllHolidayYear();
    this.getAllArticleEvent();
  }

  loadMoreY() {
    this.setState((old) => {
      return { Holiday_Year_visible: old.Holiday_Year_visible + 3 };
    });
  }

  loadMoreD() {
    this.setState((old) => {
      return { Holiday_Day_visible: old.Holiday_Day_visible + 3 };
    });
  }

  render() {
    const {
      holidaysDay,
      holidaysYear,
      holidaysUpcoming,
      articles,
      Id,
      Name,
      Type,
      Description,
      PicFileName,
      Details,
      StartDate,
      EndDate,
      Status,
    } = this.state;
    let DetailsModalClose = () => this.setState({ DetailsModalShow: false });

    return (
      <div className="Container Event">
        <div id="slider" className="Banner">
          <div className="text-content ">
            <div className="text-heading">Event</div>
            <div className="text-desc">
              Do you want to participate in traditional events? Or are you
              interested in talk shows, music programs? They are all gathered
              here. Check it now
            </div>
          </div>
        </div>

        <div className="Container__Content">
          <div id="Background-Highlight">
            <div className="Content__Highlight pt-4">
              <div className="Highlight">
                <div className="Line bg-light"></div>
                <div className="Header text-black">Highlight</div>
              </div>
              <div className="row member-list ml-3 mr-3 mt-5">
                {articles.map((article) => (
                  <div className="col-sm-4 member-item">
                    <div key={article._id}>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="Background-YearDay">
            <div className="Content__Upcoming pt-4">
              <div className="Highlight">
                <div className="Line bg-light"></div>
                <div className="Header text-black">Upcoming</div>
              </div>
              <div className="row member-list ml-3 mr-3">
                {holidaysUpcoming.map((holiday) => (
                  <div className="col-sm-4 member-item mt-5">
                    <div key={holiday._id} className="member-item-content">
                      <div
                        onClick={() =>
                          this.setState({
                            DetailsModalShow: true,
                            Id: holiday._id,
                            Name: holiday.Name,
                            Type: holiday.Type,
                            Description: holiday.Description,
                            PicFileName: holiday.attachment,
                            Details: holiday.Details,
                            StartDate: holiday.StartDate,
                            EndDate: holiday.EndDate,
                            Status: holiday.Status,
                          })
                        }
                      >
                        <img
                          src={holiday.attachment}
                          alt={holiday.attachment}
                          className="member-img border-img"
                        />
                        <div className="item-content">
                          <div className="item-header">{holiday.Name}</div>
                          <div className="item-description">
                            {holiday.Description}
                          </div>
                          <div className="item-date">
                            Start date:
                            {Moment(holiday.StartDate).format("D/MM/yy")}
                          </div>
                          <div className="item-date">
                            End date:
                            {Moment(holiday.EndDate).format("D/MM/yy")}
                          </div>
                        </div>
                      </div>
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
                        Details={Details}
                        StartDate={StartDate}
                        EndDate={EndDate}
                        Status={Status}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Content__Event-Year pt-4">
              <div className="Highlight">
                <div className="Line"></div>
                <div className="Header text-warning">Annual Event</div>
              </div>
              <div className="row member-list ml-3 mr-3">
                {holidaysYear
                  .slice(0, this.state.Holiday_Year_visible)
                  .map((holiday) => (
                    <div className="col-sm-4 member-item mt-5">
                      <div key={holiday._id} className="member-item-content">
                        <div
                          onClick={() =>
                            this.setState({
                              DetailsModalShow: true,
                              Id: holiday._id,
                              Name: holiday.Name,
                              Type: holiday.Type,
                              Description: holiday.Description,
                              PicFileName: holiday.attachment,
                              Details: holiday.Details,
                              StartDate: holiday.StartDate,
                              EndDate: holiday.EndDate,
                              Status: holiday.Status,
                            })
                          }
                        >
                          <img
                            src={holiday.attachment}
                            alt={holiday.attachment}
                            className="member-img border-img"
                          />
                          <div className="item-content">
                            <div className="item-header">{holiday.Name}</div>
                            <div className="item-description">
                              {holiday.Description}
                            </div>
                            <div className="item-date">
                              Start date:
                              {Moment(holiday.StartDate).format("D/MM/yy")}
                            </div>
                            <div className="item-date">
                              End date:
                              {Moment(holiday.EndDate).format("D/MM/yy")}
                            </div>
                          </div>
                        </div>
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
                          Details={Details}
                          StartDate={StartDate}
                          EndDate={EndDate}
                          Status={Status}
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Holiday_Year_visible <
                  this.state.holidaysYear.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreY}>
                    More
                  </Button>
                )}
              </div>
            </div>

            <div className="clear"></div>

            <div className="Content__Event-Day">
              <div className="Highlight">
                <div className="Line"></div>
                <div className="Header text-success">Event</div>
              </div>

              <div className="row member-list ml-3 mr-3">
                {holidaysDay
                  .slice(0, this.state.Holiday_Day_visible)
                  .map((holiday) => (
                    <div className="col-sm-4 member-item mt-5">
                      <div key={holiday._id} className="member-item-content">
                        <div
                          onClick={() =>
                            this.setState({
                              DetailsModalShow: true,
                              Id: holiday._id,
                              Name: holiday.Name,
                              Type: holiday.Type,
                              Description: holiday.Description,
                              PicFileName: holiday.attachment,
                              Details: holiday.Details,
                              StartDate: holiday.StartDate,
                              EndDate: holiday.EndDate,
                              Status: holiday.Status,
                            })
                          }
                        >
                          <img
                            src={holiday.attachment}
                            alt={holiday.attachment}
                            className="member-img border-img"
                          />
                          <div className="item-content">
                            <div className="item-header">{holiday.Name}</div>
                            <div className="item-description">
                              {holiday.Description}
                            </div>
                            <div className="item-date">
                              Start date:
                              {Moment(holiday.StartDate).format("D/MM/yy")}
                            </div>
                            <div className="item-date">
                              End date:
                              {Moment(holiday.EndDate).format("D/MM/yy")}
                            </div>
                          </div>
                        </div>
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
                          Details={Details}
                          StartDate={StartDate}
                          EndDate={EndDate}
                          Status={Status}
                        />
                      </div>
                    </div>
                  ))}
              </div>

              <div className="col-md-12 Contain-Load-Mores">
                {this.state.Holiday_Day_visible <
                  this.state.holidaysDay.length && (
                  <Button className="Load-Mores" onClick={this.loadMoreD}>
                    More
                  </Button>
                )}
              </div>
            </div>

            <div className="clear"></div>

            <div className="Content__Best-Of-Year"></div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
