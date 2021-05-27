<template>
  <div class="scoreboard-preview-container">
    <div class="teamlogo-score-teamname-container teamscontainer">
      <div class="teamlogo-score-container">
        <div class="teamlogo-container">
          <img :src="`${hometeam.Logo}`" class="teamlogo-img" alt="">
        </div>
        <div class="score-container">
          <h3 @addHometeamScore="addScore" class="score">{{hometeamScore}}</h3>
        </div>
      </div>
      <div class="hometeamname-container">
        <h2 class="teamname">{{hometeam.TeamName}}</h2>
      </div>
    </div>
    <div class="time-period-container">
      <div class="time-container">
        <h1 class="time">{{time() !='NaN:NaN'?time():"0:0"}}</h1>
      </div>
      <div class="period-container">
        <div class="period"></div>
        <div class="period"></div>
      </div>
    </div>
    <div class="teamlogo-score-teamname-away-container teamscontainer">
      <div class="teamlogo-score-container">
        <div class="score-container-away">
          <h3 class="score">{{awayteamScore}}</h3>
        </div>
        <div class="teamlogo-container">
          <img :src="`${awayteam.Logo}`" alt="" class="teamlogo-img">
        </div>
      </div>
      <div class="awayteamname-container">
        <h2 class="teamname-away">{{awayteam.TeamName}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hometeam', 'awayteam', 'hometeamScore', 'awayteamScore'],
  data() {
    return {
    /*  time:""  */
    }
  },
  methods: {
    addScore(data) {
      this.hometeamScore += data;
    },
    removeScore(team) {
      
    },
    time(){
      let matchId = this.$store.state.match.id
      let currentMatchEvent = this.$store.state.matchEvents.find((e) => e.matchId = matchId && e.currentMatchEvent === true)
      if(currentMatchEvent && currentMatchEvent.time){
        return currentMatchEvent.time
      }else{
        return 0
      }
    }
  },
 /*  mounted(){
     this.time = this.time();
  } */
}
</script>

<style scoped>

  .teamscontainer {
    margin-top: 1em;
  }

  h1 {
    margin: 0;
  }

  .inline {
    display: inline;
  }

  .scoreboard-preview-container {
    display: flex;
    gap: 10em;
    justify-content: space-evenly;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 1em 2em;
    width: 95vw;
    margin: auto;
  }

  .teamlogo-score-container {
    display: flex;
    flex-direction: row;
  }

  .teamlogo-container {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid lightgray;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 99;
  }

  .score-container {
    background-color: #c4c4c47e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 100px;
    z-index: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    margin: auto;
    right: 10px;
  }

  .score-container-away {
    background-color: #c4c4c47e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 100px;
    z-index: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: relative;
    margin: auto;
    left: 10px;
  }

  .score {
    margin: 0;
    font-size: 4em;
    color: black;
  }

  .teamlogo-img {
    width: 130px;
    height: 125px;
    margin-top: 2.5em;
    z-index: 100;
  }

  .hometeamname-container {
    float: left;
    border-left: 3px solid lightskyblue;
  }

  .awayteamname-container {
    float: right;
    border-right: 3px solid lightskyblue;
  }

  .teamname {
    margin: 6px 0 0 0.5em;
    font-size: 30px;
  }

  .teamname-away {
    font-size: 30px;
    margin: 6px 0.5em 0 0;
  }

  /* .time-period-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  } */

  .time {
    font-size: 112px;
    color: black;
  }

  .period-container {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .period {
    width: 180px;
    height: 15px;
    background-color: lightblue;
    border-radius: 2px;
  }
</style>