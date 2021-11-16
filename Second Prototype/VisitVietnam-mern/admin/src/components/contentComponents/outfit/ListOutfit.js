import React, { Component } from "react";
import { filter, includes } from "lodash";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class ListOutfit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOutfits: [],
      strSearch: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/outfits")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataOutfits: data,
        });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refreshList();
  }

  handleEditOutfit(content) {
    this.props.handleEditOutfitId(content);
  }

  deleteOutfit(outfitId) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(process.env.REACT_APP_API + "/outfits/" + outfitId)
        .then((res) => JSON.stringify(res.data))
        .then((result) => {
          alert(result);
        });
      setTimeout(() => {
        this.refreshList();
      }, 1000);
    }
  }

  handleChange(outfit) {
    this.setState({ strSearch: outfit.target.value });
  }
  handleSearch() {
    console.log(this.state.strSearch);
  }
  async afterChange() {
    this.refreshList();
  }

  render() {
    let outfits = [];
    const { dataOutfits } = this.state;

    outfits = filter(dataOutfits, (item) => {
      return includes(item.Name, this.state.strSearch);
    });
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">List of Outfit</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">List of Outfit</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <NavLink
                          className="btn btn-success"
                          to="/create_outfit"
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
                                placeholder="Search by name"
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
                              <th>Name</th>
                              <th>Type</th>
                              <th>Gender</th>
                              <th>RangeAge</th>
                              <th>Price</th>
                              <th>Note</th>
                              <th>PlaceId</th>
                            </tr>
                          </thead>
                          <tbody>
                            {outfits.map((item) => (
                              <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Type}</td>
                                <td>{item.Gender}</td>
                                <td>{item.RangeAge}</td>
                                <td>{item.Price}</td>
                                <td>{item.Note}</td>
                                <td>{item.PlaceId}</td>
                                <td>
                                  <ButtonToolbar>
                                    <NavLink
                                      className="btn btn-info mr-3"
                                      to="/edit_outfit"
                                      onClick={() =>
                                        this.handleEditOutfit(item._id)
                                      }
                                    >
                                      Edit
                                    </NavLink>
                                    <Button
                                      variant="danger"
                                      className="p-1"
                                      onClick={() =>
                                        this.deleteOutfit(item._id)
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
