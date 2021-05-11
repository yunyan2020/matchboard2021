<template>
  <div class="sb-container">
    <div class="cont left">
      <div class="logo-left">
        <img :src="homeTeamLogo" alt="Home Team" />
      </div>
      <div class="penalty-left">
        <div v-for="(penalty, i) in homeTeamPenalties()" :key="i">
          <h3 class="penalty-time">{{penalty.penaltyTime}}</h3>
          <h3 class="penalty-type">{{penalty.type}}</h3>
          <h3 class="penalty-player">{{penalty.playerFirstName}}</h3>
        </div>
      </div>
    </div>
    <div class="middle">
      <TeamSportScoring />
      <PeriodTimer /> 
    </div>
    <div class="cont right">
      <div class="logo-right">
        <img :src="awayTeamLogo" alt="Away Team" />
      </div>
      <div class="penalty-right">
        <div v-for="(penalty, i) in awayTeamPenalties1()" :key="i">
          <h3 class="penalty-detail">{{penalty.penaltyTime}}</h3>
          <h3 class="penalty-detail">{{penalty.type}}</h3> 
          <h3 class="penalty-player">{{penalty.playerFirstName}}</h3>
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
      return this.$store.state.matchEvents.
      filter((matchEvent) => matchEvent.id == this.match.id 
      && matchEvent.currentMatchEvent == true )
    },
    teams(){
      return this.$store.state.teams
    },
    players(){
      console.log("players from store",this.$store.state.players)
      return this.$store.state.players
    },
    homeTeamLogo() {
      let homeTeam = this.$store.state.teams.filter((t) => t.homeTeam == true)[0]
      return homeTeam.logo;
    },
    awayTeamLogo() {
      let awayTeam = this.$store.state.teams.filter((t) => t.homeTeam == false)[0]
      return awayTeam.logo;
    },
    penalties(){
      return  this.$store.state.penalties;
    },   
    homeTeamPenaltiesPlayers(){
      return this.players.filter((p) => p.id = this.homeTeamPenalties.playId )
    },
    
  },
  methods:{
     homeTeamPenalties() { 
      let penalties = this.penalties;
      let homeTeam = this.teams.filter((t) => t.homeTeam == true)      
      let homeTeamPenalty = penalties.filter(hometeam => hometeam.teamId == homeTeam[0].id); 
      console.log("players",this.players)
      console.log("matchEvents",this.matchEvents)
      let homeTeamPenaltyInfo = []
      for (let penalty of homeTeamPenalty){
        let playerFirstName =""
        let player = this.players.filter((p)=>p.id == penalty.playerId && p.matchEventsId == this.matchEvents.id)
        playerFirstName = player[0].firstName
        homeTeamPenaltyInfo.push({penaltyTime:penalty.penaltyTime,type:penalty.type,playerFirstName:playerFirstName})         
      }
     return homeTeamPenaltyInfo;
    },
    awayTeamPenalties1() { 
     let penalties = this.$store.state.penalties;
     let awayTeam = this.teams.filter((t) => t.homeTeam == false)
     let awayTeamPenalty = penalties.filter(awayteam => awayteam.teamId == awayTeam[0].id);  
     console.log('awayTeamPenalty 1',awayTeamPenalty)
     let awayTeamPenaltyInfo = []
      for (let penalty of awayTeamPenalty){
        let playerFirstName =""
        let player = this.players.filter((p)=>p.id == penalty.playerId && p.matchEventsId == this.matchEvents.id)
        playerFirstName = player[0].firstName
        awayTeamPenaltyInfo.push({penaltyTime:penalty.penaltyTime,type:penalty.type,playerFirstName:playerFirstName})
             
      }  
     console.log("awayTeamPenaltyInfo 1",awayTeamPenaltyInfo) 
     return awayTeamPenaltyInfo;
    },
  },
  components: {PeriodTimer, TeamSportScoring}
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
    font-size: 3em;
    display:inline-block;
    margin-left:10px;
    justify-content:left;
    color: rgba(255, 30, 0, 0.527);
  }
  .penalty-type {
    font-size: 3em;
    display:inline-block;
    margin-left:10px;
    justify-content:left;
    color: orangered;
  }
   .penalty-player {
    font-size: 3em;
    display:inline-block;
    margin-left:10px;
    justify-content:left;
    color:rgb(60, 11, 238);
  }
  .penalty-detail {
    font-size: 3em;
    display:inline-block;
    margin-left:10px;
    justify-content:left;
    color:orangered;
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