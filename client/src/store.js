import { createStore } from 'vuex'

const state = {
  match: {
    id: 1,
    time: '18:32',
    teamId: [1, 2],
    team: {},
  },
  teams: [{
    id: 1,
    matchId: 1,
    homeTeam: true,
    name: 'Lugi',
    logo: "src/assets/logo_lugi.png",
  },
  {
    id: 2,
    matchId: 1,
    homeTeam: false,
    name: 'H43',
    logo: "src/assets/logo_h43.png"
  },
  ],
  players: [{
    id: 1,
    teamId: 1,
    firstName: "Carl Johan",
    lastName: "Anderson",
    playNumber: "5"
  },
  {
    id: 2,
    teamId: 1,
    firstName: "Jack",
    lastName: "Anderson",
    playNumber: "6"
  },
  {
    id: 3,
    teamId: 1,
    firstName: "Anton",
    lastName: "Anderson",
    playNumber: "10"
  },
  {
    id: 11,
    teamId: 2,
    firstName: "Erik",
    lastName: "Svenson",
    playNumber: "5"
  },
  {
    id: 12,
    teamId: 2,
    firstName: "Stefone",
    lastName: "Anderson",
    playNumber: "6"
  },
  {
    id: 13,
    teamId: 2,
    firstName: "Ben",
    lastName: "Kulson",
    playNumber: "10"
  },
  ],
  matchEvents: [
    {
      id: 1,
      matchId: 1,
      name: "Första halvlek",
      length: 30,
      currentMatchEvent: true,
    },
    {
      id: 2,
      matchID: 1,
      name: "Andra halvlek",
      length: 30,
      currentMatchEvent: false,
    },
  ],
  scores: [
    {
      id: 1,
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      player: {},
      time: "17:45"
    },
    {
      id: 2,
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      player: {},
      time: "09:45"
    },
    {
      id: 3,
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      player: {},
      time: "07:45"
    },
    {
      id: 4,
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      player: {},
      time: "15:45"
    },
    {
      id: 5,
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      player: {},
      time: "18:21"
    },
    {
      id: 6,
      matchEventsId: 1,
      teamId: 1,
      points: 1,
      playerId: 1,
      player: {},
      time: "14:33"
    },
    {
      id: 7,
      matchEventsId: 1,
      teamId: 2,
      points: 1,
      playerId: 1,
      player: {},
      time: "17:45"
    },
    {
      id: 8,
      matchEventsId: 1,
      teamId: 2,
      points: 1,
      playerId: 1,
      player: {},
      time: "09:45"
    },
    {
      id: 9,
      matchEventsId: 1,
      teamId: 2,
      points: 1,
      playerId: 1,
      player: {},
      time: "07:45"
    },
    {
      id: 10,
      matchEventsId: 1,
      teamId: 2,
      points: 1,
      playerId: 1,
      player: {},
      time: "15:45"
    },
    {
      id: 11,
      matchEventsId: 1,
      teamId: 2,
      points: 1,
      playerId: 1,
      player: {},
      time: "18:21"
    },
  ],
  penalties: [
    {
      id: 1,
      teamId: 1,
      matchEventsId: 1,
      playerId: 1,
      matchTime: '10:24',
      penaltyTime: '1:00',
      type: 'Gult kort',
    },
    {
      id: 2,
      teamId: 1,
      matchEventsId: 1,
      playerId: 2,
      matchTime: '10:24',
      penaltyTime: '2:00',
      type: 'Gult kort',
    },
    {
      id: 3,
      teamId: 2,
      matchEventsId: 1,
      playerId: 11,
      matchTime: '8:14',
      penaltyTime: '1:00',
      type: 'Gult kort',
    },
  ],
  gymnasticsMatch: {
    id: 1,
    name: "WOMEN's VAULT 2021",
    judgesId: [1, 2, 3, 4, 5, 6]
  },
  gymnasticsMatchEvents: [
    {
      id: 1,
      name: "vault",
      numberOfRounds: 2,
      currentRoundSeq: 1,
      gymnasticsMatchId: 1,
      currentMatchEvent: true,
      participants: [{
        id: 1,
        runningOrder: 2,
        preliminariesRanking: 1,
        showOnMatchBorad: "showing"
      },
      {
        id: 2,
        runningOrder: 3,
        preliminariesRanking: 2,
        showOnMatchBorad: ""
      },
      {
        id: 3,
        runningOrder: 1,
        preliminariesRanking: 3,
        showOnMatchBorad: "showed"
      }]
    },
    {
      id: 2,
      name: "uneven bar",
      numberOfRounds: 1,
      currentRoundSeq:1,
      gymnasticsMatchId: 1,
      currentMatchEvent: false,
      participants: [{
        id: 1,
        runningOrder: 2,
        preliminariesRanking: 1,
        showOnMatchBorad: "showing"
      },
      {
        id: 2,
        runningOrder: 3,
        preliminariesRanking: 2,
        showOnMatchBorad: ""
      },
      {
        id: 3,
        runningOrder: 1,
        preliminariesRanking: 3,
        showOnMatchBorad: "showed"
      }],
    },
  ],
  participants: [{
    id: 1,
    firstName: "Simon",
    lastName: "Herik",
    number: 351,
    affilicationId: 1
  },
  {
    id:2,
    firstName: "Ting",
    lastName: "Zhang",
    number: 366,
    affilicationId: 2
  },
  {
    id: 3,
    firstName: "Sahara",
    lastName: "Karmark",
    number: 260,
    affilicationId: 3
  },
  ],

  affilications: [
    {
      id: 1,
      name: "American",
      abbrevName: "USA",
      logo: "USA-Flag.png"
    },
    {
      id: 2,
      name: "China",
      abbrevName: "CHN",
      logo: "CHN-Flag.png"
    },
    {
      id: 3,
      name: "India",
      abbrevName: "IND",
      logo: "IND-Flag.png"
    },
  ],
  gymnasticsScore: [
    {
      id: 1,
      gymnasticsMatchEventId: 1,
      roundSeq:1,
      participantId: 1,
      difficulty: 7.10,
      penaltiesScore: 0.2,
      judesScore: 0.0
    }
  ],
  gymnasticsPenalties: [
    {
      id: 1,
      gymnasticsMatchEventId: 1,
      roundSeq: 1,
      participantId: 1,
      description: "Did not start within 30 seconds",
      deduction: 0.2
    }
  ],
  judesScore: [
    {
      id: 1,
      gpymnasticsMatchEventId: 1,
      roundSeq: 1,
      participantId: 1,
      judeId: 1,
      executionPoints: 8.10,
    },
    {
      id: 2,
      gpymnasticsMatchEventId: 1,
      roundSeq: 1,
      participantId: 1,
      judeId: 2,
      executionPoints: 8.20,
    },
    {
      id: 2,
      gpymnasticsMatchEventId: 1,
      roundSeq: 1,
      participantId: 1,
      judeId: 3,
      executionPoints: 8.30,
    }
  ],
  judges: [{
    id: 1,
    firstName: "Karl",
    lastName: "Anderson",
    affliationId: 1
  },
  {
    id: 2,
    firstName: "Erik",
    lastName: "Svenson",
    affliationId: 1
  }
  ]

}

//matates state
const mutations = {

}

//async network requests
const actions = {

}

export default createStore({ state, mutations, actions })

/* export default createStore({
  state: {
    penaltiesHash: {},
    match: {
      id: 1,
      time: '18:32',
      teams: [
        {
          id: 1,
          homeTeam: true,
          name: 'Lugi',
          logo: "src/assets/logo_lugi.png"
        },
        {
          id: 2,
          homeTeam: false,
          name: 'H43',
          logo: "src/assets/logo_h43.png"
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
}) */
