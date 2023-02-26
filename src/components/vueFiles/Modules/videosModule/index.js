
const videosModule = {
    namespaced: true,

    state(){
        return{        
            subscribed: [],
            videos: [
                {category:"gaming", name: "gaming name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg", uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"sports", name: "sports name", date: "12 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"gaming", name: "gaming name", date: "9 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"horror", name: "horror name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"anime", name: "anime name", date: "1 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"dc", name: "dc name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"marvel", name: "marvel name", date: "3 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"manga", name: "manga name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"horror", name: "horror name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"music", name: "music name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"sports", name: "sports name", date: "7 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
                {category:"movies", name: "movies name", date: "3 days ago", uploader: "KostuMa", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s68-c-k-c0x00ffffff-no-rj"},
            
         
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