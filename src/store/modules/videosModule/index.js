
const videosModule = {
    namespaced: true,

    state() {
        return {
            subscribed: [],
            videos: [
                { category: "თამაშები", name: "CHAT GPT", date: "3 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/JTxsNm9IdYU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpmE3k-5q3dOYJgIBdvyMFNqXQ6A" },
                { category: "სპორტი", name: "Sons Of The Forest😱", date: "4 დღის წინ", uploader: "SlenderBM", img: "https://i.ytimg.com/vi/ekjlWWGo4jM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeR5_-IlwAE7VvebhZSWAACxMM_g" },
                { category: "ფილმები", name: "რამდენ სენდვიჩს შეჭამ?", date: "5 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/JFMK7ZQ6u9U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXKghWsIrhx6mIJGm_pqntgv0_wA" },
                { category: "მუსიკა", name: "Musuc", date: "6 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/FngHeh5GMjk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhpIBMofzAP&rs=AOn4CLB2dJlCLj3A-yhLL3_N0K_a43L9vg" },
                { category: "ფილმები", name: "MrBeast Cures Blindness", date: "3  დღის წინ", uploader: "MeatCanyon", img: "https://i.ytimg.com/vi/3VRKJthNmWw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH-P2X_BkwBopno9KqKkyyHFShnQ" },
                { category: "საშინელებათა", name: "ტიკტოკის განხილვა", date: "2 დღის წინ", uploader: "iTzGabunia", img: "https://i.ytimg.com/vi/woWA-vTBCfQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnkFTVPPVkqbHne-DBoGcZy6bjtA" },
                { category: "ანიმე", name: "the matric has you", date: "8 დღის წინ", uploader: "", img: "https://i.ytimg.com/vi/T-FOtgk4CSA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbdzqrxMGcWD-YjwTlZNcdCMd7KA" },
                { category: "მარველი", name: "don't move", date: "5 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/3AkJNS2GWpk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsz0G3yjmNnDo06q_3n-m57ZvkHw" },
                { category: "დისი", name: "cheapest pc", date: " დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/tLkS38uoKyo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYIpyisPIDHhkta4Mo2H4bCgroLA" },
                { category: "მარველი", name: "zootopia animation", date: "6 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/8J2L-tluwU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTMAqL9sCHWc4QSE2VB1Ip_z1Wxg" },
                { category: "მარველი", name: "ARIZONA ROLE PLAY", date: "1 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/vECWds1It7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADKRDuvacR7AEnXq6j4hNikKHKIw" },
                { category: "სპორტი", name: "ფეხბურთის განხოლვა", date: "19 საათის წინ", uploader: "Octopus", img: "https://i.ytimg.com/vi/0No0TLDfkS0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk0aJ8OEmkBsx6VqKJjmetTvodow" },
                { category: "საშინელებათა", name: "CS GO რადავაგე?", date: " დღის წინ", uploader: "GI2GI", img: "https://i.ytimg.com/vi/xj2nY54YOk8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_7Q5c67kFzXWIzHMIG-bfJTqlmA" },
                { category: "მუსიკა", name: "OUTLAST", date: " 11 საათის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/XR5k9Aec6IY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzrSYyzRp3vCl0tzlmiGD1EIfr4A" },
                { category: "სპორტი", name: "ძირს რუსული ჩექმა", date: "33 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/Bd24-8qqlts/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAB4Wg3bnMIMMSrnZ52Bjh4FBM1HQ" },
                { category: "სპორტი", name: "Music", date: "3 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/bGbJUorjokQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoKzAP&rs=AOn4CLAj9iPQhWkzZ-DJZtQmC_QwS2DSOw" },
                { category: "სპორტი", name: "why are TUPLES even a thing?", date: "4 დღის წინ", uploader: "NetworkChuck", img: "https://i.ytimg.com/vi/fR_D_KIAYrE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwblCEwJkECCDHaND9EmCvv2FWmg" },
                { category: "ფილმები", name: "სასაცილო ვიდეოების განხილვა", date: "2 დღის წინ", uploader: "Hungryman", img: "https://i.ytimg.com/vi/uMjqX-2-VRk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-DEevC2wU9IWA9pQF_BEc-v1HVw" },
                { category: "ფილმები", name: "CS GO spins", date: "6 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/-kjDZH4_ABE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhIIDoofzAP&rs=AOn4CLBLGLs3Mp9Rh3Zzmb2oNRrqpad-QA" },
                { category: "ფილმები", name: "რადავაგდეთ?", date: "1 დღის წინ", uploader: "KostuMa", img: "https://i.ytimg.com/vi/D79l0pGLMHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuyhfOkwjGum6zltURmtED1q8oPg" },
                { category: "ფილმები", name: "ფილმები name", date: "7 დღის წინ", uploader: "ხვიჩა კვარაცხელია", img: "https://i.ytimg.com/vi/ZlM924lkbB4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4yQUfqu3nMaHsYreDEMqUl0tIlw" },


            ]

        }
    },

    getters: {
        videos(state) {
            return state.videos
        },
        filteredVideos(state) {

            if (state.searchString !== null) {
                return state.videos.filter(video => video.name.includes(state.searchString))
            } else {
                return state.videos
            }
        }
    },
    mutations: {
        UPDATE_SEARCH_STRING(state, payload) {
            payload - (payload == "") ? null : payload
            state.searchString = payload
        }
    },
    updateSearchString({ commit }, payload) {
        commit('UPDATE_SEARCH_STRING', payload)
    }

}

export default videosModule