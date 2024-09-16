const express = require('express');
const router = express.Router({mergeParams: true});
const {enroll} = require('../Controllers/olclassController');
const {isAuthenticated} = require('../Utils/middlewares');

router.post('/:id/enroll', isAuthenticated, enroll);

module.exports = router;