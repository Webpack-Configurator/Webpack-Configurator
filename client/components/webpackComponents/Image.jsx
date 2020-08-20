import React from 'react';
import '../../css/App.css';

const Image = (props) => {

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