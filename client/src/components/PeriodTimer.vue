<template>
  <div class="time">
    <h1>{{ time }}</h1>
  </div>
</template>

<script>
export default {
    computed: {
    time() {
      return this.$store.state.match.time
    }
  }
}
</script>

<style>
  .time {
    color: white;
    font-size: 170px;
    /* float: left; */
    padding: 0;
    margin-top: 100px;
  }

  h1 {
    margin: 0;
    padding: 0;
  }
</style>