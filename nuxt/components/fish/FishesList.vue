<template>
	<v-row>
		<FishItem v-for="fish in fishesData" :key="fish.id" :fish="fish" />
	</v-row>
</template>

<script>
    export default {
    	props: {
    		fishesData: {
    			type: Array,
					required: true,
				}
			}
    }
</script>

<style scoped>

</style>
