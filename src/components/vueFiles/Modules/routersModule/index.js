const routersModule = {

    state() {
        return {
            route: "/"
        }
    },

    mutations: {
        setCurrentRoute(state, route) {
            state.route = route;
        },
    },

    actions: {
        setCurrentRoute({ commit }, route) {
            commit('setCurrentRoute', route);
        },
    },
}

export default routersModule