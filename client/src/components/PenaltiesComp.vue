<template>
  <div class="penaltyComp-container">
    <div class="button-container">
      <button class="button" @click="teamSelection">Penalty</button>
    </div>
    <div class="team-selection-container" v-if="teamSelectionVisible">
      <button @click="selectHomeTeam" class="button">Hemma</button>
      <button class="button">Borta</button>
    </div>
    <div class="team-list-container" v-if="homeTeamList">
      <div class="penalty-types-container">
        <button @click="setPenalty($event)" class="btn-type">Varning</button>
        <button @click="setPenalty($event)" class="btn-type">Gult kort</button>
        <button @click="setPenalty($event)" class="btn-type">Rött kort</button>
        <button @click="setPenalty($event)" class="btn-type">Utvisning</button>
      </div>
      <hr>
      <div class="description-container">
        <p class="description">Nummer | Namn</p>
        <p class="description">Varningar | Utvisningar</p>
      </div>
      <div class="playerlist-container">
        <div @click="penalize(chosenPenalty, player)" class="player" v-for="player in hometeam.TeamPlayers" :key="player.id">
          <div class="playerinfo inline">
            <p class="playerinfo-p"><span class="player-number-p">{{player.Number}}</span> {{player.Name}}</p>
          </div>
          <div class="warnings inline">
            <p class="playerinfo-p">{{player.Warnings}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamSelectionVisible: false,
      homeTeamList: false,
      awayTeamList: false,
      chosenPenalty: '',
      hometeam: null
    }
  },
  methods: {
    getPlayers(teamId) {
      let allPlayers = this.$store.state.players;
      let players = [];
      for(let i = 0; i < allPlayers.length; i++) {
        if(allPlayers[i].teamId == teamId) {
          let player = {
            Name: allPlayers[i].firstName + ' ' + allPlayers[i].lastName,
            Number: allPlayers[i].playNumber,
            Warnings: 0
          };
          players.push(player);
        }
      }
      return players;
    },
    teamSelection() {
      this.teamSelectionVisible = !this.teamSelectionVisible;
    },
    selectHomeTeam() {
      this.teamSelection();
      this.homeTeamList = !this.homeTeamList;
    },
    selectAwayTeeam() {
      this.awayTeamList = !this.awayTeamList;
    },
    setPenalty(event) {
      switch(event.target.innerText) {
        case 'Varning': 
          this.chosenPenalty = 'Varning';
          break;
        case 'Gult kort':
          this.chosenPenalty = 'Gult kort';
          break;
        case 'Rött kort':
          this.chosenPenalty = 'Rött kort';
          break;
        case 'Utvisning':
          this.chosenPenalty = 'Utvisning';
          break;
      }
    },
    penalize(type, player) {
      switch(type) {
        case '':
          break;
        case 'Varning':
          player.Warnings = player.Warnings + 1;
          console.log(player.Warnings);
          break;
        case 'Gult kort':

          break;
        case 'Rött kort':

          break;
        case 'Utvisning':

          break;
      }
    }
  },
  computed: {
    homeTeam() {
      let teamIds = this.$store.state.match.teamId;
      let teams = this.$store.state.teams;
      let teamObj;
      for(let i = 0; i < teamIds.length; i++) {
        for(let j = 0; j < teams.length; j++) {
          if(teamIds[i] == teams[j].id && teams[j].homeTeam == true) {
            teamObj = {
              TeamName: teams[j].name,
              TeamPlayers: this.getPlayers(teams[j].id)
            };
          }
        }
      }
      return teamObj;
    },
    awayTeam() {

    }
  },
  mounted() {
    this.hometeam = this.homeTeam;
  }
}
</script>

<style scoped>
  hr {
    margin: 0;
  }

  .penaltyComp-container {
    margin: 4em auto;
    display: inline-flex;
    flex-direction: column;
    /* background-color: lightgray; */
  }

  .button {
    font-size: 16px;
    font-weight: 900;
    padding: 4px 4em;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    border: none;
  }

  .btn-type {
    font-size: 14px;
    font-weight: 900;
    padding: 4px 2em;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: white;
  }

  .button:hover, .btn-type:hover {
    opacity: 0.5;
  }

  .team-selection-container {
    margin-top: 1em;
    background-color: lightgray;
    padding: 1em 2em;
    display: flex;
    gap: 1em;
    border-radius: 5px;
  }

  .penalty-types-container {
    margin-top: 1em;
    display: flex;
    background-color: lightgray;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px 2em;
    gap: 1em;
    justify-content: space-evenly;
  }

  .description-container {
    display: flex;
    justify-content: space-between;
    background-color: lightgray;
    padding: 4px 1.2em;
    margin-bottom: 0;
  }

  .description {
    font-weight: 900;
    font-size: 12px;
    color: black;
    opacity: 0.5;
    position: relative;
    top: 2em;
  }

  .playerlist-container {
    background-color: lightgray;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    padding: 10px 0.5em;
    display: flex;
    flex-direction: column;
  }

  .player {
    margin: 4px;
    border-radius: 7px;
    border: 1px solid gray;
    padding: 0 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .player:hover {
    opacity: 0.75;
    background-color: rgba(173, 216, 230, 0.5);
    color: black;
  }

  .playerinfo-p {
    font-weight: 900;
    font-size: 14px;
  }

  .player-number-p {
    margin-right: 4px;
  }

  .inline {
    display: inline-block;
  }
</style>