<template>
  <div class="container">
    <div class="wrap1">
      <div class="wrap2">
        <button @click="prev">prev</button>
        <button @click="next">next</button>
      </div>
      <div class="wrap2">
        <select v-model="current" :selected="current">
          <!-- <option v-for="p in participants" :key="p.id" :value="format(p)"> 
            {{p.number}} {{p.firstName}} {{p.lastName}}
          </option> -->
          <!-- <option v-for="p in eventDetails[i].participants" :key="p">
            {{p.number}} {{p.firstName}} {{p.lastName}}
          </option> -->
          <option v-for="participant in events[0].participants" :key="participant">
            {{events[0].name}}  {{participant.firstName}}
          </option>
        </select>
        <span>Selected: {{current}}</span>
      </div>
    </div>
    <div class="wrap1">
      <div class="wrap2">
        <button></button>
        <button></button>
      </div>
      <div class="wrap2">
        <h6>Just nu:</h6>
        <h4>Rond</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["events"],
  data() {
    return {
      i: 0
    }
  },
  methods: {
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

  /* .wrap2 {
    border: 1px solid blue;
  } */

  button {
    width: 50px;
    height: 50px;

  }

  
</style>