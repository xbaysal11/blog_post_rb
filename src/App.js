import React, { Component } from "react";
import { Header, Footer } from "./components";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
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
