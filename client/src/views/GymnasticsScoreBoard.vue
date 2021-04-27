<template>
  <div class="container">
    <div class="matchName">
      <h1>WOMEN's VAULT 2021</h1>
    </div>
    <div class="gymnasticsScore">
      <h3>DIFFICULTY</h3>
      <h3>EXCUTION</h3>
      <h3>ROUND</h3>
    </div>
     <div class="participant">
      <Participant />     
    </div>
    <div class="finalScore">
      <h3>VAULT1</h3>
      <h3>VAULT2</h3>
      <h3>SCORE</h3>
    </div>
  </div>
</template>

<script>
export default {
  components:{Participant}
};

import Participant from '../components/gymnastics/participant.vue'
</script>



<style scoped>
.container {
  width: 1850px;
  height: 970px;    
  
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 10% 40% 10% 40%;
}
.matchName{
  font-size:60px;
  color:lightgreen;
}
.gymnasticsScore {
  font-size:50px ;
  color:orange;
}
.finalScore{
  color:orange;
  font-size:50px ;
}
</style>
