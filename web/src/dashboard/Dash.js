import NavBar from "../homepage/NavBar";
import MyMap from "./MyMap";
import SiteCard from "./SiteCard";

export default function Dash() {
  return (
    <>
      <NavBar />{" "}
      <div className="d-flex min-vh-100 min-vw-100">
        <div className="row text-center w-100">
          <div className="col-4  bg-primary">
            <SiteCard name={"name"} purpose={"purpose"} neighborhood={"area"} />
          </div>
          <div className="col p-0  mx-auto bg-primary">
            <MyMap />
          </div>
        </div>
      </div>
    </>
  );
}
