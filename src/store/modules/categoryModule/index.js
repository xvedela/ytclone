import axios from "axios";

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

const categoryModule = {

    namespaced: true,
    state() {
        return {
            categories: null,
        }
    },
    getters: {
        categories: (state) => {
            return categories.map((c) => ({ ...c, editing: false, deleting: false }))
        }
    },
    mutations: {
        SAVE_CATEGORIES(state, categories) {
            state.categories = categories;
        }
    }, actions: {
        async getCategories({ commit }) {
            const res = await axios.get(`/categories`);
            if (res.data.success) {
                commit("SAVE_CATEGORIES", res.data.data);
            }
        },
        async deleteCategory({ dispatch }, id) {
            await axios.delete(`/categories/${id}`);
            dispatch("getCategories");
        },
        async addCategory({ dispatch }, name) {
            await axios.post(`/categories`, { name, type: "news" });
            dispatch("getCategories");
        },
    },

}

export default categoryModule