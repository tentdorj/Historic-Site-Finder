import yycImage from "./yyc-skyline-image.jpg";
import "./Login.css";

export default function Landing() {
    return(
     
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative border-4 bg-img border">
        <img src={yycImage} alt="skyline" className=" img-fluid position-absolute object-fit-fill w-100 img-blur"/>
        <div className="d-flex justify-content-center align-items-center flex-row w-75 position-absolute"> 
        
            {/* <div className="border w-30 h-50"> 
                <img src={yycImage} alt="skyline" className="object-fit-contain"/>
            </div> */}
            {/* <div className="has-bg-img border w-30 h-30">
                <img src={yycImage} alt="skyline" className="object-fit-contain"/>
            </div> */}
            <span className="border p-4 w-30 h-30 d-flex justify-content-center flex-column bg-info-subtle">
                <h2 className="text-center">Login</h2>
                <div className="form-group d-flex flex-column">
                    <label className="mt-2">Username:</label>
                    <input type="text" className="mb-3"></input>
                    <label>Password:</label>
                    <input type="password"></input>
                </div>               
                <div className="text-center">
                    <button type="submit" class="btn btn-primary bg-black mt-4 mw-2 mb-2">Submit</button>
                    <p>Dont have an account? <strong><u><a href="">Sign Up</a></u></strong></p>
                </div>
            </span>
        </div>
    </div>
    );
}