/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { defineStore } from 'pinia'
import axios from 'axios'


export const useAuthStore = defineStore('authStore', {
	name: 'authStore',
	state: () => ({
		count: 0,
		data: null,
	}),

	actions: {
		test() {
			console.log('test auth')

		},
		async fetchTest() {
			let res = await axios.get('/api/test');
			console.log(res.data)
		},
		async postLoginData(data) {
			await axios.post('/api/auth/login', data)
				.then(res => console.log(res))
				.catch(err => console.error(err))
		},
		async fetchData() {
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
			this.data = res.data
		}
	},
})


