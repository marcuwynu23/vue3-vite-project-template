<script >
import { useAuthStore } from '@/stores/auth/auth-store';
export default {
	setup() {
		const authStore = useAuthStore();
		return {
			authStore
		}
	},
	data: () => ({
		form: {
			username: '',
			password: ''
		}
	}),
	methods: {
		submit(data) {
			this.authStore.postLoginData(data);
		}
	},
	created() {
		this.authStore.test();
	}

}
</script>
<template>
	<h3>Login</h3>
	<v-form>
		<v-text-field label="username*"
			v-model="form.username" />
		<v-text-field label="password*"
			v-model="form.password" />
		<v-btn @click="submit(form)">Submit</v-btn>
	</v-form>
</template>
