<template>
  <div class="hej">hej
  <select v-model="listPlayers" name="" id="">
    <option v-for="(player, i) in listPlayers" v-bind:key="i">{{ player.name }} </option>
  </select>
  </div>
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

}

</script>

<style>

</style>