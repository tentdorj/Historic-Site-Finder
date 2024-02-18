import MyMap from "./MyMap";

export default function SiteCard({ name, purpose, neighborhood }) {
  return (
    <div className="d-flex min-vh-100 min-vw-100">
      <div className="row text-center w-100">
        <div className="col-4  bg-primary">
          <div className="d-flex justify-content-around bg-success border rounded-pill">
            <span>
              <p>Site Name: {name}</p>
              <p>Site Purpose: {purpose}</p>
            </span>
            <span className="align-self-center">
              Located nearby: {neighborhood}
            </span>
          </div>
          <p>site 2</p>
        </div>
        <div className="col p-0  mx-auto bg-primary">
          <MyMap />
        </div>
      </div>
    </div>
  );
}
