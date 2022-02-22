<template>
  <section class="bg-gray-100 border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        About
      </h1>
      <p class="text-gray-700 text-center my-4">
        Sustainable Web 3 Economics
      </p>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <feature-left
        headline="Bend"
        content="The store of value to back partner tokens."
      >
        <img class="w-32" src="~/assets/logos/bend_logo_dark.png?inline" alt slot="svg" />
      </feature-left>

      <div class="w-full flex justify-center text-gray-800">
        <Caret class="w-12 h-12"/>
      </div>

      <feature-right
        headline="Backing"
        content="Mint Partner Tokens by backing with Bend."
      >
        <Hands class="text-gray-800 w-32" slot="svg" />
      </feature-right>

      <div class="w-full flex justify-center text-gray-800">
        <Caret class="w-12 h-12"/>
      </div>

      <feature-left
        headline="Nomics"
        content="Wrap Partner Tokens into Global Asset."
      >
        <img class="w-32" src="~/assets/logos/nomics_logo_dark.png?inline" alt slot="svg" />
      </feature-left>

    </div>
    <div class="flex w-full justify-center">
      <a
        class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center"
        href="https://docs.ecosis.network">
        Read more!
      </a>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

import Hands from '@/assets/svg/hands-helping-solid.svg'
import Caret from '@/assets/svg/caret-down-solid.svg'

export default {
  name: 'Features',
  components: {
    FeatureRight,
    FeatureLeft,
    Hands,
    Caret
  }
}
</script>
