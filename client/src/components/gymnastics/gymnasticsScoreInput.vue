<template>

  <div class="inputContainer">
    <div class="inputWrap" v-for ="index in 8" :key = "index">
      <div class="title">{{title(index)}}</div>
      <input type="number" min="0" max="10"  class = "Execution1">
        <select>
          <option v-for= "index in 9" :key = "index">{{index}}</option>        
        </select>    
    </div>  
    <button type="submit" @submit = "submit">Submit</button>
  </div>
  
</template>

<script>
export default {
  methods:{
    title(index) {
    let title;
    switch(index) {
      case 1:
        title = "D" + index;
        return title;
        break;
      case 2:
        title = "E" + index;
        return title;
        break;
      case 3:
        title = "E" + index;
        return title;
        break;
      case 4:
        title = "E" + index;
        return title;
        break;
      case 5:
        title = "E"+ index;
        return title;
        break;
      case 6:
        title = "E"+ index;
        return title;
        break;
      case 7:
        title = "E"+ index;
        return title;
        break;
      case 8:
        title = "Penalties";
        return title;
        break;
      }
    }
  }

}
</script>

<style scoped>
.inputContainer {
  display:flex;
}
.button {
  width:100px;
  text-align:center;
  border:#6e1020 1px solid;
  background-color:rgb(20, 188, 240);
  border-radius:5px;
  cursor:pointer;
  color:rgb(238,220,192)
}
</style>