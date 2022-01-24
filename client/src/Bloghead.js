import TextButton from "./TextButton";
import { blogdata } from "./blogdata";
import "./Bloghead.css"

const Bloghead = () =>{
    return(
        <div className="container">
            {blogdata.map((item)=>{
                return(
                    <div className={item.cname} key={item.index}>
                    
                        <img src={require("./"+item.image)} alt="blog-img"/>
                        <TextButton label={item.label} head={item.head} content={item.content} index={item.index}/>
                    
                    </div>
                );
            })}
        </div>
    );
}

export default Bloghead;