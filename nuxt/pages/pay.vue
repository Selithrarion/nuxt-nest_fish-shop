<template>
	<div class="mt-2">
		<div>pay page</div>
		{{ $t('pay_cost') }} – {{ totalCost }}$
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(['totalCost']),
	},
};
</script>

<style scoped></style>
