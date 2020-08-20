import React from 'react';
import '../../css/App.css';

const Utilities = (props) => {

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