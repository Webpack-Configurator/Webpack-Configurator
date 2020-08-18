const express = require('express');
const dataController = require('../controller/data');
const router = express.Router();

// Respond to GET request with entries from database that have been organized as described in data.js
router.get('/', dataController.getAll, (req, res) => {
	res.status(202).json(res.locals.data);
});

module.exports = router;
