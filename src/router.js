/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

//add routes
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/auth/login', component: () => import('./pages/auth/Login.vue'), meta: { layout: 'blank' } },
	{ path: '/auth/register', component: () => import('./pages/auth/Register.vue'), meta: { layout: 'blank' } },
	{ path: '/auth/forgot-password', component: () => import('./pages/auth/ForgotPassword.vue'), meta: { layout: 'blank' } },
	{ path: '/auth/reset-password', component: () => import('./pages/auth/ResetPassword.vue'), meta: { layout: 'blank' } },
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


// route guard
router.beforeEach((to, from, next) => {
	let isAuthenticated = localStorage.getItem('user') !== null
	if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
	else next()
})



export default router