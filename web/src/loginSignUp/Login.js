import yycImage from "./yyc-skyline-image.jpg";
import "./Login.css";
import { Link, Navigate, useNavigate, redirect } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import { useAuth } from "../authContext";
import NavBar from "../homepage/NavBar";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log("submit login form...", email, password);
      try {
        await api.login(email, password);
      setError(null);
      navigate("/user/dash", { replace: true });
    } catch (error) {
      setError(error.message);
      auth.setUser(null);
      }
    };
    return(
     
        <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative bg-img">
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/15/09/calgary-skyline.jpg?quality=75&width=1200&auto=webp" className=" img-fluid position-absolute object-fit-fill w-100 h-100" alt="yyc"/>
        <div className="d-flex flex-row position-absolute">
            <div className="row">
                {/* <div className="bg-img border col p-0">
                    <img src={yycImage} alt="skyline" className="img-fluid w-100 h-100"/>
                </div> */}
                <div className="col border d-flex justify-content-center align-items-center frosted-glass p-5">
                    <div className="p-3">
                        <h2 className="">Login</h2>
                        <form
                            onSubmit={handleLogin}
                            className="form-group d-flex flex-column"
                            >
                            <label className="mt-2 login-text ">Username:</label>
                            <div class="col-xs-3">  
                            <input
                                type="text"
                                id="username-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                ></input>
                                <p className="forgot-text mb-3 ">Forgot Username? <strong><u><a href="" className="font-color">Click Here</a></u></strong></p>
                            </div>
                            <label  className="login-text">Password:</label>
                            <div class="col-xs-3">  
                                <input
                                type="password"
                                id="password-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                ></input>
                                <p className="forgot-text">Forgot Password? <strong><u><a href="" className="font-color">Click Here</a></u></strong></p>
                            </div>
                            <button type="submit" class="btn btn-submit mw-2 mb-2 mt-3">Submit</button>
                        </form> 
                            {error && <p className="text-danger">{error}</p>}
                            <p  className="">Dont have an account? <strong><u><Link to={"/signup"} className="font-color">Sign Up</Link></u></strong></p>
                  
                    </div>              
                    
                </div>
            </div>
        </div>
    </div>
  );
}
