import MyMap from "./MyMap";
import { Link } from "react-router-dom";
import "./SiteCard.css";

export default function SiteCard({ id, name, purpose, neighborhood }) {
  return (
    <Link
      to="/site/:id"
      style={{ textDecoration: "none" }}
      className="d-flex min-vw-100 py-2"
    >
      <div className="row text-center  bg-white text-white w-100">
        <div className="col-4 outer-container">
          <div className="d-flex justify-content flex-column card-background rounded-3">
            <span>
              <p>Site Name: {name}</p>
              <p>Site Purpose: {purpose}</p>
            </span>
            <span className=" align-self-center">
              Located nearby: {neighborhood}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
