import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';


const FinalStep = () => {
	const history = useHistory();
	return (
		<div className='stepContainer'>
			<div className='mid'>
				<div className='midLeft'>
					{`This example is using an Express server:`}
					<br />
					<br />
					{`Use express.static to serve all content in the ‘dist’ folder on the route to /dist. This step is needed so that the content is available when you try to access it from index.html page. In your index.html page, the script that is run should be <script src=“dist/bundle.js”></script>.`}
					<br />
					<br />
					{`On a Get request to the base path, serve the index.html file. The script referenced in step 1 will then be triggered, resulting in “dist/bundle.js” being served to the client. Note, your initial index.js file must bind content to a div in your index.html file.`}
				</div>
				<div className='midRight'>
					<pre>
						<code>
							{`app.use('/dist', express.static(path.join(__dirname, './dist'))); \napp.get('/', (req, res) => {\n    res.sendFile(path.resolve(__dirname, './src/index.html'));\n});`}
						</code>
					</pre>
				</div>
			</div>
			<div className='buttonsContainer'>
				<button onClick={() => history.goBack()}>Go Back</button>
				<Link to={`/troubleshoot`}>
					<button>Continue</button>
				</Link>
			</div>
		</div>
	)
}

export default FinalStep;