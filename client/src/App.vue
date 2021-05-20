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
import HandballScoreBoard from './views/HandballUserView.vue'
import HandballOperator from './views/HandballOperator.vue'
import GymnasticsScoreBoard from './views/GymnasticsScoreBoard.vue'
import HandballUserView from './views/HandballUserView.vue'
import GymnasticsOperator from './views/GymnasticsOperator.vue'

export default { 
  // created() {
  //   this.$store.commit('updatePenaltiesHash')
  // }, 
  components: {Home, HandballScoreBoard, HandballOperator, HandballUserView,GymnasticsScoreBoard,GymnasticsOperator },
  created(){
    this.$store.dispatch('restoreStateFromStorage')
  }
}


</script>

<style>
* {
  box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

#app {
  font-family: 'Roboto Slab', serif;
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
