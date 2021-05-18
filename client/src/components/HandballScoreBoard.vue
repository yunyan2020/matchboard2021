<template>
  <div class="sb-container">
    <div class="cont left">
      <div class="logo-left">
        <img :src="homeTeamLogo" alt="Home Team" />
      </div>
      <div class="penalty-left">
        <div v-for="(penalty, i) in homeTeamPenalties" :key="i">
          <h3 class="penalty-time">{{penalty.penaltyTime}}</h3>
        </div>
      </div>
    </div>
    <div class="middle">
      <TeamSportScoring />
      <PeriodTimerNew /> 
    </div>
    <div class="cont right">
      <div class="logo-right">
        <img :src="awayTeamLogo" alt="Away Team" />
      </div>
      <div class="penalty-right">
        <div v-for="(penalty, i) in awayTeamPenalties" :key="i">
          <h3 class="penalty-time">{{penalty.penaltyTime}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeriodTimerNew from './PeriodTimerNew.vue'
import TeamSportScoring from './TeamSportScoring.vue'


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
  components: {PeriodTimerNew, TeamSportScoring}
}
</script>

<style scoped>

  .sb-container {
    background-image: url('../assets/handball_bg.png');
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 25% 50% 25%;
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

  .logo-left img{
    margin-top: 2vh;
    width: 10vw;
  }

  .logo-right img{
    margin-top: 2vh;
    width: 10vw;
  }

  .penalty-time {
    font-family: 'Roboto Slab', serif;
    text-shadow: 0.05em 0.05em black;
    color: rgb(223, 24, 24);
    margin-bottom: 2vh;
  }

  .cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .score {
    /* float: left; */
    color: lightgreen;
    font-size: 7em;
    padding: 0;
    margin-top: 2vh;
  }

  .middle {
    /* background: red; */
    /* margin-top: 15vh; */
  }
  
  /* .time {
    color: white;
    font-size: 170px;
    padding: 0;
    margin-top: 100px;
  } */
</style>