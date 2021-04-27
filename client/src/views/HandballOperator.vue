<template>
  <div class="container">
    <div class="score">
      <TeamSportHandleScore />
    </div>
  </div>
</template>

<script>
import TeamSportHandleScore from '../components/TeamSportHandleScore.vue'

export default {
  components: {TeamSportHandleScore, }
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

</style>
