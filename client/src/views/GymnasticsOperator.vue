<template>
  <div>
    <GymnasticsStats/>
    <GymnasticsScoreInput/>    
  </div>
</template>

<script>
import GymnasticsScoreInput from "../components/gymnastics/gymnasticsScoreInput.vue"
import GymnasticsStats from "../components/gymnastics/gymnasticsStats.vue"

export default {
components:{GymnasticsScoreInput,GymnasticsStats}
}
</script>

<style>

</style>