import React from 'react';
import '../css/hamburger.css';
import { Link } from 'react-router-dom';

export default function Hamburger () {

	return ( 
		<div className='hamburger'> 
			<div className='burger burger1'/>
            <div className='burger burger2'/>
            <div className='burger burger3'/>
		</div> 
	) 
} 