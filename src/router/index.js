import { createRouter, createWebHistory, RouterView } from "vue-router";
import Profilelogo  from "../components/vueFiles/Profilelogo.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/vuefiles/Profilelogo.vue"),
      },
      {
        path: "/Log%20In",
        name: "Register",
        component: () => import("../components/vueFiles/Login.vue"),
      },
      {
        path: "/Sign%20Up",
        name: "Signup",
        component: () => import("../components/vuefiles/Signup.vue"),
      },
    ]
})

export default router;