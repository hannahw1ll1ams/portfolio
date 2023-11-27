import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer () {

	return ( 
		<footer class="footer background"> 
			<Link to='/contact'><p className="text">LET'S CONNECT</p></Link>
		</footer> 
	) 
} 