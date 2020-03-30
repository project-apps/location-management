const express = require('express'),
    router = new express.Router(),

    locationApi = require('../controller/location.controller.js'),
    healthcheck = require('../controller/healthcheck.js');

    router.route('/healthCheckConnections').get(healthcheck.get);
    router.route('/home').get(healthcheck.home);
    router.route('/er').get(healthcheck.err);
    module.exports = router;
