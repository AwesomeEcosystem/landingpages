<template>
  <section>
    <div class="bg-white text-gray-900 w-full flex flex-col items-center">
      <div class="w-full text-center pt-12">
        <h1>Ecosystem</h1>
      </div>
      <Partners/>
      <div class="w-full flex flex-wrap justify-center text-center">
        <div class="w-full text-center py-8">
          <p>Join with your Business and</p>
          <h2>Become a Partner!</h2>
        </div>
      </div>
    </div>
    <div class="w-full bg-white text-gray-900 pb-16">
      <div class="flex w-full justify-center">
        <a
          class="w-auto hover:underline nomics text-white font-bold rounded-full py-4 px-8 shadow-lg flex items-center text-center" href="https://docs.ecosis.network/">
          Contact Us!
        </a>
      </div>
    </div>
    <div class="relative">
      <Wave align="bottom" color="#fff"/>
    </div>
  </section>
</template>

<script>
import Wave from '@/components/Wave'

export default {
  name: 'Features',
  components: {
    Wave
  }
}
</script>

<style lang="css" scoped>
</style>
