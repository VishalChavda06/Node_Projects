const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');
const auth = require('../middleware/authMiddleware');

router.get('/', viewController.home);
router.get('/dashboard', auth, viewController.dashboard);
router.get('/login', viewController.loginPage);
router.get('/register', viewController.registerPage);

module.exports = router;
