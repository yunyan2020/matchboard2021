<template>
  <div class="container">
    <div class="wrap1">
      <div class="wrap2">
        <button></button>
        <button></button>
      </div>
      <div class="wrap2">
        <select v-model="participant">
          <option v-bind:value="current" v-for="p in participants" :key="p.id"> 
            {{p.number}} {{p.firstName}} {{p.lastName}}
          </option>
        </select>
      </div>
    </div>
    <div class="wrap1">
      <div class="wrap2">
        <button></button>
        <button></button>
      </div>
      <div class="wrap2">
        <h4>Rond</h4>
      </div>
      <h1>{{current}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["participants", "event"],
  data() {
    return {
      i: 0,
      current: this.participants[this.i]
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