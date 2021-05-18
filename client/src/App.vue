<template>
  <div class="app-container">
    <!-- <Home /> -->
    <HandballOperator />
    <!-- <HandballUserView />  -->
        <!-- <router-view /> -->
    
 
  </div>
</template>

<script>
import Home from './views/Home.vue'
import HandballScoreBoard from './views/HandballUserView.vue'
import HandballOperator from './views/HandballOperator.vue'
import HandballUserView from './views/HandballUserView.vue'

export default { 
  // created() {
  //   this.$store.commit('updatePenaltiesHash')
  // }, 
  components: {Home, HandballScoreBoard, HandballOperator, HandballUserView },
  created(){
    this.$store.dispatch('restoreStateFromStorage', {
        players: [
        {
          id: 1,
          name: 'Bengt'
        },
        {
          id: 2,
          name: 'Lasse'
        },
        {
          id: 3,
          name: 'Urban'
        },
        {
          id: 4,
          name: 'Lisa'
        },
        {
          id: 5,
          name: 'Ulla'
        },
        {
          id: 6,
          name: 'Inger'
        },
  
      ],
      match: {
        id: 1,
        time: '18:32',
  
        teams: [
          {
            id: 1,
            homeTeam: true,
            name: 'Lugi',
            logo: "src/assets/logo_lugi.png",
            players: [
              {
              id: 1,  
              name: 'Bengt'    
              },
              {
                id: 2,
                name: 'Lasse'
              },
              {
                id: 3,
                name: 'Urban'
              },
  
            ]
          },
          {
            id: 2,
            homeTeam: false,
            name: 'H43',
            logo: "src/assets/logo_h43.png",
            players: [
              {
                id: 1,
                name: 'Lisa'
              },
              {
                id: 2,
                name: 'Ulla'
              },
              {
                id: 3,
                name: 'Inger'
              },
            ]
          },
        ],
        matchEvents: [
          {
            id: 1,
            name: "Första halvlek",
            length: 30,
            homeTeamScore: [
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "17:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "09:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "07:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Johan Karl",
                time: "15:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Johan Karl",
                time: "18:21"
              },
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "14:33"
              }
            ],
            awayTeamScore: [
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "17:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "09:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Karl Johan",
                time: "07:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Johan Karl",
                time: "15:45"
              },
              {
                teamId: 1,
                points: 1,
                player: "Johan Karl",
                time: "18:21"
              },
            ],
            penalties: [
              {
                id: 1,
                teamId: 1,
                playerId: 11,
                matchTime: '10:24',
                penaltyTime: '1:00',
                type: 'Gult kort',
              },
              {
                id: 2,
                teamId: 1,
                playerId: 11,
                matchTime: '10:24',
                penaltyTime: '2:00',
                type: 'Gult kort',
              },
              {
                id: 3,
                teamId: 2,
                playerId: 8,
                matchTime: '8:14',
                penaltyTime: '1:00',
                type: 'Gult kort',
              },
  
            ],
          },
          
        ]
      }
      })
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

#app {
  font-family: 'Roboto Slab', serif;
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
