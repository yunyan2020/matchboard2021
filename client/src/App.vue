<template>
  <div class="container">
    <!-- <Home /> -->
    <HandballOperator />
    <!-- <HandballScoreBoard />  -->
        <!-- <router-view /> -->
  </div>
</template>

<script setup>
import Home from './views/Home.vue'
import HandballScoreBoard from './views/HandballScoreBoard.vue'
import HandballOperator from './views/HandballOperator.vue'



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
