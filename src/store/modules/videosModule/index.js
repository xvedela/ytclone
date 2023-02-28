
const videosModule = {
    namespaced: true,

    state(){
        return{        
            subscribed: [],
            videos: [
                {category:"თამაშები", name: "თამაშები name", date: "3 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/bfOLKBeUwLE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDWIVQykyz6j_l_xRM_2UUqs--rw"},
                {category:"სპორტი", name: "სპორტი name", date: "4 დღის წინ", uploader: "KostuMa",  img: ""},
                {category:"ფილმები", name: "ფილმები name", date: "5 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"თამაშები", name: "თამაშები name", date: "6 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"ფილმები", name: "ფილმები name", date: "3  დღის წინ", uploader: "KostuMa", img: ""},
                {category:"საშინელებათა", name: "საშინელებათა name", date: "2 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"ანიმე", name: "ანიმე name", date: "8 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"მარველი", name: "მარველი name", date: "5 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"დისი", name: "დისი name", date: " დღის წინ", uploader: "KostuMa", img: ""},
                {category:"მარველი", name: "მარველი name", date: "6 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"მარველი", name: "მარველი name", date: "1 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"სპორტი", name: "სპორტი name", date: "19 საათის წინ", uploader: "KostuMa", img: ""},
                {category:"საშინელებათა", name: "საშინელებათა name", date: " დღის წინ", uploader: "KostuMa", img: ""},
                {category:"მუსიკა", name: "მუსიკა name", date: " 11 საათის წინ", uploader: "KostuMa", img: ""},
                {category:"სპორტი", name: "სპორტი name", date: "33 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"სპორტი", name: "სპორტი name", date: "3 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"სპორტი", name: "სპორტი name", date: "4 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"ფილმები", name: "ფილმები name", date: "2 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"ფილმები", name: "ფილმები name", date: "6 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"ფილმები", name: "ფილმები name", date: "1 დღის წინ", uploader: "KostuMa", img: ""},
                {category:"ფილმები", name: "ფილმები name", date: "7 დღის წინ", uploader: "KostuMa", img: ""},
            
         
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