//  actions
export const state = () => ({
	isMobile: false,
});

//  actions
export const actions = {};

//  mutations
export const mutations = {
	chgPlatform(state, payload) {
		state.isMobile = payload;
	},
};
