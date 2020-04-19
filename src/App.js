import React from "react";
import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";

const dataProvider = jsonServerProvider("http://localhost:5000/api");
const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource name="news" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);
export default App;
