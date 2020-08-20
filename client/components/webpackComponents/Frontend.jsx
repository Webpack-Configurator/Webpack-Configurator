import React, { useState, useEffect } from 'react';
import '../../css/App.css';

const Frontend = (props) => {

    const handleChange = (event) => {

        props.onChange(event.target.value, event.target.checked);
    };

    return (
        <div>
            <ul><strong>Frontend Library</strong>
                <li><input type="radio" name="frontend" value="nolibrary" checked={props.selected.nolibrary || true} onChange={(event) => handleChange(event)} />No Library</li>
                <li><input type="radio" name="frontend" value="react" checked={props.selected.react} onChange={(event) => handleChange(event)} />React</li>
                <li><input type="radio" name="frontend" value="vue" checked={props.selected.vue} onChange={(event) => handleChange(event)} />Vue</li>
                <li><input type="radio" name="frontend" value="svelte" checked={props.selected.svelte} onChange={(event) => handleChange(event)} />Svelte</li>
            </ul>
        </div>
    )
}

export default Frontend;