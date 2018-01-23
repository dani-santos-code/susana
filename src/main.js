import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import Sticky from 'vue-sticky-directive'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'

import App from '@/components/App'
import Home from '@/components/Home'
import Screenings from '@/components/Screenings'
import Press from '@/components/Press'
import Msa from '@/components/Msa'


Vue.use(Sticky)
Vue.use(vueSmoothScroll)
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)

var routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Screenings',
    name: 'screenings',
    component: Screenings
  },
  {
    path: '/Press',
    name: 'press',
    component: Press
  },
  {
    path: '/about',
    name: 'About',
    component: Home
  },
  {
    path: '/Msa',
    name: 'msa',
    component: Msa
  },
];

const router = new VueRouter({
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
  },
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
