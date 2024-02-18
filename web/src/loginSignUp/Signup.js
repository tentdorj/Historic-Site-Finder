import yycImage from "./yyc-skyline-image.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import NavBar from "../homepage/NavBar";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState(null);

    const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
    
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("submit signup form...", username, password, verifyPassword);
        try {
        const response = await api.signup(username, password, verifyPassword);
        if (password !== verifyPassword) {
            return response.status(400).json({ message: "Passwords do not match" });
        }

        setUserData(response.data);
        setError(null);
        } catch (error) {
        setError(error.message);
        setUserData(null);
        }
    };
    return(
        <>
        <NavBar />
     
        <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative bg-img">
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/15/09/calgary-skyline.jpg?quality=75&width=1200&auto=webp" className=" img-fluid position-absolute object-fit-fill w-100 h-100" alt="yyc"/>
        <div className="d-flex flex-row position-absolute">
            <div className="row">
                {/* <div className="bg-img border col p-0">
                    <img src={yycImage} alt="skyline" className="img-fluid w-100 h-100"/>
                </div> */}
                <div className="col border d-flex justify-content-center align-items-center frosted-glass p-5">
                    <div className="p-3">
                        <h2 >Signup</h2>
                        <form onSubmit={handleSignup} className="form-group d-flex flex-column">
                            <label className="mt-2 login-text ">Enter Username:</label>
                            <div class="col-xs-3 pb-4">  
                            <input
                                type="text"
                                id="username-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            ></input>
                                {/* <p className="forgot-text mb-3 ">Forgot Username? <strong><u><a href="" className="font-color">Click Here</a></u></strong></p> */}
                            </div>
                            <label  className="login-text">Enter Password:</label>
                            <div class="col-xs-3 pb-4">  
                            <input
                                type="password"
                                id="password-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            ></input>
                            </div>
                            <label  className="login-text">Verify Password:</label>
                            <div class="col-xs-3 pb-4">  
                            <input
                                type="password"
                                id="verifypassword-input"
                                value={verifyPassword}
                                onChange={(e) => setVerifyPassword(e.target.value)}
                                required
                            ></input>
                            </div>
                            <button type="submit" class="btn btn-submit mw-2 mb-2 mt-3">Submit</button>
                        </form> 
                        
                        <p className="">Have an account? <strong><u><Link to={"/login"} className="font-color">Login</Link></u></strong></p>
                    </div>               
                </div>
            </div>
        </div>
    </div>

    </>
    );
}