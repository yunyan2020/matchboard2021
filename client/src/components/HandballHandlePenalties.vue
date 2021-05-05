<template>
  <div>
  <select id="penaltySelection" v-model="selected" >
  <option v-for="player in listPlayers" :value="player" :key="player">{{ player.name }}</option>
</select>
  <button v-on:click="addPenalty()">Add Penalty </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // mockdata: {
      //   id: 4,
      //   teamId: 2,
      //   playerId: 8,
      //   matchTime: "8:14",
      //   penaltyTime: "1:00",
      //   type: "Gult kort",
      // }
      selected: " ",
       players: [],
       modalOpen: true
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
      // return this.$store.state.match.teams[0].players
    },
    
  },
  methods: {
    addPenalty: function() {
      this.$store.state.match.matchEvents[0].penalties.push(this.test)
      console.log(this.$store.state.match.matchEvents[0].penalties, 'penalties');
      // store.commit("addPenalty");
    },
  },
};
</script>

<style>
</style>