import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./homepage/Landing";
import NavBar from "./homepage/NavBar";
import Login from "./loginSignUp/Login";
import Signup from "./loginSignUp/Signup";
import HistoricSite from "./viewPageHS/HistoricSite";
import Dash from "./dashboard/Dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { useContext, useEffect } from "react";
import { AuthProvider } from "./authContext";
import Spinner from "./Spinner";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<ProtectedRoute />}>
          <Route path="/user/dash" element={<Dash />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
