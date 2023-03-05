/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
<template>
	<v-app id="inspire">
		<v-app-bar class="px-3"
			flat
			density="compact">
			<v-avatar color="grey-darken-1"
				size="32"></v-avatar>
			<v-spacer></v-spacer>
			<v-tabs color="grey-darken-2">
				<v-tab v-for="link in links"
					:key="link.text"
					:to="link.to">
					{{ link.text }}
				</v-tab>
			</v-tabs>
			<v-spacer></v-spacer>
		</v-app-bar>
		<v-main class="bg-grey-lighten-3">
			<slot>
			</slot>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		links: [
			{ text: 'Dashboard', to: '/' },
			{ text: 'Messages', to: '/messages' },
			{ text: 'Contact', to: '/contact' },
			{ text: 'About', to: '/about' },
		],
	}),
}
</script>