import { createStore } from 'vuex'

// inital State is set in this file:
import initalState from '/src/storeInitialState.js'

// state is initialized and loaded in the restoreStateFromStorage action, modify initial state in the initialState.js file
// NOTE that you must clear localStorage for the initalState to update
const state = {}

//mutates state (USE THIS TO CHANGE ANY VALUES IN state!!! No direct changes in the components!)
const mutations = {
  startTimer(state) {
    state.startTimer = true;
    this.dispatch('saveStateToStorage');
  },
  restoreState(state, stateToRestore){
    for(let key in stateToRestore){
      state[key] = stateToRestore[key]
    }
  },
  setActionType(state, arg) {
    /* console.log(arg.team, arg.type); */
    console.log(arg.team)
    if(state.chosenPlayer && !state.chosenAction) {
      switch(arg.type) {
        case '+':
          if(arg.team == 'hometeam') {
            state.match.score.hometeam = state.match.score.hometeam + 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          } else if(arg.team == 'awayteam') {
            state.match.score.awayteam = state.match.score.awayteam + 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          }
          /* break; */
        case '-':
          if(arg.team == 'hometeam') {
            state.match.score.hometeam = state.match.score.hometeam - 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          } else if(arg.team == 'awayteam') {
            state.match.score.awayteam = state.match.score.awayteam - 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          }
          /* break; */
        case 'Varning':
          if(state.chosenPlayer.Warnings == 0) {
            state.chosenPlayer.Warnings = state.chosenPlayer.Warnings + 1;
            let element = document.getElementsByClassName(`warning-1-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(state.chosenPlayer.Warnings == 1) {
            state.chosenPlayer.Warnings = state.chosenPlayer.Warnings + 1;
            let element = document.getElementsByClassName(`warning-2-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(state.chosenPlayer.Warnings == 2) {
            state.chosenPlayer.Warnings = state.chosenPlayer.Warnings + 1;
            let element = document.getElementsByClassName(`warning-3-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            /* this.sentOffs.push(state.chosenPlayer);
            state.chosenPlayer.SentOffs = state.chosenPlayer.SentOffs + 1; */
            element = document.getElementsByClassName(`sentoff-1-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            this.playerlist.splice((this.playerlist.indexOf(state.chosenPlayer)), 1);
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }
          /* break; */
        case 'Gult kort':
          if(state.chosenPlayer.Warnings == 0) {
            state.chosenPlayer.Warnings = state.chosenPlayer.Warnings + 1;
            let element = document.getElementsByClassName(`warning-1-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(state.chosenPlayer.Warnings == 1) {
            state.chosenPlayer.Warnings = state.chosenPlayer.Warnings + 1;
            let element = document.getElementsByClassName(`warning-2-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(state.chosenPlayer.Warnings == 2) {
            state.chosenPlayer.Warnings = state.chosenPlayer.Warnings + 1;
            let element = document.getElementsByClassName(`warning-3-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            /* this.sentOffs.push(state.chosenPlayer);
            state.chosenPlayer.SentOffs = state.chosenPlayer.SentOffs + 1; */
            element = document.getElementsByClassName(`sentoff-1-${state.chosenPlayer.Name}`)[0];
            element.classList.add('marked');
            /* this.playerlist.splice((this.playerlist.indexOf(state.chosenPlayer)), 1); */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }
        case 'Rött kort':
          /* get time */
          /* state.match.penalties.sentoffs.push(state.chosenPlayer); */
          if(arg.team == 'hometeam') {
            /* console.log(arg.team); */
            state.match.penalties.disqed.home.push(state.chosenPlayer);
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          } else if(arg.team == 'awayteam') {
            /* console.log(arg.team); */
            state.match.penalties.disqed.away.push(state.chosenPlayer);
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          }    
        case 'Utvisning':
          /* get time */
          if(arg.team == 'hometeam') {
            /* console.log(arg.team); */
            state.match.penalties.sentoffs.home.push(state.chosenPlayer);
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          } else if(arg.team == 'awayteam') {
            /* console.log(arg.team); */
            state.match.penalties.sentoffs.away.push(state.chosenPlayer);
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
            break;
          }
      }
    } else {
      state.chosenAction = arg.type;
      
      this.dispatch('saveStateToStorage');
    }
  },
  setPlayer(state, arg) {
    if(state.chosenAction && !state.chosenPlayer) {
      switch(state.chosenAction) {
        case '+':
          if(arg.team == 'hometeam') {
            state.chosenPlayer = arg.player;
            state.match.score.hometeam = state.match.score.hometeam + 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
          }else if(arg.team == 'awayteam') {
            state.chosenPlayer = arg.player;
            state.match.score.awayteam = state.match.score.awayteam + 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
          }
          break;
        case '-':
          if(arg.team == 'hometeam') {
            state.chosenPlayer = arg.player;
            state.match.score.hometeam = state.match.score.hometeam - 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
          break;
          }else if(arg.team == 'awayteam') {
            state.chosenPlayer = arg.player;
            state.match.score.awayteam = state.match.score.awayteam - 1; 
            this.dispatch('saveStateToStorage');
            state.chosenAction = null;
            state.chosenPlayer = null;
          }
        case 'Varning':
          if(arg.player.Warnings == 0) {
            arg.player.Warnings = arg.player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-1-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(arg.player.Warnings == 1) {
            arg.player.Warnings = arg.player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-2-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(arg.player.Warnings == 2) {
            arg.player.Warnings = arg.player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-3-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            /* this.sentOffs.push(state.chosenPlayer);
            state.chosenPlayer.SentOffs = state.chosenPlayer.SentOffs + 1; */
            element = document.getElementsByClassName(`sentoff-1-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.playerlist.splice((this.playerlist.indexOf(state.chosenPlayer)), 1); */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }
        case 'Gult kort':
          if(arg.player.Warnings == 0) {
            arg.player.Warnings = arg.player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-1-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(arg.player.Warnings == 1) {
            arg.player.Warnings = arg.player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-2-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }else if(arg.player.Warnings == 2) {
            arg.player.Warnings = arg.player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-3-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.chosenPenalty = ''; */
            /* this.sentOffs.push(state.chosenPlayer);
            state.chosenPlayer.SentOffs = state.chosenPlayer.SentOffs + 1; */
            element = document.getElementsByClassName(`sentoff-1-${arg.player.Name}`)[0];
            element.classList.add('marked');
            /* this.playerlist.splice((this.playerlist.indexOf(state.chosenPlayer)), 1); */
            state.chosenAction = null;
            state.chosenPlayer = null;
            this.dispatch('saveStateToStorage');
            break;
          }
        case 'Rött kort':
          break;
        case 'Utvisning':
          break;
      }
    } else {
      state.chosenPlayer = arg.player;
      this.dispatch('saveStateToStorage');
    }
  },
  addScore(state, team, player) {
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