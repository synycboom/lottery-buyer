import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue'),
    },
    {
      path: '/how-to',
      name: 'how-to',
      component: () => import(/* webpackChunkName: "how-to" */ './views/HowTo.vue'),
    },
    {
      path: '/add-lottery',
      name: 'add-lottery',
      component: () => import(/* webpackChunkName: "add-lottery" */ './views/AddLottery.vue'),
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import(/* webpackChunkName: "inventory" */ './views/Inventory.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "inventory" */ './views/Order.vue'),
    },
  ],
});
