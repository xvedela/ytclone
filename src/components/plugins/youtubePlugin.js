import videosModule from "../vueFiles/modules/videosModule";
import iconsModule from "../vueFiles/modules/iconsModule";
import menuModule from "../vueFiles/modules/menuModule";
import subscriptionsModule from "../vueFiles/modules/subscriptionsModule";
import routersModule from "../vueFiles/modules/routersModule";
import categoriesModule from "../vueFiles/modules/categoriesModule";

export default function youtubePlugin(store){
    
    store.registerModule("Youtube",videosModule)
    store.registerModule("icons",iconsModule)
    store.registerModule("menu",menuModule)
    store.registerModule("subscriptions",subscriptionsModule)
    store.registerModule("routers",routersModule)
    store.registerModule("categories",categoriesModule)
}

