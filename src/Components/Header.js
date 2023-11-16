import React, { useState } from 'react';
import '../css/header.css';

import logo from '../images/logo.PNG'

export default function Header() {

  const [isPageSelected, setIsPageSelected] = useState([false, true, false]);

  const handleOnClick = (pageSelected) => {
    pageSelected === 0 ? setIsPageSelected([true, false, false]) :
    pageSelected === 1 ? setIsPageSelected([false, true, false]) :
    setIsPageSelected([false, false, true])
  };

  const pages = [{
    name: "ABOUT",
    id: 0
  }, {
    name: "PORTFOLIO",
    id: 1
  }, {
    name: "CONTACT",
    id: 2
  }];

  const listItems = pages.map(page =>
    <li><button className={`${isPageSelected[page.id] ? "selected" : ""}`} onClick={() => handleOnClick(page.id)}>{page.name}</button></li>
  );

	return ( 
		<div> 
			<nav class="navbar background"> 
          <img className="App-logo" src= {logo} alt='logo'/> 
           <div className="right-nav">
            <ul class="nav-list"> 
              {listItems}
            </ul> 
            <p className="title">developer / designer</p>
          </div> 
			</nav> 
		</div> 
	) 
} 
