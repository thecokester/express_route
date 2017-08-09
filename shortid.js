var shortid = require('shortid');
var express = require('express');

function assignId(req, res, next){
    req.body.id = shortid.generate()
    next();
}

module.exports = assignId;