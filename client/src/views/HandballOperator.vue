<template>
  <div class="container">
    <div class="handle-score">
      <TeamSportHandleScore />
    </div>
    <div class="scoreboard-preview">
      <HandballScoreBoard />
    </div>
    <div class="handle-penalties">
      <PenaltiesComp />
      <!-- <HandballHandlePenalties /> -->
    </div>
  </div>
</template>

<script>
import TeamSportHandleScore from '../components/TeamSportHandleScore.vue'
import HandballScoreBoard from '../components/HandballScoreBoard.vue'
import HandballHandlePenalties from '../components/HandballHandlePenalties.vue'
import PenaltiesComp from '../components/PenaltiesComp.vue'

export default {
  components: {TeamSportHandleScore, HandballScoreBoard, PenaltiesComp}
};
</script>

<style scoped>

  .container {
    width: 75vw;
    height: 75vh; 
    background-image: url('src/assets/handball_operator_bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    }
  .handle-score {
    padding-top: 3vh;
  }
  .scoreboard-preview {
    width: 50vw;
    height: 45vh;
    text-align: center;
    justify-content: left;
    margin: 0 auto;
    outline: #000000 solid 2px; 
    margin-top: 5vh; 
    box-shadow: 0px 0px 10px 7px rgb(74, 213, 255);
  }
  :deep(.sb-container) {
     /* height: 40vh;  */
  }

  :deep(.logo-left img){
    /* margin-top: 2vh; */
    width: 6vw;
  }
  :deep(.logo-right img){
    /* margin-top: 2vh; */
    width: 6vw;
  }
  :deep(.score) { 
    font-size: 3em;
    height: 50px;
  }
  :deep(.penalty-time) {
    font-size: 3em;
    margin-bottom: 2vh;
  }
  :deep(.penalty-left) {
    /* margin-top: 14vh; */
  }
  :deep(.penalty-right) {
    margin-top: 14vh;
  }

  .handle-penalties {
    margin-top: 5vh;
  }

</style>
