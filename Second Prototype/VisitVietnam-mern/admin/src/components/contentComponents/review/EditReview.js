import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export class EditReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewId: this.props.reviewId,
      review: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/reviews/" + this.state.reviewId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ review: data });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.reviewId,
      StarRating: e.target.StarRating.value,
      Pros: e.target.Pros.value,
      Cons: e.target.Cons.value,
      Username: e.target.Username.value,
      PlaceId: e.target.PlaceId.value,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/reviews", data)
      .then((res) => res.status)
      .then((result) => {
        alert(result);
      });
  }

  handleImageChange(e) {
    e.preventDefault();
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid">
                <h1 class="mt-4">Edit Review</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li class="breadcrumb-item active">Edit Review</li>
                </ol>
                <div class="card mb-4">
                  <div class="card-header">
                    <NavLink class="btn btn-success" to="/list_review">
                      Back to list
                    </NavLink>
                  </div>
                  <div className="card-body">
                    <div className="col-md-4">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="StarRating">
                          <Form.Label>StarRating</Form.Label>
                          <Form.Control
                            type="text"
                            name="StarRating"
                            placeholder="StarRating"
                            defaultValue={this.state.review.StarRating}
                          />
                        </Form.Group>

                        <Form.Group controlId="Pros">
                          <Form.Label>Pros</Form.Label>
                          <Form.Control
                            type="text"
                            name="Pros"
                            placeholder="Pros"
                            defaultValue={this.state.review.Pros}
                          />
                        </Form.Group>

                        <Form.Group controlId="Cons">
                          <Form.Label>Cons</Form.Label>
                          <Form.Control
                            type="text"
                            name="Cons"
                            placeholder="Cons"
                            defaultValue={this.state.review.Cons}
                          />
                        </Form.Group>

                        <Form.Group controlId="Username">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            name="Username"
                            placeholder="Username"
                            defaultValue={this.state.review.Username}
                          />
                        </Form.Group>

                        <Form.Group controlId="PlaceId">
                          <Form.Label>PlaceId</Form.Label>
                          <Form.Control
                            type="text"
                            name="PlaceId"
                            placeholder="PlaceId"
                            defaultValue={this.state.review.PlaceId}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Button variant="primary" type="submit">
                            Save
                          </Button>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
