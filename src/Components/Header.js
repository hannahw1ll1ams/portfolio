import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

import logo from '../images/logo.PNG'

export default function Header() {

  const [isPageSelected, setIsPageSelected] = useState([false, true, false]);

  const handleOnClick = (pageSelected) => {
    pageSelected === 0 ? setIsPageSelected([true, false, false]) :
    pageSelected === 1 ? setIsPageSelected([false, true, false]) :
    setIsPageSelected([false, false, true])
  };

	return ( 
		<div> 
			<nav class="navbar background"> 
          <img className="App-logo" src= {logo} alt='logo'/> 
           <div className="right-nav">
            <ul class="nav-list"> 
            <Link to='/about'><li><button className={`${isPageSelected[0] ? "selected" : ""}`} onClick={() => handleOnClick(0)}>ABOUT</button></li></Link>
            <li><p>/</p></li>
            <Link to='/portfolio'><li><button className={`${isPageSelected[1] ? "selected" : ""}`} onClick={() => handleOnClick(1)}>PORTFOLIO</button></li></Link>
            <li><p>/</p></li>
            <Link to='/contact'><li><button className={`${isPageSelected[2] ? "selected" : ""}`} onClick={() => handleOnClick(2)}>CONTACT</button></li></Link>
            <li><p>/</p></li>
            </ul> 
            <p className="title">developer / designer</p>
          </div> 
			</nav> 
		</div> 
	) 
} 
