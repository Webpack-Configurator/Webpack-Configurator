import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

const Tutorial = (props) => {
	const history = useHistory();
	let requires = [];
	for (let key in props.steps) {
		if (props.steps[key].require !== null) {
			requires.push(<pre><code><p key={key}>{props.steps[key].require}</p></code></pre>)
		}
	}

	return (
		<div className='tutorialContainer'>
			<div className='mid'>
				<div className='midLeft'>Create a webpack.config.js file in your root directory for webpack to use. We will be adding code to this file as we build our webpack configuration. <br /><br />
				The path module provides utilities for working with file and directory paths, so we will require it here to use in our file. If you are using the HtmlWebpackPlugin or MiniCssExtractPlugin, you will also need to require these modules.<br /><br />
				We are setting up our webpack configuration for an application or tool with one entry point (./src/index.js).<br /><br />
Configuring the output options tells webpack how to write the compiled files. While there can be multiple entry points, only one output configuration is specified. The minimum requirement for the output property in a webpack configuration is to set its value to an object and provide an output.filename to use for the output file(s). This configuration will output a single main.js file into the dist directory.</div>
				<div className='midRight'>
					<div>{requires}</div>
					<pre>
						<code>
							{
								`module.exports = {\n  entry: "./src/index.js", \n  output: {\n    filename: "main.js",\n    path: path.resolve(__dirname, 'dist'),\n  },  \n  mode: production \n}`
							}
						</code>
					</pre>
				</div>
			</div>
			<div className='buttonsContainer'>
				<button onClick={() => history.goBack()}>Go Back</button>
				<Link to={`/tutorial/${0}`}>
					<button>Continue</button>
				</Link>
			</div>
		</div>
	)
}

export default Tutorial;