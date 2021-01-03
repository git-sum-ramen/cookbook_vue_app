import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Signup from '../views/Signup.vue'
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RecipesIndex from "../views/RecipesIndex.vue";
import RecipesNew from "../views/RecipesNew.vue";
import RecipesShow from "../views/RecipesShow.vue";
import RecipesEdit from "../views/RecipesEdit.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RecipesIndex
  },
  { 
    path: "/logout",
    name: "logout",
    component: Logout 
  },
  { 
    path: "/recipes/new",
    name: "recipes-new",
    component: RecipesNew
  },
  { 
    path: "/recipes/:id",
    name: "recipes-show",
    component: RecipesShow
  },
  {
    path: "/recipes/:id/edit",
    name: "recipes-edit",
    component: RecipesEdit
  },
  { 
    path: "/recipes",
    name: "recipes-index",
    component: RecipesIndex
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  { path: "/login",
    name: "login",
    component: Login 
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
