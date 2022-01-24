import { useEffect, useState } from "react";
import "./Create.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

const Create = () =>{
    const tkn = localStorage.getItem("token") || 0;
    const { decodedToken} = useJwt(tkn);
    const[error, setError] = useState("normal");
    const navigate = useNavigate("")
    async function submitdata(){
        try{
            const name = decodedToken.name;
            const email = decodedToken.email;
            const res = await fetch('http://localhost:1337/api/submit', {
                method:'POST',
                headers:{
                    'Content-Type':"application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    label,
                    head,
                    cat,
                    content,
                    main,
                    image,
                }),
            })
            const data = await res.json();
            setError(data.status)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        if(error !== "normal"){
        alert(error);
        }
        if(error === "Article submitted successfully"){
            navigate("/")
        }
    }, [error,navigate])
    
    
    useEffect(()=>{
        if(tkn === 0){
            navigate("/Login")
        }
    },[tkn,navigate])
    const[label,setLabel] = useState("");
    const[head,setHead] = useState("");
    const[cat,setCat] = useState("");
    const[content, setContent] = useState("");
    const[main, setMain] = useState("");
    const[image,setImage] = useState("");
    return(
        <>
            <Navbar/>
            <form className="create-form"
                onSubmit={(e)=>{
                e.preventDefault();
                submitdata();
            }}>
                <label htmlFor="label">
                    Enter the label for the post
                    <input
                        id="label"
                        onChange={(e) => setLabel(e.target.value)}
                        value={label}
                        placeholder="label"
                        className="input-field"
                    />
                </label>
                <label htmlFor="head">
                    Enter the heading for the post
                    <input
                        id="head"
                        onChange={(e) => setHead(e.target.value)}
                        value={head}
                        placeholder="Heading"
                        className="input-field"
                    />
                </label>
                <label htmlFor="category">
                    Enter the category for the post
                    <input
                        id="category"
                        onChange={(e) => setCat(e.target.value)}
                        value={cat}
                        placeholder="Category"
                        className="input-field"
                    />
                </label>
                <label htmlFor="image">
                    Paste link to an image for your article
                    <input
                        id="image"
                        onChange={(e)=> setImage(e.target.value)}
                        value={image}
                        placeholder="Category"
                        className="input-field"
                    />
                </label>
                <label htmlFor="content">
                    Write a brief introduction for your article
                    <textarea
                        id="content"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        placeholder="Summary"
                        className="input-field input-field-content"
                    />
                </label>
                <label htmlFor="main">
                    Write down your article
                    <textarea
                        id="main"
                        onChange={(e) => setMain(e.target.value)}
                        value={main}
                        placeholder="Article"
                        className="input-field input-field-main"
                    />
                </label>
                <button className="login-btn">Submit Article</button>
            </form>
            <Footer/>
        </>
    );
}

export default Create;