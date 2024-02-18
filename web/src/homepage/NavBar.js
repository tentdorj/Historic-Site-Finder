import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../utils/protectRoutes";
import maple from "./maple.png";

export default function NavBar() {
  const navigate = useNavigate();

  const auth = isAuth();
  const logoutUser = () => {
    // myToken = null;
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <nav className="d-flex justify-content-between navbar-background navbar-border">
      <Link to="/" className="m-2 underline-color">
        <h1>Historic Sites</h1>
      </Link>
      {auth ? (
        <Link onClick={logoutUser} to="/" className="m-2 underline-color">
          Logout
        </Link>
      ) : (
      <Link to="/login" className="m-2 underline-color">
        <h1>Login</h1>
      </Link>
       )}
    </nav>
  );
}
