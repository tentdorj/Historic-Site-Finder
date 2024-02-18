import yycImage from "./yyc-skyline-image.jpg";
import "./Login.css";

export default function Landing() {
    return(
     
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative border-4 bg-img border">
        <img src={yycImage} alt="skyline" className=" img-fluid position-absolute object-fit-fill w-100 img-blur"/>
        {/* <div className="d-flex justify-content-center align-items-center flex-row w-75 position-absolute">  */}
        <div className="d-flex flex-row position-absolute">
            <div className="row">
                <div className="bg-img border col p-0">
                    <img src={yycImage} alt="skyline" className="img-fluid w-100 h-100"/>
                </div>
                <div className="col border d-flex justify-content-center align-items-center bg-white">
                    <div className="p-3">
                        <h2 >Signup</h2>
                        <div className="form-group d-flex flex-column">
                            <label className="mt-2 login-text ">Enter Username:</label>
                            <div class="col-xs-3 pb-4">  
                                <input type="text"></input>
                                {/* <p className="forgot-text mb-3 ">Forgot Username? <strong><u><a href="" className="font-color">Click Here</a></u></strong></p> */}
                            </div>
                            <label  className="login-text">Enter Password:</label>
                            <div class="col-xs-3 pb-4">  
                                <input type="password"></input>
                                {/* <p className="forgot-text">Forgot Password? <strong><u><a href="" className="font-color">Click Here</a></u></strong></p> */}
                            </div>
                            <label  className="login-text">Verify Password:</label>
                            <div class="col-xs-3 pb-4">  
                                <input type="password"></input>
                                {/* <p className="forgot-text">Forgot Password? <strong><u><a href="" className="font-color">Click Here</a></u></strong></p> */}
                            </div>
                        </div> 
                        {/* <div className="text-center"> */}
                            <button type="submit" class="btn btn-submit mw-2 mb-2 mt-3">Submit</button>
                            <p  className="">Have have an account? <strong><u><a href="" className="font-color">Login</a></u></strong></p>
                        {/* </div> */}
                    </div>              
                    
                </div>
            </div>
        </div>
    </div>
    );
}