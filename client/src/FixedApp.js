import './App.css';
import Navbar from './Navbar';
import Bloghead from './Bloghead';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Clubcard from './Clubcard';

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
      <Footer/>
      
      </div>
      </>
    );
}

export default FixedApp;