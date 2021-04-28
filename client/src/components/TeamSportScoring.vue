<template>
  <div class="score">
    <h1>{{ calcHomeTeamScore }} - {{ calcAwayTeamScore }}</h1>
    <!-- <span>{{matchEvents}}</span>   -->
  </div>
</template>

<script>
export default {
  computed: {
    match() {
      return this.$store.state.match;
    },
    matchEvents() {
      return this.$store.state.matchEvents;
    },
    teams() {
      return this.$store.state.teams;
    },
    scores() {
      return this.$store.state.scores;
    },
    calcHomeTeamScore() {
      //let match = this.match;
      // let homeTeamScore = match.matchEvents[0].score;
      // return match.matchEvents[0].homeTeamScore.filter(hometeam => hometeam.teamId == 1).length
      let homeTeam = this.teams.filter((t) => t.homeTeam == true);
      let currentMatchEvent = this.matchEvents.filter(
        (e) => e.currentMatchEvent == true
      );     
      let scores = this.scores.filter(
        (s) =>
          s.teamId === homeTeam[0].id  &&
          s.matchEventID === currentMatchEvent.id
      );
      let homeTeamScore = 0;
      for (let score of scores) {
        homeTeamScore = homeTeamScore +score.points; 
      }
      return homeTeamScore;
    },
    calcAwayTeamScore() {
      // let match = this.matchScore;
      // let scores = match.matchEvents[0].score;
      // return match.matchEvents[0].awayTeamScore.filter(hometeam => hometeam.teamId == 2).length
      //return this.matchEvents[0].awayTeamScore.length
      let awayTeam = this.teams.filter((t) => t.homeTeam == false);
      let currentMatchEvent = this.matchEvents.filter(
        (e) => e.currentMatchEvent == true
      );
      let scores = this.scores.filter(
        (s) =>
          s.teamId === awayTeam[0].id  &&
          s.matchEventID === currentMatchEvent.id
      );
      let awayTeamScore = 0;
      for (let score of scores) {
        awayTeamScore = awayTeamScore + score.points;
      }
      return awayTeamScore;
    },
  },

  methods: {
   
  },
};
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