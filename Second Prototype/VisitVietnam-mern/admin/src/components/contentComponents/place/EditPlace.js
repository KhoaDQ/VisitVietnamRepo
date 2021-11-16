import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";

export class EditPlace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeId: this.props.placeId,
      place: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/places/" + this.state.placeId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ place: data });
        this.setState({ attachment: data.attachment });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.placeId,
      Name: e.target.Name.value,
      Type: e.target.Type.value,
      Slogan: e.target.Slogan.value,
      Overview: e.target.Overview.value,
      Phone: e.target.Phone.value,
      Email: e.target.Email.value,
      Facebook: e.target.Facebook.value,
      LinkWeb: e.target.LinkWeb.value,
      attachment: this.state.attachment,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/places", data)
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
                <h1 className="mt-4">Edit place</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">Edit place</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_place">
                      Back to list
                    </NavLink>
                  </div>
                  <div className="card-body">
                    <div className="col-md-4">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="Name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="Name"
                            placeholder="Name"
                            defaultValue={this.state.place.Name}
                          />
                        </Form.Group>

                        <Form.Group controlId="Type">
                          <Form.Label>Type</Form.Label>
                          <Form.Control
                            type="text"
                            name="Type"
                            placeholder="Type"
                            defaultValue={this.state.place.Type}
                          />
                        </Form.Group>

                        <Form.Group controlId="Slogan">
                          <Form.Label>Slogan</Form.Label>
                          <Form.Control
                            type="text"
                            name="Slogan"
                            placeholder="Slogan"
                            defaultValue={this.state.place.Slogan}
                          />
                        </Form.Group>

                        <Form.Group controlId="Overview">
                          <Form.Label>Overview</Form.Label>
                          <Form.Control
                            type="text"
                            name="Overview"
                            placeholder="Overview"
                            defaultValue={this.state.place.Overview}
                          />
                        </Form.Group>

                        <Form.Group controlId="Phone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="number"
                            name="Phone"
                            placeholder="Phone"
                            defaultValue={this.state.place.Phone}
                          />
                        </Form.Group>
                        <Form.Group controlId="Email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="Email"
                            placeholder="Email"
                            defaultValue={this.state.place.Email}
                          />
                        </Form.Group>
                        <Form.Group controlId="Facebook">
                          <Form.Label>Facebook</Form.Label>
                          <Form.Control
                            type="text"
                            name="Facebook"
                            placeholder="Facebook"
                            defaultValue={this.state.place.Facebook}
                          />
                        </Form.Group>
                        <Form.Group controlId="LinkWeb">
                          <Form.Label>LinkWeb</Form.Label>
                          <Form.Control
                            type="text"
                            name="LinkWeb"
                            placeholder="Link Web"
                            defaultValue={this.state.place.LinkWeb}
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
