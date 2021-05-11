<template>
  <div class="container">
    <Home />
    <!-- <HandballScoreBoard /> -->
    <!-- <GymnasticsScoreBoard /> -->
    <router-view /> 
  </div>
</template>

<script>
import Home from './views/Home.vue'
import HandballScoreBoard from './views/HandballScoreBoard.vue'
import HandballOperator from './views/HandballOperator.vue'
import GymnasticsScoreBoard from './views/GymnasticsScoreBoard.vue'

export default { 
  // created() {
  //   this.$store.commit('updatePenaltiesHash')
  // }, 
  components: {Home, HandballScoreBoard, HandballOperator }
}


</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
