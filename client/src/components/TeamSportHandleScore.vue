<template>
  <div class="">
    <button class="homeTeamScore" @click="addScore">+</button>
    <button class="removeScore" @click="removeScore">-</button>
    <!-- <div>{{viewScore}}</div> -->
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
        addScore() {

      this.$store.state.match.matchEvents[0].score.push(this.test);
      console.log(this.$store.state.match.matchEvents[0].score);

    },
    removeScore() {
      this.$store.state.match.matchEvents[0].score.pop();
      console.log(this.$store.state.match.matchEvents[0].score);

    },

  }

}
</script>

<style scoped>

.homeTeamScore {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.removeScore {
  width: 100px;
  height: 100px;
}

</style>