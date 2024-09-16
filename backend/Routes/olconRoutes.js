const express = require('express');
const router = express.Router({mergeParams: true})
const {joinolcon} = require('../Controllers/olconController');

router.post('/joinolcon', joinolcon);

module.exports = router;