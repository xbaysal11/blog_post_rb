import React, { Component } from "react";
import { Products, Header, Footer } from "./components";
import Routes from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    );
  }
}
