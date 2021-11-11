import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export class CreateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { attachment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const data = {
      Details: e.target.Details.value,
      Street: e.target.Street.value,
      Ward: e.target.Ward.value,
      District: e.target.District.value,
      City: e.target.City.value,
      PlaceId: e.target.PlaceId.value,
    };

    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API + "/locations", data)
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
                <h1 className="mt-4">Create new Location</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Create new Location
                  </li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_location">
                      Back to list
                    </NavLink>
                  </div>

                  <div className="card-body">
                    <div className="col-md-4">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="Details">
                          <Form.Label>Details</Form.Label>
                          <Form.Control
                            type="text"
                            name="Details"
                            placeholder="Details"
                          />
                        </Form.Group>

                        <Form.Group controlId="Street">
                          <Form.Label>Street</Form.Label>
                          <Form.Control
                            type="text"
                            name="Street"
                            placeholder="Street"
                          />
                        </Form.Group>

                        <Form.Group controlId="Ward">
                          <Form.Label>Ward</Form.Label>
                          <Form.Control
                            type="text"
                            name="Ward"
                            placeholder="Ward"
                          />
                        </Form.Group>

                        <Form.Group controlId="District">
                          <Form.Label>District</Form.Label>
                          <Form.Control
                            type="text"
                            name="District"
                            placeholder="District"
                          />
                        </Form.Group>

                        <Form.Group controlId="City">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="City"
                            placeholder="City"
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
