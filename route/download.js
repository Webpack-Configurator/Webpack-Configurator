const express = require('express');
const router = express.Router();
const webpackController = require('../controller/data');
const path = require('path');
const { config } = require('process');

router.post('/', webpackController.writeFile, (req, res) => {
  res.download(path.resolve(__dirname, '../filesToServe', 'webpack-config.js'));
});

router.get('/', (req, res) => {
  res.download(path.resolve(__dirname, '../filesToServe', 'webpack-config.js'));
});

module.exports = router;