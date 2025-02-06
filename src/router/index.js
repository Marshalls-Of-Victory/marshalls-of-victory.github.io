import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { reactive } from 'vue';
// import {translate_1} from '/js/translator_v1.0.js'
// import {translate_2} from '/js/translator_v2.0.js'
import EventHandler from '@/assets/EventHandler';




const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/links',
      name: 'links',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LinksView.vue')
    },
    {
      path: '/releases',
      name: 'releases',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReleasesView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StatisticsView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'home', component: HomeView }
  ]
})

router.afterEach((to, from) => {
  console.log('Navigated to:', to.path);
  EventHandler.emit('routeChanged', { from: from.path, to: to.path });
  function handleHash() {
    let hash = window.location.hash;

    // Check if the hash is not empty
    if (hash) {
      let hashArr = window.location.toString().split('#');
      // Remove the '#' character to get just the ID
      const id = hashArr[hashArr.length - 1]
      console.warn(id)
      let elm = document.getElementById(id);
      if (elm) {
        elm.scrollIntoView();
      }
      
    } else {
      window.scrollTo(0, 0);
    }

    
}
  setTimeout(() => {
    handleHash();
  }, 30);
  
  

  // router.app.config.globalProperties.$emitGlobalEvent({ from: from.path, to: to.path });
});


export default router
