import { Link } from "react-router-dom";
import maple from "./maple.png";

export default function NavBar() {
  return (
    <nav className="d-flex navbar shadow-large px-4 py-2  border-bottom border-4 border-secondary" bg="light" data-bs-theme="light">
      <div class="h-10 w-50 d-flex flex-row align-items-center ">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/White_maple_leaf_symbol.png" alt="maple leaf" className="img-fluid img-responsive img-resize"/> */}
        <img src={maple} alt="maple leaf" className="img-fluid img-responsive img-resize"/>
        
        <Link  to="/" className="ml-3 m-2 nav-site-name">
          <h2>Historic Sites</h2>
        </Link>
      </div>
      <div className="w-50 justify-content-end d-flex flex-row align-items-center">
          <Link to="/login" className="m-2">
            <button className=" btn ls-btn p-2">Login</button>
          </Link>
          <Link to="/signup" className="m-2">
            <button className="btn ls-btn p-2">Signup</button>
          </Link>
      </div>

    </nav>
  );
}
