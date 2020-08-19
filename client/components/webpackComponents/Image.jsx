import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Image = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}

	return (
		<div>
            <ul><strong>Image</strong>
                <li><input type="checkbox" value="svg" onChange={(e)=> handleChange(e)} />SVG</li>
				<li><input type="checkbox" value="png" onChange={(e)=> handleChange(e)} />PNG</li>
            </ul>
		</div>
	)
}

export default Image;