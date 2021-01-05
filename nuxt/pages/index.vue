<template>
	<div>
		<div v-if="!isLoaded">
			<BaseLoader />
		</div>

		<div v-if="isLoaded">
			<LayoutWelcome />
			<FishesList :fishesData="fishesData"/>
			<v-pagination
				v-model="selectedPage"
				:length="totalPages"
				class="mb-12"
				@input="tryFetchSelectedPage"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	async fetch() {
		await this.fetchAllFishes();
		this.pageData = this.fishes;
	},
	data() {
		return {
			pageData: null,
			selectedPage: 1,
			isLoaded: false,
		};
	},
	computed: {
		...mapState(['fishes']),
		fishesData() {
			return this.pageData ? this.pageData.items : [];
		},
		totalPages() {
			return this.pageData ? this.pageData.meta.totalPages : 1;
		},
	},
	methods: {
		...mapActions({
			fetchAllFishes: 'fetchAllFishes',
		}),
		async tryFetchSelectedPage() {
			try {
				const newPageData = await this.$axios.$get('/fishes', {
					params: { page: this.selectedPage },
				});
				this.pageData = newPageData;
			} catch (e) {
				console.error(e);
			}
		},
	},
	mounted() {
		this.isLoaded = true;
	},
};
</script>
