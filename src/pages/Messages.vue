/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
<template>
	<MainLayout>
		<v-container>
			<v-row>
				<v-col cols="12">
					<v-card>
						<v-card-title>
							<h1 class="display-1">Messages</h1>
						</v-card-title>
						<v-card-text>
							<p>
								{{ message }}
							</p>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</MainLayout>
</template>
<script>
import MainLayout from '@/layouts/MainLayout.vue';
export default {
	name: "Messsage",
	setup() {

	},
	components: {
		MainLayout
	},
	data: () => ({
		message: "Hello World",
	}),
	methods: {

	},
	created() {

	},
	mounted() {

	},
}
</script>