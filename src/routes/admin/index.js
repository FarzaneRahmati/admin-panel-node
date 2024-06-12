const express = require('express');
const controller = require('./controller');
const validator = require('./validator');
const rooter = express.Router();




rooter.get(
    '/users',
    controller.getUsers
);



rooter.post(
    '/addUser',
    validator.addUserValidator(),
    controller.validate,
    controller.addUser
);

rooter.get(
    '/ads',
    controller.getAds
);

rooter.post(
    '/addAds',
    validator.addAdsValidator(),
    controller.validate,
    controller.addAds
);

rooter.get(
    '/categories',
    controller.getCategories
);

rooter.post(
    '/addCategory',
    validator.addCatValidator(),
    controller.validate,
    controller.addCategory
);

rooter.get(
    '/requests',
    controller.getRequests
);

rooter.post(
    '/addRequest',
    validator.addReqValidator(),
    controller.validate,
    controller.addRequest
);

module.exports = rooter;