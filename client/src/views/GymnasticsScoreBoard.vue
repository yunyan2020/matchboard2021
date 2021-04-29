<template>
  <div class="container">
    <!-- <div class="matchName">
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
    </div> -->

    <div class="event-container">
      <h1 class="title">Womens vault 2021</h1>
    </div>
    <div class="stats-container">
      <div class="wrap1">
        <div class="stat">
          <h3 class="stat-detail">Difficulty</h3>
          <h3 class="stat-detail">6.000</h3>
        </div>
        <div class="stat">
          <h3 class="stat-detail">Execution</h3>
          <h3 class="stat-detail">8.500</h3>
        </div>
      </div>
      <div class="wrap2">
        <div class="stat">
          <h3 class="stat-detail">Round</h3>
          <h3 class="stat-detail">2/2</h3>
        </div>
      </div>  
    </div>
    <div class="participant-container">
      <Participant />
    </div>
    <div class="stats-container">
      <div class="left-wrap">
        <div class="stat">
          <h3 class="stat-detail">Vault 1</h3>
          <h3 class="stat-detail">14.000</h3>
        </div>
        <div class="stat">
          <h3 class="stat-detail">Vault 2</h3>
          <h3 class="stat-detail">14.500</h3>
        </div>
      </div>
      <div class="right-wrap">
        <div class="stat">
          <h3 class="stat-detail">Score</h3>
          <h3 class="stat-detail">14.250</h3>
        </div>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

  /* .container {
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
  } */
  * {
    margin: 0;
  }

  .container {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(229,229,255,1) 51%, rgba(255,255,255,1) 100%);
    width: 100%;
    height: 100vh;
    border: 1px solid lightgray;
    display: grid;
    gap: 4em;
    grid-template-rows: 10% 40% 10% 40%;
    font-family: 'Orbitron', sans-serif;
  }

  .title {
    font-size: 75px;
  }

  .event-container {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 1px solid rgba(121, 120, 120, 0.5);
    border-right: 1px solid rgb(121, 120, 120, 0.5);
    border-bottom: 1px solid rgb(121, 120, 120, 0.5);
    width: 50%;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.534);
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 50px; */
  }

  .stats-container {
    display: flex;
    justify-content: space-between;
    margin: 50px;
    gap: 4em;
    border: 1px solid red;
    width: 50%;
    margin: 0 auto;
  }

  .wrap1, .wrap2 {
    border: 1px solid blue;
    /* padding: 1em; */
  }

  .stat {
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    gap: 2em;
  }

  .stat-detail {
    font-size: 45px;
    /* margin: 1em; */
  }

  .participant-container {
    display: flex;
    justify-content: center; 
    height: 4em;   
  }


</style>
