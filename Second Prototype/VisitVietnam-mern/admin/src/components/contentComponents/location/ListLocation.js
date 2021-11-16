import React, { Component } from "react";
import { filter, includes } from "lodash";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class ListLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLocations: [],
      strSearch: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/locations")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataLocations: data,
        });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refreshList();
  }

  handleEditLocation(content) {
    this.props.handleEditLocationId(content);
  }

  deleteLocation(locationId) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(process.env.REACT_APP_API + "/locations/" + locationId)
        .then((res) => JSON.stringify(res.data))
        .then((result) => {
          alert(result);
        });
      setTimeout(() => {
        this.refreshList();
      }, 1000);
    }
  }

  handleChange(location) {
    this.setState({ strSearch: location.target.value });
  }
  handleSearch() {
    console.log(this.state.strSearch);
  }
  async afterChange() {
    this.refreshList();
  }

  render() {
    let locations = [];
    const { dataLocations } = this.state;

    locations = filter(dataLocations, (item) => {
      return includes(item.City, this.state.strSearch);
    });
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">List of Location</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">List of Location</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <NavLink
                          className="btn btn-success"
                          to="/create_location"
                        >
                          Create new
                        </NavLink>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <Form>
                          <div className="row">
                            <div className="col-md-7">
                              <FormControl
                                value={this.state.strSearch}
                                type="text"
                                placeholder="Search by city"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-5" />
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="table-responsive">
                      <div className="Admin">
                        <Table
                          className="mt-4"
                          striped
                          bordered
                          hover
                          size="sm"
                        >
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Details</th>
                              <th>Street</th>
                              <th>Ward</th>
                              <th>District</th>
                              <th>City</th>
                              <th>PlaceId</th>
                            </tr>
                          </thead>
                          <tbody>
                            {locations.map((item) => (
                              <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.Details}</td>
                                <td>{item.Street}</td>
                                <td>{item.Ward}</td>
                                <td>{item.District}</td>
                                <td>{item.City}</td>
                                <td>{item.PlaceId}</td>
                                <td>
                                  <ButtonToolbar>
                                    <NavLink
                                      className="btn btn-info mr-3"
                                      to="/edit_location"
                                      onClick={() =>
                                        this.handleEditLocation(item._id)
                                      }
                                    >
                                      Edit
                                    </NavLink>
                                    <Button
                                      variant="danger"
                                      className="p-1"
                                      onClick={() =>
                                        this.deleteLocation(item._id)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </ButtonToolbar>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
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
