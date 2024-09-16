const express = require('express');
const router = express.Router({mergeParams: true})
const {joinolcon,getolcon} = require('../Controllers/olconController');


router.get('/', getolcon);
router.post('/joinolcon', joinolcon);

module.exports = router;