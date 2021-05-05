<template>
 <div class="vaultScore-container">
  <div class="stat" >
    <h3 class="stat-title" >Vault 1</h3>
    <h3 class="stat-detail">{{vault1.toFixed(3)}}</h3> 
  </div>
  <div class="stat" >
    <h3 class="stat-title" >Vault 2</h3>
    <h3 class="stat-detail">{{vault2.toFixed(3)}}</h3>     
  </div>     
   <div class="stat">
    <h3 class="stat-title">Score</h3>
    <h3 class="stat-detail">{{score.toFixed(3)}}</h3> 
  </div>   
 </div>  
</template>

<script>
export default {
  props:['gymnasticsScores','judesScores','penalties'],
  computed:{
    penalties(){
      return this.penalties
    },
     vault1(){
        let vault1Score = 0
        vault1Score = this.calculateVault1().getDifficulty() 
        +  this.calculateVault1().calculateExecution()
        -  this.calculateVault1().calculatePenalties()
        return vault1Score
      },
      vault2(){
       let vault2Score = 0 
       vault2Score =this.calculateVault2().getDifficulty() 
        +  this.calculateVault2().calculateExecution()
        -  this.calculateVault2().calculatePenalties()
       return vault2Score
      },
      score(){
        return (this.vault1 + this.vault2)/2
      } 
  },
  methods:{
    calculateVault1(){
      return  new CalculteGymnasticsScore(this.gymnasticsScores,this.judesScores,this.penalties,1)
    } ,
    calculateVault2(){
      return  new CalculteGymnasticsScore(this.gymnasticsScores,this.judesScores,this.penalties,2)
    } , 
    
  }
}


import CalculteGymnasticsScore from '/src/calculateGymnasticsScore.js'
</script>

<style scoped>
  .stat{
    display:flex
  }
  .stat-title{
    color:orange;
    margin-left:10px;
  }
  .stat-detail{
    margin-left:10px;
  }

</style>