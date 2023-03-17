const categoryModule = {

    namespaced: true,
    state() {
        return {
            token: null,
            category_id: []
        }
    },
    getters: {
        info(state) {
            return state.category_id
        },
        getApiUrl: (state) => {
            return 'https://items.magischer.de/api/categories'
        },
    },
    mutations: {
        SAVE_TOKEN(state, payload) {
            state.token = payload
        }
    }, actions: {
        token({ commit }, payload) {
            commit('SAVE_TOKEN', payload.token)
        }
    }

}

export default categoryModule