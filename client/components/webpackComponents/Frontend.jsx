import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Frontend = (props) => {
    // const [checked, setChecked] = useState(false)
    

    const handleChange = (event) => {

        props.onChange(event.target.value, event.target.checked);
        // const defaults = Object.keys(checked).forEach(key => {if (key !== event.target.name) checked[key] = false});
        
        // setChecked(event.target.checked)

    };

    // props.setSelected({ ...props.selected, noLibrary: (!props.selected.noLibrary) true ---> false ---> true, react: false })}

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes

	return (
		<div>
            <ul><strong>Frontend Library</strong>
                <li><input type="radio" name="frontend" value="nolibrary" onChange={(event)=> handleChange(event)}/> No Library</li>
                <li><input type="radio" name="frontend" value="react" onChange={(event)=> handleChange(event)}/> React</li>
                <li><input type="radio" name="frontend" value="vue" onChange={(event)=> handleChange(event)}/>Vue</li>
                <li><input type="radio" name="frontend" value="svelte" onChange={(event)=> handleChange(event)}/>Svelte</li>
            </ul>
		</div>
	)
}

export default Frontend;