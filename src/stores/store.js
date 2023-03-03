/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
	id: 'main',
	state: () => ({
		count: 0,
	}),
	actions: {
		test() {
			console.log('test')
		}
	},
})


