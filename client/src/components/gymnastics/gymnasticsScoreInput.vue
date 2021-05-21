<template>

  <div class="inputContainer">
      <div class="inputWrap" v-for ="index in 8" :key = "index" :placeholder= 7>
      <div class="title">{{title(index)}}</div>
      <input type="number" min="0" max="10"  class = "inputField"  v-bind:name="'inputInt' + index" v-model.number = "inputInteger[index]" >        
        <select class = "inputField" v-model="inputDecimal[index]">
          <option v-for= "idx in 9" :key = "idx" v-bind:name="'inputDecimal' + index">{{idx}}</option>        
        </select>          
      </div>   
      <div class="submit">
        <button class="submit" @click="submit">Submit</button>
      </div>      
      <div class="showScore">
        <h1 class="showScore">{{inputInteger[1]}}.{{inputDecimal[1]}}</h1>
        <h1 class="showScore">{{inputInteger[2]}}.{{inputDecimal[2]}}</h1>
        <h1 class="showScore">{{inputInteger[3]}}.{{inputDecimal[3]}}</h1>
        <h1 class="showScore">{{inputInteger[4]}}.{{inputDecimal[4]}}</h1>
        <h1 class="showScore">{{inputInteger[5]}}.{{inputDecimal[5]}}</h1>
        <h1 class="showScore">{{inputInteger[6]}}.{{inputDecimal[6]}}</h1>
        <h1 class="showScore">{{inputInteger[7]}}.{{inputDecimal[7]}}</h1>
        <h1 class="showScore">{{inputInteger[8]}}.{{inputDecimal[8]}}</h1>
      </div>    
  </div>
   
  
</template>

<script>
export default {
  data(){
    return{
      inputInteger:[0,0,0,0,0,0,0,0],
      inputDecimal:[0,0,0,0,0,0,0,0],      
      index:0,
      score:[]
    }
  },  
  methods:{
    submit(){
        let D1 = this.inputInteger[1] + this.inputDecimal[1] * 0.1
        let E1 = this.inputInteger[2] + this.inputDecimal[2] * 0.1
        let E2 = this.inputInteger[3] + this.inputDecimal[3] * 0.1
        let E3 = this.inputInteger[4] + this.inputDecimal[4] * 0.1
        let E4 = this.inputInteger[5] + this.inputDecimal[5] * 0.1
        let E5 = this.inputInteger[6] + this.inputDecimal[6] * 0.1
        let E6 = this.inputInteger[7] + this.inputDecimal[7] * 0.1
        let panalty = this.inputInteger[8] + this.inputDecimal[8] * 0.1
        console.log('panalty',panalty)
    },
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
.showScore{
  display:block;
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