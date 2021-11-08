import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";

export class EditOutfit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outfitId: this.props.outfitId,
      outfit: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/outfits/" + this.state.outfitId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ outfit: data });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.outfitId,
      Name: e.target.Name.value,
      Type: e.target.Type.value,
      Gender: e.target.Gender.value,
      RangeAge: e.target.RangeAge.value,
      Price: e.target.Price.value,
      Note: e.target.Note.value,
      attachment: this.state.attachment,
      PlaceId: e.target.PlaceId.value,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/outfits", data)
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
                <h1 class="mt-4">Edit Outfit</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li class="breadcrumb-item active">Edit Outfit</li>
                </ol>
                <div class="card mb-4">
                  <div class="card-header">
                    <NavLink class="btn btn-success" to="/list_outfit">
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
                            defaultValue={this.state.outfit.Name}
                          />
                        </Form.Group>

                        <Form.Group controlId="Type">
                          <Form.Label>Type</Form.Label>
                          <Form.Control
                            type="text"
                            name="Type"
                            placeholder="Type"
                            defaultValue={this.state.outfit.Type}
                          />
                        </Form.Group>

                        <Form.Group controlId="Gender">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control
                            type="text"
                            name="Gender"
                            placeholder="Gender"
                            defaultValue={this.state.outfit.Gender}
                          />
                        </Form.Group>

                        <Form.Group controlId="Range Age">
                          <Form.Label>Range Age</Form.Label>
                          <Form.Control
                            type="text"
                            name="RangeAge"
                            placeholder="Range Age"
                            defaultValue={this.state.outfit.RangeAge}
                          />
                        </Form.Group>

                        <Form.Group controlId="Price">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="date"
                            name="Price"
                            placeholder="Price"
                            defaultValue={this.state.outfit.Price}
                          />
                        </Form.Group>

                        <Form.Group controlId="Note">
                          <Form.Label>Note</Form.Label>
                          <Form.Control
                            type="date"
                            name="Note"
                            placeholder="Note"
                            defaultValue={this.state.outfit.Note}
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
                            defaultValue={this.state.outfit.PlaceId}
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
