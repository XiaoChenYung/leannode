/**
 * Created by tm on 2017/6/21.
 */
'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var moment = require('moment');
var User = AV.Object.extend('_User');

router.get('/singup', function (req, res, next) {
    res.render('singup');
})

router.post('/singup', function (req, res, next) {
    res.redirect('index')
})

module.exports = router;
