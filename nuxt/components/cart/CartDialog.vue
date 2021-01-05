<template>
	<v-dialog v-model="dialog" width="900">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on" icon color="primary" large>
				<v-badge
					:content="cartItems.length"
					:value="!isCartEmpty"
					color="error"
					overlap
				>
					<v-icon>mdi-cart</v-icon>
				</v-badge>
			</v-btn>
		</template>

		<v-card>
			<v-card-title class="headline">
				<span>{{$t('cart_title')}}</span>
				<v-spacer />
				<v-btn icon @click="closeCart">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text v-if="isCartEmpty" class="text-center">
				{{$t('cart_empty')}} :(
			</v-card-text>
			<div v-else>
				<v-card-text>
					<v-card
						v-for="fish in cartItems"
						:key="fish.id"
						elevation="1"
						class="mb-4"
					>
						<v-card-title>
							<v-avatar>
								<img :src="fish.imageURL" alt="fish" />
							</v-avatar>
							<span class="ml-2">{{ fish.name }}</span>
							<span class="ml-2 subtitle-2">${{ fish.price }} {{$t('cart_each')}}</span>
							<v-spacer />
							<span class="mr-4">
								<v-btn
									icon
									:disabled="fish.quantityToBuy <= 1"
									@click="removeOneQuantityToBuy(fish.id)"
								>
									<v-icon>mdi-minus</v-icon>
								</v-btn>
								{{ fish.quantityToBuy }}
								<v-btn
									icon
									:disabled="isAvailableQuantityMoreThanClientWantToBuy(fish)"
									@click="addOneQuantityToBuy(fish.id)"
								>
									<v-icon>mdi-plus</v-icon>
								</v-btn>
							</span>
							<v-btn icon @click="removeFish(fish.id)">
								<v-icon color="secondary">mdi-delete-outline</v-icon>
							</v-btn>
						</v-card-title>
					</v-card>
					<div class="mt-8 mb-2 text-center" :key="cartItems.length">
						<div>{{ $t('cart_costOfDelivery') }}: {{ 4 }}$</div>
						<div>{{ $t('cart_fishCost') }}: {{ totalCost - 4 }}$</div>
						<div class="font-weight-bold text-h5">
							{{ $t('cart_totalCost') }}: {{ totalCost }}$
						</div>
					</div>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" block @click="openPayPage">
						{{ $t('cart_buyButton') }}
					</v-btn>
				</v-card-actions>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
			dialog: false,
		};
	},
	computed: {
		...mapState(['cartItems']),
		...mapGetters(['totalCost']),
		isCartEmpty() {
			return this.cartItems.length === 0;
		},
	},
	methods: {
		...mapActions({
			removeFishFromCart: 'removeFishFromCart',
			addOneQuantity: 'addOneQuantityToBuy',
			removeOneQuantity: 'removeOneQuantityToBuy',
		}),

		isAvailableQuantityMoreThanClientWantToBuy(fish) {
			return fish.quantity <= fish.quantityToBuy;
		},

		openPayPage() {
			this.closeCart();
			console.log(this.$i18n)
			this.$router.push('/pay');
		},
		closeCartIfLastFish() {
			if (this.isCartEmpty) {
				this.closeCart();
			}
		},
		removeFish(id) {
			this.removeFishFromCart(id);
			this.closeCartIfLastFish();
		},

		addOneQuantityToBuy(id) {
			this.addOneQuantity(id);
		},
		removeOneQuantityToBuy(id) {
			this.removeOneQuantity(id);
		},

		closeCart() {
			this.dialog = false;
		},
	},
};
</script>

<style scoped></style>
