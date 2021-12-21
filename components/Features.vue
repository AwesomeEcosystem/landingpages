<template>
  <section class="bg-gray-100 border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        About
      </h1>
      <p class="text-gray-700 text-center my-4">Its a Web 3 Partnership Network delivering sophisticated Protocols, Apps and Toolsets</p>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-right
        headline="Awesome Bundled Set"
        content="Everything you need to participate to Web 3. Bundling the best and most promising Projects to adopt the Real World."
      >
        <img src="~/assets/img/set.png?inline" alt slot="svg" />
      </feature-right>
      <feature-left
        headline="Financial Performance"
        content="Longterm Profits are sustainable. Its about combing DeFi the right way."
      >
        <img src="~/assets/img/market.png?inline" alt slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>
