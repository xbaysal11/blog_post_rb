import React from "react";

import { Route } from "react-router-dom";

import { Login, Products } from "./components";

const routes = () => (
  <>
    <Route exact path="/" component={Products} />
    <Route path="/login" component={Login} />
  </>
);
export default routes;
