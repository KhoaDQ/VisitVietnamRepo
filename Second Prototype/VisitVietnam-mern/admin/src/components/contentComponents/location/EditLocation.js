import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export class EditLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationId: this.props.locationId,
      location: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/locations/" + this.state.locationId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ location: data });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.locationId,
      Details: e.target.Details.value,
      Street: e.target.Street.value,
      Ward: e.target.Ward.value,
      District: e.target.District.value,
      City: e.target.City.value,
      PlaceId: e.target.PlaceId.value,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/locations", data)
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
                <h1 class="mt-4">Edit Location</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li class="breadcrumb-item active">Edit Location</li>
                </ol>
                <div class="card mb-4">
                  <div class="card-header">
                    <NavLink class="btn btn-success" to="/list_location">
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
                            defaultValue={this.state.location.Details}
                          />
                        </Form.Group>

                        <Form.Group controlId="Street">
                          <Form.Label>Street</Form.Label>
                          <Form.Control
                            type="text"
                            name="Street"
                            placeholder="Street"
                            defaultValue={this.state.location.Street}
                          />
                        </Form.Group>

                        <Form.Group controlId="Ward">
                          <Form.Label>Ward</Form.Label>
                          <Form.Control
                            type="text"
                            name="Ward"
                            placeholder="Ward"
                            defaultValue={this.state.location.Ward}
                          />
                        </Form.Group>

                        <Form.Group controlId="District">
                          <Form.Label>District</Form.Label>
                          <Form.Control
                            type="text"
                            name="District"
                            placeholder="District"
                            defaultValue={this.state.location.District}
                          />
                        </Form.Group>

                        <Form.Group controlId="City">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="City"
                            placeholder="City"
                            defaultValue={this.state.location.City}
                          />
                        </Form.Group>

                        <Form.Group controlId="PlaceId">
                          <Form.Label>PlaceId</Form.Label>
                          <Form.Control
                            type="text"
                            name="PlaceId"
                            placeholder="PlaceId"
                            defaultValue={this.state.location.PlaceId}
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
