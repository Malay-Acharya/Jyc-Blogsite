import { useState } from 'react';
import './Navbar.css';
import { navitems } from './Nav-items';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const auth = localStorage.getItem("token") || 0;

    const [click,setClick] = useState(0);

    const hoveropen = () =>{
        setClick(1);
        document.querySelector("nav").classList.add("hover-down-nav");
        document.querySelector(".right-nav").classList.add("hover-down-ul");
        var ele = document.querySelectorAll(".nav-categories")
        for (var i =0;i<ele.length;i++){
            ele[i].classList.add("hover-down-categories");
        }
        document.querySelector(".nav-hide-bar-1").classList.add("hover-nav-white");
        document.querySelector(".nav-hide-bar-2").classList.add("hover-nav-white");
        document.querySelector(".nav-hide-icon").classList.add("hover-social-icons");
        document.querySelector(".left-nav").classList.add("hover-nav-left");
    }

    const hoverclose = () =>{
        setClick(0);
        document.querySelector("nav").classList.remove("hover-down-nav");
        document.querySelector(".right-nav").classList.remove("hover-down-ul");
        var ele = document.querySelectorAll(".nav-categories")
        for (var i =0;i<ele.length;i++){
            ele[i].classList.remove("hover-down-categories");
        }
        document.querySelector(".nav-hide-bar-1").classList.remove("hover-nav-white");
        document.querySelector(".nav-hide-bar-2").classList.remove("hover-nav-white");
        document.querySelector(".nav-hide-icon").classList.remove("hover-social-icons");
        document.querySelector(".left-nav").classList.remove("hover-nav-left");
    }
    return(
        
        <nav >
            <ul className="left-nav ">
                <li>{click===0?<i className="fas fa-bars" onClick={hoveropen} ></i>:<i className="fas fa-times" onClick={hoverclose} ></i>}</li>
                <Link to={`/`} style={{ textDecoration: 'none' ,color: "black"}}>
                <li className='nav-head'>BlogIT</li>
                </Link>
            </ul>
            <ul className="right-nav">
                {navitems.map((item) =>{
                    if (item.name === "Login" && auth !== 0){
                        item.name = "Logout"
                    }
                    else if(item.name === "Logout" && auth === 0){
                        item.name = "Login"
                    }
                    return(
                        <Link to={`/`+item.name} style={{ textDecoration: 'none' ,color: "black"}} key = {item.index} >
                        <li className='nav-categories'>{item.name}</li>
                        </Link>
                    )
                })}
                <li className='nav-hide-bar-1'></li>
                <ul className='nav-hide-icon'>
                    <a className ="socials" href = "https://www.facebook.com/" target="_blank" rel='noreferrer'><li><i className="fab fa-facebook-f"></i></li></a>
                    <a className ="socials" href = "https://www.instagram.com/" target="_blank" rel='noreferrer'><li><i className="fab fa-instagram"></i></li></a>
                    <a className ="socials" href = "https://www.twitter.com/" target="_blank" rel='noreferrer'><li><i className="fab fa-twitter"></i></li></a>
                </ul>
                <li className='nav-hide-bar-2'></li>
            </ul>
            <ul className='search-nav'>
                <li><i className="fas fa-search"></i></li>
            </ul>
        </nav>
    );
}

export default Navbar;