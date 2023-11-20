import React, { useState } from 'react';
import { Link ,useLocation, useHistory } from 'react-router-dom';
import '../css/header.css';

import logo from '../images/logo.PNG'


export default function Header() {

  const [isPageSelected, setIsPageSelected] = useState([false, true, false]);

  let location = useLocation();
  React.useEffect(() => {
        id();
  }, [location]);
  
  const id = () => {
    if (/about$/.test(location.pathname)) {
      setIsPageSelected([true, false, false])
    }
    else if (/contact$/.test(location.pathname)) {
      setIsPageSelected([false, false, true])
    }
    else if (/portfolio$/.test(location.pathname)) {
      setIsPageSelected([false, true, false])
    }
  };

	return ( 
		<div> 
      {/* <p>{location.pathname}</p>
      <p>{pageId}</p> */}
			<nav class="navbar background"> 
          <img className="App-logo" src= {logo} alt='logo'/> 
           <div className="right-nav">
            <ul class="nav-list"> 
            <Link to='/about'><li><button className={`link ${isPageSelected[0] ? "selected" : ""}`}>ABOUT</button></li></Link>
            <li><p>/</p></li>
            <Link to='/portfolio'><li><button className={`link ${isPageSelected[1] ? "selected" : ""}`}>PORTFOLIO</button></li></Link>
            <li><p>/</p></li>
            <Link to='/contact'><li><button className={`link ${isPageSelected[2] ? "selected" : ""}`}>CONTACT</button></li></Link>
            </ul> 
            <p className="title">developer / designer</p>
          </div> 
			</nav> 
		</div> 
	) 
} 
