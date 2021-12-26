<template>
  <div class="">
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center w-full">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Nomics
          </h1>
          <p class="leading-normal text-2xl mb-8 font-thin">
            ecosis Partnership Network Index
          </p>

          <a class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center">
            Sale soon!
          </a>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center flex justify-center">
          <Nomics />
        </div>
      </div>
    </div>
    <section class="bg-gray-100 text-gray-900 py-16">
      <h2 class="text-3xl text-center mb-8">Set Protocol</h2>
      <div class="container mx-auto flex flex-wrap">
        <p class="w-full md:flex-1 p-8">Nomics Index Token is a Set Protocol backed by ecosis Partnership Network Assets on Avalanche Network.</p>
        <p class="w-full md:flex-1 p-8">The combination of the underlying assets ensures increasing token value over time.</p>
        <p class="w-full md:flex-1 p-8">By investing into Nomics, you invest into the hole ecosis Network without the need to buy each single token.</p>
      </div>
    </section>
    <section class="bg-gray-200 text-gray-900 text-center py-16">
      <p>Underlying</p>
      <h2 class="text-3xl mb-8">Assets</h2>
      <div class="container mx-auto flex flex-wrap justify-around items-start">
        <button
          class="w-1/2 md:flex-1 flex flex-col justify-center items-center h-64 hover:bg-gray-300 rounded rounded-lg"
          @click="$router.push('cap')"
        >
          <Cap class="h-32 w-32"/>
          <h3 class="text-center text-xl">CAP</h3>
        </button>
        <button
          class="w-1/2 md:flex-1 flex flex-col justify-center items-center h-64 hover:bg-gray-300 rounded rounded-lg"
          @click="$router.push('bend')"
        >
          <Bend class="h-32 w-32"/>
          <h3 class="text-center text-xl">BEND</h3>
        </button>
        <button
          class="w-1/2 md:flex-1 flex flex-col justify-center items-center h-64 hover:bg-gray-300 rounded rounded-lg"
          @click="redirect('https://cunoro.finance')"
        >
          <img class="h-32 w-32 p-2" src="~/assets/logos/cunoro_dark.png" alt="">
          <h3 class="text-center text-xl">NORO</h3>
        </button>
        <button
          class="w-1/2 md:flex-1 flex flex-col justify-center items-center h-64 hover:bg-gray-300 rounded rounded-lg"
          @click="redirect('https://elabs.ecosis.io')"
        >
          <img class="h-32 w-32" src="~/assets/logos/elabs_transparent-bg.png" alt="">
          <h3 class="text-center text-xl">ELABS</h3>
        </button>
      </div>
      <div class="container mx-auto flex flex-col justify-center items-center w-full text-center pt-16 px-8">
        <p>You have a sustainable DeFi Tokenomics on the Avalanche Network?</p>
        <h4 class="text-xl pt-8">Add your Asset into the Set!</h4>
        <a
          class="flex flex-col mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center"
          href="https://discord.gg/YMeuhQdFtR"
          target="_blank"
        >
          <Discord class="mr-4"/>
          Join Discord in #Partnership
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import Nomics from '@/assets/logos/nomics.svg'
import Cap from '@/assets/logos/cap.svg'
import Bend from '@/assets/logos/bend.svg'
import Discord from '@/assets/logos/discord.svg'

export default {
  methods: {
    redirect(url) {
      window.open(url, '_blank')
    }
  },
  components: {
    Nomics,
    Cap,
    Bend,
    Discord
  }
}
</script>

<style lang="css" scoped>
</style>
