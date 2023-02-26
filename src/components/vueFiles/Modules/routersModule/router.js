import { createRouter, createWebHistory } from 'vue-router';
const history = () => import("../../views/History.vue")

const routes = [
    { path: '/history', component: history },

  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;