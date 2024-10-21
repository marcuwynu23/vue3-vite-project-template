<script setup>
import { onMounted, ref } from "vue";

const message = ref("Hello World");
</script>
<template>
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
</template>
