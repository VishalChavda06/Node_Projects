const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');

router.get('/', productController.listAll);
router.get('/my', auth, productController.showMy);
router.get('/create', auth, productController.createForm);
router.post('/create', auth, productController.create);
router.get('/edit/:id', auth, productController.editForm);
router.post('/edit/:id', auth, productController.update);
router.post('/delete/:id', auth, productController.delete);

module.exports = router;
