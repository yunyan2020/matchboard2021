<template>
  <div class="container">
    <HandballScoreBoard />
  </div>
</template>

<script>
import HandballScoreBoard from '../components/HandballScoreBoard.vue'



export default {
  computed: {
    match() {
      return this.$store.state.match
    },
    matchEvents() {
      return this.$store.state.match.matchEvents[0].name
    },

    homeTeamLogo() {
      return this.$store.state.match.teams[0].logo;
    },
    awayTeamLogo() {
      return this.$store.state.match.teams[1].logo;
    },
    homeTeamPenalties() { 
      let match = this.match;
      let penalties = match.matchEvents[0].penalties;
      this.homeTeamPenalty = penalties.filter(hometeam => hometeam.teamId == 1);
    
      return this.homeTeamPenalty;

      },
    awayTeamPenalties() { 
      let match = this.match;
      let penalties = match.matchEvents[0].penalties;
      this.awayTeamPenalty = penalties.filter(awayteam => awayteam.teamId == 2);
      
      return this.awayTeamPenalty;

      },
  },
  components: {HandballScoreBoard}
}
</script>

<style scoped>

div {
  border: 0px solid green;
}
  .container {
    width: 1850px;
    height: 975px; 
    /* width: 95vw;
    height: 95vh; */
    background-image: url('../assets/handball_bg.png');
    background-repeat: no-repeat;
    display: grid;
    /* grid-template-columns: 25% 50% 25%; */
  }

   .left {
    float: left;
  }

  .right {
    float: right;
  }

  h1 {
    padding: 0;
    margin: 0;
  }

  h3 {
    padding: 0;
    margin: 0;
  }

  /* .logo-left {
    margin-top: 20px;
    width: 8wv;
  }

  .logo-right {
    margin-top: 5px;
  }

  .penalty-time {
    font-size: 6em;
    color: rgba(255, 0, 0, 0.527);
  }

  .cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .score {
    float: left; 
    color: lightgreen;
    font-size: 100px;
    padding: 0;
    margin-top: 30px;
  }
  
  .time {
    color: white;
    font-size: 170px;
    float: left; 
    padding: 0;
    margin-top: 100px; 
  }  */
</style>