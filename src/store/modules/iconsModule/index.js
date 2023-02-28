const iconsModule = {
    namespaced: true,

    state() {
        return {
            icons:[
                { loc: "https://cdn-icons-png.flaticon.com/512/60/60817.png", name: "მთავარი" },
                { loc: "https://static.thenounproject.com/png/456181-200.png", name: "გამოწერები" },
                { loc: "https://static.thenounproject.com/png/2481186-200.png", name: "ბიბლიოთეკა" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "ისტორია" },
                { loc: "https://static.thenounproject.com/png/1261644-200.png", name: "თქვენი ვიდეოები" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "მოგვიანებით სანახავი" },
                { loc: "https://cdn-icons-png.flaticon.com/512/25/25297.png", name: "მოწონებული ვიდეოები" },
            ],
            
            smallIcons:[
                { loc: "https://cdn-icons-png.flaticon.com/512/60/60817.png", name: "მთავარი" },
                { loc: "https://static.thenounproject.com/png/456181-200.png", name: "გამომწერები" },
                { loc: "https://static.thenounproject.com/png/2481186-200.png", name: "" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "ისტორია" },
                { loc: "https://static.thenounproject.com/png/1261644-200.png", name: "თქვენი ვიდეოები" },
                { loc: "https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png", name: "მოგვიანებით სანახავი" },
                { loc: "https://cdn4.iconfinder.com/data/icons/interface-vol-3/16/time-watch-later-clock-512.png", name: "თქვენი ვიდეოები" },
                { loc: "https://cdn-icons-png.flaticon.com/512/25/25297.png", name: "დალაიქებული ვიდეოები" },
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