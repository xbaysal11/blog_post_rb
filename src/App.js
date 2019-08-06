import React, { Component } from "react";
import { Header, Footer, AddProduct } from "./components";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <AddProduct />
        <Routes />
        <Footer />
      </Router>
    );
  }
}
