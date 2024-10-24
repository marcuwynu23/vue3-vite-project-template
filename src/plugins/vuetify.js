/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// Define minimalist Monokai-inspired colors
const minimalistMonokaiColors = {
	primary: "#093154", // Soft green
	secondary: "#202020", // Cyan
	accent: "#093154", // Orange
	error: "#f92672", // Pink-red
	warning: "#e6db74", // Yellow
	info: "#66d9ef", // Cyan
	success: "#a6e22e", // Soft green
	background: "#242424", // Monokai dark background
	surface: "#242424", // Minimalist dark surface
};

// Create Vuetify instance with Monokai theme
const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: "dark", // Light theme is default
		themes: {
			light: {
				colors: minimalistMonokaiColors,
			},
			dark: {
				colors: minimalistMonokaiColors, // Apply Monokai colors here
			},
		},
	},
	icons: {
		defaultSet: "mdi",
	},
});

export default vuetify;
