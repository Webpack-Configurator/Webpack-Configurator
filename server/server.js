const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Require cors to prevent error
// The error is most likely related to HTTP headers
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

const apiRoute = require('../route/api');
app.use('/api', apiRoute);

if (process.env.NODE_ENV === 'production') {
	app.use('/build', express.static(path.join(__dirname, '../build')));

	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/index.html'));
	});
}

app.listen(3000, () => console.log('Listening on port 3000...'));
