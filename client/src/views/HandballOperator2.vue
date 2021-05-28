<template>
  <div class="handball-operator-container">
    <div class="descriptions-container">
      <div class="description-wrap">
        <p class="description-p">Hemmalag | Poäng</p>
      </div>
      <div class="description-wrap">
        <p class="description-p">Tid | Halvlek</p>
      </div>
      <div class="description-wrap">
        <p class="description-p">Poäng | Bortalag</p>
      </div>
    </div>
    <div class="match-scoreboard-container">
      <ScoreboardPreview 
        :hometeamScore="match.score.hometeam" 
        :awayteamScore="match.score.awayteam" 
        :hometeam="homeTeam" 
        :awayteam="awayTeam" 
        v-if="homeTeam && awayTeam && match"/>
    </div>
    <div class="match-operation-container">
      <HandballOperatorBtns v-if="match"/>
    </div>
    <div class="player-operations-container" v-if="homeTeam && awayTeam">
      <PlayerListOperator :team="homeTeam"/>
      <PlayerListOperator :team="awayTeam"/>
    </div>
  </div>
</template>

<script>
import ScoreboardPreview from '../components/handballOperatorComps/ScoreboardPreview.vue'
import HandballOperatorBtns from '../components/handballOperatorComps/HandballOperatorBtns.vue'
import PlayerListOperator from '../components/handballOperatorComps/PlayerListOperator.vue'

export default {
  components: {
    ScoreboardPreview, HandballOperatorBtns, PlayerListOperator
  },
  data() {
    return {
      homeTeam: null,
      awayTeam: null,
      match: null
    }
  },
  methods: {
    getPlayers(teamId) {
      let allPlayers = this.$store.state.players;
      let players = [];
      console.log(allPlayers);
      for(let i = 0; i < allPlayers.length; i++) {
        if(allPlayers[i].teamId == teamId) {
          let player = {
            id: allPlayers[i].id, 
            Name: allPlayers[i].firstName + ' ' + allPlayers[i].lastName,
            Number: allPlayers[i].playNumber,
            /* Warnings: 0,
            SentOffs: 0, */
            Warnings: [],
            SentOffs: []
          };
          players.push(player);
        }
      }
      return players;
    }
  },
  computed: {
    hometeam() {
      let teamIds = this.$store.state.match.teamId;
      let teams = this.$store.state.teams;
      let teamObj;
      for(let i = 0; i < teamIds.length; i++) {
        for(let j = 0; j < teams.length; j++) {
          if(teamIds[i] == teams[j].id && teams[j].homeTeam == true) {
            teamObj = {
              TeamName: teams[j].name,
              TeamPlayers: this.getPlayers(teams[j].id),
              SentOffs: [],
              Logo: teams[j].logo,
              Hometeam: true
            };
          }
        }
      }
      return teamObj;
    },
    awayteam() {
      let teamIds = this.$store.state.match.teamId;
      let teams = this.$store.state.teams;
      let teamObj;
      for(let i = 0; i < teamIds.length; i++) {
        for(let j = 0; j < teams.length; j++) {
          if(teamIds[i] == teams[j].id && teams[j].homeTeam == false) {
            teamObj = {
              TeamName: teams[j].name,
              TeamPlayers: this.getPlayers(teams[j].id),
              Logo: teams[j].logo,
              Hometeam: false
            };
          }
        }
      }
      return teamObj;
    }
  },
  mounted() {
    this.homeTeam = this.hometeam;
    this.awayTeam = this.awayteam;
    this.match = this.$store.state.match;
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

  * {
    font-family: 'PT Sans', sans-serif;
  }

  .descriptions-container {
    display: flex;
    justify-content: space-evenly;
    gap: 18em;
  }

  .description-p {
    font-size: 13px;
    font-weight: 900;
    opacity: 0.65;
    /* margin: auto 5em; */
  }

  .player-operations-container {
    width: 95vw;
    margin: 4em auto auto auto;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
</style>