import auth0 from "auth0-js";
import config from "./auth_config.json";

const webAuth = new auth0.WebAuth({
  domain: config.domain,
  clientID: config.clientId,
  redirectUri: "httpxs://localhost:3000/#/auth0_callback",
  scope: "openid profile email",
  responseType: "token id_token",
  audience: "https://dev-cqdvvn-y.eu.auth0.com/api/v2/",
});

export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      // resolve();
      webAuth.client.login(
        { username, password, realm: "Username-Password-Authentication" },
        (err, authResult) => {
          if (!authResult || !authResult.idToken || err) {
            return reject(err);
          }
          if (authResult) {
            localStorage.setItem("idToken", authResult.idToken);
            localStorage.setItem(
              "expiresAt",
              new Date(new Date().getTime() + authResult.expiresIn * 1000)
            );
            return resolve(authResult);
          }
        }
      );
    });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresAt");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status) {
      Promise.reject();
    }
    Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const isValid =
      new Date().getTime() <
      new Date(localStorage.getItem("expiresAt")).getTime();
    const idToken = localStorage.getItem("idToken");
    return idToken && isValid ? Promise.resolve() : Promise.reject();
    // return new Promise((resolve, reject) => {
    //   webAuth.checkSession({}, (err, authResult) => {
    //     if (err) reject(err);
    //     resolve(authResult);
    //   });
    // });
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
};
