
require('./bootstrap');

window.Vue = require('vue');

import Vue from "vue";
import VueRouter from "vue-router";
import VueAxios from 'vue-axios'
import router from './router'
import Index from './index.vue'


Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.router = router
Vue.config.productionTip = false;

Vue.component('index', Index)


// const router = new VueRouter({
//     routes: [
//         { path: "/", component: home },
     
       
//     ]
// });

const app = new Vue({
    el: '#app',
    router,
    component: {
        Index,
       
    },
  //   template:`<div>
  //   <router-view></router-view>
  // </div>`

});

// const app = new Vue({
//     el: '#app',
//     router,
//     template: `<div>
//     <router-link to="/">/home</router-link>
//     <router-link to="async">/async</router-link>
//     <router-link to="async1">/async1</router-link>
//     <router-view></router-view>
//   </div>`
// });