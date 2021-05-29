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
  setActionType(state, args){
    let {player, type, team} = args
    state.penalties.push({
      teamId: team.id,
      matchEventsId: 'matchEvent.id',
      playerId: player.id,
      matchTime: 'matchTime',
      penaltyTime: '1:00',
      type: type,
    })    
  },
  setActionTypeOlde(state, arg) {
    console.log(arg);
    let player = arg.player;
    let type = arg.type;
    switch(type) {
      case '+':
        if(arg.team == 'hometeam') {
          state.match.score.hometeam++;
          state.score.push({
            matchEventsId: 1,
            teamId: player.teamId,
            points: 1,
            playerId: player.id,
            player: player,
            time: "17:45"
          });
          break;
        }else {
          state.match.score.awayteam++;
          state.score.push({
            matchEventsId: 1,
            teamId: player.teamId,
            points: 1,
            playerId: player.id,
            player: player,
            time: "17:45"
          });
          break;
        }
      case '-':
        if(arg.team == 'hometeam') {
          state.match.score.hometeam--;
          break;
        }else {
          state.match.score.awayteam--;
          break;
        }
      case 'Varning':
        if(player.Warnings.length == 2 && arg.team == 'hometeam') {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.home.push(player);
          break;
        }else if(player.Warnings.length == 2 && arg.team == 'awayteam'){
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.away.push(player);
          break;
        }else {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          break;
        }
      case 'Gult kort':
        if(player.Warnings.length == 2 && arg.team == 'hometeam') {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.home.push(player);
          break;
        }else if(player.Warnings.length == 2 && arg.team == 'awayteam'){
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.away.push(player);
          break;
        }else {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          break;
        }
      case 'Rött kort':
        if(arg.team == 'hometeam') {
          state.match.penalties.disqed.home.push(player);
          break;
        } else {
          state.match.penalties.disqed.awayhome.push(player);
          break;
        }
      case 'Utvisning':
        if(arg.team == 'hometeam') {
          state.match.penalties.sentoffs.home.push(player);
          break;
        } else {
          state.match.penalties.sentoffs.awayhome.push(player);
          break;
        }
    }
    /* if(['Varning', 'Gult kort', 'Rött kort', 'Utvisning'].includes(type)) {
      state.penalties.push({
        teamId: player.teamId,
        matchEventsId: 1, // change to actual later on
        playerId: player.id,
        matchTime: '10:24', // matchEvents.timer.time
        penaltyTime: '1:00', // change to actual
        type: type,
      });
    } else if(['+', '-'].includes(type)) {
      state.score.push({
        matchEventsId: 1,
        teamId: player.teamId,
        points: 1,
        playerId: player.id,
        player: player,
        time: "17:45"
      });
    } else {
      console.warn('Unhandled action', arguments);
    } */
    console.log('state.penalties', state.penalties)
    this.dispatch('saveStateToStorage');
  },
  setPlayer(state, arg) {
    let player = arg.player;
    let type = arg.type;
    switch(type) {
      case 'Varning':
        if(player.Warnings.length == 2 && arg.team == 'hometeam') {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.home.push(player);
          break;
        }else if(player.Warnings.length == 2 && arg.team == 'awayteam'){
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.away.push(player);
          break;
        }else {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          break;
        }
      case 'Gult kort':
        if(player.Warnings.length == 2 && arg.team == 'hometeam') {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.home.push(player);
          break;
        }else if(player.Warnings.length == 2 && arg.team == 'awayteam'){
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          state.match.penalties.sentoffs.away.push(player);
          break;
        }else {
          state.penalties.push({
            teamId: player.teamId,
            matchEventsId: 1, // change to actual later on
            playerId: player.id,
            matchTime: '10:24', // matchEvents.timer.time
            penaltyTime: '1:00', // change to actual
            type: type,
          });
          break;
        }
      case 'Rött kort':
        if(arg.team == 'hometeam') {
          state.match.penalties.disqed.home.push(player);
          break;
        } else {
          state.match.penalties.disqed.awayhome.push(player);
          break;
        }
      case 'Utvisning':
        if(arg.team == 'hometeam') {
          state.match.penalties.sentoffs.home.push(player);
          break;
        } else {
          state.match.penalties.sentoffs.awayhome.push(player);
          break;
        }
    }
    /* if(['Varning', 'Gult kort', 'Rött kort', 'Utvisning'].includes(type)) {
      state.penalties.push({
        teamId: player.teamId,
        matchEventsId: 1, 
        playerId: player.id,
        matchTime: '10:24', 
        penaltyTime: '1:00', 
        type: type,
      });
    } else if(['+', '-'].includes(type)) {
      state.score.push({
        matchEventsId: 1,
        teamId: player.teamId,
        points: 1,
        playerId: player.id,
        player: player,
        time: "17:45"
      });
    } */
    this.dispatch('saveStateToStorage');
  },
  addScore(state, team, player) {
    switch(team) {
      case 'hometeam':
        state.match.score.hometeam = state.match.score.hometeam + 1;         
        break;
      case 'awayteam':
        state.match.score.awayteam = state.match.score.awayteam + 1; 
        break;  
    }
    this.dispatch('saveStateToStorage');
  },
  removeScore(state, team) {
    switch(team) {
      case 'hometeam':
        state.match.score.hometeam = state.match.score.hometeam - 1;         
        break;
      case 'awayteam':
        state.match.score.awayteam = state.match.score.awayteam - 1; 
        break;  
    }
    this.dispatch('saveStateToStorage');
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
  setCurrentMatchEvent(state, matchEvent){
    state.currentMatchEvent = matchEvent
    this.dispatch('saveStateToStorage');
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
      this.commit('setCurrentMatchEvent', state.matchEvents[foundAt+1].currentMatchEvent)
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
    console.log('savedState', savedState)
  }
}

export default createStore({ state, mutations, actions })

