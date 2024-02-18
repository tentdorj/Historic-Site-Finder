import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./homepage/Landing";
import NavBar from "./homepage/NavBar";
import Login from "./loginSignUp/Login";
import Signup from "./loginSignUp/Signup";
import HistoricSite from "./viewPageHS/HistoricSite";
import Dash from "./dashboard/Dash";
import { BrowserRouter, Route } from "react-router-dom";
import NotFound from "./NotFound";
import { useContext, useEffect } from "react";
import { AuthProvider } from "./authContext";
import Spinner from "./Spinner";
import { ProtectedRoute } from "./ProtectedRoute";
import Routes from "./customRoutes";
function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
