import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev--02rxkxd.us.auth0.com"
    clientId="J4zNwWFqgxDgt0YLQ9W0GXoJDdS3STNw"
    redirectUri={"http://localhost:3000/profile"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);