<script>
export default {
	name: "Messsage",
	setup() {

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
