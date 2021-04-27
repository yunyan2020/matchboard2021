<template>
  <div class="container">
    <div class="topp">
      <h1>WOMEN's VAULT 2021</h1>
    </div>
    <div class="gymnasticsScore">
      <h3>DIFFICULTY</h3>
      <h3>EXCUTION</h3>
      <h3>ROUND</h3>
    </div>
     <div class="participant">
      <h3>Participant information</h3>      
    </div>
    <div class="finalScore">
      <h3>VAULT1</h3>
      <h3>VAULT2</h3>
      <h3>SCORE</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 1850px;
  height: 970px;
  background-image: url("../asscet/gymnasticsScoreboard.png");
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 10% 40% 10% 40%;
}
.gymnasticsScore {
  font-size:50px ;
  color:orange;
}
</style>
