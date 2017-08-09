var express = require('express');
var chirps = require('./chirps.ctrl')
var router = express.Router();

router.use('/chirps', chirps);

module.exports = router