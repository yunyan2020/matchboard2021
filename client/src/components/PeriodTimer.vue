<template>
  <div class="timer-container">

    <div class="timer">
      <span id="minutes">{{ minutes }}</span>
      <span id="middle">:</span>
      <span id="seconds">{{ seconds }}</span>
    </div>

    <div class="buttons">
      <button id="start" class="start" v-if="!timer" @click="startTimer">Start</button>
      <button id="pause" class="pause" v-if="timer" @click="stopTimer">Pause</button>
      <button id="reset" class="reset" v-if="resetButton" @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      totalTime: 0,
      resetButton: false,
    };
  },
  computed: {
    time() {
      return this.$store.state.match.time;
    },
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function () {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      
    },
    stopTimer: function () {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      
    },
    resetTimer: function () {
      this.totalTime = 0;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      
    },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      if (this.totalTime < 1 * 60) {
        this.totalTime++;
      } else {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
.timer {
  color: white;
  font-size: 2em;
  padding: 0;
  margin-top: 100px;
}
.start {
  width: 100px;
  height: 50px;
}
.pause {
  width: 100px;
  height: 50px;
}
.reset {
  width: 100px;
  height: 50px;
}

h1 {
  margin: 0;
  padding: 0;
}
</style>