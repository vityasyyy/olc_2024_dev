const express = require('express');
const router = express.Router({mergeParams: true})
const {login, register, logout, validate, requestPasswordReset, resetPassword, getEnrolledClass} = require('../Controllers/userController');
const {isAuthenticated} = require('../Utils/middlewares')
router.post('/register', register);
router.post('/login', login);
router.post('/logout', isAuthenticated, logout);
router.get('/validate', isAuthenticated, validate);
router.get('/get-enrolled-class', isAuthenticated, getEnrolledClass);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
module.exports = router;