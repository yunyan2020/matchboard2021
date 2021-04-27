<template>
  <div class="participantInformation">
    <div class="matchEvent">
      <img src="src/assets/vault.png" alt="" class="matchEvent" />
    </div>
    <div class="Ranking">
      <p>1</p>
    </div>
    <div class="abbrevName">
      <p>USA</p>
    </div>
    <div class="flag">
      <img src="src/assets/usa-flag.png" alt="" class="flag" />
    </div>
    <div class="participantName">
      <p >Simone Heles</p>
    </div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style scoped>
.participantInformation {
  width: 700px;
  height: 50px;
  display: flex;
  align-content: right;
}
.matchEvent{
  max-width:50px;
  width:50px;
}
.abbrevName{
  max-width:50px;
  width:50px;
  background-color:lightskyblue;
  font-size: 20px;
}
.participantName{
  max-width:500px;
  width:500px;
  background-color:lightskyblue;
  text-align: left;
  font-size: 20px;
}
.Ranking{
  width:50px;
  background-color: gold;
  font-size: 20px;
}
.flag{
  max-width:95px;
  text-align: center;

}
</style>