
const videosModule = {
    namespaced: true,

    state(){
        return{        
            subscribed: [],
            videos: [
                {category:"თამაშები", name: "თამაშები name", date: "3 დღის წინ", uploader: "KostuMa",},
                {category:"სპორტი", name: "სპორტი name", date: "4 დღის წინ", uploader: "KostuMa", },
                {category:"ფილმები", name: "ფილმები name", date: "5 დღის წინ", uploader: "KostuMa", },
                {category:"თამაშები", name: "თამაშები name", date: "6 დღის წინ", uploader: "KostuMa", },
                {category:"ფილმები", name: "ფილმები name", date: "3  დღის წინ", uploader: "KostuMa", },
                {category:"საშინელებათა", name: "საშინელებათა name", date: "2 დღის წინ", uploader: "KostuMa", },
                {category:"ანიმე", name: "ანიმე name", date: "8 დღის წინ", uploader: "KostuMa", },
                {category:"მარველი", name: "მარველი name", date: "5 დღის წინ", uploader: "KostuMa", },
                {category:"დისი", name: "დისი name", date: " დღის წინ", uploader: "KostuMa", },
                {category:"მარველი", name: "მარველი name", date: "6 დღის წინ", uploader: "KostuMa", },
                {category:"მარველი", name: "მარველი name", date: "1 დღის წინ", uploader: "KostuMa", },
                {category:"სპორტი", name: "სპორტი name", date: "19 საათის წინ", uploader: "KostuMa", },
                {category:"manga", name: "manga name", date: " დღის წინ", uploader: "KostuMa", },
                {category:"საშინელებათა", name: "საშინელებათა name", date: " დღის წინ", uploader: "KostuMa", },
                {category:"მუსიკა", name: "მუსიკა name", date: " 11 საათის წინ", uploader: "KostuMa", },
                {category:"სპორტი", name: "სპორტი name", date: "33 დღის წინ", uploader: "KostuMa", },
                {category:"სპორტი", name: "სპორტი name", date: "3 დღის წინ", uploader: "KostuMa", },
                {category:"სპორტი", name: "სპორტი name", date: "4 დღის წინ", uploader: "KostuMa", },
                {category:"ფილმები", name: "ფილმები name", date: "2 დღის წინ", uploader: "KostuMa", },
                {category:"ფილმები", name: "ფილმები name", date: "6 დღის წინ", uploader: "KostuMa", },
                {category:"ფილმები", name: "ფილმები name", date: "1 დღის წინ", uploader: "KostuMa", },
                {category:"ფილმები", name: "ფილმები name", date: "7 დღის წინ", uploader: "KostuMa", },
            
         
            ]
        
        }
    },

    getters:{
        videos(state){
            return state.videos
        },
        videos(state) {
            return state.videos
        }
    }
}

export default videosModule