/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */

//add routes
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		name: "login",
		path: "/auth/login",
		component: () => import("@/pages/auth/login.vue"),
		meta: { layout: "blank" },
	},
	{
		name: "register",
		path: "/auth/register",
		component: () => import("@/pages/auth/register.vue"),
		meta: { layout: "blank" },
	},
	{
		name: "forgot-password",
		path: "/auth/forgot-password",
		component: () => import("@/pages/auth/forgot-password.vue"),
		meta: { layout: "blank" },
	},
	{
		name: "reset-password",
		path: "/auth/reset-password",
		component: () => import("@/pages/auth/reset-password.vue"),
		meta: { layout: "blank" },
	},
	{
		name: "landing",
		path: "/landing",
		component: () => import("@/pages/landing/landing.vue"),
		meta: { layout: "blank" },
	},
	{ name: "home", path: "/", component: () => import("@/pages/home.vue") },
	{
		name: "about",
		path: "/about",
		component: () => import("@/pages/about.vue"),
	},
	{
		name: "message",
		path: "/messages",
		component: () => import("@/pages/messages.vue"),
	},
	{
		name: "contact",
		path: "/contact",
		component: () => import("@/pages/contact.vue"),
	},
	{
		name: "not-found",
		path: "/:pathMatch(.*)*",
		component: () => import("@/pages/errors/404.vue"),
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

// public routes
let publicRoutes = [
	"landing",
	"login",
	"register",
	"forgot-password",
	"reset-password",
];

// route guard
router.beforeEach((to, from, next) => {
	let isAuthenticated = localStorage.getItem("isAuthenticated");
	if (!publicRoutes.includes(to.name) && !isAuthenticated) {
		next({ name: "login" });
	} else {
		next();
	}
});

export default router;
