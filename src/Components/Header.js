import React, { useState } from 'react';
import { Link ,useLocation, useHistory } from 'react-router-dom';
import '../css/header.css';

import logo from '../images/logo.PNG'


export default function Header({ isHamburgerOpen, toggleState }) { 

  const [isPageSelected, setIsPageSelected] = useState([true, false]);

  let location = useLocation();
  React.useEffect(() => {
        id();
  }, [location]);
  
  const id = () => {
    if (/portfolio$/.test(location.pathname)) {
      setIsPageSelected([true, false])
    }
    else if (/contact$/.test(location.pathname)) {
      setIsPageSelected([false, true])
    }
  };

	return ( 
		<header class="background"> 
			<nav class="navbar"> 
          <Link to='/portfolio'><img className="App-logo" src= {logo} alt='logo'/></Link>
          
          <div className='hamburger' onClick={toggleState(!isHamburgerOpen)}> 
            <div className={`burger ${isHamburgerOpen ? "burger1" : ""}`}/>
            <div className={`burger ${isHamburgerOpen ? "burger2" : ""}`}/>
            <div className={`burger ${isHamburgerOpen ? "burger3" : ""}`}/>
		      </div> 

          <div className="right-nav">
            <ul class="nav-list"> 
            <Link to='/portfolio'><li><button className={`link ${isPageSelected[0] ? "selected" : ""}`}>PORTFOLIO</button></li></Link>
            <li><p>/</p></li>
            <Link to='/contact'><li><button className={`link ${isPageSelected[1] ? "selected" : ""}`}>CONTACT</button></li></Link>
            </ul> 
            <p className="title">developer / designer</p>
          </div> 
			</nav> 
		</header> 
	) 
} 