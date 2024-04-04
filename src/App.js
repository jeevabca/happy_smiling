import React from 'react'
import './App.css'
import Works from './Works';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import { Link, Routes, Route } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
/* import { FaTimes } from "react-icons/fa"; */
import { useState } from 'react';


const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }



  /* var sidenav = document.querySelector(".side_navbar")


function showNavbar() {
  
    
    sidenav.style.left = "0"
  }

 
function closeNavbar() {
  
  sidenav.style.left =  "-60%"
  } */





return(

   

    <div className='App'>
      <nav className='navigation-bar'>
          <h2>Happy - Smiling </h2>  
          
          <ul className='nav-list'>
            <li><Link to = "/" className="router-link">Home</Link></li>
            <li><Link to = "/work" className="router-link">Work</Link></li>
            <li><Link to = "/contact" className="router-link">Contact</Link></li>
          </ul>
          <FaBars className = 'navbar-menu-toggle' role = "button" onClick={toggleSidebar}/>

          {/* <FontAwesomeIcon icon={ faBars } role = "button" className='navbar-menu-toggle' onClick={showNavbar}/> */}

          
      </nav>

      <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
        <p className='right-cross'>
            {/* <FontAwesomeIcon icon={ faTimes } role ='button' className='navbar-menu-cross' onClick={closeNavbar}/> */}
            {/* <FaTimes role='button' className='navbar-menu-cross' onClick={closeNavbar}/> */}
        </p>
        <div className="side-navbar-links">
            <ul className='router-link-2'>
                <li><Link to = "/" className="router-link-1">Home</Link></li>
                <li><Link to = "/work" className="router-link-1">Work</Link></li>
                <li><Link to = "/contact" className="router-link-1">Contact</Link></li>
            </ul>
        </div>
    </div>

      
      


      

    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/work" element = {<Works />} />
      <Route path = "/contact" element = {<Contact />} />
    </Routes> 
    <Footer/>

  

    
      
      
      
    </div>

  );
}

export default App