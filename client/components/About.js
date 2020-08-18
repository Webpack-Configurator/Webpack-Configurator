import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const About = () => {
	const history = useHistory();
	return (
		<div className='aboutContainer'>
			<p>Webpack Config Assistant was originally created by Burak Caliskan, Kadir Gundogdu, Patrick Mullen and Taylor Du as a Scratch Project.</p>
			<p>Its stretch features were added by  .......  as an Iteration Project.</p>
			<div>
				<button onClick={() => history.goBack()}>Go Back</button>
			</div>
		</div>

	)
}

export default About;