<template>
  <div>
    <GymnasticParticipant :participants="participants" :event="event"/>
    <GymnasticsStats/>
    <GymnasticsScoreInput/>    
  </div>
</template>

<script>
import GymnasticsScoreInput from "../components/gymnastics/gymnasticsScoreInput.vue"
import GymnasticsStats from "../components/gymnastics/gymnasticsStats.vue"
import GymnasticParticipant from "../components/gymnastics/gymnasticParticipant.vue"

export default {
  components:{ 
    GymnasticsScoreInput,
    GymnasticsStats,
    GymnasticParticipant
  },
  data() {
    return {
      participants: this.$store.state.participant,
      event: this.$store.state.gymnasticsMatchEvent
    }
  }
}
</script>

<style>

</style>