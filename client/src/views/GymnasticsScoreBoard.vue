<template>
  <div class="container">
    <div class="event-container">
      <h1 class="title">{{ gymnasticsMatch.name }}</h1>
    </div>
    <div class="participant-container">
      <Participant
        :currentParticipant="currentParticipant"
        :matchEventLogo="matchEventLogo"
      />
    </div>
    <div
      class="Round-container"
      v-if="numberOfRounds > 1 && gymnasticsScores.length > 0"
    >
      <Round
        :currentRoundSeq="currentRoundSeq"
        :numberOfRounds="numberOfRounds"
      />
    </div>
    <div class="stats-container" v-if="gymnasticsScores.length > 0">
      <div class="wrap2">
        <div class="stat">
          <h3 class="stat-title">Difficulty</h3>
          <h3 class="stat-detail">{{ difficulty().toFixed(3) }}</h3>
        </div>
        <div class="stat">
          <h3 class="stat-title">Execution</h3>
          <h3 class="stat-detail">{{ execution().toFixed(3) }}</h3>
        </div>
        <div class="stat">
          <h3 class="stat-title">Penalties</h3>
          <h3 class="stat-detail">{{ penalties().toFixed(3) }}</h3>
        </div>
        <div class="stat" v-if="currentRoundSeq == 1">
          <h3 class="stat-title-score">Score</h3>
          <h3 class="stat-detail">{{ score.toFixed(3) }}</h3>
        </div>
      </div>
    </div>
    <div class="stats-container">
      <div
        class="stat"
        v-if="
          numberOfRounds > 1 &&
          (matchEventName = 'vault') &&
          currentRoundSeq > 1
        "
      >
        <VaultRoundScore
          :gymnasticsScores="gymnasticsScores"
          :judesScores="judesScores"
          :penalties="penaltiesData"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { Participant, Round, VaultRoundScore },
  computed: {
    gymnasticsMatch() {
      return this.$store.state.gymnasticsMatch;
    },
    gymnasticsMatchEvent() {
      return this.$store.state.gymnasticsMatchEvents.filter(
        (m) =>
          (m.gymnasticsMatchId =
            this.gymnasticsMatch.id && m.currentMatchEvent === true)
      );
    },
    currentParticipant() {
      let participants = this.gymnasticsMatchEvent[0].participants;
      return participants.filter((p) => p.showOnMatchBorad === "showing");
    },
    currentRoundSeq() {
      return this.gymnasticsMatchEvent[0].currentRoundSeq;
    },
    numberOfRounds() {
      console.log(
        "numberOfRounds",
        this.gymnasticsMatchEvent[0].numberOfRounds
      );
      return this.gymnasticsMatchEvent[0].numberOfRounds;
    },
    matchEventName() {
      return this.gymnasticsMatchEvent[0].name;
    },
    matchEventLogo() {
      return this.gymnasticsMatchEvent[0].logo;
    },
    gymnasticsScores() {
      return this.$store.state.gymnasticsScore.filter(
        (s) =>
          s.gymnasticsMatchEventId == this.gymnasticsMatchEvent[0].id &&
          s.participantId == this.currentParticipant[0].id
      );
    },
    judesScores() {
      return this.$store.state.judesScore.filter(
        (s) =>
          s.gymnasticsMatchEventId == this.gymnasticsMatchEvent[0].id &&
          s.participantId == this.currentParticipant[0].id
      );
    },
    penaltiesData() {
      return this.$store.state.gymnasticsPenalties.filter(
        (p) =>
          p.gymnasticsMatchEventId == this.gymnasticsMatchEvent[0].id &&
          p.participantId == this.currentParticipant[0].id
      );
    },
    score() {
      return this.difficulty() + this.execution() - this.penalties();
    },
  },
  methods: {
    calculateScore() {
      return new CalculteGymnasticsScore(
        this.gymnasticsScores,
        this.judesScores,
        this.penaltiesData,
        this.currentRoundSeq
      );
    },
    difficulty() {
      return this.calculateScore().getDifficulty();
    },
    execution() {
      return this.calculateScore().calculateExecution();
    },
    penalties() {
      return this.calculateScore().calculatePenalties();
    },
  },
};

import Participant from "../components/gymnastics/participant.vue";
import Round from "../components/gymnastics/round.vue";
import VaultRoundScore from "../components/gymnastics/vaultRoundScore.vue";
import CalculteGymnasticsScore from "../calculateGymnasticsScore.js";
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
* {
  margin: 0;
}

.container {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 229, 255, 1) 51%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
  height: 100vh;
  border: 1px solid lightgray;
  /*display: grid;  */
  gap: 4em;
  grid-template-rows: 10% 40% 10% 40%;
  font-family: "Orbitron", sans-serif;
}

.title {
  font-size: 50px;
  color: lightskyblue;
}

.event-container {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left: 1px solid rgba(121, 120, 120, 0.5);
  border-right: 1px solid rgb(121, 120, 120, 0.5);
  border-bottom: 1px solid rgb(121, 120, 120, 0.5);
  width: 50%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.534);
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 50px; */
}

.stats-container {
  display: flex;
  justify-content: space-between;
  margin: 50px;
  gap: 4em;
  border: 2px solid red;
  width: 50%;
  margin: 0 auto;
}

.stat {
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  gap: 2em;
}
.stat-title {
  font-size: 35px;
  color: orange;
}
.stat-title-score {
  font-size: 35px;
  color: purple;
}
.stat-detail {
  font-size: 35px;
  /* margin: 1em; */
}

.participant-container {
  display: flex;
  justify-content: center;
  height: 4em;
}

.Round-container {
  border: 1px solid blue;
  display: flex;
  justify-content: flex-end;
  font-size: 35px;
  width: 50%;
  margin: 0 auto;
}
</style>
