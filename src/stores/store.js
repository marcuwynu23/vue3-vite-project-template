/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
	name: "store",
	state: () => ({
		count: 0,
		data: null,
	}),

	actions: {
		test() {
			console.log("test");
		},
		async fetchData() {
			try {
				const res = await axios.get("/api/test");
				this.data = res.data;
			} catch (error) {
				console.error(error);
			}
		},
		async logout() {
			try {
				localStorage.setItem("isAuthenticated", false);
				router.push({ name: "login" });
			} catch (err) {
				console.error(err);
			}
		},
	},
});
