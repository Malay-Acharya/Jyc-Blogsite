import { useNavigate } from "react-router-dom";
import "./Logout.css"

import Navbar from "./Navbar"

const Logout = () =>{
    const navigate = useNavigate();

    function log(){
        localStorage.clear();
        navigate("/")
        
    }
    return(
    <>
        <Navbar/>
        <div className="logout-div">
        <h3 className = "login-h3">Do you want to Logout?</h3>
        <button className="login-btn" onClick={log} onBlur={log}>Yes</button>
        </div>
    </>
    );
}

export default Logout;