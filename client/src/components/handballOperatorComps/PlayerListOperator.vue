<template>
  <div class="playerlist-operator-container">
    <div class="playerlist-operator-btns">
      <button class="penalty-btn">Varning</button>
      <button class="penalty-btn">Gult kort</button>
      <button class="penalty-btn">Rött kort</button>
      <button class="penalty-btn">Utvisning</button>
    </div>
    <div class="playerlist-container" v-if="team">
      <div class="player" v-for="player in playerlist" :key="player">
        <div class="player-number-name">
          <p>{{player.Number}}</p>
          <p>{{player.Name}}</p>
        </div>
      </div>
      {{team}}
      
    </div>
  </div>  
</template>

<script>
export default {
  props: ['team'],
  data() {
    return {
      
    }
  },
  computed: {
    playerlist() {
      return this.team.TeamPlayers;
    }
  }
}
</script>

<style scoped>
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
    border: 1px solid rgb(139, 139, 139);
    border-radius: 20px;
    padding: 5px 2em;
    font-weight: 900;
  }

  .player-number-name {
    display: flex;
    flex-direction: row;
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
  }
</style>