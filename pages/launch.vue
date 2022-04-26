<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <h1>Countdown</h1>
        <div class="w-full flex justify-center text-white">
          <CountDown :date="end" @onFinish="finished = true"/>
        </div>
        <button class="mx-auto lg:mx-0 hover:underline nomics text-white font-bold rounded-full my-12 py-4 px-8 shadow-lg flex items-center">
          Soon Launch!
        </button>
      </div>
    </div>

    <Wave align="top" color="#fafafa"/>
    <div class="w-full bg-gray-100 text-gray-800">
      <div class="w-full container mx-auto">
        <h2>Soft Launch</h2>
        <p>You will be able to buy the deflationary premium Token Bend here  out of our vault system. </p>

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
            Learn more about the Partner!
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
      <div class="w-full">
        <h2>Tokenomics</h2>
        <p>Bend Token Allocation and Vesting</p>
        <div class="flex justify-center w-full pt-2 pb-16">
          <Tokenomics/>
        </div>
        <h3>Vesting</h3>
        <div class="flex flex-col justify-center w-full pt-2 pb-16">
          <p>
            Tokens are locked until Vesting Period begins after Mainsale.
            Presale supports launch for marketing and liquidity providing.
          </p>
          <p>
            Treasury
            100% Locked
            until ELABS Token Release.
            10% Unlocked each week
            after ELABS Token Release.
          </p>
        </div>
      </div>
      <div class="flex">
      </div>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave'
import TokenSale from '@/components/TokenSale'
import Caret from '@/assets/svg/caret-down-solid.svg'

export default {
  data() {
    return {
      end: new Date('2022-05-09'),
      finished: false
    }
  },
  components: {
    Wave,
    Caret,
    TokenSale
  }
}
</script>

<style scoped>
</style>
