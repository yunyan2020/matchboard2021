import { createStore } from 'vuex'

export default createStore({
  state: {
    // penaltiesHash: {},
    players:[],
    match:{}
  },
  mutations: {
    restoreState(state, stateToRestore){
      for(let key in stateToRestore){
        state[key] = stateToRestore[key]
      }
    },
    addPenalty(state, penalty) {
      console.log(state, penalty)
      // state.match.matchEvents.penalties.push(penalty)

      

    }
    // updatePenaltiesHash(state) {
    //   state.penaltiesHash = {}
    //   for (let matchEvent of state.match.matchEvents) {
    //     for (let penalty of matchEvent.penalties) {
    //       state.penaltiesHash[penalty.id] = penalty
    //       state.penaltiesHash[penalty.id].matchEvent = matchEvent

          
    //     }
    //   }
    // },
  },
  actions: {
    saveStateToStorage({state}){
      localStorage.setItem('store', JSON.stringify(state));
    },
    restoreStateFromStorage({commit}, initState){
      let savedState = localStorage.getItem('store')
      if(savedState){
        savedState = JSON.parse(savedState)
      }else{
        savedState = initState
      }
      commit('restoreState', savedState)
    }
  },
  modules: {
  }
})
