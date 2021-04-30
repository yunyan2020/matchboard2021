<template>
   <div class="scoreStats">
    <div class="wrap">
      <div class="difficult">
        <h3 class="difficult">Difficult</h3>
        <h3 class="difficultScore">7.10</h3>
      </div>
      <div class="excution">
        <h3 class="excution">Excution</h3>
        <h3 class="excutionScore">14.15</h3>
      </div>
    </div>   
    <div class="wrap"> 
      <div class="x">
        <h3 class="Penalty">Penalty</h3>
        <h3 class="penaltyPoints">0.20</h3>
      </div>
      <div class="x">
        <h3 class="scoreTitle">SCORE</h3>
        <h3 class="scoreText">14.50</h3>
      </div>     
    </div>
    
   </div>

   
</template>

<script>
export default {

}
</script>

<style scoped>
.scoreStats {
  display:flex;
}
.difficult, .excution, .x {
  display:flex;
  margin:10px;
}
.wrap{
  margin:50px;
}
</style>