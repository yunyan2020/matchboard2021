<template>
  <div>
    <GymnasticParticipant :events="eventScheme"/>
    <GymnasticsStats/>
    <GymnasticsScoreInput/> 
    <p>Schema</p> 
    <p>{{eventScheme}}</p>
  </div>
</template>

<script>
import GymnasticsScoreInput from "../components/gymnastics/gymnasticsScoreInput.vue"
import GymnasticsStats from "../components/gymnastics/gymnasticsStats.vue"
import GymnasticParticipant from "../components/gymnastics/gymnasticParticipant.vue"

export default {
  components:{ 
    GymnasticsScoreInput,
    GymnasticsStats,
    GymnasticParticipant
  },
  data() {
    return {
      participants: this.$store.state.participants,
      events: this.$store.state.gymnasticsMatchEvents,
      eventScheme: []
    }
  },
  methods: {
    scheme() {
      for(let i = 0; i < this.events.length; i++) {
        let name = this.events[i].name;
        let rounds = this.events[i].numberOfRounds;
        let participants = this.setParticipants(this.events[i]);
        let eventObj = {
          name: name,
          rounds: rounds,
          participants: participants.sort(function(a, b) {
            return a.runningOrder - b.runningOrder;
          })
        };
        this.eventScheme.push(eventObj);
      }  
    },
    setParticipants(event) {
      let res = [];
      for(let i = 0; i < this.participants.length; i++) {
        for(let j = 0; j < event.participants.length; j++) {
          if(this.participants[i].id == event.participants[j].id) {
            let participant = {
              number: this.participants[i].number,
              firstName: this.participants[i].firstName,
              lastName: this.participants[i].lastName,
              runningOrder: event.participants[j].runningOrder
            };
            res.push(participant);
          }
        }
      }
      return res;
    }
  },
  mounted() {
    this.scheme();
  }
}
</script>

<style>

</style>