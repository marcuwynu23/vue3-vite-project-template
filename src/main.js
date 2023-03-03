/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router'



createApp(App)
	.use(router)
	.mount('#app')
