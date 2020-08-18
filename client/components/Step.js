import React, { useEffect } from 'react';
import '../css/App.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import Troubleshoot from './Troubleshoot'

const Step = (props) => {
	const history = useHistory();
	const index = useParams();
	console.log(props.steps[index.id].code)

	// if the index is out-of-bounds => there is no next step
	// so don't return the next step, return the finalStep which is a route containing the component FinalStep

	if (Number(index.id) === props.steps.length) {
		return (
			<div className='finalStep'>
				<div>You have set up your Webpack! Continue to Troubleshoot to fix potential bugs that you may encounter after setting up Webpack.</div>
				<div>
					<button onClick={() => history.goBack()}>Go Back</button>
					<Link to='/finalstep'>
						<button>Continue</button>
					</Link>
				</div>
			</div>
		)
	}

	// if there is a next index, render this component and provide a link to the step at index + 1;

	// a fantastic stretch feature here would be to render the entire webpack.config.js file dynamically at each step,
	// based on the selection combination

	else {
		return (
			<div className='stepContainer'>
				<div className='mid'>
					<div className='midLeft'>{props.steps[index.id].description}</div>
					<div className='midRight'>
						<pre>
							<code>
								{props.steps[index.id].code}
							</code>
						</pre>
					</div>
				</div>
				<div className='buttonsContainer'>
					<button onClick={() => history.goBack()}>Go Back</button>
					<Link to={`/tutorial/${Number(index.id) + 1}`}>
						<button>Continue</button>
					</Link>
				</div>
			</div>
		)
	}
}

export default Step;