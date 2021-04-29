<template>
  <div class="container">
    <div class="x left">
      <div class="logo-left">
        <img :src="homeTeamLogo" alt="Home Team" />
      </div>
      <div class="penalty-left">
        <div v-for="(penalty, i) in homeTeamPenalties" :key="i">
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
    <div class="x right">
      <div class="logo-right">
        <img :src="awayTeamLogo" alt="Away Team" />
      </div>
      <div class="penalty-right">
        <div v-for="(penalty, i) in awayTeamPenalties" :key="i">
          <h3 class="penalty-detail">{{penalty.penaltyTime}}</h3>
          <h3 class="penalty-detail">{{penalty.type}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeriodTimer from '../components/PeriodTimer.vue'
import TeamSportScoring from '../components/TeamSportScoring.vue'

export default {
  computed: {
    match() {
      return this.$store.state.match
    },
    matchEvents() {     
      return this.$store.state.matchEvents.filter((matchEvent) => matchEvent.id == this.match.id && matchEvent.currentMatchEvent == true )
     // return this.$store.state.match.matchEvents[0].name
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
     // return this.$store.state.match.teams[0].logo;
    },
    awayTeamLogo() {
      let awayTeam = this.$store.state.teams.filter((t) => t.homeTeam == false)[0]
      return awayTeam.logo;

     // return this.$store.state.match.teams[1].logo;
    },
    penalties(){
      return  this.$store.state.penalties;
    },

    homeTeamPenalties() { 
      /* let match = this.match;
      let penalties = match.matchEvents[0].penalties;
      this.homeTeamPenalty = penalties.filter(hometeam => hometeam.teamId == 1); */
      
     /*  let penalties = this.matchEvents.penalties;
      let homeTeam = this.teams.filter((t) => t.homeTeam == true)      
      this.homeTeamPenalty = penalties.filter(hometeam => hometeam.teamId == homeTeam[0].id); */
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
        console.log("homeTeamPenaltyInfo",homeTeamPenaltyInfo)      
      }
     return homeTeamPenaltyInfo;
      },   
    homeTeamPenaltiesPlayers(){
      return this.players.filter((p) => p.id = this.homeTeamPenalties.playId )
    },
    awayTeamPenalties() { 
      /* let match = this.match;
      let penalties = match.matchEvents[0].penalties;
      this.awayTeamPenalty = penalties.filter(awayteam => awayteam.teamId == 2); */
    // let penalties = this.matchEvents.penalties;
     let penalties = this.$store.state.penalties;
     let awayTeam = this.teams.filter((t) => t.homeTeam == false)
     this.awayTeamPenalty = penalties.filter(awayteam => awayteam.teamId == awayTeam[0].id);    
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
  .container {
    width: 1850px;
    height: 975px; 
    /* width: 95vw;
    height: 95vh; */
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