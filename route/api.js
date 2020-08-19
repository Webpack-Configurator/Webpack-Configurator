const express = require('express');
// const dataController = require('../controller/data');
const router = express.Router();
const webpackController = require('../controller/data');

router.use('/add', webpackController.add, (req, res) => {
	res.status(202).json(res.locals.added);
});

router.use('/', webpackController.getAll, (req, res) => {
	res.status(202).json(res.locals.data);
});

module.exports = router;
