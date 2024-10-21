<script setup>
import { onMounted } from "vue";
import { useStore } from "@/stores/store";

const store = useStore();

onMounted(() => {
	store.test();
	store.fetchData();
	console.log("Home created");
});
</script>

<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-card>
					<v-card-title>
						<h1 class="display-1">Dashboard</h1>
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
