<template>
  <section>
    <div class="bg-white text-gray-900 w-full flex flex-col items-center pb-4">
      <div class="w-full text-center py-8">
        <h1>Roadmap</h1>
      </div>
      <img src="~/assets/imgs/roadmap.png">
    </div>
    <div class="relative">
      <Wave align="bottom" color="#fff"/>
    </div>
  </section>
</template>

<script>
import Wave from '@/components/Wave'

export default {
  name: 'Roadmap',
  components: {
    Wave
  }
}
</script>

<style lang="css" scoped>
</style>
