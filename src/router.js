import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Search.vue'),
    },
    {
      path: '/how-to',
      name: 'how-to',
      component: () => import(/* webpackChunkName: "how-to" */ './views/HowTo.vue'),
    },
    {
      path: '/wish-list',
      name: 'wish-list',
      component: () => import(/* webpackChunkName: "add-lottery" */ './views/WishList.vue'),
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: () => import(/* webpackChunkName: "inventory" */ './views/Forecast.vue'),
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import(/* webpackChunkName: "inventory" */ './views/Recommend.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import(/* webpackChunkName: "inventory" */ './views/History.vue'),
    },
  ],
});
