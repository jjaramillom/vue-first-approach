import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pets/:species/:id',
    name: 'Pets',
    // this generates a separate chunk (Pets.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Pets.vue'),
  },
  {
    path: '/cats',
    name: 'Cats',
    component: () => import('../views/Cats.vue'),
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import('../views/Dogs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
