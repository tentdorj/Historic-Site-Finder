import { Link } from "react-router-dom";
import yycImage from "./yyc-skyline-image.jpg";

export default function HistoricSite() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
        {/* Name of the Historic sight here */}
        <h2 className="mb-4 mt-4">Historic site name</h2>

        {/* Picture and description here */}
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col border text-center">Image</div> */}
                <div className="bg-img border col p-0">
                    <img src={yycImage} alt="skyline" className="img-fluid w-100 h-100"/>
                </div>
                <div className="col border text-center ">
                    <h3>Description</h3>
                    <p>
                        random long pararandom long pararandom long pararandom long pararandom long pararandom long pararandom long pararandom long pararandom long pararandom long para
                        random long pararandom long pararandom long pararandom long pararandom long pararandom long pararandom long para
                        random long pararandom long pararandom long pararandom long pararandom long pararandom long pararandom long para
                        random long pararandom long pararandom long pararandom long pararandom long pararandom long para
                        random long pararandom long pararandom long pararandom long para
                    </p>
                </div>
            </div>
        </div>

        {/* average thumbs up thumbs down */}
       
        {/* comments */}
        <div className="row d-flex w-100 h-auto justify-content-center mt-4 ">
            <div className="col-8 border border-4 rounded-3">
                <h3 class="border-bottom pt-3">Comments</h3>
                <p id="no-comments" className="d-none">There are currently no comments...</p>
                {/* actual comment */}
                <div className=" rounded-3 border border-2 mh-3">
                     {/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle"alt="Avatar" />  */}
                    <p className="text-end">February 17, 2024</p>
                    <div className="d-flex p-0 m-0">
                        <p>profile pic</p>
                        <p> Username: </p>
                        <p>Comment</p>
                    </div>
                    <p className="text-end">add thumbs up thumbs down here</p>

                </div>
                <form className="d-inline-flex">
                    <input type="text" id="comment" name="commenting" placeholder="Enter your comment" className="rounded-3 h-20 mt-3 p-3"/> 
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>

    </div>
  );
}
