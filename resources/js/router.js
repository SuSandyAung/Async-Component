import VueRouter from 'vue-router'
import Vue from "vue";
import home from './components/Home.vue'
Vue.component('home',home);


const asyncComponent = () => import (/* webpackChunkName: "async-one" */'./components/ExampleComponent.vue');

const asyncComponent1 = () => import (/* webpackChunkName: "async-two" */'./components/AsyncComponent.vue');


 const routes = [
      {
         path: "/",
         component: home 
      },
     
      { 
        path: "/async", 
        component: asyncComponent

      },
      { 
        path: "/async1",
        component: asyncComponent1

      },
     
  ]

  const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});




// });

export default router