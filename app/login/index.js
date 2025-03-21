// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../components/app";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_BktrR8B1L",
  client_id: "7n47e85nrdqahvqhoq9d4ttd9j",
  redirect_uri: "https://your-app.vercel.app",
  response_type: "code",
  scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);