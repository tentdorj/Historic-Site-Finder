import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-between navbar-background navbar-border">
      <Link to="/" className="m-2 underline-color">
        <h1>Historic Sites</h1>
      </Link>
      <Link to="/login" className="m-2 underline-color">
        <h1>Login</h1>
      </Link>
    </nav>
  );
}
