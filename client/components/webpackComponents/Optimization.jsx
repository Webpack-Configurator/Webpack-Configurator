import React from 'react';
import '../../css/App.css';

const Optimization = (props) => {

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}
	
	return (
		<div>
            <ul><strong>Optimization</strong>
                <li><input type="checkbox" value="codesplitvendor" onChange={(e)=> handleChange(e)} />Code split vendors</li>
            </ul>
		</div>
	)
}

export default Optimization;