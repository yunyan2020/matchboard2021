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
      homeTeamScore:{
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      time: "14:39"
    },
    awayTeamScore:{
      matchEventsId: 1,
      teamId: 2,
      points: 1,
      playerId: 3,
      time: "15:39"
    },
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
    players(){
      return this.$store.state.players
    },
    homeTeam() {
      return this.$store.state.teams.filter((t) => t.homeTeam == true)[0]
    },
    awayTeam() {
      return this.$store.state.teams.filter((t) => t.homeTeam == false)[0]
    },
  },
  methods: {
    addHomeTeamScore() {      
      this.$store.state.scores.push(this.homeTeamScore);
      console.log(this.$store.state.scores);
    },

    removeHomeTeamScore() {
      let indices = [];
      let scores   =  this.$store.state.scores;
      console.log('homeTeam id',this.homeTeam)
      let element = this.homeTeam.id;
      let idx = scores.indexOf(element);
      while (idx != -1) {
        indices.push(idx);
        idx = scores.indexOf(element, idx + 1);
      } 
      let lastInx = indices[indices.length-1] 
      this.$store.state.scores.splice(lastInx, 1); 
      console.log(this.$store.state.scores);

    },

    addAwayTeamScore() {
      this.$store.state.scores.push(this.awayTeamScore);
      console.log(this.$store.state.scores);
    },

    removeAwayTeamScore() {
      let indices = [];
      let scores   =  this.$store.state.scores;
      console.log('awayTeam id',this.awayTeam)
      let element = this.awayTeam.id;
      console.log('element of away team',element)
      let idx = scores.indexOf(element);
      console.log('idx',idx)
      while (idx != -1) {
        indices.push(idx);
        idx = scores.indexOf(element, idx + 1);
      } 
      console.log('indices',indices)
      let lastInx = indices[indices.length-1] 
      this.$store.state.scores.splice(lastInx, 1); 
      console.log(this.$store.state.scores);
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