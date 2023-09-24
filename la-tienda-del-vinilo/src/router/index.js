import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue';

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
                path: '/profile',
                name: 'profile',
                component: Profile
            }
        ]
    }
);

export default router;