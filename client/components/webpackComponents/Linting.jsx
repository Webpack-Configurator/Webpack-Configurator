import React, { useState, useEffect } from 'react';
import '../../css/App.css';

const Linting = (props) => {

    const handleChange = (event) => { 
        props.onChange(event.target.value, event.target.checked);
	};
	
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