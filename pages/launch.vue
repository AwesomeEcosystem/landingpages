<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12" v-if="!started">
        <h1>Countdown</h1>
        <div class="w-full flex justify-center text-white">
          <CountDown :date="end"/>
        </div>
        <button class="mx-auto lg:mx-0 hover:underline nomics text-white font-bold rounded-full my-12 py-4 px-8 shadow-lg flex items-center">
          Soon Launch!
        </button>
      </div>
      <div class="w-full" v-if="started">
        <div class="w-full flex justify-center mb-8">
          <img src="~/assets/imgs/vault.png" class="w-3/4 md:w-1/4">
        </div>
        <SaleVault/>
      </div>
    </div>

    <Wave align="top" color="#fafafa"/>
    <div class="w-full bg-gray-100 text-gray-800">
      <div class="w-full container mx-auto pt-8">
        <h2>Launch</h2>
        <p>Get the deflationary premium Token Bend here out of our vault system. <br> The next Sale and the Liquidity Pools are going to be listed here. </p>
        <p>What is BEND and how to bond for rewards?</p>

        <div class="flex justify-center">
          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-12 py-4 px-8 shadow-lg flex items-center" href="https://docs.ecosis.network/launch" target="_blank">
            Learn more about the Launch here!
          </a>
        </div>

        <FeatureLeft
          headline="Bend Token Sale"
          content="
            Bootstrapping the ecosystem by distributing Bend as a deflationary Store of Value.
            It's an early adoption premium token.
            You can use it to bond it into Cunoro Finance Treasury or claim later the Nomics token directly.
          "
        >
          <img class="h-32 w-32 p-2" src="~/assets/logos/bend_logo.png" alt="Bend" slot="svg">
        </FeatureLeft>

        <div class="flex justify-center">
          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-12 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/bend')">
            Learn more about Bend!
          </button>
        </div>

        <div class="w-full flex justify-center text-gray-800">
          <Caret class="w-12 h-12"/>
        </div>

        <FeatureRight
          headline="Bootstrap Partner Treasury"
          content="
            The Treasury System by ecosis partner Cunoro Finance ships the advantages of DeFi 2.0. This enables sustainable Anual Percentage Yield due its staking mechanics.
          "
        >
          <img class="h-32 w-32 p-2" src="~/assets/logos/cunoro.png" alt="Cunoro" slot="svg">
        </FeatureRight>

        <div class="flex justify-center">
          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-12 py-4 px-8 shadow-lg flex items-center" href="https://cunoro.finance" target="_blank">
            Bond in Cunoro Finance's Treasury!
          </a>
        </div>

        <div class="w-full flex justify-center text-gray-800">
          <Caret class="w-12 h-12"/>
        </div>

        <FeatureLeft
          headline="Nomics Release"
          content="
            When the genesis ecosystem is bootstrapped, Nomics is ready to release and wraps the assets for you.
            You can mint Nomics token by providing the Noro token by Cunoro Finance or claim it with the Bend Premium Token.
          "
        >
          <img class="h-32 w-32 p-2" src="~/assets/logos/nomics_logo.png" alt="Nomics" slot="svg">
        </FeatureLeft>

        <div class="flex justify-center">
          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-12 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/nomics')">
            Learn more about Nomics!
          </button>
        </div>

      </div>
    </div>
    <Wave align="bottom" color="#fafafa"/>

    <div class="w-full">
      <Tokenomics/>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave'
import SaleVault from '@/components/TokenSale/SaleVault'
import Tokenomics from '@/components/TokenSale/Tokenomics'
import Caret from '@/assets/svg/caret-down-solid.svg'

export default {
  data() {
    return {
      end: new Date('2022-05-13 21:00'),
      started: true
    }
  },
  components: {
    Wave,
    Caret,
    SaleVault,
    Tokenomics
  }
}
</script>

<style scoped>
</style>
