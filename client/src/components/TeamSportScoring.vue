<template>
  <div class="score">
    <h1>{{homeTeamScore}} - {{matchScore.awayTeamScore}}</h1>
    <h4>{{matchEvents}}</h4>
    <button @click="homeTeamScore">console.log</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeTeamScore: calcHomeTeamScore()
    }
  },
  computed: {
    matchScore() {
      return this.$store.state.match
    },
    matchEvents() {
      return this.$store.state.match.matchEvents[0].name
    }
  },
  methods: {
    calcHomeTeamScore() {
      let match = this.matchScore;
      let scores = match.matchEvents[0].score;
      this.homeTeamScore = scores.filter(hometeam => hometeam.teamId == 1).length;
      /* return scores.filter(hometeam => hometeam.teamId == 1).length; */
      console.log(homeTeamScore);
    },
    calcAwayTeamScore() {


    }
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