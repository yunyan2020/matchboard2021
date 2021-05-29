<template>
    <div :class="`playerlist-operator-container playerlist-operator-container-hometeam-${team.Hometeam}`">
        <div class="playerlist-operator-btns">
            <button v-for="(penalty,type) in penaltyTypes" :key="type" @click="setPenalty(type)" :class="'penalty-btn ' + (activePenalty === type? type + '-selected' : '')">{{penalty.name}}</button>            
        </div>
        <hr />
        <div class="description-container">
            <p class="description-p">Nummer | Namn</p>
            <p class="description-p">Varningar | Utvisningar</p>
        </div>
        <hr />
        <div class="playerlist-container" v-if="team">
            <div v-for="player in players" :key="player.id" @click="setPlayer(player)" :class="'player ' + (activePlayer === player ? ' player-selected' : '')">
                <div class="player-number-name">
                    <p class="player-number">{{player.playNumber}}</p>
                    <p class="player-name">{{player.firstName}} {{player.lastName}}</p>
                </div>        
                <div class="player-penalty-container">
                    <p class="penalty" v-for="(penalty,i) in playerPenalties[player.id]" :key="i" >                         
                      <span :class="'penalty-' + penalty.type" >
                        {{penalty.penaltyTime}}  
                      </span>               
                    </p>       
                </div>    
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props: ['team'],

    data() {
        return {
            activePenalty: '',
            activePlayer: null
        }
    },

    computed: {
        players() {
            let list = []
            for(let player of this.$store.state.players){
                if(player.teamId === this.team.id){
                    list.push(player)
                }
            }
            return list
        },
        penaltyTypes(){
          return this.$store.state.penaltyTypes
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
        setPenalty(type) {
            this.activePenalty = type;
            if(this.activePlayer && this.activePenalty) {
                this.commitPenalty()   
            }
        },
        setPlayer(player) {
            this.activePlayer = player;
            if(this.activePlayer && this.activePenalty) {
                this.commitPenalty()      
            }
        },
        commitPenalty(){
            console.log('setActionType', this.activePlayer, this.activePenalty);
            this.$store.commit('setActionType', {player: this.activePlayer, type: this.activePenalty, team: this.team});
            // if(this.activePenalty === "warning" || this.activePenalty === "yellowCard") {
            //     this.activePlayer.Warnings.push('*');
            //     if(this.activePlayer.Warnings.length == 3) {
            //         this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            //     }
            // }
            // this.playerlist.splice((this.playerlist.findIndex(player => player === this.activePlayer)), 1);
            this.activePenalty = '';
            this.activePlayer = null;
        }   
    }
}
</script>

<style scoped src="./PlayerListOperator2.css"></style>