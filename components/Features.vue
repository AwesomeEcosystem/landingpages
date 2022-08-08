<template>
  <section class="w-full flex flex-col md:flex-wrap justify-center bg-gray-100 text-gray-900">
    <div class="md:px-64 max-w-5xl m-8">
      <div class="">
        <p>Tired of complexitiy and volatility?</p>
        <p>Tired of not having your data under control?</p>
        <p>Tired of undemocratic infrastrucutures?</p>
        <p>Tired of unefficient economics?</p>
        <h3>There is no agrument, it all couldn't be solved NOW!</h3>
        <p>Showing the world it's possible</p>
      </div>
      <div class="">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          About
        </h1>
        <p>
          A Marketplace enabling more efficient digital economics with passive income and real democracy!
        </p>
      </div>
      <p class="text-gray-700 text-center mt-4 mb-2 px-4">
        Sustainable world for everyone by digitized infrastructures!
      </p>
      <p class="text-gray-700 text-center mt-4 mb-2 px-4">
        We are the new stage of digital economy to enable a more
      </p>
      <div class="flex lfex-wrap justify-center items-start">
        <feature-left
          headline="efficient infrastructures for businesses"
          content=""
        >
          <Shield class="text-gray-800 w-32" slot="svg" />
        </feature-left>

        <div class="w-full flex justify-center text-gray-800">
          <Caret class="w-12 h-12"/>
        </div>

        <feature-right
          headline="locratives gateway for investors"
          content=""
        >
          <Piggy class="text-gray-800 w-32" slot="svg" />
        </feature-right>

        <div class="w-full flex justify-center text-gray-800">
          <Caret class="w-12 h-12"/>
        </div>

        <feature-left
          headline="safer space for users"
          content=""
        >
          <Credit class="text-gray-800 w-32" slot="svg" />
        </feature-left>

        <div class="w-full flex justify-center text-gray-800">
          <Caret class="w-12 h-12"/>
        </div>

        <feature-right
          headline="productive tools for developers"
          content=""
        >
          <Piggy class="text-gray-800 w-32" slot="svg" />
        </feature-right>
      </div>
      <div class="w-full my-12">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <p>THE GLOBAL WE</p>
      <p>Bringing democracy to everyone!</p>
      <p>The platform build by everyone for everyone!</p>

    </div>
    <!-- <div class="w-full text-gray-700 text-center mt-16">
      <p>
        Take Advantages out of Crypto's Benefits.<br>
        But with much less risk of volatility, because dynamic token price compansates automatically the worlds leading fiat inflation. <br>
        This platform is resevered with digital assets put to work to back the ecosystem on top of business revenue streams. <br>
        Reserve is owned by users, business owners, developers and investors. <br>
      </p>
    </div> -->
    <div class="w-full flex justify-center text-gray-800">
      <Caret class="w-12 h-12"/>
    </div>
    <div class="flex w-full justify-center my-16">
      <a
        class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center"
        href="https://docs.ecosis.network">
        Learn more!
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
import Puzzle from '@/assets/svg/puzzle-piece-solid.svg'
import Chart from '@/assets/svg/chart-line-solid.svg'

export default {
  name: 'Features',
  components: {
    FeatureRight,
    FeatureLeft,
    Shield,
    Piggy,
    Credit,
    Caret,
    Puzzle,
    Chart
  }
}
</script>
