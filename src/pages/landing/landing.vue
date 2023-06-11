
<script>
import { useStore } from '@/stores/store';

export default {
	name: 'Contact',
	setup() {
		const store = useStore();
		return {
			store
		};
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
<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-card>
					<v-card-title>
						<h1 class="display-1">Landing</h1>
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
</template>
