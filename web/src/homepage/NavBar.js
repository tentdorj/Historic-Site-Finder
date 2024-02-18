import { Link } from "react-router-dom";
import { useAuth } from "../authContext";

export default function NavBar() {
  // const { user } = useAuth();

  return (
    <nav className="d-flex justify-content-between navbar-background navbar-border">
      <Link to="/" className="m-2 underline-color">
        <h1>Historic Sites</h1>
      </Link>
      {true ? (
        <Link to="/" className="m-2 underline-color">
          Logout
        </Link>
      ) : (
        <Link to="/login" className="m-2 underline-color">
          Login
        </Link>
      )}
    </nav>
  );
}
