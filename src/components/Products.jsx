import React, { Component } from "react";
// import { makeClient } from "@spree/storefront-api-v2-sdk";

// const client = makeClient({
//   host: "http://localhost:3000"
// });
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer dtso5Z4BFG2ZjEKNj6RL5cTg0UND61B3MaPt6tEBEGg";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

class Products extends Component {
  constructor() {
    super();
    this.state = {
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
    const { user_model, storefront } = this.state;

    await axios
      .post(`/spree_oauth/token`, user_model)
      .then(res => res.data.access_token)
      .then(res => {
        this.setState({ token: res });
        localStorage.setItem("API_TOKEN", res);
        console.log("👉 Returned data:", res);
      });
    await axios
      .get(`${storefront}/products`, {
        params: {
          // access_token: "dtso5Z4BFG2ZjEKNj6RL5cTg0UND61B3MaPt6tEBEGg"
          // token: `${token}`
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("API_TOKEN")}`
        }
      })
      .then(res => res.data.data)
      .then(res => {
        this.setState({ product: res });
        console.log(res);
      });
    console.log(this.state.product);
  }
  //   async componentDidMount() {
  //     const response = await client.authentication.getToken({
  //       username: "spree@example.com",
  //       password: "spree123"
  //     });

  //     const bearerToken = response.success().access_token;
  //     console.log("token:", bearerToken);

  //     const acc_info = await client.account.accountInfo({ bearerToken });
  //     const acc = acc_info.success().data.attributes.email;
  //     console.log("acc info", acc);

  //     const card_list = await client.account.creditCardsList({ bearerToken });
  //     const card = card_list.success();
  //     console.log("card", card);

  //     const cart_add = await client.cart.addItem(
  //       { bearerToken },
  //       {
  //         variant_id: "1",
  //         quantity: 1
  //       }
  //     );
  //     const carts = cart_add.success();
  //     console.log("carts", carts);
  //     const product_list = await client.products.list();
  //     const product = product_list.success().data;
  //     console.log("product", product);

  //     const cart_list = await client.cart.show({ bearerToken });
  //     const cart = card_list.success();
  //     console.log("cart", cart);
  //   }

  render() {
    return (
      <div>
        {this.state.product.map((i, idx) => (
          <div key={idx}>
            <h1>{i.id}</h1>
            <h1>{i.attributes.display_price}</h1>
          </div>
        ))}
      </div>
    );
  }
}
export default Products;
