import MyMap from "./MyMap";
import SiteCard from "./SiteCard";

export default function Dash() {
  return (
    <div className="d-flex min-vh-100 min-vw-100">
      <div className="row text-center w-100">
        <div className="col-4  bg-primary">
          <SiteCard name={"name"} purpose={"purpose"} neighborhood={"area"} />
          <p>site 2</p>
        </div>
        <div className="col p-0  mx-auto bg-primary">
          <MyMap />
        </div>
      </div>
    </div>
  );
}
