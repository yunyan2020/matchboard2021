<template>
  <div class="app-container">
    <!-- <Home /> -->
    <HandballOperator />
    <!-- <HandballUserView />  -->
        <!-- <router-view /> -->
    
 
  </div>
</template>

<script>
import Home from './views/Home.vue'
import HandballScoreBoard from './views/HandballUserView.vue'
import HandballOperator from './views/HandballOperator.vue'
import HandballUserView from './views/HandballUserView.vue'

export default { 
  // created() {
  //   this.$store.commit('updatePenaltiesHash')
  // }, 
  components: {Home, HandballScoreBoard, HandballOperator, HandballUserView }
}


</script>

<style>
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
