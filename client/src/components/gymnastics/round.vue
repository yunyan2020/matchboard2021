<template>
  <div class="Round">
    <h3 class="Round-detail">Round</h3>
    <h3 class="Round-detail">{{currentRoundSeq}}</h3>
    <h3 class="Round-detail">/</h3>
    <h3 class="Round-detail">{{numberOfRounds}}</h3>  
  </div>         
</template>

<script>
export default {
  props:['currentRoundSeq','numberOfRounds'],
  computed:{
    currentRoundSeq(){
      return this.currentRoundSeq
    },
    numberOfRounds(){
      return this.numberOfRounds
    },
  }

}
</script>

<style scoped>

.Round{  
  display: flex;
  border:3px solid green;   
  float:right;   
  }
.Round-detail{
  margin: 10px; 
}  
</style>