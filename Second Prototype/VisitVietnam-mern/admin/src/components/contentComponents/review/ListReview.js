import React, { Component } from "react";
import { filter, includes } from "lodash";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class ListReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReviews: [],
      strSearch: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/reviews")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataReviews: data,
        });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refreshList();
  }

  handleEditReview(content) {
    this.props.handleEditReviewId(content);
  }

  handleCategoryReview(content) {
    this.props.handleCategoryReviewId(content);
  }

  deleteReview(reviewId) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(process.env.REACT_APP_API + "/reviews/" + reviewId)
        .then((res) => JSON.stringify(res.data))
        .then((result) => {
          alert(result);
        });
      setTimeout(() => {
        this.refreshList();
      }, 1000);
    }
  }

  handleChange(review) {
    this.setState({ strSearch: review.target.value });
  }
  handleSearch() {
    console.log(this.state.strSearch);
  }
  async afterChange() {
    this.refreshList();
  }

  render() {
    let reviews = [];
    const { dataReviews } = this.state;

    reviews = filter(dataReviews, (item) => {
      return includes(item.Name, this.state.strSearch);
    });
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">List of Review</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">List of Review</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <NavLink
                          className="btn btn-success"
                          to="/create_review"
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
                                ref="search"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div class="col-md-5">Update Soon</div>
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
                              <th>StarRating</th>
                              <th>Pros</th>
                              <th>Cons</th>
                              <th>Username</th>
                              <th>PlaceId</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reviews.map((item) => (
                              <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.StarRating}</td>
                                <td>{item.Pros}</td>
                                <td>{item.Cons}</td>
                                <td>{item.Username}</td>
                                <td>{item.PlaceId}</td>
                                <td>
                                  <ButtonToolbar>
                                    <NavLink
                                      className="btn btn-info mr-3"
                                      to="/edit_review"
                                      onClick={() =>
                                        this.handleEditReview(item._id)
                                      }
                                    >
                                      Edit
                                    </NavLink>
                                    <Button
                                      variant="danger"
                                      className="p-1"
                                      onClick={() =>
                                        this.deleteReview(item._id)
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
