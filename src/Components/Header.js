import React, { useState } from 'react';
import '../css/header.css';

import logo from '../images/logo.PNG'

export default function Header () {

  const [isSelected, setIsSelected] = useState([false, true, false]);

  const handleOnClick = (pageSelected) => {
    pageSelected === 0 ? setIsSelected([true, false, false]) :
    pageSelected === 1 ? setIsSelected([false, true, false]) :
    setIsSelected([false, false, true])
  };

	return ( 
		<div> 
			<nav class="navbar background"> 
          <img className="App-logo" src= {logo} alt='logo'/> 
           <div className="right-nav">
            <ul class="nav-list"> 
              <li><button className={`${isSelected[0] ? "selected" : ""}`} onClick={() => handleOnClick(0)}>ABOUT</button></li>
              <li>/</li> 
              <li><button className={`${isSelected[1] ? "selected" : ""}`} onClick={() => handleOnClick(1)}>PORTFOLIO</button></li>
              <li>/</li> 
              <li><button className={`${isSelected[2] ? "selected" : ""}`} onClick={() => handleOnClick(2)}>CONTACT</button></li>
            </ul> 
            <p className="title">developer / designer</p>
          </div> 
			</nav> 
		</div> 
	) 
} 
