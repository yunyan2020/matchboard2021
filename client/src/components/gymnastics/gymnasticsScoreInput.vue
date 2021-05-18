<template>

  <div class="inputContainer">
    <div class="inputWrap" v-for ="index in 8" :key = "index">
      <div class="title">{{title(index)}}</div>
      <input type="number" min="0" max="10"  class = "inputField"  v-bind:name="'inputInt' + index" v-model.number = "inputInteger[index]" >        
        <select class = "inputField" v-model="inputDecimal[index]">
          <option v-for= "idx in 9" :key = "idx" v-bind:name="'inputDecimal' + index">{{idx}}</option>        
        </select>    
    </div>  
    <h2 class="test">{{inputInteger[1]}}</h2>
    <h4 class="test">{{inputInteger[2]}}</h4>
    <h2 class="test">{{inputInteger[3]}}</h2>

    <h1 class="test">{{inputDecimal[1]}}</h1>
    <h3 class="test">{{inputDecimal[2]}}</h3>
    <h1 class="test">{{inputDecimal[3]}}</h1>
    <button type="submit" @submit = "submit">Submit</button>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      inputInteger:[0,0,0,0,0,0,0,0],
      inputDecimal:[0,0,0,0,0,0,0,0],      
      index:0
    }
  },  
  methods:{
    title(index) {
    let title;
    switch(index) {
      case 1:
        title = "D" + index;
        return title;
        break;
      case 2:
        title = "E" + (index -1);
        return title;
        break;
      case 3:
        title = "E" + (index -1);
        return title;
        break;
      case 4:
        title = "E" + (index -1);
        return title;
        break;
      case 5:
        title = "E"+ (index -1);
        return title;
        break;
      case 6:
        title = "E"+ (index -1);
        return title;
        break;
      case 7:
        title = "E"+ (index -1);
        return title;
        break;
      case 8:
        title = "Penalties";
        return title;
        break;
      }
    },
  }
}
</script>

<style scoped>
.inputContainer {
  display:flex;
}
.title .inputField{
  margin:10px;
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