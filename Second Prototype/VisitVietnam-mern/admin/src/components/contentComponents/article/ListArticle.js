import React, { Component } from "react";
import { filter, includes } from "lodash";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class ListArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArticles: [],
      strSearch: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/articles")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataArticles: data,
        });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refreshList();
  }

  handleEditArticle(content) {
    this.props.handleEditArticleId(content);
  }

  handleCategoryArticle(content) {
    this.props.handleCategoryArticleId(content);
  }

  deleteArticle(articleId) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(process.env.REACT_APP_API + "/articles/" + articleId)
        .then((res) => JSON.stringify(res.data))
        .then((result) => {
          alert(result);
        });
      setTimeout(() => {
        this.refreshList();
      }, 1000);
    }
  }

  handleChange(event) {
    this.setState({ strSearch: event.target.value });
  }
  handleSearch() {
    console.log(this.state.strSearch);
  }
  async afterChange() {
    this.refreshList();
  }

  render() {
    let articles = [];
    const { dataArticles } = this.state;

    articles = filter(dataArticles, (item) => {
      return includes(item.Name, this.state.strSearch);
    });
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">List of Article</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">List of Article</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <NavLink
                          className="btn btn-success"
                          to="/create_article"
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
                              <th>Name</th>
                              <th>Type</th>
                              <th>Description</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {articles.map((item) => (
                              <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Type}</td>
                                <td>{item.Description}</td>
                                <td>{item.Status}</td>
                                <td>
                                  <ButtonToolbar>
                                    <NavLink
                                      className="btn btn-info mr-3"
                                      to="/edit_article"
                                      onClick={() =>
                                        this.handleEditArticle(item._id)
                                      }
                                    >
                                      Edit
                                    </NavLink>
                                    <Button
                                      variant="danger"
                                      className="p-1"
                                      onClick={() =>
                                        this.deleteArticle(item._id)
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
