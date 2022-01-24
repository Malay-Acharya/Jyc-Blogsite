import "./trendingview.css";
import { Link } from "react-router-dom";

const Trendingview = ({category,data,author,image,index}) =>{
    return(
    <div className="trendingview">
        <div className = "trendingbox-img">
            <img alt = "trending-img" src = {require('./' + image)}/>
        </div>
        <div className="text-content">
            <Link to={`/article/${index}`} style={{ textDecoration: 'none' ,color: "black"}}>
            <h3 className="heading-category">{category}</h3>
            <h2 className="heading-data">{data}</h2>
            <h3 className="heading-author">By {author}</h3>
            </Link>
        </div>
    </div> 
    );
}

export default Trendingview;