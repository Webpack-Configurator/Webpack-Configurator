import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Optimization = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	return (
		<div>
            <ul><strong>Optimization</strong>
                <li><input type="checkbox" value="codesplitvendor" onChange={(e)=> handleChange(e)} />Code split vendors</li>
            </ul>
		</div>
	)
}

export default Optimization;