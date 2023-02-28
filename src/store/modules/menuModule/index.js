const menuModule = {
    namespaced: true,
    
    state(){
        return{
            menuOn: false,
        }
    },

    getters:{
        menuOn(state){
            return state.menuOn
        },
        gridTemplate(state) {
            if(state.menuOn){
                return "1fr 1fr 1fr 1fr"
            }
            else{
                return "1fr 1fr 1fr 1fr 1fr"
            }
        }
    }
}

export default menuModule