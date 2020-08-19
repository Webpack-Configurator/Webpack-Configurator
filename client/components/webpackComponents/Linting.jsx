import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Linting = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	return (
		<div>
            <ul><strong>Linting</strong>
                <li><input type="checkbox" value="eslint" onChange={(e)=> handleChange(e)} />ESLint</li>
				<li><input type="checkbox" value="prettier" onChange={(e)=> handleChange(e)} />Prettier</li>
            </ul>
		</div>
	)
}

export default Linting;