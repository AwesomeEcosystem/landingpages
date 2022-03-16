<template>
  <section class="bg-gray-100 text-gray-900 py-16">
    <h2 class="text-3xl text-center mb-8">Set Protocol</h2>
    <div class="container mx-auto flex flex-wrap justify-center items-center">
      <div class="flex flex-col justify-center items-center w-full md:w-1/4 mx-4">
        <Poll class="w-24 h-24 mb-4"/>
        <p>Nomics Index Token is a Set Protocol backed by ecosis Partnership Network Assets on Avalanche Network.</p>
      </div>
      <div class="flex flex-col justify-center items-center w-full md:w-1/4 mx-4">
        <Chart class="w-24 h-24 mb-4"/>
        <p>By investing into Nomics, you invest into the hole ecosis Network without the need to buy each single token.</p>
      </div>
    </div>
    <div class="flex w-full justify-center mt-8">
      <a
        class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center"
        href="https://docs.ecosis.network/products/nomics">
        Read more!
      </a>
    </div>
  </section>
</template>

<script>
import Chart from '@/assets/svg/chart-bar-solid.svg'
import Poll from '@/assets/svg/poll-solid.svg'

export default {
  components: {
    Chart,
    Poll,
  }
}
</script>

<style lang="css">
.icons {
  background: -webkit-linear-gradient(#30CFD0, #330867);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
