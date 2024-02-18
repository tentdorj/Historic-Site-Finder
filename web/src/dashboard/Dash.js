import MyMap from "./MyMap";

export default function Dash() {
  return (
    <div className="d-flex min-vh-100 ">
      <div className="row text-center w-100">
        <div className="col-4  bg-primary">
          <p>site 1</p>
          <p>site 2</p>
        </div>
        <div className="col bg-secndary">
          <MyMap />
        </div>
      </div>
    </div>
  );
}
