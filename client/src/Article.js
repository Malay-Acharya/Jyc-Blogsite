import Navbar from "./Navbar";
import Footer from "./Footer";
import { articledata } from "./articledata";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./Article.css";

const Article = () =>{
    const Params = useParams();
    const [found, setFound] = useState({})
    useEffect(()=>{
        
        async function getidData(){
            var url = new URL("https://blogittt.herokuapp.com/api/finddata/Userid=" + Params.id)
            const res = await fetch(url)
            const df = await res.json();
            var frame = df.data[0]
            setFound(frame)
        }
        if(Params.id.length > 4){
        getidData();
        }
    },[Params])
    
    
    const dt = articledata.filter((obj) =>obj.index === Params.id);
    let location = useLocation();   

    const onTop = () => {
        window.scrollTo(0,0);
    }

    useEffect(()=>{
        onTop();
    },[location])

    if(dt.length !== 0){
    return(
        <>  
        <Navbar/>
        <article className="main-article">
            <h3 className="article-h3">{dt[0].label}</h3>
            <h1 className="article-h1">{dt[0].head}</h1>
            <h3 className="article-h3">{dt[0].content}</h3>
            <h3 className="article-h3">By {dt[0].author}</h3>
            <h3 className="article-h3">{dt[0].date}</h3>
            <img src={require("./" +dt[0].image)} alt="content" className="article-img"></img>
            <h2 className="article-h2">{dt[0].main}</h2>
        </article>
        <Footer/>
        </>
    );
    }
    else if(found){
return(
        <>  
        <Navbar/>
        <article className="main-article">
            <h3 className="article-h3">{found.label}</h3>
            <h1 className="article-h1">{found.head}</h1>
            <h3 className="article-h3">{found.content}</h3>
            <h3 className="article-h3">By {found.name}</h3>
            <img src={found.image} alt="content" className="article-img"></img>
            <h2 className="article-h2">{found.main}</h2>
        </article>
        <Footer/>
        </>
    );
    }
    else{
        return(
            <h1>Redirecting</h1>
        );
    }
}

export default Article;