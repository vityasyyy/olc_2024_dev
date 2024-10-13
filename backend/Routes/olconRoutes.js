const express = require('express');
const router = express.Router({mergeParams: true})
const {joinolcon,getolcon} = require('../Controllers/olconController');
const { isPastDate } = require('../Utils/middlewares')

router.get('/', getolcon);
router.post('/joinolcon', isPastDate, joinolcon);

module.exports = router;