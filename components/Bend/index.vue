<template>
  <section class="bg-gray-100 text-gray-900 py-16">
    <p></p>
    <h2>About</h2>

    <div class="flex flex-wrap justify-center items-center container mx-auto px-32 py-8 my-8 text-center">
      <div class="flex flex-col justify-start items-center w-full h-64">
        <Store class="w-32 h-32 mb-8"/>
        <h2>Store of Value</h2>
        <p></p>
      </div>
      <div class="flex flex-col justify-start items-center w-full md:flex-1 h-64">
        <Chart class="w-32 h-32 mb-8"/>
        <h2>Deflationary</h2>
        <p>Bend is designed to be deflationary. This token is kind of the heart for partner tokenomics to gain more sustainability.</p>
      </div>
      <div class="flex flex-col justify-start items-center w-full md:flex-1 h-64">
        <Coins class="w-32 h-32 mb-8"/>
        <h2>Redistributing</h2>
        <p>It’s important for an ecosystem to have an asset, which is shared mainly between parties with functionalities like redistribution and maintaining liquidity.</p>
      </div>
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
      <div class="flex justify-center items-center w-full">
        <a class="w-1/5 text-center mx-auto lg:mx-0 hover:underline bend text-white font-bold rounded-full py-4 shadow-lg">
          Read More
        </a>
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
    Coins,
  }
}
</script>

<style lang="css">

</style>
