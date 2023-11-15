import React from 'react';
import '../css/header.css';

import logo from '../images/logo.PNG'

export default function Header () {
	return ( 
		<div> 
			<nav class="navbar background"> 

          <img className="App-logo" src= {logo} alt='logo'/> 
           
           <div className="right-nav">

            <ul class="nav-list"> 
              <li><a href="#about">ABOUT</a></li> 
              <li>/</li> 
              <li><a href="#portfolio">PORTFOLIO</a></li> 
              <li>/</li> 
              <li><a href="#contact">CONTACT</a></li> 
            </ul> 
            <p className="title">developer / designer</p>

          </div>

			</nav> 

		</div> 
	) 
} 