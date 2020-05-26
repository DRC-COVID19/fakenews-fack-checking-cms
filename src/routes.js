import React from "react";
import { Route } from "react-router-dom";
import Auth0CallbackPage from "./pages/Auth0CallbackPage";

export default [
  <Route exact path="/foo" render={() => <div>foo</div>} />,
  <Route exact path="/auth0_callback" render={() => <Auth0CallbackPage />} />,
];
