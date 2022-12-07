//  actions
export const state = () => ({
	loginState: false,
});

//  actions
export const actions = {};

//  mutations
export const mutations = {
	login(state, payload) {
		state.loginState = payload;
	},
};
