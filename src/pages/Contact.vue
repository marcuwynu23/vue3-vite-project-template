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
							<h1 class="display-1">Contact</h1>
						</v-card-title>
						<v-card-text>
							<p>
								{{ store.data }}
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
import { useStore } from '@/stores/store';

export default {
	name: 'Contact',
	setup() {
		const store = useStore();
		return {
			store
		};
	},
	components: {
		MainLayout
	},
	created() {
		this.store.test();
		this.store.fetchData();
	},
	mounted() {
		setTimeout(() => {
			console.log(this.store.data)
		}, 1000);
	}

}
</script>