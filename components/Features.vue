<template>
  <section class="w-full flex flex-col md:flex-wrap justify-center itmes-center bg-gray-100 text-gray-800 py-24" id="about">

    <div class="w-full flex flex-wrap justify-center">

      <div class="w-full md:1/3 flex flex-col justify-center items-center text-center md:text-right mx-6">
        <div class="">
          <p>A MARKETPLACE HOW IT SHOULD</p>
          <h1>Profit out of revenues <br> from the whole Marketplace</h1>
        </div>
        <img src="~/assets/imgs/calc_illustration.png" alt="">
      </div>

      <div class="w-full md:1/3 flex flex-col justify-center items-center text-center md:text-left mx-6">
        <div class="">
          <p>THE WORLD'S MOST DEMOCRATIC MARKETPLACE</p>
          <h1>Vote for Delegates <br> validating the network</h1>
        </div>
        <img src="~/assets/imgs/contribute_shape.png" alt="">
      </div>

    </div>

    <!-- <div class="w-full text-center">
      <div class="flex flex-wrap justify-center items-center text-center md:text-right px-12">
        <div class="">
          <p>Community Spaces</p>
          <h1>Build dedicated and secure Worlds<br> for your Community</h1>
        </div>
        <img src="~/assets/imgs/business_space.png" alt="">
      </div>
      <h3>It's the most digitized and automated marketplace on earth!</h3>
    </div> -->

    <div class="w-full pt-8">
      <div class="w-full flex justify-center text-gray-800">
        <Caret class="w-12 h-12"/>
      </div>
      <div class="flex w-full justify-center">
        <a
          class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center" href="https://docs.ecosis.network/">
          Learn More!
        </a>
      </div>
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
