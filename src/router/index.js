import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Coaching from '../views/Coaching.vue'
import CoachingConsole from '../views/CoachingConsole.vue'
import CoachingCalendar from '../views/CoachingCalendar.vue'
import Sales from '../views/Sales.vue'
import WeeklyCallListPage from '../views/WeeklyCallListPage.vue'
import Customers from '../views/Customers.vue'
import CoacheeList from '../views/CoacheeList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Coaching',
    component: Coaching
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/coaching',
    name: 'Coaching',
    component: Coaching
  },
  {
    name: 'CoachingConsole',
    component: CoachingConsole,
    path: '/coachingconsole'
  },
  {
    name: 'CoachingCalendar',
    component: CoachingCalendar,
    path: '/CoachingCalendar'
  },
  {
    name: 'Sales',
    component: Sales,
    path: '/sales'
  },
  {
    name: 'WeeklyCallListPage',
    component: WeeklyCallListPage,
    path: '/weeklycalls'
  },
  {
    name: 'Customers',
    component: Customers,
    path: '/customers'
  },
  {
    name: 'CoacheeList',
    component: CoacheeList,
    path: '/coacheelist'
  }
]

const router = new VueRouter({
  routes
})

export default router
