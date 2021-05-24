<template>
  <div :class="`playerlist-operator-container playerlist-operator-container-hometeam-${team.Hometeam}`">
    <div class="playerlist-operator-btns">
      <button @click="setPenalty($event)" class="penalty-btn penalty-btn-warning">Varning</button>
      <button @click="setPenalty($event)" class="penalty-btn">Gult kort</button>
      <button @click="setPenalty($event)" class="penalty-btn">Rött kort</button>
      <button @click="setPenalty($event)" class="penalty-btn">Utvisning</button>
    </div>
    <hr />
    <div class="description-container">
      <p class="description-p">Nummer | Namn</p>
      <p class="description-p">Varningar | Utvisningar</p>
    </div>
    <hr />
    <div class="playerlist-container" v-if="team">
      <div class="player" v-for="player in playerlist" :key="player" @click="penalize(chosenPenalty, player)">
        <div class="player-number-name">
          <p class="player-number">{{player.Number}}</p>
          <p class="player-name">{{player.Name}}</p>
          <p class="player-id hide">{{player.id}}</p>
        </div>
        <div class="player-penalty-container">
          <!-- <p>{{player.Warnings}}</p> 
          <p>{{player.SentOffs}}</p> -->
          <div class="warning-container">
            <div v-for="(warning, index) in 3" :key="index" :class="'warning warning-' + `${index + 1}-` + `${player.Name}`"></div>
          </div>
          <div class="sentoffs-container">
            <div v-for="(sentoff, index) in 3" :key="index" :class="'sentoff sentoff-' + `${index + 1}-${player.Name}`"></div>
          </div>
        </div>
      </div>
      <div class="sentoffs-player-container" v-if="sentOffs">
        <div class="sentoff-player" v-for="sentoff in sentOffs" :key="sentoff">
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
      sentOffs: [],
      disqualified: [],
      disqulifiedTimer: []
    }
  },
  computed: {
    playerlist() {
      return this.team.TeamPlayers;
    }
  },
  methods: {
    setPenalty(event) {
      switch(event.target.innerText) {
        case 'Varning': 
          this.chosenPenalty = 'Varning';
          /* let chosen = document.getElementsByClassName('penalty-btn-warning');
          console.log(chosen); */
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
          if(player.Warnings == 0) {
            player.Warnings = player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-1-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            break;
          }else if(player.Warnings == 1) {
            player.Warnings = player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-2-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            break;
          }else if(player.Warnings == 2) {
            player.Warnings = player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-3-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            this.sentOffs.push(player);
            player.SentOffs = player.SentOffs + 1;
            element = document.getElementsByClassName(`sentoff-1-${player.Name}`)[0];
            element.classList.add('marked');
            this.playerlist.splice((this.playerlist.indexOf(player)), 1);
            break;
          }
        case 'Gult kort':
          if(player.Warnings == 0) {
            player.Warnings = player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-1-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            break;
          }else if(player.Warnings == 1) {
            player.Warnings = player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-2-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            break;
          }else if(player.Warnings == 2) {
            player.Warnings = player.Warnings + 1;
            let element = document.getElementsByClassName(`warning-3-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            this.sentOffs.push(player);
            player.SentOffs = player.SentOffs + 1;
            element = document.getElementsByClassName(`sentoff-1-${player.Name}`)[0];
            element.classList.add('marked');
            break;
          }
        case 'Rött kort':
          this.playerlist.splice(this.playerlist.indexOf(player), 1);
          this.disqualified.push(player);
          break;
        case 'Utvisning':
          if(player.SentOffs == 0) {
            player.SentOffs = player.SentOffs + 1;
            let element = document.getElementsByClassName(`sentoff-1-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            this.sentOffs.push(player);
            this.playerlist.splice((this.playerlist.indexOf(player)), 1);
            break;
          }else if(player.SentOffs == 1) {
            player.SentOffs = player.SentOffs + 1;
            let element = document.getElementsByClassName(`sentoff-2-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            this.sentOffs.push(player);
            this.playerlist.splice((this.playerlist.indexOf(player)), 1);
            break;
          }else if(player.SentOffs == 2) {
            player.SentOffs = player.SentOffs + 1;
            let element = document.getElementsByClassName(`sentoff-3-${player.Name}`)[0];
            element.classList.add('marked');
            this.chosenPenalty = '';
            this.sentOffs.push(player);
            this.playerlist.splice((this.playerlist.indexOf(player)), 1);
            break;
          }
          break;
      }
    }
  }
}
</script>

<style scoped>

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