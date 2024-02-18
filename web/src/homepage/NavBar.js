import { Link } from "react-router-dom";
import maple from "./maple.png";

export default function NavBar() {
  return (
    <nav className="d-flex navbar-background navbar-border">
      <div class="h-10 w-50 d-flex flex-row align-items-center ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/White_maple_leaf_symbol.png" alt="maple leaf" className="img-fluid img-responsive img-resize"/>
        <Link  to="/" className="m-2 underline-color">
          <h1 className="font-nav-color">Historic Sites</h1>
        </Link>
      </div>
      <div className="w-50 justify-content-end d-flex flex-row align-items-center">
          <Link to="/login" className="m-2 underline-color">
            <button className=" btn ls-btn p-2">Login</button>
          </Link>
          <Link to="/signup" className="m-2 underline-color">
            <button className="btn ls-btn p-2">Signup</button>
          </Link>
      </div>

    </nav>
  );
}
