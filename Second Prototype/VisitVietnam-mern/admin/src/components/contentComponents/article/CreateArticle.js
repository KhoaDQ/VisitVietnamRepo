import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";

export class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { attachment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const data = {
      Name: e.target.Name.value,
      Type: e.target.Type.value,
      Description: e.target.Description.value,
      Status: e.target.Status.value,
      attachment: this.state.attachment,
    };

    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API + "/articles", data)
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
                <h1 className="mt-4">Create new Article</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">Create new Article</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_article">
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

                        <Form.Group controlId="Description">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="Description"
                            placeholder="Description"
                          />
                        </Form.Group>

                        <Form.Group controlId="Status">
                          <Form.Label>Status</Form.Label>
                          <Form.Control
                            type="text"
                            name="Status"
                            placeholder="Status"
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
