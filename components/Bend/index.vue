<template>
  <section class="bg-gray-100 text-gray-800 py-16">
    <p></p>
    <h2>About</h2>
    <p>Bend is a deflationary premium Token. <br> It acts like a store af value by its own and is a permission utility for Investors to claim the Nomics Token.</p>
    <div class="flex flex-wrap justify-center items-center container mx-auto md:px-32 py-8 my-8 text-center">
      <div class="flex flex-col justify-start items-center w-full min-h-64 h-auto pb-12">
        <Store class="w-16 h-16 mb-8 icons"/>
        <h2>Store of Value</h2>
        <!-- <p>Capital can be secured with a deflationary but redistributing asset.</p> -->
      </div>
      <div class="flex flex-col justify-around items-center w-full md:flex-1 min-h-64 h-auto pb-12">
        <Chart class="w-16 h-16 mb-8 icons"/>
        <h2>Deflationary</h2>
        <!-- <p>Bend is designed to be deflationary. This token is kind of the heart for partner tokenomics to gain more sustainability.</p> -->
      </div>
      <div class="flex flex-col justify-around items-center w-full md:flex-1 min-h-64 h-auto pb-12">
        <Coins class="w-16 h-16 mb-8 icons"/>
        <h2>Redistributing</h2>
        <!-- <p>It’s important for an ecosystem to have an asset, which is shared mainly between parties with functionalities like redistribution and maintaining liquidity.</p> -->
      </div>
    </div>


    <div class="flex w-full justify-center">
      <a
        class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center"
        href="https://docs.ecosis.network/products/bend">
        Read more!
      </a>
    </div>

    <div class="">
      <h2></h2>
      <div class="flex flex-wrap justify-center items-cente container mx-auto px-32 text-center">

        <!-- <FeatureRight
        class="w-full"
        headline="Deflationary Asset"
        content="Everything you need to participate to Web 3. Bundling the best and most promising Projects to adopt the Real World."
        >
        <img class="w-32" src="~/assets/img/market.png?inline" alt slot="svg" />
          </FeatureRight>

          <FeatureLeft
          class="w-full"
          headline="Financial Performance"
          content="Longterm Profits are sustainable. Its about combing DeFi the right way."
          >
          <img class="w-32" src="~/assets/img/market.png?inline" alt slot="svg" />
        </FeatureLeft> -->

      </div>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

import Coins from '@/assets/svg/coins-solid.svg'
import Chart from '@/assets/svg/chart-line-solid.svg'
import Store from '@/assets/svg/landmark-solid.svg'

export default {
  components: {
    FeatureRight,
    FeatureLeft,
    Store,
    Chart,
    Coins,
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
