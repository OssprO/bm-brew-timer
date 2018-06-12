import Vue from 'vue'
import Router from 'vue-router'
import Timers from '@/components/Timers'
import Timer from '@/components/Timer'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timers',
      component: Timers
    },
    {
      path: '/timer/:id',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/new',
      name: 'New',
      component: New
    }
  ],
  mode: 'history'}
)
