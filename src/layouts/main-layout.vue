<script>
import { useTheme } from 'vuetify';

export default {
	setup() {
		const theme = useTheme();
		return { theme };
	},
	data: () => ({
		links: [
			{ text: 'Dashboard', to: '/', icon: 'mdi-view-dashboard' },
			{ text: 'Messages', to: '/messages', icon: 'mdi-message' },
			{ text: 'Contact', to: '/contact', icon: 'mdi-account-box' },
			{ text: 'About', to: '/about', icon: 'mdi-information' },
		],

		isDark: false,
	}),
	methods: {
		switcher(isDark) {
			if (isDark) {
				this.theme.global.name.value = 'dark';
			} else {
				this.theme.global.name.value = 'light';
			}
		}
	}
}
</script>
<template>
	<v-app>
		<v-app-bar class="px-3"
			color="primary"
			elevation="0">
			<v-app-bar-title>
				<span>Vite+Vue Frontent Project Template</span>
			</v-app-bar-title>

			<v-spacer></v-spacer>
			<v-tabs color="grey-darken-2">
				<v-tab v-for="link in links"
					:key="link.text"
					:to="link.to"
					large
					:prepend-icon="link.icon">
					{{ link.text }}
				</v-tab>
			</v-tabs>

			<div class="mx-3">
				<span>
					<v-switch v-model="isDark"
						@change="switcher(isDark)"
						color="white"
						:label="isDark ? 'Dark Mode' : 'Light Mode'"
						hide-details />
				</span>
			</div>
			<v-avatar size="36">
				<v-img src="https://avatars.githubusercontent.com/u/61897063?v=4" />
			</v-avatar>
		</v-app-bar>
		<v-main>
			<slot />
		</v-main>
	</v-app>
</template>

