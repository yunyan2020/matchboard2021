<template>
  <div class="operator-btns-container">    
    <div class="score-btns-container">
      <span>
        <button @click="addScore('hometeam')" class="score-btn green">+</button>
        <span class="help-text">Lägg till mål</span> 
      </span>
      <span>
        <button @click="removeScore('hometeam')" class="score-btn red">-</button>
        <span class="help-text">ta bort mål</span> 
      </span>
    </div>    
    <div class="timemngmt-btns-container">
      <div class="upper-timemngmt">

        <span v-if="!matchTimer.started || matchTimer.ended">
          <button  @click="start(),updateTime()" class="timemngmt-btn green-start green">
            <span class="material-icons">play_arrow</span>          
          </button>
          <span class="help-text">Starta {{matchEvents.name}}</span> 
        </span>

        <span v-if="matchTimer.started && !matchTimer.ended && !matchTimer.running">
          <button @click="nonStop" class="timemngmt-btn green-start green">
            <span class="material-icons">play_arrow</span>            
          </button>
          <span class="help-text">Återuppta</span> 
        </span>

        <span v-if="matchTimer.started && !matchTimer.ended && matchTimer.running">
          <button  @click="stop"  class="timemngmt-btn yellow-pause">
            <span class="material-icons">pause</span>            
          </button>
          <span class="help-text">Pausa</span> 
        </span>

        <span v-if="matchTimer.started && !matchTimer.ended && matchTimer.running" >
          <button @click="end" class="timemngmt-btn orange-reset">
            <span class="material-icons">stop</span>            
          </button>
          <span class="help-text">Avsluta {{matchEvents.name}}</span> 
        </span>

        <div class="match-timer" style="visibility:hidden">
          <p>{{Math.floor(time/60)}} : {{time%60}}</p>
          <p>{{updateTime()}}</p>
        </div>

      </div>
    </div>
    <div class="score-btns-container">
      <span>
        <button @click="removeScore('awayteam')" class="score-btn red">-</button>
        <span class="help-text">ta bort mål</span> 
      </span>
      <span>
        <button @click="addScore('awayteam')" class="score-btn green">+</button>
        <span class="help-text">Lägg till mål</span> 
      </span>
    </div>
  </div>
</template>

<script>
import Timer from '/src/services/timer.js'
export default {
  data(){
    return {
      matchTimer: new Timer(),
      trigger: 0,
      stopped: true,
      time:0
    }
  },
  computed:{    
    time(){
      this.trigger
      return this.matchTimer.time
    },
    matchEvents(){
      let matchId = this.$store.state.match.id
      return this.$store.state.matchEvents.filter((e) => e.matchId = matchId && e.currentMatchEvent === true)[0]
    }
  }, 
  props: ['hometeamScore', 'awayteamScore'],
  methods: {
    start(){
      this.matchTimer.start(this.tick)   
      this.stopped = true;        
    },
    stop(){
      this.matchTimer.stop(this.tick)
      this.stopped = false  
    },
    nonStop(){
      this.matchTimer.nonStop(this.tick)
      this.stopped = true
    },
    end(){
      this.matchTimer.end()   
       
    },
    tick(){
      this.trigger++
    },
    updateTime(){
      let matchTime = this.matchTimer.time
      let time = Math.floor(matchTime/60)  + ':' + matchTime%60
      let length = this.matchEvents.length
      if  (Math.floor(matchTime/60) === length){
         this.matchTimer.end()  
      //   this.$store.commit('setCurrentMatchEvent',true)  
      }
      this.$store.commit('setMatchEventsTime',time) 
    },
    addScore(team) {
      /* let player = this.choosePlayer(); */
      /* const player = async () => {
        let chosenPlayer = await this.choosePlayer(team);
        return chosenPlayer;
      }

      ;(async () => {
        let test = await player();
        console.log(test);
      })(); */
      // lägg in i följande metod?
      /* this.$store.commit('addScore', team); */
      this.choosePlayer(team);
    },
    removeScore(team) {
      this.$store.commit('removeScore', team);
    },
    choosePlayer(team) {
      let element;
      switch(team) {
        case 'hometeam':
          element = document.getElementsByClassName('playerlist-operator-container')[0];
          element.classList.add('active');
          let players = element.children[4].querySelectorAll('.player');
          
          for(let i = 0; i < players.length; i++) {
            players[i].addEventListener('click', function() {
              let chosenPlayerId = players[i].children[0].querySelectorAll('.player-id')[0].innerText;
              console.log(chosenPlayerId);
            });
          }
          this.$store.commit('addScore', team);
          break;
        case 'awayteam':
          element = document.getElementsByClassName('playerlist-operator-container')[1];
          console.log(element);
          break; 
      }
    }
  },
  mounted(){      
   //  this.matchTimer.startTicking(this.tick)
  },
  unmounted(){
   // this.matchTimer.stopTicking()
   } 
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  button:hover {
    opacity: 0.90;
    cursor: pointer;
  }

  .green {
    background-color: #2fbd36ce;
  }

  .red {
    background-color: #ff0000cb;
  }

  .orange-reset {
    background-color: #ff7b00cc;
  }

  .yellow-pause {
    background-color: #ffd500da;
  }

  .operator-btns-container {
    display: flex;
    flex-direction: row;
    width: 95vw;
    margin: auto;
    justify-content: space-evenly;
    padding: 10px;
    margin-top: 1em;
  }

  .score-btns-container {
    display: flex;
    flex-direction: row;
    gap: 2em;
    width:30%;
  }

  .score-btn {
    width: 10vh;
    height:10vh;
    border-radius: 50%;
    outline: none;
    border: 1px solid rgb(136, 136, 136);
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 900;
    font-size: 60px;
  }

  .timemngmt-btns-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2em;
    padding: 0 20px;
    border-radius: 5px;
    width:40%;
  }

  .upper-timemngmt {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .timemngmt-btn {
    height:10vh;
    min-width:10vh;
    padding: 1em 2em;
    border-radius: 30px;
    border: 1px solid rgba(37, 37, 37, 0.123);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 900;
  }

  .halftime-btn {
    padding: 1em 6em;
    border-radius: 30px;
    border: 1px solid rgba(37, 37, 37, 0.123);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 900;
    font-size: 20px;
    background-color: #097be6c2;
  }

  .material-icons{
    font-size:400%;
  }

  .help-text{
    display: block;
    font-size:100%;
    text-transform: lowercase;
    font-style: italic;
    margin-top:1vh;
  }
  
</style>