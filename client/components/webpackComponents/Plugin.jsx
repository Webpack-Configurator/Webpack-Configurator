import React from 'react';
import '../../css/App.css';


const Plugin = (props) => {

	const handleChange = (e) => {
		props.onChange(e.target.value, e.target.checked);
	}
		
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