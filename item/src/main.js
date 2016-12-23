import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import $ from 'jquery';

import home from './components/home/home.vue';
import homecood from './components/homecood/homecood.vue';
import homesearch from './components/homesearch/homesearch.vue';
import Homelife from './components/Homelife/Homelife.vue';
import zajin from './components/zajin/zajin.vue';
import classify from './components/classify/classify.vue';
import cart from './components/cart/cart.vue';
import my from './components/my/my.vue';
import mybasics from './components/mybasics/mybasics.vue';
import mymore from './components/mymore/mymore.vue';
import myvip from './components/myvip/myvip.vue';
import myaddress from './components/myaddress/myaddress.vue';
import commoditydetail from './components/commoditydetail/commoditydetail.vue';

const router = new VueRouter({      
  base: __dirname,
  routes: [
    { path: '/home/', component: home,},
	    { path: '/home/homecood', component: homecood}, 
	    { path: '/home/homesearch', component: homesearch}, 
	    { path: '/home/Homelife', component: Homelife}, 
    { path: '/zajin', component: zajin },
    { path: '/classify', component: classify },
    { path: '/cart', component: cart },
    { path: '/my', component: my },
	    { path: '/my/mybasics', component: mybasics },
	    { path: '/my/mymore', component: mymore },
	    { path: '/my/myvip', component: myvip },
      { path: '/my/myaddress', component: myaddress },
    { path: '/commoditydetail', component: commoditydetail },
  ]
})
// 刷新页面时返回指定路由页面组件
router.push("home");

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
