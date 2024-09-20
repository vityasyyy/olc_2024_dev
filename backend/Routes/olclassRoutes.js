const express = require('express');
const router = express.Router({mergeParams: true});
const {enroll,getAllClasses, getOneClass, getIdFromSlug} = require('../Controllers/olclassController');
const {isAuthenticated} = require('../Utils/middlewares');


router.get('/', getAllClasses);
router.get('/:slug', getOneClass);
router.post('/:slug/enroll', isAuthenticated, enroll);

module.exports = router;