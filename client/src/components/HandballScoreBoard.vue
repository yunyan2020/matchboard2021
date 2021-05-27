<template>
  <div class="sb-container">
    <div class="cont left">
      <div class="logo-left">
        <img :src="homeTeamLogo" alt="Home Team" />
      </div>
      <div class="penalty-left">
        <div class="penalty-wrap">
          <div v-for="(penalty, i) in homeTeamPenalties()" :key="i" class="penalty-detail">
            <h3 class="penalty-time">{{penalty.penaltyTime}}</h3>
            <h3 class="penalty-type">{{penalty.type}}</h3> 
            <h3 class="penalty-player">{{penalty.playerFirstName}}</h3>
          </div>
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
         <div class="penalty-wrap">
          <div v-for="(penalty, i) in awayTeamPenalties1()" :key="i">
            <h3 class="penalty-time">{{penalty.penaltyTime}}</h3>
            <h3 class="penalty-type">{{penalty.type}}</h3> 
            <h3 class="penalty-player">{{penalty.playerFirstName}}</h3>
          </div>  
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
     let awayTeamPenaltyInfo = []
      for (let penalty of awayTeamPenalty){
        let playerFirstName =""
        let player = this.players.filter((p)=>p.id == penalty.playerId && p.matchEventsId == this.matchEvents.id)
        playerFirstName = player[0].firstName
        awayTeamPenaltyInfo.push({penaltyTime:penalty.penaltyTime,type:penalty.type,playerFirstName:playerFirstName})
             
      }  
     return awayTeamPenaltyInfo;
    },
  },
  components: {PeriodTimerNew, TeamSportScoring}
}
</script>

<style scoped>

  .sb-container {
    background-image: url('../assets/handball_bg.png');
    background-repeat: no-repeat;
    width: 60vw;
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
  .penalty-wrap{
    text-align:left;    
    font-size: 2em;       
    font-family: 'Roboto Slab', serif;
    text-shadow: 0.05em 0.05em black;
    margin-bottom: 2vh;
  }
  .penalty-detail{
    display: inline-block;
  }
  .penalty-time {       
    float:left;
    margin-left:10px;
    color:orangered;    
  }
  .penalty-type {    
    float:left;
    margin-left:10px;
    color: rgb(255, 153, 0);
  }
   .penalty-player {
    display:inline-block;
    margin-left:10px;
    color:rgb(60, 11, 238);
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