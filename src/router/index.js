import { createRouter, createWebHistory, RouterView } from "vue-router";
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
        component: () => import("../components/vueFiles/Register.vue"),
      },
      {
        path: "/category",
        name: "Category",
        component: () => import("../components/vueFiles/category.vue"),
      },
    ]
})


export default router;