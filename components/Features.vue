<template>
  <section class="bg-gray-100 border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        About
      </h1>
      <p class="text-gray-700 text-center my-4">
        A Sustainable Web 3 Ecosystem
      </p>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <feature-left
        headline="Secure Web"
        content="Use verified and trusted modern Web 3 Applications. Each Partner gets through a strict process to get proved of security and sustainability."
      >
        <Shield class="text-gray-800 w-32" slot="svg" />
      </feature-left>

      <div class="w-full flex justify-center text-gray-800">
        <Caret class="w-12 h-12"/>
      </div>

      <feature-right
        headline="Passive Income"
        content="Store your money in a secure way. The network combines sophisticated DeFi protocols to save your capital and generates cashflow."
      >
        <Piggy class="text-gray-800 w-32" slot="svg" />
      </feature-right>

      <div class="w-full flex justify-center text-gray-800">
        <Caret class="w-12 h-12"/>
      </div>

      <feature-left
        headline="Passive Payments"
        content="Pay passively by staking for service subscriptions. No need to spending your money away from your account anymore."
      >
        <Credit class="text-gray-800 w-32" slot="svg" />
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

import Shield from '@/assets/svg/user-shield-solid.svg'
import Piggy from '@/assets/svg/piggy-bank-solid.svg'
import Credit from '@/assets/svg/credit-card-solid.svg'
import Caret from '@/assets/svg/caret-down-solid.svg'

export default {
  name: 'Features',
  components: {
    FeatureRight,
    FeatureLeft,
    Shield,
    Piggy,
    Credit,
    Caret
  }
}
</script>
