import { createStore } from 'vuex'

export default createStore({
  state: {
    match: {
      id: 1,

      teams: [
        {
          id: 1,
          name: 'Lugi',
          logo: "src/assets/logo_lugi.png"
        },
        {
          id: 2,
          name: 'H43',
          logo: "src/assets/logo_h43.png"
        },
      ],
      matchEvents: [
        {
          id: 1,
          name: "Första halvlek",
          length: 30,
          score: [
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
              teamId: 2,
              points: 1,
              player: "Johan Karl",
              time: "15:45"
            },
            {
              teamId: 2,
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
          penalties: [
            {
              teamId: 1,
              playerId: '11',
              matchTime: '10:24',
              penaltyTime: '1:00',
              type: 'Gult kort',
            },
            {
              teamId: 1,
              playerId: '11',
              matchTime: '10:24',
              penaltyTime: '2:00',
              type: 'Gult kort',
            },
            {
              teamId: 2,
              playerId: '8',
              matchTime: '8:14',
              penaltyTime: '1:00',
              type: 'Gult kort',
            },

          ],
        },
        {

        }
      ]
    },
    gpymnasticsMatch: {
      id: 1,
      name: "WOMEN's VAULT 2021",
      matchEvent: [{
        id: 1,
        name: "vault",
        numberOfRounds: 2,
        id: 2,
        name: "uneven bar",
        numberOfRounds: 1,
        participant: [{
          id: 1,
          firstName: "Simon",
          lastName: "Herik",
          affilication: [{
            id:1,
            name: "American",
            abbrevName: "USA",
            logo:"USA-Flag.png"            
          }]
        }]
      }]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
