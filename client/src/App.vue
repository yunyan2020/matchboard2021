<template>
  <div class="container">
    <Home />
    <router-view /> 
    
    <!-- <HandballScoreBoard /> -->    
    <!-- <GymnasticsScoreBoard /> -->
    <!-- <HandballOperator2 /> -->
  </div>
</template>

<script>
import Home from './views/Home.vue'
import HandballScoreBoard from './views/HandballScoreBoard.vue'
import HandballOperator from './views/HandballOperator.vue'

import HandballOperator2 from './views/HandballOperator2.vue'
import GymnasticsScoreBoard from './views/GymnasticsScoreBoard.vue'
import HandballUserView from './views/HandballUserView.vue'

export default { 
  // created() {
  //   this.$store.commit('updatePenaltiesHash')
  // }, 
  components: {Home, HandballScoreBoard, HandballOperator, HandballOperator2 },
  created(){
    this.$store.dispatch('restoreStateFromStorage')
    window.onstorage = () => {
      // When local storage changes, dump the list to
      // the console.
      console.log(JSON.parse(window.localStorage.getItem('store')))
      this.$store.dispatch('restoreStateFromStorage')
    }
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
