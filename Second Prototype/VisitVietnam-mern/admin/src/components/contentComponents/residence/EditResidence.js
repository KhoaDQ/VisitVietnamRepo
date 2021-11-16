import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";

export class EditResidence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      residenceId: this.props.residenceId,
      residence: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/residences/" + this.state.residenceId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ residence: data });
        this.setState({ attachment: data.attachment });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.residenceId,
      Description: e.target.Description.value,
      Type: e.target.Type.value,
      AvgPrice: e.target.AvgPrice.value,
      attachment: this.state.attachment,
      PlaceId: e.target.PlaceId.value,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/residences", data)
      .then((res) => res.status)
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
                <h1 className="mt-4">Edit Residence</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Residence</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_residence">
                      Back to list
                    </NavLink>
                  </div>
                  <div className="card-body">
                    <div className="col-md-4">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="Description">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="Description"
                            placeholder="Description"
                            defaultValue={this.state.residence.Description}
                          />
                        </Form.Group>

                        <Form.Group controlId="Type">
                          <Form.Label>Street</Form.Label>
                          <Form.Control
                            type="text"
                            name="Type"
                            placeholder="Type"
                            defaultValue={this.state.residence.Type}
                          />
                        </Form.Group>

                        <Form.Group controlId="AvgPrice">
                          <Form.Label>AvgPrice</Form.Label>
                          <Form.Control
                            type="text"
                            name="AvgPrice"
                            placeholder="AvgPrice"
                            defaultValue={this.state.residence.AvgPrice}
                          />
                        </Form.Group>

                        <Form.Group controlId="ThumbnailImage">
                          <Form.Label>Thumbnail Image</Form.Label>
                          <FileBase64
                            accept="image/*"
                            multiple={false}
                            type="file"
                            value={this.state.attachment}
                            onDone={({ base64 }) =>
                              this.setState({ attachment: base64 })
                            }
                          />
                        </Form.Group>

                        <Form.Group controlId="PlaceId">
                          <Form.Label>PlaceId</Form.Label>
                          <Form.Control
                            type="text"
                            name="PlaceId"
                            placeholder="PlaceId"
                            defaultValue={this.state.residence.PlaceId}
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
