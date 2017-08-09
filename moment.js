var moment = require('moment');
var express = require('express');

function generateTimestamp(req, res, next) {
    var timestamp = moment().format();
    req.body.timeStamp = timeStamp;
    next();
}

module.exports.generateTimestamp = generateTimestamp;