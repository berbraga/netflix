import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/series',
        name: 'Series',

        component: function () {
          return import(/* webpackChunkName: "series" */ '../views/Series.vue')
        }
      },
      {
        path: '/movies',
        name: 'Movies',

        component: function () {
          return import(/* webpackChunkName: "movies" */ '../views/Movies.vue')
        }
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
