/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

//add routes
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/auth/login', component: () => import('./pages/auth/Login.vue') },
	{ path: '/auth/register', component: () => import('./pages/auth/Register.vue') },
	{ path: '/auth/forgot-password', component: () => import('./pages/auth/ForgotPassword.vue') },
	{ path: '/auth/reset-password', component: () => import('./pages/auth/ResetPassword.vue') },
	{ path: '/', component: () => import('./pages/Home.vue') },
	{ path: '/about', component: () => import('./pages/About.vue') },
	{ path: '/messages', component: () => import('./pages/Messages.vue') },
	{ path: '/contact', component: () => import('./pages/Contact.vue') },
	{ path: '/:pathMatch(.*)*', component: () => import('./pages/errors/404.vue') },
]
const router = createRouter({
	history: createWebHistory(),
	routes,

})



export default router