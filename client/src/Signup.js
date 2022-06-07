import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () =>{
    const navigate = useNavigate();
    const[name, setname] = useState("")
    const[email, setemail] = useState("");
    const[password, setpassword] = useState("");
    const[error, setError] = useState("");

     
    async function registerUser(){
        try{
            const response = await fetch('https://jyc-app.herokuapp.com/api/register', {
                method:'POST',
                headers:{
                    'Content-Type':"application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })

            const data = await response.json()
            if(data.status === "ok"){
                navigate("/login")   
            }
            else{
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
                <Link to = "/" style={{color:"#469da4", textDecoration:"none"}}>BlogIt</Link>
                </h2>
                <h3 className="login-redirect">
                    Already have an account?
                    <Link to = "/login" style={{color:"#469da4", textDecoration:"none"}}> Log in</Link>
                </h3>
            </header>
            <div className="signup">
                <form className="signup-form" onSubmit={(e)=>{
                    e.preventDefault();
                    registerUser();
                }}>
                    <label htmlFor="name">
                        Name
                    <input
                        id="name"
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                        placeholder="Enter your name"
                        className="input-field"
                    />
                    </label>
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
                    <button className="login-btn">Sign Up</button>
                </form>
            </div>
            <div className="error">
            <h3 className="error-text">{error}</h3>
            </div>
        </>
    );
}

export default Signup;