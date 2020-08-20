import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';
import { fetchedRulesToObjects, merge, buildConfig } from '../helpers/buildConfig';
import { Prettify } from '../helpers/Prettify';
const Frontend = (props) => {
    // const [checked, setChecked] = useState(false)


    const handleChange = (event) => {

        props.onChange(event.target.value, event.target.checked);
        // const defaults = Object.keys(checked).forEach(key => {if (key !== event.target.name) checked[key] = false});
        // const newConfig = buildConfig(props.selected, props.rules);
        // console.log(newConfig);
        // setChecked(event.target.checked)
        // const newConfig = buildConfig(props.selected, props.rules);
        // console.log(newConfig)
        // console.log(rules);
        // console.log(newConfig);
        // const test = Prettify(newConfig);
        // props.setStore(test)

    };
    // const handleClick =() => {

    //     //merging what Nick has
    //     //prettifiyng whtat aryeh has
    //     //store using setStore

    // }
    // props.setSelected({ ...props.selected, noLibrary: (!props.selected.noLibrary) true ---> false ---> true, react: false })}

    // here we tie the selections to the state selected, and the logic is so that
    // some of the logic is dependent on other radios or checkboxes

    return (
        <div>
            <ul><strong>Frontend Library</strong>
                <li><input type="radio" name="frontend" value="nolibrary" checked={props.selected.nolibrary || true} onChange={(event) => handleChange(event)} /> No Library</li>
                <li><input type="radio" name="frontend" value="react" checked={props.selected.react} onChange={(event) => handleChange(event)} /> React</li>
                <li><input type="radio" name="frontend" value="vue" checked={props.selected.vue} onChange={(event) => handleChange(event)} />Vue</li>
                <li><input type="radio" name="frontend" value="svelte" checked={props.selected.svelte} onChange={(event) => handleChange(event)} />Svelte</li>
            </ul>
        </div>
    )
}

export default Frontend;