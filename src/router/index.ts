import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import Search from '../components/UserSearch.vue'
import More from '../pages/MorePage.vue'
import Error404 from '../components/Error-404.vue'
import RepoDetail from '../pages/RepoDetail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error-404',
    component: Error404
  },

  {
    path: '/repo/:repoId',
    name: 'RepoDetail',
    component: RepoDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
