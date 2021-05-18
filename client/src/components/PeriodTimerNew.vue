<template>
  <div>
    <button @click="start">Start Match</button>
    <button v-if="paused" @click="pause">Pause Match</button>
    <button v-if="!paused" @click="unpause">unpause Match</button>
    <button @click="end">End Match</button>
    <div class="score-timer">
    <p>{{Math.floor(time/60)}} : {{time%60}}</p>
    </div>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import Timer from '/src/services/timer.js'
export default {

data(){
    return {
      matchTimer: new Timer(),
      trigger: 0,
      paused: true
    }
  },
  computed:{    
    time(){
      this.trigger
      return this.matchTimer.time
    }
  },
methods:{
    start(){
      this.matchTimer.start(this.tick)      
    },
    pause(){
      this.matchTimer.pause(this.tick)
      this.paused = false;      
    },
    unpause(){
      this.matchTimer.unpause(this.tick)
      this.paused = true;      

    },
    end(){
      this.matchTimer.end()    
       
    },
    tick(){
      this.trigger++
    }
  },
  mounted(){
    // Timer.startTicking(this.tick)
  },
  unmounted(){
   } // Timer.stopTicking()
  }
</script>

<style scoped>
.score-timer{
  font-size: 30px;
  color: white;
  padding-left: 10px;
}
</style>