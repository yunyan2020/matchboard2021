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
  addScore(state, team) {
    switch(team) {
      case 'hometeam':
        state.match.score.hometeam = state.match.score.hometeam + 1; 
        this.dispatch('saveStateToStorage');
        break;
      case 'awayteam':
        state.match.score.awayteam = state.match.score.awayteam + 1; 
        this.dispatch('saveStateToStorage');
        break;  
    }
  },
  removeScore(state, team) {
    switch(team) {
      case 'hometeam':
        state.match.score.hometeam = state.match.score.hometeam - 1; 
        this.dispatch('saveStateToStorage');
        break;
      case 'awayteam':
        state.match.score.awayteam = state.match.score.awayteam - 1; 
        this.dispatch('saveStateToStorage');
        break;  
    }
  },
  addTeamScore(state, score){
    state.scores.push(score)
    this.dispatch('saveStateToStorage') // put last in any mutation that changes state that should be kept between reloads
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
  },
  setMatchEventTime(state,time){
    for(let i=0;i<state.matchEvents.length;i++){
      if (state.matchEvents[i].currentMatchEvent == true){
        state.matchEvents[i].time = time
        break;
      }
    }
    this.dispatch('saveStateToStorage')
  },
  setNextMatchEvent(state){
    let i = 0
    let foundAt = -1
    for(let event of state.matchEvents){
      if(event.currentMatchEvent){
        foundAt = i
      }
      event.currentMatchEvent = false
      i++
    }
    if(foundAt > -1 && state.matchEvents[foundAt+1]){
      state.matchEvents[foundAt+1].currentMatchEvent = true
    }else{
      // match is not started or match is over?
      // state.matchEvents[0].currentMatchEvent = true // toggles back to first.. maybe not perfect
    }
    
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

