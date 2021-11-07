import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";

export class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleId: this.props.articleId,
      article: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/articles/" + this.state.articleId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ article: data });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.articleId,
      Name: e.target.Name.value,
      Type: e.target.Type.value,
      Description: e.target.Description.value,
      Status: e.target.Status.value,
      attachment: this.state.attachment,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/articles", data)
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
                <h1 class="mt-4">Edit Article</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li class="breadcrumb-item active">Edit Article</li>
                </ol>
                <div class="card mb-4">
                  <div class="card-header">
                    <NavLink class="btn btn-success" to="/list_article">
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
                            defaultValue={this.state.article.Name}
                          />
                        </Form.Group>

                        <Form.Group controlId="Type">
                          <Form.Label>Type</Form.Label>
                          <Form.Control
                            type="text"
                            name="Type"
                            placeholder="Type"
                            defaultValue={this.state.article.Type}
                          />
                        </Form.Group>

                        <Form.Group controlId="Description">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="Description"
                            placeholder="Description"
                            defaultValue={this.state.article.Description}
                          />
                        </Form.Group>

                        <Form.Group controlId="Status">
                          <Form.Label>Status</Form.Label>
                          <Form.Control
                            type="text"
                            name="Status"
                            placeholder="Status"
                            defaultValue={this.state.article.Status}
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
