<template>
  <div class="container">
    <div class="score">
      <TeamSportHandleScore />
    </div>
    <div class="preview">
      <HandballScoreBoardPreview />
    </div>
  </div>
</template>

<script>
import TeamSportHandleScore from '../components/TeamSportHandleScore.vue'
import HandballScoreBoardPreview from '../components/HandballScoreBoardPreview.vue'

export default {
  components: {TeamSportHandleScore, HandballScoreBoardPreview}
};
</script>

<style scoped>

  .container {
    width: 1850px;
    height: 975px; 
    /* width: 95vw;
    height: 95vh; */
    background-image: url('src/assets/handball_operator_bg.png');
    background-repeat: no-repeat;
    display: grid;
    /* grid-template-columns: 25% 50% 25%; */
  }

  .preview {
    width: 100%;
    text-align: center;
  }

  .score {
    height: 50px;
  }

</style>
