<template>
	<v-col cols="12" md="6" class="mb-4">
		<v-card class="fish-item" min-height="250">
			<div>
				<v-img :src="fish.imageURL" height="250"></v-img>
			</div>

			<v-card-title>
				<span>{{ fish.name }}</span>
				<span v-if="isHot" class="ml-2">
					<v-icon color="primary">mdi-fire</v-icon>
					<span class="subtitle-2 primary--text">
						{{ fish.quantity }} {{ $t('main_left') }}!
					</span>
				</span>
				<span v-if="isNotAvailable" class="ml-2">
					<v-icon color="error" small>mdi-circle-outline</v-icon>
					<span class="subtitle-2 error--text"> {{ $t('main_out') }} </span>
				</span>
			</v-card-title>

			<v-card-text>{{ fish.description }}</v-card-text>

			<v-spacer />

			<v-card-actions class="pl-4">
				<span class="font-weight-bold text-h6">${{ fish.price }}</span>
				<v-btn
					:disabled="isNotAvailable"
					color="primary"
					class="ml-auto"
					@click="tryAddToCart"
				>
					{{ $t('main_addToCartButton') }}
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: {
		fish: {
			type: Object,
			required: true,
		},
	},
	computed: {
		isHot() {
			return this.fish.quantity <= 50 && this.fish.quantity >= 1;
		},
		isNotAvailable() {
			return this.fish.quantity <= 0;
		},
	},
	methods: {
		...mapActions({
			addFishToCart: 'addFishToCart',
		}),
		async tryAddToCart() {
			try {
				await this.addFishToCart(this.fish);
			} catch (e) {
				console.error(e);
			}
		},
	},
};
</script>

<style scoped></style>
