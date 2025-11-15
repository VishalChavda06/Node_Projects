const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.loginPage ? authController.loginPage : (req,res)=>res.render('pages/login',{error:null}));
router.post('/login', authController.login);
router.get('/register', authController.registerPage ? authController.registerPage : (req,res)=>res.render('pages/register',{error:null}));
router.post('/register', authController.register);
router.get('/logout', authController.logout);

module.exports = router;
