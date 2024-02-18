import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-between bg-secondary">
      <Link to="/">
        <h1>Historic Sites</h1>
      </Link>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
    </nav>
  );
}
