<template>
  <div class="score">
    <h1>{{calcHomeTeamScore}} - {{calcAwayTeamScore}}</h1>
    <!-- <span>{{matchEvents}}</span>   -->
  </div>
</template>

<script>
export default {

  computed: {
    match() {
      return this.$store.state.match
    },
    matchEvents() {
      return this.$store.state.matchEvents
    },
    calcHomeTeamScore() {
      //let match = this.match;
      // let homeTeamScore = match.matchEvents[0].score;
      // return match.matchEvents[0].homeTeamScore.filter(hometeam => hometeam.teamId == 1).length
      return this.matchEvents[0].homeTeamScore.length
    },
    calcAwayTeamScore() {
     // let match = this.matchScore;
      // let scores = match.matchEvents[0].score;
      // return match.matchEvents[0].awayTeamScore.filter(hometeam => hometeam.teamId == 2).length
      return this.matchEvents[0].awayTeamScore.length
    }
  },

  methods: {
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