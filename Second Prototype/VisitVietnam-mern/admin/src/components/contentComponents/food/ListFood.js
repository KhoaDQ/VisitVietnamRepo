import React, { Component } from "react";
import { filter, includes } from "lodash";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class ListFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFoods: [],
      strSearch: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Call API
  refreshList() {
    fetch(process.env.REACT_APP_API + "/foods")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataFoods: data,
        });
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refreshList();
  }

  handleEditFood(content) {
    this.props.handleEditFoodId(content);
  }

  deleteFood(foodId) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(process.env.REACT_APP_API + "/foods/" + foodId)
        .then((res) => JSON.stringify(res.data))
        .then((result) => {
          alert(result);
        });
      setTimeout(() => {
        this.refreshList();
      }, 1000);
    }
  }

  handleChange(food) {
    this.setState({ strSearch: food.target.value });
  }
  handleSearch() {
    console.log(this.state.strSearch);
  }
  async afterChange() {
    this.refreshList();
  }

  render() {
    let foods = [];
    const { dataFoods } = this.state;

    foods = filter(dataFoods, (item) => {
      return includes(item.Name, this.state.strSearch);
    });
    return (
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid">
                <h1 className="mt-4">List of Food</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">List of Food</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <NavLink className="btn btn-success" to="/create_food">
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
                              <th>Mini Type</th>
                              <th>Price</th>
                              <th>Note</th>
                              <th>PlaceId</th>
                            </tr>
                          </thead>
                          <tbody>
                            {foods.map((item) => (
                              <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Type}</td>
                                <td>{item.MiniType}</td>
                                <td>{item.Price}</td>
                                <td>{item.Note}</td>
                                <td>{item.PlaceId}</td>
                                <td>
                                  <ButtonToolbar>
                                    <NavLink
                                      className="btn btn-info mr-3"
                                      to="/edit_food"
                                      onClick={() =>
                                        this.handleEditFood(item._id)
                                      }
                                    >
                                      Edit
                                    </NavLink>
                                    <Button
                                      variant="danger"
                                      className="p-1"
                                      onClick={() => this.deleteFood(item._id)}
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
