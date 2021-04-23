<template>
  <div class="container">
    <div class="navigation">
      <router-link to="/GymnasticsOperator">GymnasticsOperator</router-link>
    </div>
    <div class="navigation">
      <router-link to="/GymnasticsScoreBoard">GymnasticsScoreBoard</router-link>
    </div>
    <div class="navigation">
      <router-link to="/HandballOperator">HandballOperator</router-link>
    </div>
    <div class="navigation">
      <router-link to="/HandballScoreBoard">HandballScoreBoard</router-link>
    </div>
  </div>
</template>

<script setup>


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 50%;
  margin: 0 auto;
}

.navigation {
  padding: 10px;
  float: left;
}
</style>
