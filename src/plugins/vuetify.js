/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
	components,
	directives,
	theme: {
		themes: {
			light: {
				primary: '#3f51b5',
				secondary: '#b0bec5',
				accent: '#8c9eff',
				error: '#b71c1c',
			},
			dark: {
				primary: '#3f5125',
				secondary: '#b01ec5',
				accent: '#8c93ff',
				error: '#b71c1c',
			}
		},
	},
	icons: {
		defaultSet: 'mdi',
	},
})

export default vuetify