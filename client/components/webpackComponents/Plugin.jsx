import React, { useState, useEffect } from 'react';
import '../../css/App.css';
// import { Link } from 'react-router-dom';

const Plugin = (props) => {

	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes
		// 	htmlwebpackplugin: false,
		// 	webpackbundleanalyzer: false,
		// 	minicssextractplugin: false,
		// 	copywebpackplugin: false,
		// 	cleanwebpackplugin: false	
	return (
		<div>
            <ul><strong>Webpack plugins</strong>
                <li><input type="checkbox" value="htmlwebpackplugin" onChange={(e)=> handleChange(e)} />HTML Webpack Plugin</li>
                <li><input type="checkbox" value="webpackbundleanalyzer" onChange={(e)=> handleChange(e)} />Webpack Bundle Analyzer</li>				
                <li><input type="checkbox" value="minicssextractplugin" onChange={(e)=> handleChange(e)} />MiniCssExtraxtPlugin</li>				
                <li><input type="checkbox" value="copywebpackplugin" onChange={(e)=> handleChange(e)} />CopyWebpack Plugin</li>				
                <li><input type="checkbox" value="cleanwebpackplugin" onChange={(e)=> handleChange(e)} />CleanWebpackPlugin</li>				
            </ul>
            
		</div>
	)
}

export default Plugin;