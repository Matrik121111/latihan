import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import CrudHome from '@/views/Crud/Home.vue'
import CrudTambah from '@/views/Crud/Tambah.vue'
import CrudUbah from '@/views/Crud/Ubah.vue'
import CardHome from '@/views/Card/Home.vue'
import InfiniteHome from '@/views/Infinite/Home.vue'
import ApiHome from '@/views/Api/Home.vue'

Vue.use(VueRouter)

const routes = [
  // router Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // router CRUD
  {
    path: '/crud/home',
    name: 'CrudHome',
    component: CrudHome
  },
  {
    path: '/crud/tambah',
    name: 'CrudTambah',
    component: CrudTambah
  },
  {
    path: '/crud/ubah',
    name: 'CrudUbah',
    component: CrudUbah
  },

  // router view Card
  {
    path: '/card/home',
    name: 'CardHome',
    component: CardHome
  },

  // router Infinite Scroll 
  {
    path: '/infinite/home',
    name: 'InfiniteHome',
    component: InfiniteHome
  },

  // router API Axios
  {
    path: '/api/home',
    name: 'ApiHome',
    component: ApiHome
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
