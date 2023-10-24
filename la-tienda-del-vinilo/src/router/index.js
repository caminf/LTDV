import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'
import Wishlist from '../views/Wishlist'
import PreviousPurchases from '../views/PreviousPurchases'
import PurchaseStatus from '../views/PurchaseStatus'
import Admin from '../views/Admin.vue'
import AddProduct from '../views/AddProduct'

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/cart',
                name: 'cart',
                component: Cart
            },
            {
                path: '/login',
                name: 'login',
                component: Login
            }, {

                path: '/profile',
                name: 'profile',
                component: Profile
            },
            {
                path: '/editprofile',
                name: 'editprofile',
                component: EditProfile
            },
            {
                path: '/wishlist',
                name: 'wishlist',
                component: Wishlist
            },
            {
                path: '/previouspurchases',
                name: 'previouspurchases',
                component: PreviousPurchases
            },
            {
                path: '/purchasestatus',
                name: 'purchasestatus',
                component: PurchaseStatus
            },{
                path: '/admin',
                name: 'admin',
                component: Admin
            },
            {
                path: '/AddProduct',
                name: 'AddProduct',
                component: AddProduct
            },
        ]
    }
);

export default router;