import React, { Component } from "react";
import Products from "./components/Products";

export default class App extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Hello World!</h1>
        {/* <h1>{this.state.token}</h1> */}
        {/* <img src={img} alt="" /> */}

        <Products />
        <p>
          <a
            href="https://github.com/xbaysal11/react_with_rails"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/xbaysal11/react_with_rails
          </a>
        </p>
      </div>
    );
  }
}
