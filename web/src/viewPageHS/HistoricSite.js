import { Link } from "react-router-dom";
import yycImage from "./yyc-skyline-image.jpg";
import "./HistoricSite.css";


export default function HistoricSite() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
        {/* Name of the Historic sight here */}
     

        {/* Picture and description here */}
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col border text-center">Image</div> */}
                <div className="bg-img border col p-0 m-2">
                    <img src={yycImage} alt="skyline" className="img-fluid w-100 h-100"/>
                </div>
                <div className="col border text-middle m-2">
                    <h2 className="mb-4 mt-4 align-middle">Historic site name</h2>
                    <h4>Description</h4>
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
                <div className=" rounded-3 border border-2 mh-3 h-20">
                   
                     {/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle"alt="Avatar" />  */}
                    <p className="text-end border p-1 m-0 h-100">February 17, 2024</p>
                    <div className="d-flex align-items-center p-0 m-0 h-100">
                        <span className="h-100 w-20 border border-5 ">
                            {/* <img src={yycImage} alt="pfp" className="rounded-circle pfp"/> */}
                            {/* <img src={yycImage} alt="pfp" class="rounded-circle border w-20 h-20 "/> */}
                        </span>
                            {/* <p> Username: </p> */}
                            {/* <p>Comment this is a coment this is a comentthis is a comentthis is a comentthis is a comentthis is a comentthis is a comentthis is a coment
                            this is a comentthis is a comentthis is a comentthis is a comentthis is a coment
                            </p> */}
                        
                    </div>
                    <p className="text-end border p-1 m-0">add thumbs up thumbs down here</p>

                </div>
                <form class="d-flex flex-row justify-content-center">
                    <input type="text" id="comment" name="commenting" placeholder="Enter your comment" className="rounded-3 w-40 h-20 mt-3 p-3"/> 
                    <button type="submit" className="">Post</button>
                </form>
            </div>
        </div>

    </div>
  );
}
