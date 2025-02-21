import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProductPage from './views/ProductPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductPage }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
