<template>
  <div>
    <button v-on:click="modalOpen = !modalOpen && console.log(this.$store.state.match.matchEvents[0].penalties.length)"> Penalty</button>
    <div class="penaltyModal" v-if="modalOpen==false">
      <div class="penaltyModalContent">
      <select id="penaltySelection" v-model="selected">
        <option v-for="player in listPlayers" :value="player" :key="player">
          {{ player.name }}
        </option>
      </select>
      <select id="penaltyType" v-model="selectedtype">
        <option v-for="type in penaltyTypes" :value="type" :key="type">
          {{ type }}
        </option>
      </select>
      <button v-on:click="addPenalty()">Add penalty</button>
      </div>
    </div>
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
      selectedType: " ",
      penaltyTypes: ["Gult kort","Rött kort", "Svart kort"],
      players: [],
      modalOpen: true,
    };
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
    addPenalty: function () {
      this.$store.state.match.matchEvents[0].penalties.push(this.mockData);
      console.log(
        this.$store.state.match.matchEvents[0].penalties,
        "penalties"
      );
    
      // store.commit("addPenalty");
    },
    fullPenalty(){
      return {
        id: this.$store.state.match.matchEvents[0].penalties.length + 1,
        
      }
    },
    simpleLog: function(){
      console.log(this.$store.state.match.matchEvents[0].penalties.length)
    }
    
  },
};
</script>

<style scoped>
.penaltyModal{
  background-color: gray;
  height: 150px;
  width: 200px;
  margin: 0 auto;
}
.penaltyModalContent{
  padding-top: 10px;
}
</style>