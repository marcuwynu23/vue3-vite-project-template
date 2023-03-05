/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import axios from "@/axios/index.js"
import vuetify from '@/plugins/vuetify'

const pinia = createPinia()

createApp(App)
	.use(router)
	.use(pinia)
	.use(vuetify)
	.mount('#app')
