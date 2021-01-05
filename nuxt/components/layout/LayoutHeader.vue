<template>
	<v-app-bar app flat color="white" elevation="1">
		<v-container>
			<v-row justify="center" align="center">
				<v-icon color="primary" large @click="$router.push('/')">mdi-fish</v-icon>
				<span class="logo"> FishShop </span>

				<v-spacer />

				<LayoutHeaderLanguageMenu />
				<CartDialog v-if="$route.path !== '/pay'"/>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['totalCost']),
	},
};
</script>

<style scoped>
.logo {
	font-size: 1.5rem;
	font-weight: bold;
	margin-left: 0.5rem;
}
</style>
