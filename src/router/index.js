import { createRouter, createWebHistory } from 'vue-router'
import NumberListView from '../views/NumberListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'number-list',
      component: NumberListView,
    },
    {
      path: '/number/:number',
      name: 'number-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
