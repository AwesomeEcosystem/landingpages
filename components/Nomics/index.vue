<template>
  <section class="bg-gray-100 text-gray-900 py-16">
    <h2 class="text-3xl text-center mb-8">Set Protocol</h2>
    <div class="container mx-auto flex flex-wrap">
      <p class="w-full md:flex-1 p-8">Nomics Index Token is a Set Protocol backed by ecosis Partnership Network Assets on Avalanche Network.</p>
      <p class="w-full md:flex-1 p-8">The combination of the underlying assets ensures increasing token value over time.</p>
      <p class="w-full md:flex-1 p-8">By investing into Nomics, you invest into the hole ecosis Network without the need to buy each single token.</p>
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
