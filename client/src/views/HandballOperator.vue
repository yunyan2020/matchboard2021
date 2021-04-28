<template>
  <div class="container">
    <div class="handle-score">
      <TeamSportHandleScore />
    </div>
    <div class="scoreboard-preview">
      <HandballScoreBoard />
    </div>
  </div>
</template>

<script>
import TeamSportHandleScore from '../components/TeamSportHandleScore.vue'
import HandballScoreBoardPreview from '../components/HandballScoreBoardPreview.vue'
import HandballScoreBoard from '../components/HandballScoreBoard.vue'

export default {
  components: {TeamSportHandleScore, HandballScoreBoardPreview, HandballScoreBoard}
};
</script>

<style scoped>

  .container {
    width: 95vw;
    height: 80vh; 
    background-image: url('src/assets/handball_operator_bg.png');
    background-repeat: no-repeat;
    /* margin: 0 auto;  */
    }
  .handle-score {
    padding-top: 3vh;
  }

  .scoreboard-preview {
    width: 40vw;
    height: 15vh;
    text-align: center;
    background: red;
    margin: 0 auto;
    margin-top: -5vh;
  }
  :deep(.logo-left img){
    margin-top: 2vh;
    width: 6vw;
  }
  :deep(.logo-right img){
    margin-top: 2vh;
    width: 6vw;
  }
  :deep(.score) {
    font-size: 3em;
    height: 50px;
  }
  :deep(.penalty-time) {
    font-size: 4em;
    margin-bottom: 2vh;
    margin-top: 8vh;
  }

</style>
