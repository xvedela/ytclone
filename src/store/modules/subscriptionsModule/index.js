const subscriptionsModule = {
    namespaced: true,

    state() {
        return {
            showMore: false,
            subscribed: [
                { img: "https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s88-c-k-c0x00ffffff-no-rj", name: "Dzmas venacvale" },
                { img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman" },
                { img: "https://yt3.ggpht.com/ytc/AL5GRJVBM9wwLAJbWv_SKNsUQCbw-oL2tnrkPCiemLmS-Q=s88-c-k-c0x00ffffff-no-rj", name: "ucnauri arxi" },
                { img: "https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s88-c-k-c0x00ffffff-no-rj", name: "Dzmas venacvale" },
                { img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman" },
                { img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman" },
                { img: "https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s88-c-k-c0x00ffffff-no-rj", name: "Dzmas venacvale" },
                { img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman" },
                { img: "https://yt3.ggpht.com/ytc/AL5GRJVBM9wwLAJbWv_SKNsUQCbw-oL2tnrkPCiemLmS-Q=s88-c-k-c0x00ffffff-no-rj", name: "ucnauri arxi" },
                { img: "https://yt3.ggpht.com/ytc/AL5GRJX74HFQTDSykyTzTmNi6kK5U2axwHkoU-P-3WwtnQ=s88-c-k-c0x00ffffff-no-rj", name: "Dzmas venacvale" },
                { img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman" },
                { img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman" },
            ]
        
        }
    },
    getters: {
        subscribedPeople(state) {
            return state.subscribed
        },
        showMore(state) {
            return state.showMore
        },
        hiddenChannels(state) {
            return state.subscribed.length - 5
        }

    }

}

export default subscriptionsModule