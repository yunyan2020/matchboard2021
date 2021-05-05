<template>
  <div class="Round-container">
      <div class="Round">
        <h3 class="Round-detail">Round</h3>
        <h3 class="Round-detail">{{currentRoundSeq}}</h3>
        <h3 class="Round-detail">/</h3>
        <h3 class="Round-detail">{{numberOfRounds}}</h3>  
      </div>            
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
  }
</style>