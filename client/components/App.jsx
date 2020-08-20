import React, { useState, useEffect } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import 'highlight.js/styles/dracula.css';
import Highlight from 'react-highlight';
import { Prettify } from './helpers/Prettify';
import { fetchedRulesToObjects, merge, buildConfig, buildRequirements, buildList, buildDeps, installScript } from './helpers/buildConfig';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
// dear iterators, for any questions about the frontend, shoot a slack to Kadir and Burak

const App = () => {

	const [selected, setSelected] = useState({});
	const [store, setStore] = useState('');
	const [requirementDisplay, setrequirementDisplay] = useState('');
	const [devDisplay, setDevDisplay] = useState('');
	const [rules, setRules] = useState({});
	const [dependencies, setDependencies] = useState({});
	const [devDependencies, setDevDependencies] = useState({});
	const [requirements, setRequirements] = useState({});

	let fetched = false;

	const getData = () => {
		fetch('/api')
			.then(response => response.json())
			.then(data => {
				const result = fetchedRulesToObjects(data)
				setRules(result[0]);
				setDependencies(result[1]);
				setDevDependencies(result[2]);
				setRequirements(result[3]);
			})
	}

	useEffect(() => {
		if (!fetched) {
			getData();
			fetched = true;
		}

		// Build new config object based on current checkbox selections
		let newConfig = buildConfig(selected, rules);
		if (newConfig === undefined) { // displays default config object
			newConfig = {
				entry: './src/index.js',
				output: {
					path: "path.resolve(__dirname, 'dist')",
					filename: 'bundle.js',
				},
			};
		}

		/** Pass newConfig object through Prettify, which returns a string with
		 *  line returns added, quotation marks stripped from regex expressions and 
		 *  function invocations. */ 
		let prettified = Prettify(newConfig);
		// Update state with prettified string
		setStore(prettified);

		// Build new requirements string based on current checkbox selections
		let newReqs = buildRequirements(selected, requirements);
		// Update state with newly built requirements string
		setrequirementDisplay(newReqs);

		// Build script for packages using helper functions
		let newDevs = installScript(selected, dependencies, devDependencies);
		// Update state with packages as string
		setDevDisplay(newDevs);
	}, [selected])


	const handleSelectChange = (name, value) => {
		const defaultState = {
			nolibrary: false,
			react: false,
			vue: false,
			svelte: false,
		}

		if (name === 'nolibrary' || name === 'react' || name === 'vue' || name === 'svelte') {
			// console.log('frontend')
			setSelected({ ...selected, ...defaultState, [name]: value })
		} else {
			setSelected({ ...selected, [name]: value })
		}
	}

	return (
		<div className="main-container">
			<div className="component-container">
				<Frontend onChange={handleSelectChange} selected={selected} />
				<UI onChange={handleSelectChange} setStore={setStore} />
				<Test onChange={handleSelectChange} setStore={setStore} />
				<Transpiler onChange={handleSelectChange} setStore={setStore} />
				<Styling onChange={handleSelectChange} setStore={setStore} />
				<Image onChange={handleSelectChange} setStore={setStore} />
				<Utilities onChange={handleSelectChange} setStore={setStore} />
				<Linting onChange={handleSelectChange} setStore={setStore} />
				<Optimization onChange={handleSelectChange} setStore={setStore} />
				<Plugin onChange={handleSelectChange} setStore={setStore} />
			</div>
			<div className="code-container">
				<Highlight className='javascript' >
					{`const path = require('path');\n` + requirementDisplay + `\n\n` + `module.exports = ` + store}
				</Highlight>
				<h1>NPM Packages</h1>
				<div id="copy">
				<Highlight>
				{devDisplay}
				</Highlight>
				</div>
				<CopyToClipboard text={devDisplay}>
				<Button variant="outline-dark">Copy Script</Button>
        		</CopyToClipboard>
			</div>
		</div>
	)

}

export default App;
