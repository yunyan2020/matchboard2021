<template>
  <div :class="`playerlist-operator-container playerlist-operator-container-hometeam-${team.Hometeam}`">
    <div class="playerlist-operator-btns">
      <button @click="setPenalty('Varning')" class="penalty-btn penalty-btn-warning" :class="activePenalty == 'Varning' ? ' warning-selected': ''">Varning</button>
      <button @click="setPenalty('Gult kort')" class="penalty-btn" :class="activePenalty == 'Gult kort' ? ' warning-selected': ''">Gult kort</button>
      <button @click="setPenalty('Rött kort')" class="penalty-btn" :class="activePenalty == 'Rött kort' ? ' redCard-selected': ''">Rött kort</button>
      <button @click="setPenalty('Utvisning')" class="penalty-btn" :class="activePenalty == 'Utvisning' ? ' disq-selected': ''">Utvisning</button>
    </div>
    <hr />
    <div class="description-container">
      <p class="description-p">Nummer | Namn</p>
      <p class="description-p">Varningar | Utvisningar</p>
    </div>
    <hr />
    <div class="playerlist-container" v-if="team">
      <div class="player" :class="activePlayer == player ? ' player-selected' : ''" v-for="player in playerlist" :key="player" @click="setPlayer(player)">
        <div class="player-number-name">
          <p class="player-number">{{player.Number}}</p>
          <p class="player-name">{{player.Name}}</p>
          <p class="player-id hide">{{player.id}}</p>
        </div>
        <div class="player-penalty-container">
          <!-- <p>{{player.Warnings}}</p> 
          <p>{{player.SentOffs}}</p> -->
          <div class="warning-container">
            <div v-for="(warning, index) in 3" :key="index" :class="'warning warning-' + `${index + 1}-` + `${player.Name}` + (player.Warnings[index] != null ? ' marked' : '')"></div>
          </div>
          <div class="sentoffs-container">
            <div v-for="(sentoff, index) in 3" :key="index" :class="'sentoff sentoff-' + `${index + 1}-${player.Name}` + (player.SentOffs[index] != null ? ' marked' : '')"></div>
          </div>
        </div>
      </div>
      <div class="sentoffs-player-container" v-if="sentoffs">
        <div class="sentoff-player" v-for="sentoff in sentoffs" :key="sentoff">
          <div class="player-number-name">
            <p class="player-number">{{sentoff.Number}}</p>
            <p>{{sentoff.Name}}</p>
          </div>
          <div class="sentoff-timer">
            <p class="sentoff-timer-p">01:14</p>
          </div>
        </div>
      </div>
      <div class="disqualified-players-container" v-if="disqualified">
        <div class="disqualified-player" v-for="disq in disqualified" :key="disq">
          <div class="player-number-name">
            <p class="player-number">{{disq.Number}}</p>
            <p>{{disq.Name}}</p>
          </div>
          <div class="disqualified-msg-container">
            <p class="disqualified-p">DISKVALIFICERAD</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['team'],
  data() {
    return {
      chosenPenalty: '',
      /* sentOffs: [],
      disqualified: [], */
      disqulifiedTimer: [],
      selectedBtn: false,
      activePenalty: '',
      activePlayer: null
    }
  },
  computed: {
    playerlist() {
      return this.team.TeamPlayers;
    },
    sentoffs() {
      /* return this.$store.state.match.penalties.sentoffs; */
      if(this.team.Hometeam) {
        return this.$store.state.match.penalties.sentoffs.home;
      } else {
        return this.$store.state.match.penalties.sentoffs.away;
      }
    },
    disqualified() {
      /* return this.$store.state.match.penalties.disqed; */
      if(this.team.Hometeam) {
        return this.$store.state.match.penalties.disqed.home;
      } else {
        return this.$store.state.match.penalties.disqed.away;
      }
    }
  },
  methods: {
    activateBtn() {
      this.selectedBtn = true;
    },
    setPenalty(type) {
      this.activePenalty = type;
      let team;
      if(this.team.Hometeam) {
        team = 'hometeam';
      } else {
        team = 'awayteam';
      }
      if(this.activePlayer && this.activePenalty) {
        /* console.log('setActionType', this.activePlayer, this.activePenalty); */
        switch(this.activePenalty) {
          case 'Varning':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: team});
            this.activePlayer.Warnings.push('*');
            if(this.activePlayer.Warnings.length == 3) {
              this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
              this.disqulifiedTimer.push(this.activePlayer);
              console.log(this.disqulifiedTimer);
            }
            this.activePenalty = '';
            this.activePlayer = null;
            break;
          case 'Gult kort':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: team});
            this.activePlayer.Warnings.push('*');
            if(this.activePlayer.Warnings.length == 3) {
              this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            }
            this.activePenalty = '';
            this.activePlayer = null;
            break;
          case 'Rött kort':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: team});
            this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            this.activePenalty = '';
            this.activePlayer = null;
            break;
          case 'Utvisning':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: team});
            this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            this.activePenalty = '';
            this.activePlayer = null;
            break;
        }
        /* this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team.Hometeam ? 'hometeam' : 'awayteam'});
        this.activePenalty = '';
        this.activePlayer = null; */
      }
    },
    setPlayer(player) {
      this.activePlayer = player;
      /* let arg = {
        team: this.team.Hometeam ? 'hometeam' : 'awayteam',
        player: player
      } */
      if(this.activePlayer && this.activePenalty) {
        /* console.log('setActionType', this.activePlayer, this.activePenalty); */
        /* if(['Varning'].includes(this.activePenalty)) {
          this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team.Hometeam ? 'hometeam' : 'awayteam'});
          this.activePlayer.Warnings.push('*');
          this.activePenalty = '';
          this.activePlayer = null;
        } */
        switch(this.activePenalty) {
          case 'Varning':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team.Hometeam ? 'hometeam' : 'awayteam'});
            this.activePlayer.Warnings.push('*');
            if(this.activePlayer.Warnings.length == 3) {
              this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            }
            this.activePenalty = '';
            this.activePlayer = null;
            break;
          case 'Gult kort':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team.Hometeam ? 'hometeam' : 'awayteam'});
            this.activePlayer.Warnings.push('*');
            if(this.activePlayer.Warnings.length == 3) {
              this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            }
            this.activePenalty = '';
            this.activePlayer = null;
            break;
          case 'Rött kort':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team.Hometeam ? 'hometeam' : 'awayteam'});
            this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            this.activePenalty = '';
            this.activePlayer = null;
            break;
          case 'Utvisning':
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team.Hometeam ? 'hometeam' : 'awayteam'});
            this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            this.activePenalty = '';
            this.activePlayer = null;
            break;
        }
      }
      
    }
  }
}
</script>

