import videosModule from "..//modules/videosModule";
import iconsModule from "../modules/iconsModule";
import menuModule from "../modules/menuModule";
import subscriptionsModule from "../modules/subscriptionsModule";
import categoriesModule from "../modules/categoriesModule";

export default function youtubePlugin(store) {
    
    store.registerModule("ytbe", videosModule)
    store.registerModule("icons", iconsModule)
    store.registerModule("menu", menuModule)
    store.registerModule("subscriptions", subscriptionsModule)
    store.registerModule("categories", categoriesModule)
}

