import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Freinds from '../views/Freinds.vue'
import portfolio from '../views/portfolio.vue'
import blog from '../views/products.vue'
import culcolater from '../views/culcolater'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio
  },
  {
    path: "/Freinds",
    name: "Freinds",
    component: Freinds
  },
  {
    path: "/products",
    name: "products",
    component: blog
  },
  {
    path: "/culcolater",
    name: "culcolater",
    component: culcolater
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
