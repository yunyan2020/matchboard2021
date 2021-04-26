<template>
  <div class="container">
    <div class="x left">
      <div class="logo-left">
        <img :src="homeTeamLogo" alt="1" />
      </div>
      <div class="penalty-left">
        <h3 class="penalty-time">00:23</h3>
      </div>
    </div>
    <div class="middle">
      <TeamSportScoring />
      <PeriodTimer />
    </div>
    <div class="x right">
      <div class="logo-right">
        <img src="../assets/logo_h43.png" />
      </div>
      <div class="penalty-right">
        <h3 class="penalty-time">01:02</h3>
      </div>
    </div>
  </div>
</template>

<script>
import PeriodTimer from '../components/PeriodTimer.vue'
import TeamSportScoring from '../components/TeamSportScoring.vue'

export default {
  computed: {
    homeTeamLogo() {
      return this.$store.state.match.teams[0].logo;
    },
  },
  components: {PeriodTimer, TeamSportScoring}
}
</script>

<style>

div {
  border: 1px solid green;
}
  .container {
    /* width: 1850px;
    height: 975px; */
    width: 95vw;
    height: 95vh;
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

  .logo-left {
    margin-top: 20px;
  }

  .logo-right {
    margin-top: 5px;
  }

  .penalty-time {
    font-size: 6em;
    color: rgba(255, 0, 0, 0.527);
  }

  .x {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .score {
    /* float: left; */
    color: lightgreen;
    font-size: 100px;
    padding: 0;
    margin-top: 30px;
  }
  
  .time {
    color: white;
    font-size: 170px;
    /* float: left; */
    padding: 0;
    margin-top: 100px;
  }
</style>