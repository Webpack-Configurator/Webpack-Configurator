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
            <ul><strong>Styling</strong>
                <li><input type="checkbox" value="css" onChange={(e)=> handleChange(e)} />CSS</li>
				<li><input type="checkbox" value="cssmodules" onChange={(e)=> handleChange(e)} />CSS Modules</li>
				<li><input type="checkbox" value="postcss" onChange={(e)=> handleChange(e)} />Post Css</li>
				<li><input type="checkbox" value="sass" onChange={(e)=> handleChange(e)} />Sass</li>
				<li><input type="checkbox" value="less" onChange={(e)=> handleChange(e)} />Less</li>
				<li><input type="checkbox" value="stylus" onChange={(e)=> handleChange(e)} />Stylus</li>
            </ul>
		</div>
	)
}

export default Styling;