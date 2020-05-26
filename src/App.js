import React from "react";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import "./App.css";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import news from "./news";
import factchecks from "./factchecks";
import frenchMessages from "./i18n/fr";
import customRoutes from "./routes";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "en") {
    return import("./i18n/en").then((messages) => messages.default);
  }
  // Always fallback on french
  return frenchMessages;
}, "fr");

const dataProvider = jsonServerProvider("http://localhost:5000/api");

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    i18nProvider={i18nProvider}
    customRoutes={customRoutes}
  >
    <Resource name="news" {...news} />
    <Resource name="checks" {...factchecks} />
    <Resource name="users" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);
export default App;
