import React, { Component } from "react";
import axios from "axios";

import "./AddProduct.scss";

axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer dtso5Z4BFG2ZjEKNj6RL5cTg0UND61B3MaPt6tEBEGg";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

export default class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      product: [],
      product_name: "",
      product_price: "",
      product_descrip: "",
      user_model: {
        grant_type: "password",
        username: "spree@example.com",
        password: "spree123"
      }
    };
    this.click = this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  click = e => {
    const {
      user_model,
      product_name,
      product_price,
      product_descrip
    } = this.state;
    axios
      .post(`/api/v1/products`, user_model, {
        headers: {
          "X-Spree-Token": "3bb2e0bff60c3cb40fa7ea8df786ceea5fe26c09cc5635c5"
        },
        params: {
          "product[name]": product_name,
          "product[price]": product_price,
          "product[shipping_category_id]": 1,
          "product[description]": product_descrip
        }
      })
      .then(
        res => {
          this.setState({ isLoaded: true });
          console.log("👉 Returned data:", res);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };
  render() {
    return (
      <div>
        <div className="product-form">
          <form onSubmit={this.click}>
            <div className="group">
              <label>Name:</label>
              <input
                required
                type="text"
                name="product_name"
                value={this.state.product_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="group">
              <label>Price:</label>
              <input
                required
                type="int"
                name="product_price"
                value={this.state.product_price}
                onChange={this.handleChange}
              />
            </div>

            <div className="group">
              <label>Desc:</label>
              <input
                required
                type="text"
                name="product_descrip"
                value={this.state.product_descrip}
                onChange={this.handleChange}
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
