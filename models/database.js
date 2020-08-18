const { Pool } = require('pg');

// ElephantSQL URI - Send Taylor or Patrick a Slack for access to database
const PG_URI =
	'postgres://qquarylc:9f-WympV5l824vTHMGwyNrlOfAM572tk@raja.db.elephantsql.com:5432/qquarylc';

// Pool creates an open connection to database
// https://node-postgres.com/features/pooling  
const pool = new Pool({
	connectionString: PG_URI,
});

module.exports = {
	query: (text, params, callback) => {
		console.log('executed query', text);
		return pool.query(text, params, callback);
	},
};
