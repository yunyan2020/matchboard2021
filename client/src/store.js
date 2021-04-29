import { createStore } from 'vuex'

export default createStore({
  state: {
    // penaltiesHash: {},
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
              playerId: '11',
              matchTime: '10:24',
              penaltyTime: '1:00',
              type: 'Gult kort',
            },
            {
              id: 2,
              teamId: 1,
              playerId: '11',
              matchTime: '10:24',
              penaltyTime: '2:00',
              type: 'Gult kort',
            },
            {
              id: 3,
              teamId: 2,
              playerId: '8',
              matchTime: '8:14',
              penaltyTime: '1:00',
              type: 'Gult kort',
            },

          ],
        },
        
      ]
    }
  },
  mutations: {
    addPenalty(state, penalty) {
      state.match.matchEvents.penalties.push(penalty)
      
    }
    // updatePenaltiesHash(state) {
    //   state.penaltiesHash = {}
    //   for (let matchEvent of state.match.matchEvents) {
    //     for (let penalty of matchEvent.penalties) {
    //       state.penaltiesHash[penalty.id] = penalty
    //       state.penaltiesHash[penalty.id].matchEvent = matchEvent

          
    //     }
    //   }
    // },
  },
  actions: {
  },
  modules: {
  }
})
