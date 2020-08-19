import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Styling = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}

	return (
		<div>
            <ul><strong>Test Framework</strong>
                <li><input type="checkbox" value="jest" onChange={(e)=> handleChange(e)} />Jest</li>
				<li><input type="checkbox" value="mocha" onChange={(e)=> handleChange(e)} />Mocha</li>
				<li><input type="checkbox" value="chai" onChange={(e)=> handleChange(e)} />Chai</li>
				<li><input type="checkbox" value="jasmine" onChange={(e)=> handleChange(e)} />Jasmine</li>
				<li><input type="checkbox" value="ava" onChange={(e)=> handleChange(e)} />AVA</li>
				<li><input type="checkbox" value="cypress" onChange={(e)=> handleChange(e)} />Cypress</li>
				<li><input type="checkbox" value="testcafe" onChange={(e)=> handleChange(e)} />TestCafe</li>
            </ul>
		</div>
	)
}

export default Styling;