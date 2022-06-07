import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () =>{
    const navigate = useNavigate();
    const[email, setemail] = useState("");
    const[password, setpassword] = useState("");
    const[error, setError] = useState("");

    async function loginuser(){
        try{
            const response = await fetch('https://jyc-app.herokuapp.com/api/login', {
                method:'POST',
                headers:{
                    'Content-Type':"application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()
            if(data.status === "ok"){
                localStorage.setItem("token", data.user)
                navigate("/")
            }else{
                setError(data.status);
            }
            
        }catch(e){
            console.log(e);
        }
    }
    return(
        <>
            <header className="login-header">
                <h2 className="login-head">
                <Link to = "/" style={{color:"#469da4", textDecoration:"none"}}>JYC Blogs</Link>
                </h2>
                <h3 className="login-redirect">
                    Don't have an account? 
                    <Link to = "/signup" style={{color:"#469da4", textDecoration:"none"}}> Sign up</Link>
                </h3>
            </header>
            <div className="login">
                <form className="login-form" onSubmit={(e)=>{
                    e.preventDefault();
                    loginuser();
                }}>
                    <label htmlFor="email">
                        Email
                    <input
                        id="email"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        placeholder="Enter your email id"
                        className="input-field"
                    />
                    </label>
                    <label htmlFor="password">
                    Password
                    <input type="password"
                        id="password"
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                        className="input-field"
                    />
                    </label>
                    <button className="login-btn">Login</button>
                </form>
            </div>
            <div className="error">
                <h3 className="error-text">{error}</h3>
            </div>
        </>
    );
}

export default Login;