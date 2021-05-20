import { createStore } from 'vuex'

// inital State is set in this file:
import initalState from '/src/storeInitialState.js'

// state is initialized and loaded in the restoreStateFromStorage action, modify initial state in the initialState.js file
// NOTE that you must clear localStorage for the initalState to update
const state = {}

//mutates state (USE THIS TO CHANGE ANY VALUES IN state!!! No direct changes in the components!)
const mutations = {
  restoreState(state, stateToRestore){
    for(let key in stateToRestore){
      state[key] = stateToRestore[key]
    }
  },
  addTeamScore(state, score){
    state.scores.push(score)
    this.dispatch('saveStateToStorage') // put last in any mutation that changes state that should be kept between reloads
  },
  removeTeamLatestScore(state, teamId){
    for(let i=state.scores.length; i>0; i--){
      let score = state.scores[i-1]      
      if(score.teamId !== undefined && score.teamId === teamId){
        state.scores.splice(i-1,1)
        break;
      }
    }
    this.dispatch('saveStateToStorage')
  },
  addPenalty(state, penalty) {
    console.log(state, penalty)
    this.dispatch('saveStateToStorage')
  }
}

//async network requests
const actions = {
  saveStateToStorage({state}){
    localStorage.setItem('store', JSON.stringify(state));
  },
  restoreStateFromStorage({commit}){
    let savedState = localStorage.getItem('store')
    if(savedState){
      savedState = JSON.parse(savedState)
    }else{
      savedState = initalState
    }
    commit('restoreState', savedState)
  }
}

export default createStore({ state, mutations, actions })

