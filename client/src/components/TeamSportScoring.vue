<template>
  <div class="score">
    <h1>{{calcHomeTeamScore}} - {{calcAwayTeamScore}}</h1>
    <!-- <span>{{matchEvents}}</span>   -->
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
      // let homeTeamScore = match.matchEvents[0].score;
      // return match.matchEvents[0].homeTeamScore.filter(hometeam => hometeam.teamId == 1).length
      return match.matchEvents[0].homeTeamScore.length
    },
    calcAwayTeamScore() {
      let match = this.matchScore;
      // let scores = match.matchEvents[0].score;
      // return match.matchEvents[0].awayTeamScore.filter(hometeam => hometeam.teamId == 2).length
      return match.matchEvents[0].awayTeamScore.length
    }
  },

  methods: {
  }
}
</script>

<style>
  .score {
    /* float: left; */
    color: rgb(95, 216, 95);
    font-size: 100px;
    padding: 0;
    margin-top: 30px;
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    text-shadow: 0.06em 0.06em black;
    color: rgb(87, 255, 87);
    margin: 0;
    padding: 0;
  }
</style>