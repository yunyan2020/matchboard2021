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
