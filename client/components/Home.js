import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Home = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	return (
		<div className='homeOuterContainer'>
			<div className='homeMessage'>
				<p>Tell us about your toolkit. What do you need to build your application?</p>
			</div>
			<div className='homeContainer'>
				<div className='optionsContainer'>
					<ul><strong>Frontend Library</strong>
						<li><input type='radio' name='library' checked={props.selected.noLibrary} onChange={() => props.setSelected({ ...props.selected, noLibrary: (!props.selected.noLibrary), react: false })} /> No Library</li>
						<li><input type='radio' name='library' checked={props.selected.react} onChange={() => props.setSelected({ ...props.selected, noLibrary: false, react: (!props.selected.react) })} /> React</li>
						<li><input type='radio' checked={false} readOnly></input>Vue*</li>
						<li><input type='radio' checked={false} readOnly></input>Svelte*</li>
					</ul>
					<ul><strong>Test Framework</strong>
						<li><input type='checkbox' checked={false} readOnly></input>Jest*</li>
						<li><input type='checkbox' checked={false} readOnly></input>Mocha*</li>
						<li><input type='checkbox' checked={false} readOnly></input>Chai*</li>
					</ul>
					<ul><strong>UI</strong>
						<li><input type='checkbox' checked={props.selected.bootstrap} onChange={() => props.setSelected({ ...props.selected, bootstrap: (!props.selected.bootstrap), css: true })} /> Bootstrap</li>
					</ul>
					<ul><strong>Transpiler</strong>
						<li><input type='checkbox' checked={true} readOnly /> Babel</li>
						<li><input type='checkbox' checked={false} readOnly></input>Typescript*</li>
					</ul>
					<ul><strong>Styling</strong>
						<li><input type='checkbox' checked={props.selected.css} onChange={() => props.setSelected({ ...props.selected, css: (!props.selected.css) })} /> CSS</li>
						<li><input type='checkbox' checked={props.selected.sass} onChange={() => props.setSelected({ ...props.selected, sass: (!props.selected.sass) })} /> Sass</li>
						<li><input type='checkbox' checked={false} readOnly></input>SCSS*</li>
					</ul>
					<ul><strong>Linting</strong>
						<li><input type='checkbox' checked={false} readOnly></input>ESLint*</li>
						<li><input type='checkbox' checked={false} readOnly></input>Prettier*</li>
					</ul>
					<ul><strong>Webpack Plugins</strong>
						<li><input type='checkbox' checked={props.selected.htmlWP} onChange={() => props.setSelected({ ...props.selected, htmlWP: (!props.selected.htmlWP) })} /> HTML Webpack Plugin</li>
						<li><input type='checkbox' checked={props.selected.miniCssWP} onChange={() => props.setSelected({ ...props.selected, miniCssWP: (!props.selected.miniCssWP) })} /> MiniCSSExtract Plugin</li>
					</ul>
				</div>
				<p style={{ color: "forestgreen" }}>* denotes dependencies that are not available for selection in the MVP.</p>
				<Link className='start' to='/installs'>
					<button className='startButton'>Start</button>
				</Link>
			</div>
		</div>
	)
}

export default Home;