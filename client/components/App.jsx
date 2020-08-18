import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Installs from './Installs';
import Nav from './Nav';
import About from './About';
import Tutorial from './Tutorial';
import Step from './Step';
import Troubleshoot from './Troubleshoot';
import FinalStep from './FinalStep';

// dear iterators, for any questions about the frontend, shoot a slack to Kadir and Burak

const App = () => {

	// creating a state to store in the selections of the client

	const [selected, setSelected] = useState({
		noLibrary: true,
		react: false,
		bootstrap: false,
		css: false,
		sass: false,
		htmlWP: false,
		miniCssWP: false,
	});

	// creating a state to store in the steps that will be generated

	const [steps, setSteps] = useState([]);

	// creating steps by fetching all of the data from the database and then filtering the data into an array
	// based on which radios and checkboxes were selected (we have this from ... => see Home).
	// then altering the steps state.

	const createSteps = () => {
		return fetch('http://localhost:3000/api/')
			.then(data => data.json())
			.then(data => {
				const stepsList = [];
				for (let key in selected) {
					if (selected[key] === true) {
						stepsList.push(data[key])
					}
				}
				setSteps(stepsList);
			})
			.catch(err => console.log(err))
	}

	// using the useEffect hook to update the steps, and thus the components,
	// whenever the state of selected is changed

	useEffect(() => {
		createSteps();
	}, [selected])

	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact render={(props) => <Home {...props} selected={selected} setSelected={setSelected} />} />
					<Route path='/about' component={About} />
					<Route path='/installs' render={(props) => <Installs {...props} steps={steps} />} />
					<Route path='/tutorial' exact render={(props) => <Tutorial {...props} steps={steps} />} />
					<Route path='/tutorial/:id' exact render={(props) => <Step {...props} steps={steps} />} />
					<Route path='/finalstep' component={FinalStep} />
					<Route path='/troubleshoot' component={Troubleshoot} />
				</Switch>
			</div>
		</Router>
	)

}

export default App
