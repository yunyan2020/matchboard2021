<template>
  
  <select v-model="listPlayers" name="" id="">
    <option v-for="(player, i) in listPlayers" v-bind:key="i" @change="addPenalty">{{ player.name }} </option>
  </select>
  
</template>

<script>
export default {
  data() {
    return {
       players: []
    }
      
  },
  computed: {
    listPlayers() {
      let allPlayers = []
      let allPlayers1 = this.$store.state.match.teams[0].players
      let allPlayers2 = this.$store.state.match.teams[1].players
      console.log(allPlayers2);
      allPlayers = allPlayers1.concat(allPlayers2)
     
      return allPlayers;
      // return this.$store.state.match.teams[0].players
    }
  },
  addPenalty() {
    let match = this.match;
    let player = match.team.players[i]
    store.commit('addPenalty',)

  }

}

</script>

<style>

</style>