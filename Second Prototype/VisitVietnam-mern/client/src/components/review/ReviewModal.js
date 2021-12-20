import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Moment from "moment";
import "./ReviewModal.css"
import axios from "axios";

export class ReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      Review_visible: 3,
      isCommenting: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  refreshReview(){
    fetch(process.env.REACT_APP_API + "/reviews/getByPlaceId/" + this.props.PlaceId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ reviews: data });
      });
  }
  componentDidMount() {
    this.refreshReview();
  }

  async handleSubmit(e) {
    e.preventDefault();
    const data = {
      StarRating: e.target.StarRating.value,
      Pros: e.target.Pros.value,
      Cons: e.target.Cons.value,
      Username: this.props.UserName,
      PlaceId: this.props.PlaceId,
    };

    await axios
      .post(process.env.REACT_APP_API + "/reviews", data)
      .then((res) => JSON.stringify(res.data))
      .then((result) => {
        alert("Comment has been saved !");
      });
      this.setState({isCommenting : false});

      this.refreshReview();
  }

  loadMore() {
    this.setState((old) => {
      return { Review_visible: old.Review_visible + 3 };
    });
  }

  render() {
    const {
      reviews,
    } = this.state;
    return (
      <div className="container">
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Review & Rating
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={12} className = "Container__Content">
                <div>
                  {this.props.Name !== undefined && <h1 className="text-center">{this.props.Name}</h1>}
                  {reviews !== null && reviews.length !== 0 && reviews.slice(0, this.state.Review_visible).map((review) => (
                    <div key={review._id} className="col-sm-12">
                      <div className="review-card col-sm-12 mb-3">
                        <div className="review__consumer-information row mb-2 ml-2">
                            <img className="Circle-Icon d-inline m-2" src="./public-img/anonymous.png" alt=""/> 
                            <div className="mt-3 font-weight-bold">{review.Username}</div>
                        </div>
                        <section className="review__content row ml-2">
                          <div className="review-content__header row w-100 mb-2" v-pre="">
                               <div className="star-rating col-5">
                                  <span className={"icon is-small" + (review.StarRating === 1 || review.StarRating === 2 || review.StarRating === 3 || review.StarRating === 4 || review.StarRating === 5 ? ' text-warning' : ' text-light')}>
                                    <i className="fas fa-star"></i>
                                  </span>
                                  <span className={"icon is-small" + (review.StarRating === 2 || review.StarRating === 3 || review.StarRating === 4 || review.StarRating === 5 ? ' text-warning' : ' text-light')}>
                                    <i className="fas fa-star"></i>
                                  </span>
                                  <span className={"icon is-small" + (review.StarRating === 3 || review.StarRating === 4 || review.StarRating === 5 ? ' text-warning' : ' text-light')}>
                                    <i className="fas fa-star"></i>
                                  </span>
                                  <span className={"icon is-small" + (review.StarRating === 4 || review.StarRating === 5 ? ' text-warning' : ' text-light')}>
                                    <i className="fas fa-star"></i>
                                  </span>
                                  <span className={"icon is-small" + (review.StarRating === 5 ? ' text-warning' : ' text-light')}>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </div>
                                <div className="review-content-header__dates col-7">
                                  <time className="review-date pull-right">Date: {Moment(review.createdAt).format("D/MM/yy")}</time>
                                </div>
                            </div>
                          <div className="review-content__body row w-100" v-pre="">
                              <p className="review-content__text row ml-3 w-75" >
                                <span> Pros: {review.Pros} <br></br>
                                Cons: {review.Cons}</span>
                              </p>
                          </div>
                        </section>
                      </div>
                    </div>
                  )) }
                 
                {this.state.Review_visible < this.state.reviews.length && (
                <div className="row Contain-Load-Mores">
                  <div className="col-6">
                  </div>
                  <Button className="Load-Mores" onClick={this.loadMore}>
                    More
                  </Button>
                </div>
                )}
                  { !this.state.isCommenting && <div className="text-info font-weight-bold pull-right mr-3" style={{cursor:'pointer'}} onClick={()=>{
                    const token = localStorage.getItem("token");
                    console.log(token);
                    if (token !== "" && token !== undefined && token !== null){
                      this.setState({isCommenting : true})
                    }
                    else alert("You need to login for review");
                  }}>Add comment ... </div>}
                  <div className="clear"></div>
                  {this.state.isCommenting && <div className="review-card col-sm-12 mt-3">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="StarRating">
                          <Form.Label className = "mr-2">Star Rating: </Form.Label>
                          <Form.Select aria-label="Choose number" name = "StarRating">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">2</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="Pros" className = "mb-2">
                          <Form.Control
                            type="text"
                            name="Pros"
                            placeholder="Pros"
                          />
                        </Form.Group>

                        <Form.Group controlId="Cons">
                          <Form.Control
                            type="text"
                            name="Cons"
                            placeholder="Cons"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Button className="pull-right btn-sm" variant="dark" onClick={()=>{
                    this.setState({isCommenting : false});
                  }}>
                            Cancel
                          </Button>
                          <Button className="pull-right btn-sm" variant="primary" type="submit">
                            Save
                          </Button>
                        </Form.Group>
                        <div className = "p-4"></div>
                      </Form>
                  </div>}
                  
                </div>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
