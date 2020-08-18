import React from 'react';
import '../css/App.css';
import { Link, useHistory } from 'react-router-dom';

// read the huge comment down below

const Troubleshoot = () => {
	const history = useHistory();
	return (
		<div className='tbContainer'>
			<div>Commonly encountered problems:</div>
			<div>
				<button onClick={() => history.goBack()}>Go Back</button>
			</div>
		</div>

	)
}

export default Troubleshoot;

// the following is a resource we compiled based on errors we have seen. 
// it contains common errors that can be faced while setting up webpack and their solutions.
// this could be a nice stretch feature,
// where users can (somehow -- you decide) troubleshoot interactively after setting up webpack.

// RESOURCE:
// errors relating to scripts
// ————————
// - package.json scripts need to be correct
// - make sure you install and import concurrently if you are using it
// - if you are running dev with a concurrently running script script make sure to provide NODE_ENV two times
// regenerator Runtime is not defined
// —————————
// transform runtime plug-in needed for async await. npm install this and add it as plugin under preset property in the options object.
// cors error
// —————
// import cors and app.use(cors()) as your first global middleware in your server’s index file.
// npm build: cannot get bundle.js error
// —————————
// app.use(static)
// npm run dev errors
// —————————
// seeing listing directory instead of your landing page: check if your webpack config file is in the same directory as your client-side index.js. if your client-side index.js is in a different folder, you’ll need to add content base to your devServer object and its value should be set to the path resolving in the folder containing your index.js. for example, if your index.js is in the client folder, your contenBase should equal ‘.client’
// cannot get path on refresh, react router dom error: set historyApiFallback:true in your webPack devServer

