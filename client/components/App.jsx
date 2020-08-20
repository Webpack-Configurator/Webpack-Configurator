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
// import 'highlight.js/styles/darcula.css';
// import hljs from 'highlight.js';
import Highlight from 'react-highlight';
import { Prettify } from './helpers/Prettify';
import { fetchedRulesToObjects, merge, buildConfig } from './helpers/buildConfig';


// dear iterators, for any questions about the frontend, shoot a slack to Kadir and Burak

const App = () => {


	const [selected, setSelected] = useState({});

	const [store, setStore] = useState("");
	const [rules, setRules] = useState({});
	const [dependencies, setDependencies] = useState({});
	const [devDependencies, setDevDependencies] = useState({});
	const [requirements, setRequirements] = useState({});

	// const updateObject = (obj) => {
	// 	// setStore(pretty)
	// 	const test = Prettify(obj);
	// 	setStore(test);
	// }

	useEffect(() => {
		fetch('/api')
			.then(response => response.json())
			.then(data => {
				// console.log(data)
				const result = fetchedRulesToObjects(data)

				setRules(result[0]);
				setDependencies(result[1]);
				setDevDependencies(result[2]);
				setRequirements(result[3]);
				//updateObject(data[0].code)
			})
	}, [])

	useEffect(() => {
		// setTimeout(() => {
		// }, 2000)
		setStore("")
		console.log('store now: ', store);
		const newConfig = buildConfig(selected, rules);
		// console.log(rules);

		const test = Prettify(newConfig);
		setStore(test)
		setTimeout(() => console.log(selected, 'store----->', store), 6000)
	}, [selected])

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
			setSelected({ ...defaultState, [name]: value })
		} else {
			setSelected({ ...selected, [name]: value })
		}
	}

	return (
		<div className="main-container">
			<div className="component-container">
				<Frontend onChange={handleSelectChange} selected={selected} rules={rules} store={store} setStore={setStore} />
				<UI selected={selected} onChange={handleSelectChange} />
				<Test selected={selected} onChange={handleSelectChange} />
				<Transpiler selected={selected} onChange={handleSelectChange} />
				<Styling selected={selected} onChange={handleSelectChange} />
				<Image selected={selected} onChange={handleSelectChange} />
				<Utilities selected={selected} onChange={handleSelectChange} />
				<Linting selected={selected} onChange={handleSelectChange} />
				<Optimization selected={selected} onChange={handleSelectChange} />
				<Plugin selected={selected} onChange={handleSelectChange} />
			</div>
			<div className="code-container">
				{/* <Home /> */}
				<Highlight className='javascript'>
					{store}
				</Highlight>
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