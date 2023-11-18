
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/users', userController.getAllUsers);
router.post('/users',userController.createUser);
router.post('/users/login',userController.loginUser);
router.put('/users/user/:rut',userController.updateUser);

router.post('/users/user/cart/:rut', userController.addToCart);
router.get('/users/user/cart/:rut', userController.getUserCart);
router.delete('/users/user/cart/:rut', userController.deleteItemFromCart);

router.post('/users/user/wishlist/:rut', userController.addToWishlist);
router.delete('/users/user/wishlist/:rut', userController.removeFromWishlist);
router.get('/users/user/wishlist/:rut', userController.getUserWishlist);

router.get('/users/user/previouspurchases/:rut', userController.getUserPreviousPurchases);


// router.get('/users/user', userController.getOneUser); (pendiente)

module.exports = router;
