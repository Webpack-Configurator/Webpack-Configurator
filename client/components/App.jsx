import React, { useState, useEffect, Component } from 'react';
import '../css/App.css';
import Frontend from './webpackComponents/Frontend';
import Test from './webpackComponents/Test';
import UI from './webpackComponents/UI';
import Transpiler from './webpackComponents/Transpiler';
import Styling from './webpackComponents/Styling';
import Image from './webpackComponents/Image';
import Utilities from './webpackComponents/Utilities';
import Linting from './webpackComponents/Linting';
import Optimization from './webpackComponents/Optimization';
import Plugin from './webpackComponents/Plugin';
import Home from './Home';
// dear iterators, for any questions about the frontend, shoot a slack to Kadir and Burak

const App = () => {

	const [selected, setSelected] = useState({});

	//coming from database
	//name, code, require, devDependency, dependency
	const handleSelectChange = (name, value) => {
		const defaultState = {
			nolibrary: false,
			react: false,
			vue: false,
			svelte: false,		
		}

		if (name === 'nolibrary' || name === 'react' || name === 'vue' || name === 'svelte') {
		  	setSelected({...defaultState, [name]: value})
		} else {
			setSelected({...selected, [name]: value })
		}

	}

	return (
		<div className="main-container">
			<div className="component-container">
				<Frontend selected={selected} onChange={handleSelectChange}/>
				<UI selected={selected} onChange={handleSelectChange}/>
				<Test selected={selected} onChange={handleSelectChange}/>
				<Transpiler selected={selected} onChange={handleSelectChange}/>
				<Styling selected={selected} onChange={handleSelectChange}/>
				<Image selected={selected} onChange={handleSelectChange}/>
				<Utilities selected={selected} onChange={handleSelectChange}/>
				<Linting selected={selected} onChange={handleSelectChange}/>
				<Optimization selected={selected} onChange={handleSelectChange}/> 
				<Plugin selected={selected} onChange={handleSelectChange}/>
			</div>
			<div className="code-container">
				<Home />
			</div>
		</div>
	)

}

export default App;



/**
 * 
 * 
 * 
 		// const defaultState2 = {
		// 	bootstrap: false,
		// 	tailwindcss: false,
		// 	jest: false,
		// 	mocha: false,
		// 	chai: false,
		// 	jasmine: false,
		// 	ava: false,
		// 	cypress: false,
		// 	testcafe: false,
		// 	babel: false,
		// 	typescript: false,
		// 	css: false,
		// 	cssmodules: false,
		// 	sass: false,
		// 	less: false,
		// 	stylus: false,
		// 	svg: false,
		// 	png: false,
		// 	moment: false,
		// 	lodash: false,
		// 	esline: false,
		// 	prettier: false,
		// 	codesplitvendor: false,
		// 	htmlwebpackplugin: false,
		// 	webpackbundleanalyzer: false,
		// 	minicssextractplugin: false,
		// 	copywebpackplugin: false,
		// 	cleanwebpackplugin: false			
		// }
 * 
 * 
 * 
 * 
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
 */

/**
 * 
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

	// useEffect(() => {
	// 	createSteps();
	// }, [selected])
 */