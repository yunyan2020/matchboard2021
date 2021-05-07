<template>
  <div class="container">
    <div class="wrap1">
      <div class="wrap2">
        <button @click="prev">prev</button>
        <button @click="next">next</button>
      </div>
      <div class="wrap2">
        <select v-model="current" :selected="current">
          <option v-for="p in participants" :key="p.id" :value="format(p)"> 
            {{p.number}} {{p.firstName}} {{p.lastName}}
          </option>
        </select>
        <span>Selected: {{current}}</span>
        <!-- <span>Selected: {{formatPlayerOutput(current)}}</span> -->
      </div>
    </div>
    <div class="wrap1">
      <div class="wrap2">
        <button @click="test()"></button>
        <button></button>
      </div>
      <div class="wrap2">
        <h6>Just nu:</h6>
        <h4>Rond</h4>
      </div>
    </div>
    <p>de som ska delta i current event(participants):</p>
    <p>{{formatEventDetails(eventDetails)}}</p>
  </div>
</template>

<script>
export default {
  props: ["participants", "event"],
  data() {
    return {
      i: 0,
      current: this.participants[this.i],
      currentEvents: this.$store.state.gymnasticsMatchEvent,
      eventDetails: []
    }
  },
  methods: {
    test() {
      let eventObj;
      for(let i = 0; i < this.currentEvents.length; i++) {
        let eventName = this.currentEvents[i].name;
        let rounds = this.currentEvents[i].numberOfRounds;
        let eventParticipants = [];
        for(let j = 0; j < this.participants.length; j++) {
          if(this.currentEvents[i].participantId.includes(this.participants[j].id)) {
            /* this.Participants.push(this.participants[j].firstName); */
            eventParticipants.push(this.format(this.participants[j]));
          }
        }
        eventObj = {
          "name": eventName,
          "rounds": rounds,
          "participants": eventParticipants
        }
        this.eventDetails.push(eventObj);
      }
    },
    prev() {
      if(this.i == 0) {
        this.i = this.participants.length-1;
        console.log(this.i);
        console.log(this.current);
      } else {
        this.i--;
        console.log(this.i);
        console.log(this.current);
      }
    },
    next() {
      if(this.i == this.participants.length-1) {
        this.i = 0;
        console.log(this.i);
        console.log(this.current);
      } else {
        this.i++;
        console.log(this.i);
        console.log(this.current);
      }
    },
    format(player) {
      return player.number + ' ' + player.firstName + ' ' + player.lastName;
    },
    formatEventDetails(events) {
      let res;
      for(let i = 0; i < events.length; i++) {
        res += `Èvent ${i+1}: Name: ` + ` ${events[i].name} ` + ` Rounds: ` + ` ${events[i].rounds}` + ` Participants: `;
        for(let j = 0; j < events[i].participants.length; j++) {
          res += `${events[i].participants[j]} `
        }
      }
      return res;
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    border: 1px solid green;
    padding: 20px;
  }

  .wrap1 {
    border: 1px solid red;
  }

  .wrap2 {
    border: 1px solid blue;
  }

  button {
    width: 50px;
    height: 50px;

  }
</style>