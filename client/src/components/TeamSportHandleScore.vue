<template>

  <div class="score-container">
    <div class="home-score">
      <button class="homeRemoveScore" @click="removeHomeTeamScore">-</button>
      <button class="homeAddScore" @click="addHomeTeamScore">+</button>
    </div>

    <div class="away-score">
      <button class="awayAddScore" @click="addAwayTeamScore">+</button>
      <button class="awayRemoveScore" @click="removeAwayTeamScore">-</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      test: {
        teamId: 1,
        points: 1,
        player: "Karl Henrik",
        time: "11:15"
      }
    }
  },
  computed: {
  },
  methods: {
    addHomeTeamScore() {
      this.$store.state.match.matchEvents[0].homeTeamScore.push(this.test);
      console.log(this.$store.state.match.matchEvents[0].homeTeamScore);
    },

    removeHomeTeamScore() {
      this.$store.state.match.matchEvents[0].homeTeamScore.pop();
      console.log(this.$store.state.match.matchEvents[0].homeTeamScore);

    },
    addAwayTeamScore() {
      this.$store.state.match.matchEvents[0].awayTeamScore.push(this.test);
      console.log(this.$store.state.match.matchEvents[0].awayTeamScore);
    },

    removeAwayTeamScore() {
      this.$store.state.match.matchEvents[0].awayTeamScore.pop();
      console.log(this.$store.state.match.matchEvents[0].awayTeamScore);

    },

  }

}
</script>

<style scoped>

.score-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  
 
  
}

.home-score {
  width: 150px;
  height: 50px;
  padding: 15px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.212);
  border-radius: 6px;
}

.away-score {
  margin-left: 100px;
  width: 150px;
  height: 50px;
  padding: 15px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.212);
  border-radius: 6px;
}


.homeAddScore {
  
  float: right;
  width: 50px;
  height: 50px;
  font-size: 40px;
  /* display: table-cell;
  vertical-align: middle; */
  color: white;
  background-color: rgb(255, 157, 29);
  padding-bottom: 7px; 
  line-height: 0px;
  border-radius: 12px;
}
.homeRemoveScore {
  float: left;
  width: 50px;
  height: 50px;
  color: white;
  background-color: rgb(240, 42, 42);
  padding: 0;
  font-size: 40px;
  padding-bottom: 6px;
  line-height: 0px;
  border-radius: 12px;
}
.awayAddScore {
  
  float: left;
  width: 50px;
  height: 50px;
  font-size: 40px;
  /* display: table-cell;
  vertical-align: middle; */
  color: white;
  background-color: rgb(255, 157, 29);
  padding-bottom: 7px; 
  line-height: 0px;
  border-radius: 12px;
}
.awayRemoveScore {
  float: right;
  width: 50px;
  height: 50px;
  color: white;
  background-color: rgb(240, 42, 42);
  padding: 0;
  font-size: 40px;
  padding-bottom: 6px;
  line-height: 0px;
  border-radius: 12px;
}

</style>