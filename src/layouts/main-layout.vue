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
	{ text: "Profile", to: "/profile", icon: "mdi-account" },
	{ text: "Dashboard", to: "/", icon: "mdi-view-dashboard" },
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
			<v-toolbar color="secondary" dark prominent>
				<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

				<v-toolbar-title>
					<h1 class="font-weight-bold">Aninaw Cloud</h1>
				</v-toolbar-title>

				<v-spacer></v-spacer>
			</v-toolbar>
			<v-container>
				<slot />
			</v-container>

			<v-bottom-navigation>
				<v-btn value="recent">
					<v-icon color="secondary">mdi-history</v-icon>
					<span>Recent</span>
				</v-btn>

				<v-btn value="favorites">
					<v-icon color="secondary">mdi-heart</v-icon>

					<span>Favorites</span>
				</v-btn>

				<v-btn value="nearby">
					<v-icon color="secondary">mdi-map-marker</v-icon>

					<span>Nearby</span>
				</v-btn>
			</v-bottom-navigation>
		</v-main>
	</v-app>
</template>
