import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
	return (
		<Navbar className='nav'>
			<div className='logo'>Webpack Config Assistant</div>
			<div className='homeAbout'>
				<div >
					<Link to='/' className='home'><div>Home</div></Link>
				</div>
				<div>
					<Link to='/about' className='about'>About</Link>
				</div>
			</div>
		</Navbar>
	)
}

export default Nav;