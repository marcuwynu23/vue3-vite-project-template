<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth/auth-store";

const authStore = useAuthStore();

const form = ref({
	username: "",
	password: "",
});

async function submit() {
	await authStore.postLoginData(form.value);
}

onMounted(() => {
	authStore.test();
});
</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-card elevation="0">
					<v-card-title>
						<h1 class="display-5">Login</h1>
					</v-card-title>
					<v-card-text>
						<v-form>
							<v-text-field variant="outlined" label="username*" v-model="form.username" />
							<v-text-field variant="outlined" label="password*" v-model="form.password" />
						</v-form>
						<v-btn @click="submit">Submit</v-btn>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
