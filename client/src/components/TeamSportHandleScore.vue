<template>

  <div class="score-container">
    <div class="home-score">
      <button class="homeRemoveScore" @click="removeHomeTeamScore">-</button>
      <button class="homeAddScore" @click="addHomeTeamScore">+</button>
    </div>

    <div class="away-score">
      <button class="awayAddScore" @click="addAwayTeamScore">+</button>
      <button class="awayRemoveScore" @click="removeAwayTeamScore">-</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {      
     /*  homeTeamScore:{
      matchEventsId:1,
      teamId: 1,
      points: 1,
      playerId: 1,
      time: "15:28"
    }, */
    }
  },
  computed: {
    match() {
      return this.$store.state.match
    },
    matchEvents() { 
      console.log('matchEvents',this.$store.state.matchEvents.
      filter((matchEvent) => matchEvent.id == this.match.id 
      && matchEvent.currentMatchEvent == true ))    
      return this.$store.state.matchEvents.
      filter((matchEvent) => matchEvent.id == this.match.id 
      && matchEvent.currentMatchEvent == true )
      
    },
    teams(){
      return this.$store.state.teams
    },
    matchEventsId(){
     return this.matchEvents[0].id
    },
    homeTeamId() {
      return this.$store.state.teams.filter((t) => t.homeTeam == true)[0].id
    },
    awayTeamId() {
      return this.$store.state.teams.filter((t) => t.homeTeam == false)[0].id
    },
    players(){
      return this.$store.state.players
    },   
    currentTime(){
      let today = new Date()
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return time
    }
  },
  methods: {
    addHomeTeamScore() {    
      let homeTeamScore =({matchEventsId:this.matchEventsId,teamId:this.homeTeamId,points:1,playerId:1,time:this.currentTime}) 
      this.$store.commit('addTeamScore', homeTeamScore)
    },

    removeHomeTeamScore() {
       this.$store.commit('removeTeamLatestScore', this.homeTeamId)
    },

    addAwayTeamScore() {
      let awayTeamScore =({matchEventsId:this.matchEventsId,teamId:this.awayTeamId,points:1,playerId:3,time:this.currentTime}) 
      this.$store.commit('addTeamScore', awayTeamScore)
    },

    removeAwayTeamScore() {
      this.$store.commit('removeTeamLatestScore', this.awayTeamId)
    },

  }

}
</script>

<style scoped>

.score-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  
 
  
}

.home-score {
  width: 150px;
  height: 50px;
  padding: 15px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.212);
  border-radius: 6px;
}

.away-score {
  margin-left: 100px;
  width: 150px;
  height: 50px;
  padding: 15px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.212);
  border-radius: 6px;
}


.homeAddScore {
  
  float: right;
  width: 50px;
  height: 50px;
  font-size: 40px;
  /* display: table-cell;
  vertical-align: middle; */
  color: white;
  background-color: rgb(255, 157, 29);
  padding-bottom: 7px; 
  line-height: 0px;
  border-radius: 12px;
}
.homeRemoveScore {
  float: left;
  width: 50px;
  height: 50px;
  color: white;
  background-color: rgb(240, 42, 42);
  padding: 0;
  font-size: 40px;
  padding-bottom: 6px;
  line-height: 0px;
  border-radius: 12px;
}
.awayAddScore {
  
  float: left;
  width: 50px;
  height: 50px;
  font-size: 40px;
  /* display: table-cell;
  vertical-align: middle; */
  color: white;
  background-color: rgb(255, 157, 29);
  padding-bottom: 7px; 
  line-height: 0px;
  border-radius: 12px;
}
.awayRemoveScore {
  float: right;
  width: 50px;
  height: 50px;
  color: white;
  background-color: rgb(240, 42, 42);
  padding: 0;
  font-size: 40px;
  padding-bottom: 6px;
  line-height: 0px;
  border-radius: 12px;
}

</style>