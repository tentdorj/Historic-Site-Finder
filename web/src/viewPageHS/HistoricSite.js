import { Link } from "react-router-dom";
import yycImage from "./yyc-skyline-image.jpg";
import "./HistoricSite.css";


export default function HistoricSite() {
  return (
    <div class="container-fluid page-background py-2">
        {/* Name of the Historic sight here */}
     

        {/* Picture and description here */}
            <div className="row mx-2">
                <div className="col text-center rounded-4 mt-4">
                    <img src="https://i.pinimg.com/originals/24/18/1c/24181ceead531f4429dd988940b4f69a.jpg" alt="skyline" id="site-img" className="site-image img-fluid rounded-4"/>
                </div>
                <div className="col text-middlerounded-4 bg-white mt-4 rounded-4">
                    <h2 className="mt-4 align-middle">Historic site name <span className="badge badge-secondary bg-dark w-2">Topic</span></h2>
                    
                    <h4>Description</h4>
                    <p id="site-description">
                        Description here
                    </p>
                </div>
            </div>

        {/* average thumbs up thumbs down */}
       
        {/* comments */}
        <div className="row d-flex justify-content-center my-4 align-items-center mx-2">
            <div className="col-12 border border-2 rounded-3 bg-white shadow">
                <h3 class="border-bottom pt-3">Comments</h3>
                <p id="no-comments" className="d-none">There are currently no comments...</p>
                {/* actual comment */}
                <div className="row rounded-3 border border-2 mh-3 h-20">
                    <p className="text-end p-1 m-0 ">February 17, 2024</p>
                    <div className="d-flex align-items-center position-relative">
                            <img src={yycImage} alt="pfp" className="rounded-circle pfp"/>                         
                            <p className="m-1"> Username: </p>
                    </div>
                    <div className="mt-1 ms-2 align-items-center">
                        Comment
                    </div>    
                    <p className="text-end p-1 m-0">add thumbs up thumbs down here</p>
                </div>
                {/* comment input field and post button */}
                <div class="input-group mb-3 mt-4">
                    <input type="text" class="form-control border-dark" placeholder="Type your comment here" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-dark" type="button">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}
