import "./TextButton.css";
import { useEffect } from "react";
import Button from "./Button"
import { Link } from "react-router-dom";

const TextButton = ({label,head,content,index,flag}) =>{
    useEffect(() => {     
        if(index === "1-1"|| (index[0]===2)){
            var ele = document.querySelector(".heading-text-" +index);
            ele.classList.add("big-text")          
        }
    },[index]
    
    )
    return(
        
        <div className="text-button">
        <Link to={`/article/${index}`} style={{ textDecoration: 'none' ,color: "black"}}>
        <Button name={label}/>
        <h1 className={"heading-text-" + index}>{head}</h1>
        <h3 className="intro-text">{content}</h3>
        </Link>
        </div>   
    );
}

export default TextButton;