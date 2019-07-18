import React, { Component } from "react";
import Products from "./components/Products";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}
