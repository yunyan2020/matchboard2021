<template>
  <div class="preview-container">
    <div class="x left">
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
      <PeriodTimer />
    </div>
    <div class="x right">
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
import PeriodTimer from './PeriodTimer.vue'
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
      console.log(penalties, 'penalties');
      console.log(this.$store.state.penaltiesHash);
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

  components: {PeriodTimer, TeamSportScoring}
}
</script>

<style scoped>

div {
  border: 0px solid green;
}
  .preview-container {
    width: 870px;
    height: 485px; 
    background-image: url('src/assets/handball_bg.png');
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    margin: 0 auto;
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

  .logo-left img {
    margin-top: 20px;
    width: 150px;
  }

  .logo-right img {
    margin-top: 5px;
    width: 150px;
  }

  .penalty-time {
    font-size: 3em;
    color: rgba(255, 0, 0, 0.527);
  }

  .x {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .score {
    color: lightgreen;
    font-size: 4em;
    padding: 0;
    margin-top: 30px;
  }
  
  .time {
    color: white;
    font-size: 70px;

    padding: 0;
    margin-top: 10px;
  }
</style>