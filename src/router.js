/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

//add routes
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	//auth login route
	{ path: '/auth/login', component: () => import('./pages/auth/Login.vue') },
	//auth register route
	{ path: '/auth/register', component: () => import('./pages/auth/Register.vue') },
	//auth forgot password route
	{ path: '/auth/forgot-password', component: () => import('./pages/auth/ForgotPassword.vue') },
	//auth reset password route
	{ path: '/auth/reset-password', component: () => import('./pages/auth/ResetPassword.vue') },

	//home route
	{ path: '/', component: () => import('./pages/Home.vue') },
	//about route
	{ path: '/about', component: () => import('./pages/About.vue') },
	//contact route
	{ path: '/contact', component: () => import('./pages/Contact.vue') },
	//404 route
	{ path: '/:pathMatch(.*)*', component: () => import('./pages/errors/404.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,

})



export default router