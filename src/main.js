import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import './assets/main.css'
import axios from 'axios'
axios.defaults.baseURL = 'https://items.magischer.de/api';


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')



