
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/users', userController.getAllUsers);
router.get('/users/user/:rut', userController.getUser);
router.post('/users',userController.createUser);
router.post('/users/login',userController.loginUser);
router.put('/admin/user/:rut/editUser',userController.editUser);

router.post('/users/user/cart/:rut', userController.addToCart);
router.get('/users/user/cart/:rut', userController.getUserCart);
router.delete('/users/user/cart/:rut', userController.deleteItemFromCart);

router.post('/users/user/:rut/wishlist', userController.addToWishlist);
router.delete('/users/user/:rut/wishlist', userController.removeFromWishlist);
router.get('/users/user/:rut/wishlist', userController.getUserWishlist);

router.get('/users/user/:rut/previouspurchases', userController.getUserPreviousPurchases);


module.exports = router;
