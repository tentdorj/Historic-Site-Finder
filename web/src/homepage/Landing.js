import yyc from "./yyc.jpg";
import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <div className=" bg-primary">
        <div className="overlay">
          <img src={yyc} className="img-fluid w-100" alt="calgary" />
          <div className="overlay-text">
            <h2>Explore Calgary's Historic Landmarks</h2>
            <button type="button" className="btn btn-success">
              See History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
