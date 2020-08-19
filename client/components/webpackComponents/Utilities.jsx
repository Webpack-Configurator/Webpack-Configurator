import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Utilities = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}

	return (
		<div>
            <ul><strong>Utilities</strong>
                <li><input type="checkbox" value="moment" onChange={(e)=> handleChange(e)} />Moment</li>
				<li><input type="checkbox" value="lodash" onChange={(e)=> handleChange(e)} />Lodash</li>
            </ul>
		</div>
	)
}

export default Utilities;