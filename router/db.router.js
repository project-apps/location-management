const express = require('express'),
    router = new express.Router(),

    zipcodeController = require('../controller/zipcode.controller.js');

    router.route('/pincode/1/:pincode').get(zipcodeController.findOne);
    router.route('/pincode/0/:pincode').get(zipcodeController.findAll);

    module.exports = router;