<style scoped>

  .player-selected {
    background-color: rgba(117, 230, 117, 0.5) !important;
  }

  .warning-selected {
    background-color: rgba(255, 217, 0, 0.801) !important;
  }

  * {
    box-sizing: border-box;
  }

  .hide {
    opacity: 0;
  }

  .disqualified-p {
    color: lightgray;
    font-weight: 900;
  }

  .marked {
    background-color: #4B86DF !important; 
  }

  .warning-container, .sentoffs-container {
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }

  .sentoff {
    width: 15px;
    height: 15px;
    border: 1px solid rgba(0, 0, 255, 0.5);
    border-radius: 50%;
    background-color: white;
  }

  .warning {
    width: 15px;
    height: 15px;
    border: 1px solid rgba(0, 0, 255, 0.5);
    border-radius: 50%;
    background-color: white;
  }

  hr {
    opacity: 0.25;
    margin: 4px 0;
  }

  button:hover {
    opacity: 0.75;
  }

  .playerlist-operator-container {
    width: 45vw;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .active {
    border: 4px solid lightblue !important;
  }

  .playerlist-operator-btns {
    padding: 8px;
    display: flex;
    justify-content: space-evenly;
  }

  .penalty-btn {
    background-color: white;
    outline: none;
    border: 1px solid rgb(194, 194, 194);
    border-radius: 20px;
    padding: 5px 2em;
    font-weight: 900;
    cursor: pointer;
    background-color: rgba(235, 204, 253, 0.514);
  }

  .description-container {
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
  }

  .description-p {
    margin: 0;
    opacity: 0.75;
    font-weight: 900;
    font-size: 12px;
  }

  .player-number-name {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .playerlist-operator-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  }

  .playerlist-container {
    display: flex;
    flex-direction: column;
    padding: 4px;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px; */
  }

  .player {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 18px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(117, 230, 117, 0.25);
    cursor: pointer;
  }

  .sentoff-player {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 18px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(248, 62, 62, 0.479);
    cursor: pointer;
  }

  .disqualified-player {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 18px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.479);
  }

  .player-number {
    font-weight: 900;
  }

  .player:hover {
    background-color: rgba(117, 230, 117, 0.5);
  }

  .player-penalty-container {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
</style>