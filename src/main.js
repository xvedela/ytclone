import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import './assets/main.css'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BECKEND_API_BASE_URL;

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')



