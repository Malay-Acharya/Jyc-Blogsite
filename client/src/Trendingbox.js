import Trendingview from "./Trendingview";
import { trendingdata } from "./trendingdata"
import "./trendingbox.css"

const Trendingbox = () =>{
    return(
        <div className="trending">
            <h2 className="heading">Trending Stories</h2>
            <div className="white-bar"></div>
        <div className="trendingbox">
            {trendingdata.map((item)=>{
                return(
                    <div key = {item.index}>
                        <Trendingview category = {item.category} data = {item.head} author = {item.author} image={item.image} index={item.index}/>
                    </div>
                );
            })}
        </div>
        </div>
    );
}

export default Trendingbox;