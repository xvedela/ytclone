const categoryModule ={
    
    namespaced: true,
    state(){
        return{
            token:null,
            category_id:[]
        }
    },
    getters:{
        info(state) {
            return state.category_id
        },
        getApiUrl: (state) => {
            return 'https://items.magischer.de/api/categories'
    },


},
}

export default categoryModule