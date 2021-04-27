<template>

  <div class="score-container">
    <div class="home-score">
      <button class="addScore" @click="addHomeTeamScore">+</button>
      <button class="removeScore" @click="removeHomeTeamScore">-</button>
    </div>

    <div class="away-score">
      <button class="addScore" @click="addHomeTeamScore">+</button>
      <button class="removeScore" @click="removeHomeTeamScore">-</button>
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
      this.$store.state.match.matchEvents[0].score.push(this.test);
      console.log(this.$store.state.match.matchEvents[0].score);
    },

    removeHomeTeamScore() {
      this.$store.state.match.matchEvents[0].score.pop();
      console.log(this.$store.state.match.matchEvents[0].score);

    },

  }

}
</script>

<style scoped>

.score-container {
  width: 100%;
  /* height: 100px; */
  display: flex;
  justify-content: center;
}

.away-score {
  margin-left: 100px;
}


.addScore {
  width: 50px;
  height: 50px;
  background-color: orange;
  display: block;
  padding: 0;
  
}
.removeScore {
  width: 50px;
  height: 50px;
  background-color: orange;
  padding: 0;
}

</style>