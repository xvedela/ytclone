const iconsModule = {
    namespaced: true,

    state() {
        return {
            icons:[
                { loc: "https://cdn-icons-png.flaticon.com/512/60/60817.png", name: "Home" },
                { loc: "https://static.thenounproject.com/png/456181-200.png", name: "Subscriptions" },
                { loc: "https://static.thenounproject.com/png/2481186-200.png", name: "Library" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "History" },
                { loc: "https://static.thenounproject.com/png/1261644-200.png", name: "Your videos" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "Watch Later" },
                { loc: "https://cdn4.iconfinder.com/data/icons/interface-vol-3/16/time-watch-later-clock-512.png", name: "Your videos" },
                { loc: "https://cdn-icons-png.flaticon.com/512/25/25297.png", name: "Liked videos" },
            ],
            
            smallIcons:[
                { loc: "https://cdn-icons-png.flaticon.com/512/60/60817.png", name: "Home" },
                { loc: "https://static.thenounproject.com/png/456181-200.png", name: "Subscriptions" },
                { loc: "https://static.thenounproject.com/png/2481186-200.png", name: "Library" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "History" },
                { loc: "https://static.thenounproject.com/png/1261644-200.png", name: "Your videos" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "Watch Later" },
                { loc: "https://cdn4.iconfinder.com/data/icons/interface-vol-3/16/time-watch-later-clock-512.png", name: "Your videos" },
                { loc: "https://cdn-icons-png.flaticon.com/512/25/25297.png", name: "Liked videos" },
            ],
        }
    },

    getters: {
        icons(state) {
            return state.icons
        }
    }
}

export default iconsModule