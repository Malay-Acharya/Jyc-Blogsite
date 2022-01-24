import './App.css';
import Navbar from './Navbar';
import Bloghead from './Bloghead';
import Trendingbox from './Trendingbox';
import Footer from './Footer';
import Blogpost from './Blogpost';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FixedApp = () =>{
    let location = useLocation();
    function onTop(){
        window.scrollTo(0,0);
    }

    useEffect(()=>{
        onTop();
    },[location])

    return(
        <>
      <div className='fixed-app'>
      <Navbar/>
      </div>
      <div className='app'>
      <Bloghead/>
      <Trendingbox/>
      <Blogpost/>
      <Footer/>
      </div>
      </>
    );
}

export default FixedApp;