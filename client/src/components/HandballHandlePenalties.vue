<template>
  <select v-model="listPlayers" name="" id="">
    <option disabled selected value="''">Utvisning</option>
    <option v-for="(player, i) in listPlayers" :key="i" @click="addPenalty">
      {{ i }} - {{ player.name }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      test: {
        id: 4,
        teamId: 2,
        playerId: 8,
        matchTime: "8:14",
        penaltyTime: "1:00",
        type: "Gult kort",
      }
    }
  },
  computed: {


    // getPlayerId() {
    //   let player = this.$store.state.match.teams[0].players[i].id;
    //   console.log(player);
    // },
    listPlayers() {
      return this.$store.state.players;
      // let allPlayers = []
      // let allPlayers1 = this.$store.state.match.teams[0].players
      // let allPlayers2 = this.$store.state.match.teams[1].players
      // console.log(allPlayers2);
      return allPlayers;
      // allPlayers = allPlayers1.concat(allPlayers2)
    },
  },

  methods: {
    addPenalty() {
      this.$store.state.match.matchEvents[0].penalties.push(this.test)
      console.log(this.$store.state.match.matchEvents[0].penalties, 'penalties');
      // store.commit("addPenalty");
    },
  },
};
</script>

<style>
</style>