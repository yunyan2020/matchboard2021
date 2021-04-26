<template>
  <div class="score">
    <h1>{{calcHomeTeamScore}} - {{calcAwayTeamScore}}</h1>
    <h4>{{matchEvents}}</h4>
    <button @click="homeTeamScore">console.log</button>
    
  </div>
</template>

<script>
export default {

  computed: {
    matchScore() {
      return this.$store.state.match
    },
    matchEvents() {
      return this.$store.state.match.matchEvents[0].name
    },
    calcHomeTeamScore() {
      let match = this.matchScore;
      let scores = match.matchEvents[0].score;
      return this.homeTeamScore = scores.filter(hometeam => hometeam.teamId == 1).length
    },
    calcAwayTeamScore() {
      let match = this.matchScore;
      let scores = match.matchEvents[0].score;
      return this.homeTeamScore = scores.filter(hometeam => hometeam.teamId == 2).length
    }
  },

  methods: {
    // calcHomeTeamScore() {
    //   let match = this.matchScore;
    //   let scores = match.matchEvents[0].score;
    //   this.homeTeamScore = scores.filter(hometeam => hometeam.teamId == 1).length;
    //   /* return scores.filter(hometeam => hometeam.teamId == 1).length; */
    //   console.log(homeTeamScore);
    // },
    
  }
}
</script>

<style>
  .score {
    /* float: left; */
    color: lightgreen;
    font-size: 100px;
    padding: 0;
    margin-top: 30px;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
</style>