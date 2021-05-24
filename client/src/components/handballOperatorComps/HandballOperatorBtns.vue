<template>
  <div class="operator-btns-container">
    <div class="score-btns-container">
      <button @click="addScore('hometeam')" class="score-btn green">+</button>
      <button @click="removeScore('hometeam')" class="score-btn red">-</button>
    </div>
    <div class="timemngmt-btns-container">
      <div class="upper-timemngmt">
        <button class="timemngmt-btn green-start green">Starta</button>
        <button class="timemngmt-btn yellow-pause">Pausa</button>
        <button class="timemngmt-btn orange-reset">Återställ</button>
      </div>
      <div class="lower-timemngmt">
        <button class="halftime-btn">Halvlek</button>
      </div>
    </div>
    <div class="score-btns-container">
      <button @click="removeScore('awayteam')" class="score-btn red">-</button>
      <button @click="addScore('awayteam')" class="score-btn green">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hometeamScore', 'awayteamScore'],
  methods: {
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
  }

  .score-btn {
    width: 100px;
    height: 100px;
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
    flex-direction: column;
    gap: 2em;
    background-color: rgba(211, 211, 211, 0.25);
    padding: 10px 20px;
    border-radius: 5px;
  }

  .upper-timemngmt {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .timemngmt-btn {
    padding: 1em 2em;
    border-radius: 30px;
    border: 1px solid rgba(37, 37, 37, 0.123);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 900;
    font-size: 20px;
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
</style>