import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || "/dashboard"); // window.location.pathname
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

export default function App() {
  return (
    <Router>
      <Auth0ProviderWithRedirectCallback
        domain="dev-f0v8tbmtdx87dzfl.us.auth0.com"
        clientId="WTj0MajddNOecBKJ78cXHiIE6qzNbLLY"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </Auth0ProviderWithRedirectCallback>
    </Router>
  );
}
