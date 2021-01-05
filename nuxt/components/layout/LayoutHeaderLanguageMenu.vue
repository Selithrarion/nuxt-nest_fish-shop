<template>
	<v-menu offset-y>
		<template v-slot:activator="{ on, attrs }">
			<v-btn color="primary" v-bind="attrs" v-on="on" icon class="mr-1">
				<v-icon> mdi-translate </v-icon>
			</v-btn>
		</template>
		<v-list>
			<v-list-item v-for="item in items" :key="item.code">
				<v-list-item-title>
					<nuxt-link :to="switchLocalePath(item.code)">{{ item.title }}</nuxt-link>
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'English',
					code: 'en'
				},
				{
					title: 'Русский',
					code: 'ru'
				}
			],
		};
	},
};
</script>

<style scoped>
	a {
		text-decoration: none;
	}
</style>
