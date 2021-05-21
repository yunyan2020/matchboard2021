<template>
  <div class="playerlist-operator-container">
    <div class="playerlist-operator-btns">
      <button @click="setPenalty($event)" class="penalty-btn">Varning</button>
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
      <div class="player" v-for="player in playerlist" :key="player">
        <div class="player-number-name">
          <p>{{player.Number}}</p>
          <p>{{player.Name}}</p>
        </div>
        <div class="player-penalty-container">
          <p>{{player.Warnings}}</p>
          <p>{{player.SentOffs}}</p>
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
      chosenPenalty: ''
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
  }
}
</script>

<style scoped>
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

  .playerlist-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
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

  .player:hover {
    background-color: rgba(117, 230, 117, 0.5);
  }

  .player-penalty-container {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
</style>