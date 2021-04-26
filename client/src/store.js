import { createStore } from 'vuex'

export default createStore({
  state: {
    match: {
      id: 1,
      homeTeam: "Lugi",
      awayTeam: "H43",
      homeTeamScore: 33,
      awayTeamScore: 13,
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
              teamId: 2,
              points: 1,
              player: "Johan Karl",
              time: "15:45"
            },
            {
              teamId: 1,
              points: 1,
              player: "Karl Johan",
              time: "14:33"
            }
          ]
        },
        {

        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
