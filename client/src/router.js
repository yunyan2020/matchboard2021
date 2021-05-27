import {createRouter, createWebHistory} from 'vue-router'

import GymansticsOperator from './views/GymnasticsOperator.vue'
import GymansticsScoreBoard from './views/GymnasticsScoreBoard.vue'
import HandballOperator from './views/HandballOperator.vue'
import HandballOperator2 from './views/HandballOperator2.vue'
import HandballScoreBoard from './views/HandballScoreBoard.vue'

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
    name: 'HandballOperator2',
    path: '/HandballOperator2',
    component: HandballOperator2
  },
  {
    name: 'HandballScoreBoard',
    path: '/HandballScoreBoard',
    component: HandballScoreBoard
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})