<template>
  <!-- <div class="participantInformation">
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
  </div> -->
  <div class="participant">
    <div class="matchEvent section">
      <img :src="'/src/assets/' + matchEventName.toLowerCase() + '.png'" alt="" class="matchEvent-icon" />
    </div>
    <div class="ranking section">
      <p class="participant"> {{ranking}}</p>
    </div>
    <div class="abbrevName section">
      <p class="nationality">{{affilication[0].abbrevName}}</p>
    </div>
    <div class="flag section">
      <img :src="'/src/assets/'+ affilication[0].abbrevName.toLowerCase + '-flag.png'" alt="" class="flag-icon" />
    </div>
    <div class="participantName section">
      <p class="firstName">{{participant[0].firstName}}</p>
      <p class="lastName">{{participant[0].lastName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['currentParticipant','matchEventName'],
  computed:{    
    ranking(){
      console.log("preliminariesRanking",this.currentParticipant[0].preliminariesRanking)
      return this.currentParticipant[0].preliminariesRanking
    },
    participant(){    
      return this.$store.state.participants.filter((p)=>p.id === this.currentParticipant[0].id)
    },
    affilication(){
      
      return this.$store.state.affilications.filter(a=>(a.id === this.participant[0].affilicationId))
    },
    matchEventName(){
      console.log("matchEventName",this.matchEventName)
      return this.matchEventName
    }
  },
  
};
</script>

<style scoped>
/* .participantInformation {
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
} */

* {
  margin: 0;
}

.participant {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  border: 1px solid lightblue;
  border-radius: 9999px;
  background-color: white;
  padding-right: 40px;
}

.flag-icon {
  /* max-width: 95px; */
  height: 50%;
  text-align: center;
}

.section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ranking {
  font-size: 25px;
  font-weight: 900;
}

.matchEvent-icon {
  height: 50%;
}

.nationality {
  font-size: 25px;
  font-weight: 900;
}

.firstName {
  font-size: 20px;
  font-weight: 900;
}

.lastName {
  font-size: 20px;
  font-weight: 900;
  margin-left:5px;
}

</style>