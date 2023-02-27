
const videosModule = {
    namespaced: true,

    state(){
        return{        
            subscribed: [],
            videos: [
                {category:"gaming", name: "gaming name", date: "2 days ago", uploader: "KostuMa",},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", },
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", },
                {category:"gaming", name: "gaming name", date: "2 days ago", uploader: "KostuMa", },
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", },
                {category:"horror", name: "horror name", date: "2 days ago", uploader: "KostuMa", },
                {category:"anime", name: "anime name", date: "2 days ago", uploader: "KostuMa", },
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "KostuMa", },
                {category:"dc", name: "dc name", date: "2 days ago", uploader: "KostuMa", },
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "KostuMa", },
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "KostuMa", },
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", },
                {category:"manga", name: "manga name", date: "2 days ago", uploader: "KostuMa", },
                {category:"horror", name: "horror name", date: "2 days ago", uploader: "KostuMa", },
                {category:"music", name: "music name", date: "2 days ago", uploader: "KostuMa", },
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", },
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", },
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", },
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", },
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", },
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", },
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", },
            
         
            ]
        
        }
    },

    getters:{
        videos(state){
            return state.videos
        },
    }
}

export default videosModule