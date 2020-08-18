import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const Installs = (props) => {
	const history = useHistory();
	const npms = [];
	for (let key in props.steps) {
		npms.push(props.steps[key].npm + " ")
	}

	return (
		<div className='installsContainer'>
			<div className='installMessage'>
				<p>First, install Webpack. Navigate to your project folder in your terminal and copy and paste the following: </p>
			</div>
			<div className='installInstruction'>
				<code>npm install webpack webpack-cli</code>
			</div>
			<div className='installMessage'>
				<p> To install all of the dependencies you selected, copy and paste the following:</p>
			</div>
			<div className='installInstruction'>
				<code>npm install {npms}</code>
			</div>

			{/* stretch feature: differentiate between dependencies and dev dependencies
			and have two separate npm installs for them on this page -Kadir */}
			<div>
				<button onClick={() => history.goBack()}>Go Back</button>
				<Link to='/tutorial'>
					<button>Continue</button>
				</Link>
			</div>
		</div>
	)
}

export default Installs;