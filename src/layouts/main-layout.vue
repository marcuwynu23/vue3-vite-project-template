<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { useAuthStore } from "@/stores/auth/auth-store";
// State for drawer and rail mode
const drawer = ref(false); // Initially closed
const rail = ref(false); // Initially full-width
const theme = useTheme();
const authStore = useAuthStore();

// Links for the navigation drawer
const links = ref([
	{ text: "Home", to: "/", icon: "mdi-view-dashboard" },
	{ text: "About", to: "/about", icon: "mdi-briefcase" },
	{ text: "Contact", to: "/contact", icon: "mdi-account-box" },
]);

async function handleLogout() {
	await authStore.logout();
}
</script>

<template>
	<v-app>
		<v-navigation-drawer
			app
			color="secondary"
			v-model="drawer"
			:rail="rail"
			temporary
			style="border: none"
			elevation="4"
			@click="rail = false"
		>
			<v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>

			<v-list density="compact" nav>
				<v-list-item
					v-for="link in links"
					:key="link.text"
					:to="link.to"
					:prepend-icon="link.icon"
					nav
				>
					<template #title v-if="!rail">
						{{ link.text }}
					</template>
				</v-list-item>

				<v-list-item @click="handleLogout" prepend-icon="mdi-logout">
					<template #title> Logout </template></v-list-item
				>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<v-btn icon="mdi-menu" variant="text" @click="drawer = !drawer"></v-btn>
			<slot />
		</v-main>
	</v-app>
</template>
