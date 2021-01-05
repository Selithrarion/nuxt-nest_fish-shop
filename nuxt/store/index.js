import Vue from 'vue';
export const state = () => ({
	fishes: null,
	cartItems: [],
});
export const getters = {
	totalCost: (state) => {
		let total = 0;
		const deliveryCost = 4;

		state.cartItems.forEach(
			(fish) => (total += fish.price * fish.quantityToBuy)
		);

		return total + deliveryCost;
	},
	totalQuantity: (state) => {
		return state.cartItems.length;
	},
};
export const mutations = {
	FETCH_ALL_FISHES(state, data) {
		state.fishes = data;
	},
	ADD_FISH_TO_CART(state, fish) {
		// add new reactive property
		Vue.set(fish, 'quantityToBuy', 1);
		state.cartItems.push(fish);
	},
	REMOVE_FISH_FROM_CART(state, id) {
		state.cartItems = state.cartItems.filter((fish) => fish.id !== id);
	},
	ADD_ONE_QUANTITY_TO_BUY(state, id) {
		const fishIndex = state.cartItems.findIndex((item) => item.id === id);
		state.cartItems[fishIndex].quantityToBuy++;
	},
	REMOVE_ONE_QUANTITY_TO_BUY(state, id) {
		const fishIndex = state.cartItems.findIndex((item) => item.id === id);
		state.cartItems[fishIndex].quantityToBuy--;
	},
};
export const actions = {
	async fetchAllFishes({ commit }) {
		const data = await this.$axios.$get('/fishes');
		commit('FETCH_ALL_FISHES', data);
	},

	addFishToCart({ commit }, fish) {
		const isFishInCart =
			this.state.cartItems.findIndex((item) => item.id === fish.id) !== -1;
		const isAvailableToAddMoreQuantity = fish.quantity > fish.quantityToBuy;

		if (isFishInCart) {
			if (isAvailableToAddMoreQuantity) {
				commit('ADD_ONE_QUANTITY_TO_BUY', fish.id);
			}
		} else {
			commit('ADD_FISH_TO_CART', fish);
		}
	},
	removeFishFromCart({ commit }, id) {
		commit('REMOVE_FISH_FROM_CART', id);
	},

	addOneQuantityToBuy({ commit }, id) {
		commit('ADD_ONE_QUANTITY_TO_BUY', id);
	},
	removeOneQuantityToBuy({ commit }, id) {
		commit('REMOVE_ONE_QUANTITY_TO_BUY', id);
	},
};
