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

<script>
export default {

}
</script>

<style scoped>
  .container {
    width: 75%;
    margin: 0 auto;
  }

  .navigation {
    padding: 10px;
    float: left;
  }
</style>