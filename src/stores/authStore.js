/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import { defineStore } from "pinia";
import axios from "axios";
import router from "./../router";

export const useAuthStore = defineStore("authStore", {
	name: "authStore",
	state: () => ({
		count: 0,
		data: null,
	}),

	actions: {
		test() {
			console.log("test auth");
		},
		async fetchTest() {
			try {
				let res = await axios.get("/api/test");
				console.log(res.data);
			} catch (err) {
				console.error(err);
			}
		},
		async postLoginData(data) {
			try {
				console.log(data);
				// let response = await axios.post("/api/auth/login", data);
				// console.log(response.status);
			} catch (err) {
				console.error(err);
			}
		},
		async fetchData() {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/todos/1"
				);
				this.data = response.data;
			} catch (err) {
				console.log(err);
			}
		},
	},
});
