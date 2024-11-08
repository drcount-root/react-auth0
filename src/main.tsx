import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-f0v8tbmtdx87dzfl.us.auth0.com"
      clientId="WTj0MajddNOecBKJ78cXHiIE6qzNbLLY"
      authorizationParams={{
        redirect_uri: "/dashboard",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
