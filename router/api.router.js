const express = require('express'),
    router = new express.Router(),

    locationApi = require('../controller/location.controller.js'),
    healthcheck = require('../controller/healthcheck.js');

    router.route('/healthCheckConnections').get(healthcheck.get);
    router.route('/pincode/1/:pincode').get(locationApi.get);
    router.route('/pincode/0/:pincode').get(locationApi.getPincodes);
    router.route('/home').get(healthcheck.home);

    module.exports = router;
