<template>
  <section class="w-full container mx-auto flex flex-wrap justify-center items-center py-16 text-white">
    <div class="w-full">
      <h2>How it works</h2>
    </div>
    <FeatureLeft
      headline="Cashflow Aggregator"
      content="Nomics Protocol acts like an autonomous wallet. It manages your stakes in the ecosystem automatically without any need to do it by your own."
    >
      <Gateway class="text-white w-32" slot="svg" />
    </FeatureLeft><div class="w-full flex justify-center text-gray-800">
      <Caret class="w-12 h-12"/>
    </div>
    <FeatureRight
      headline="Subscriptions"
      content="Subscribe to DeFi Protocols and get most of its advantages."
    >
      <Sub class="text-white w-32" slot="svg" />
    </FeatureRight>
    <FeatureLeft
      headline="Passive Payments"
      content="Delegate your Nomics to an entity you want to support financially without spending your savings."
    >
      <Passive class="text-white w-32" slot="svg" />
    </FeatureLeft>
  </section>
</template>

<script>
import Gateway from '@/assets/svg/circle-dollar-to-slot-solid.svg'
import Sub from '@/assets/svg/check-to-slot-solid.svg'
import Passive from '@/assets/svg/hand-holding-dollar-solid.svg'

export default {
  components: {
    Gateway,
    Sub,
    Passive
  }
}
</script>

<style lang="css">
</style>
