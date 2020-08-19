import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Transpiler = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}

	return (
		<div>
            <ul><strong>Transpiler</strong>
                <li><input type="checkbox" value="babel" onChange={(e)=> handleChange(e)} />Babel</li>
				<li><input type="checkbox" value="typescript" onChange={(e)=> handleChange(e)} />Typescript</li>
            </ul>
		</div>
	)
}

export default Transpiler;