import "./blogpost.css";
import TextButton from "./TextButton";
import { useEffect } from "react";
import { useState } from "react";

const Blogpost=({clb})=>{
    const [posts, setPosts] = useState("")
    useEffect(()=>{
        getdata();
    },[])
    async function getdata(){
        const res = await fetch('https://jyc-app.herokuapp.com/api/getdata');
        const data = await res.json();  
        setPosts(data.data)
        
    }
    if(posts.length > 0){
    return(
        <div className="blogposts">
            {posts.map((item)=>{
                if(item.club == clb){
                    return(
                        <div className="blog-post" key={item._id}>                   
                            <img src={item.image} alt="blog-img"/>
                            <TextButton label={item.label} head={item.head} content={item.content} index={item._id} flag="yes"/>                   
                        </div>
                        );
                }
                
            })}
        </div>
    );
        }
        else{
            return(
                <h1>compononents still loading</h1>
            )
        }
}

export default Blogpost;