import {createRouter, createWebHistory} from 'vue-router'

import GymansticsOperator from './views/GymnasticsOperator.vue'
import GymansticsScoreBoard from './views/GymnasticsScoreBoard.vue'
import HandballOperator from './views/HandballOperator.vue'
import HandballUserView from './views/HandballUserView.vue'

const routes = [
  {
    name: 'GymnasticsOperator',
    path: '/GymnasticsOperator',
    component: GymansticsOperator
  },
  {
    name: 'GymnasticScoreBoard',
    path: '/GymnasticsScoreBoard',
    component: GymansticsScoreBoard
  },
  {
    name: 'HandballOperator',
    path: '/HandballOperator',
    component: HandballOperator
  },
  {
    name: 'HandballUserView',
    path: '/HandballUserView',
    component: HandballUserView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})