import React from 'react';
import '../../css/App.css';

const UI = (props) => {

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}

	return (
		<div>
            <ul><strong>UI Library</strong>
                <li><input type="checkbox" value="bootstrap" onChange={(e)=> handleChange(e)} />Bootstrap</li>
				<li><input type="checkbox" value="tailwindcss" onChange={(e)=> handleChange(e)} />Tailwind CSS</li>
            </ul>
		</div>
	)
}

export default UI;