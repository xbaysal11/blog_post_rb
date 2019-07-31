import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://10.0.0.35/api";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer dtso5Z4BFG2ZjEKNj6RL5cTg0UND61B3MaPt6tEBEGg";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      storefront: "/api/v2/storefront",
      product: [],
      user_model: {
        grant_type: "password",
        username: "spree@example.com",
        password: "spree123"
      }
    };
  }
  async componentDidMount() {
    const { user_model, storefront, token } = this.state;

    await axios
      .post(`/spree_oauth/token`, user_model)
      .then(res => res.data.access_token)
      .then(
        res => {
          this.setState({ isLoaded: true, token: res });
          localStorage.setItem("API_TOKEN", res);
          // console.log("👉 Returned data:", res);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    await axios
      .get(`${storefront}/products`, {
        params: {
          // access_token: "dtso5Z4BFG2ZjEKNj6RL5cTg0UND61B3MaPt6tEBEGg""👉 Returned data:""👉 Returned data:"
          // token: `${token}`
        },
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("API_TOKEN")}`
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.data.data)
      .then(
        res => {
          this.setState({ isLoaded: true, product: res });
          console.log("👉 Returned data:", res);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, product } = this.state;
    return (
      <div className="card-list">
        {error ? (
          <div>Error: {error.message}</div>
        ) : !isLoaded ? (
          <div>Loading...</div>
        ) : (
          <div className="card">
            {product.map(i => (
              <div className="card-item" key={i.id}>
                <div className="img" />
                <div className="content">
                  <h1>{i.attributes.name}</h1>
                  <h5>{i.type}</h5>
                  <p>{i.attributes.description}</p>
                  <h3>{i.attributes.display_price}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default Products;
