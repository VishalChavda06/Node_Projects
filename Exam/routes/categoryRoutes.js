const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

// only admin can manage categories
router.get('/', categoryController.list);
router.post('/create', auth, role('admin'), categoryController.create);
router.post('/delete/:id', auth, role('admin'), categoryController.delete);

module.exports = router;
