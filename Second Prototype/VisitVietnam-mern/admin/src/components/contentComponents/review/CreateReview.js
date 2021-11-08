import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = { attachment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const data = {
      StarRating: e.target.StarRating.value,
      Pros: e.target.Pros.value,
      Cons: e.target.Cons.value,
      Username: e.target.Username.value,
      PlaceId: e.target.PlaceId.value,
    };

    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API + "/reviews", data)
      .then((res) => JSON.stringify(res.data))
      .then((result) => {
        alert(result);
      });
  }

  render() {
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">Create new Review</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">Create new Review</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_review">
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
                          />
                        </Form.Group>

                        <Form.Group controlId="Pros">
                          <Form.Label>Pros</Form.Label>
                          <Form.Control
                            type="text"
                            name="Pros"
                            placeholder="Pros"
                          />
                        </Form.Group>

                        <Form.Group controlId="Cons">
                          <Form.Label>Cons</Form.Label>
                          <Form.Control
                            type="text"
                            name="Cons"
                            placeholder="Cons"
                          />
                        </Form.Group>
                      
                        <Form.Group controlId="Username">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            name="Username"
                            placeholder="Username"
                          />
                        </Form.Group>

                        <Form.Group controlId="PlaceId">
                          <Form.Label>PlaceId</Form.Label>
                          <Form.Control
                            type="text"
                            name="PlaceId"
                            placeholder="PlaceId"
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
