const categoriesModule = {
    namespaced: true,

    state() {
        return {
            activeCategory: "sports",

            categories: [
                { category: "სპორტი" },
                { category: "თამაშები" },
                { category: "ფილმები" },
                { category: "საშინელებათა" },
                { category: "ანიმეები" },
                { category: "მარველი" },
                { category: "დისი" },
                { category: "მანგა" },
                { category: "მუსიკა" },


            ]

        }
    },

    mutations: {
        selectCategory(state, payload) {
            return state.activeCategory = payload

        }
    },

    getters: {
        categories(state) {
            return state.categories
        },
        activeCategory(state) {
            return state.activeCategory
        }

    }
}

export default categoriesModule