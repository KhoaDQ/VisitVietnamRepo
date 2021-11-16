import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FileBase64 from "react-file-base64";
import axios from "axios";
import Moment from "moment";

export class EditHoliday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holidayId: this.props.holidayId,
      holiday: "",
      StartDate: "",
      EndDate: "",
      attachment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "/holidays/" + this.state.holidayId, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ holiday: data });
        this.setState({ StartDate: data.StartDate });
        this.setState({ EndDate: data.EndDate });
        this.setState({ attachment: data.attachment });
      });
  }

  handleSubmit(e) {
    const data = {
      _id: this.state.holidayId,
      Name: e.target.Name.value,
      Type: e.target.Type.value,
      Description: e.target.Description.value,
      Details: e.target.Details.value,
      StartDate: e.target.StartDate.value,
      EndDate: e.target.EndDate.value,
      Status: e.target.Status.value,
      attachment: this.state.attachment,
      LocationId: e.target.LocationId.value,
    };

    console.log({ data });
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_API + "/holidays", data)
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
                <h1 className="mt-4">Edit Holiday</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="/">Master page</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Holiday</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <NavLink className="btn btn-success" to="/list_holiday">
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
                            defaultValue={this.state.holiday.Name}
                          />
                        </Form.Group>

                        <Form.Group controlId="Type">
                          <Form.Label>Type</Form.Label>
                          <Form.Control
                            type="text"
                            name="Type"
                            placeholder="Type"
                            defaultValue={this.state.holiday.Type}
                          />
                        </Form.Group>

                        <Form.Group controlId="Description">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            name="Description"
                            placeholder="Description"
                            defaultValue={this.state.holiday.Description}
                          />
                        </Form.Group>

                        <Form.Group controlId="Details">
                          <Form.Label>Details</Form.Label>
                          <Form.Control
                            type="text"
                            name="Details"
                            placeholder="Details"
                            defaultValue={this.state.holiday.Details}
                          />
                        </Form.Group>

                        <Form.Group controlId="StartDate">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="StartDate"
                            placeholder="Start Date"
                            value={Moment(this.state.StartDate).format(
                              "YYYY-MM-DD"
                            )}
                            onChange={(e) =>
                              this.setState({ StartDate: e.target.value })
                            }
                          />
                        </Form.Group>

                        <Form.Group controlId="EndDate">
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="EndDate"
                            placeholder="End Date"
                            value={Moment(this.state.EndDate).format(
                              "YYYY-MM-DD"
                            )}
                            onChange={(e) =>
                              this.setState({ EndDate: e.target.value })
                            }
                          />
                        </Form.Group>

                        <Form.Group controlId="Status">
                          <Form.Label>Status</Form.Label>
                          <Form.Control
                            type="text"
                            name="Status"
                            placeholder="Status"
                            defaultValue={this.state.holiday.Status}
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

                        <Form.Group controlId="LocationId">
                          <Form.Label>LocationId</Form.Label>
                          <Form.Control
                            type="text"
                            name="LocationId"
                            placeholder="LocationId"
                            defaultValue={this.state.holiday.LocationId}
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
