<template>
  <div :class="`playerlist-operator-container playerlist-operator-container-hometeam-${team.Hometeam}`">
    <div class="playerlist-container" v-if="team">
      <span v-for="(player, index) in playerlist" :key="index">
        <div v-if="playerHasPenalties(player.id)" class="player">
          <div class="player-number-name">
            <p class="player-number">{{player.Number}}</p>
            <p class="player-name">{{player.Name}}</p>
            <p class="player-id hide">{{player.id}}</p>         
            <p class="penalty" v-for="(penalty,index2) in playerPenalties[player.id]" :key="index2" >                         
              <span :class="penaltyIcons[penalty.type]" >
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
  data() {
    return {
      penaltyIcons:{"Gult kort":"yellowCard","Rött kort":"redCard"}
    }
  },
  computed: {
     match() {
      return this.$store.state.match
    },
    matchEvents() {     
      return this.$store.state.matchEvents.
      filter((matchEvent) => matchEvent.id == this.match.id 
      && matchEvent.currentMatchEvent == true )
    },
    playerlist() {
      return this.team.TeamPlayers;
    },
    penalties(){
      let p = []
      if(this.team && this.team.TeamId && this.matchEvents && this.matchEvents[0] && this.matchEvents[0].id){
        p = this.$store.state.penalties.filter(t => t.teamId == this.team.TeamId && t.matchEventsId === this.matchEvents[0].id)
      }
      return p
    }, 
    playerPenalties(){
     let hashPenalties = {}
     for (let penalty of this.penalties){
       if (!hashPenalties[penalty.playerId])  {
        hashPenalties[penalty.playerId] = [] 
       }      
       hashPenalties[penalty.playerId].push(penalty)    
     }
     return hashPenalties
    },   
  },
  methods: {  
    playerHasPenalties(id){
      return (this.playerPenalties[id] !== undefined)
    }
  }
}
</script>

<style scoped>

  * {
    box-sizing: border-box;
  }

  .hide {
    opacity: 0;
  }

  .disqualified-p {
    color: lightgray;
    font-weight: 900;
  }
  .playerlist-container p{
    margin:0;
  }
  p.penalty{
    margin-bottom:0.25vh;
    font-size:80%;
  }
  .penalty>span{
    display:block;
    padding: 2vh 0.25vw;
  }
  .yellowCard{
    background: yellow;        
    border-radius: 3px;    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
  }
  .redCard{
    background: red; 
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;       
  }
  
  .hidden{
    display:none
  }

  .marked {
    background-color: #4B86DF !important; 
  }

  .warning-container, .sentoffs-container {
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }

  .sentoff {
    width: 15px;
    height: 15px;
    border: 1px solid rgba(0, 0, 255, 0.5);
    border-radius: 50%;
    background-color: white;
  }

  .warning {
    width: 15px;
    height: 15px;
    border: 1px solid rgba(0, 0, 255, 0.5);
    border-radius: 50%;
    background-color: white;
  }

  hr {
    opacity: 0.25;
    margin: 4px 0;
  }

  button:hover {
    opacity: 0.75;
  }

  .playerlist-operator-container {
    width: 45vw;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  .active {
    border: 4px solid lightblue !important;
  }

  .playerlist-operator-btns {
    padding: 8px;
    display: flex;
    justify-content: space-evenly;
  }

  .penalty-btn {
    background-color: white;
    outline: none;
    border: 1px solid rgb(194, 194, 194);
    border-radius: 20px;
    padding: 5px 2em;
    font-weight: 900;
    cursor: pointer;
    background-color: rgba(235, 204, 253, 0.514);
  }

  .description-container {
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
  }

  .description-p {
    margin: 0;
    opacity: 0.75;
    font-weight: 900;
    font-size: 12px;
  }

  .player-number-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 1em;
  }

  .playerlist-operator-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  }

  .playerlist-container {
    display: flex;
    flex-direction: column;
    padding: 4px;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px; */
  }

  .player {
    /*border: 1px solid lightgray;*/
    border-radius: 5px;
    padding: 2px 18px;
    justify-content: space-between;
    /*background-color: rgba(117, 230, 117, 0.25);*/
    cursor: pointer;
    text-align: left;
  }

  .player-name{
    flex-grow:1;
  }

  .sentoff-player {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 18px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(248, 62, 62, 0.479);
    cursor: pointer;
  }

  .disqualified-player {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2px 18px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.479);
  }

  .player-number {
    font-weight: 900;
  }

  /*.player:hover {
    background-color: rgba(117, 230, 117, 0.5);
  }*/

  .player-penalty-container {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
</style>