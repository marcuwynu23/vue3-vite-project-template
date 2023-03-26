/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { defineStore } from 'pinia'
import axios from 'axios'
import router from './../router';


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
				.then(res => {
					let statusCode = res.status
					if (statusCode === 200) {
						router.push('/')
					}
				})
				.catch(err => console.error(err))
		},
		async fetchData() {
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
			this.data = res.data
		}
	},
})


