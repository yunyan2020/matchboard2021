<template>
  <div :class="`playerlist-operator-container playerlist-operator-container-hometeam-${team.Hometeam}`">
    <div class="playerlist-container">
      <span v-for="(player, index) in players" :key="index">
        <div v-if="playerHasPenalties(player.id)" class="player">
          <div class="player-number-name">
            <p class="player-number">{{player.playNumber}}</p>
            <p class="player-name">{{player.firstName}} {{player.lastName}}</p>
            <p class="penalty" v-for="(penalty,i) in playerPenalties[player.id]" :key="i" >                         
              <span :class="'penalty-' + penalty.type" >
                {{penalty.penaltyTime}}  
              </span>               
            </p>       
          </div>                 
        </div>  
      </span> 
    </div>
  </div>  
</template>

<script>
export default {
  props: ['team'],
  computed: {
    match() {
      return this.$store.state.match
    },
    matchEvents() {     
      return this.$store.state.matchEvents.
      filter((matchEvent) => matchEvent.id == this.match.id 
      && matchEvent.currentMatchEvent == true )
    },
    players() {
        let list = []
        for(let player of this.$store.state.players){
            if(player.teamId === this.team.id){
                list.push(player)
            }
        }
        return list
    },
    penalties(){
      return this.$store.state.penalties.filter(p => p.teamId === this.team.id)
    }, 
    playerPenalties(){
      let hash = {}
      for (let penalty of this.penalties){
        if (!hash[penalty.playerId])  {
          hash[penalty.playerId] = [] 
        }      
        hash[penalty.playerId].push(penalty)    
      }
      return hash
    } 
  },
  methods: {  
    playerHasPenalties(id){
      return (this.playerPenalties[id] !== undefined)
    }
  }
}
</script>

<style scoped src="./penaltiesList.css"></style>