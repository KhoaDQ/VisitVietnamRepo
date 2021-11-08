import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";

export class CreateOutfit extends Component {
  constructor(props) {
    super(props);
    this.state = { attachment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const data = {
        Name: e.target.Name.value,
        Type: e.target.Type.value,
        Gender: e.target.Gender.value,
        RangeAge: e.target.RangeAge.value,
        Price: e.target.Price.value,
        Note: e.target.Note.value,
        attachment: this.state.attachment,
        PlaceId: e.target.PlaceId.value,
    };

    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API + "/outfits", data)
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
                <h1 className="mt-4">Create new Outfit</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">Create new Outfit</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_outfit">
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
                          />
                        </Form.Group>

                        <Form.Group controlId="Type">
                          <Form.Label>Type</Form.Label>
                          <Form.Control
                            type="text"
                            name="Type"
                            placeholder="Type"
                          />
                        </Form.Group>

                        <Form.Group controlId="Gender">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control
                            type="text"
                            name="Gender"
                            placeholder="Gender"
                          />
                        </Form.Group>

                        <Form.Group controlId="Range Age">
                          <Form.Label>Range Age</Form.Label>
                          <Form.Control
                            type="text"
                            name="RangeAge"
                            placeholder="Range Age"
                          />
                        </Form.Group>
                      
                        <Form.Group controlId="Price">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="text"
                            name="Price"
                            placeholder="Price"
                          />
                        </Form.Group>

                        <Form.Group controlId="Note">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="text"
                            name="Note"
                            placeholder="Note"
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
