<template>
  <section class="w-full bg-gray-100 text-gray-800 py-24" id="about">

    <div class="w-full flex flex-wrap justify-center items-start">

      <div class="w-full text-center py-8">
        <h1>About</h1>
        <h3>The marketplace which rewards its users!</h3>
      </div>

      <div class="w-full flex flex-wrap justify-center items-start text-center md:mx-64">
        <div class="w-full md:flex-1 p-4">
          <div class="flex flex-col justify-around items-center p-4 h-24">
            <ChartLine class="w-24"/>
          </div>
          <p>A simple and profitable User Experience</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex flex-col justify-around items-center p-4 h-24">
            <Shield class="w-24"/>
          </div>
          <p>The most stable and risk-free Investment Solution</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex flex-col justify-around items-center p-4 h-24">
            <ChartBar class="w-24"/>
          </div>
          <p>Investment and Cash-Flow all-in-one</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex flex-col justify-around items-center p-4 h-24">
            <Landmark class="w-24"/>
          </div>
          <p>No regulatory issues and easily accessible to everyone</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex flex-col justify-around items-center p-4 h-24">
            <Check class="w-24"/>
          </div>
          <p>Available for B2C, B2B, and IoT</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex flex-col justify-around items-center p-4 h-24">
            <Puzzle class="w-24"/>
          </div>
          <p>Interoperable with all existing businesses</p>
        </div>
      </div>

      <div class="w-full md:w-1/3 flex flex-col justify-center items-center text-center md:text-right m-8">
        <div class="">
          <p>For Consumers</p>
          <h1>Deposit Money, <br> get rewarded <br> and do payments</h1>
        </div>
        <div class="">
          <img src="~/assets/imgs/calc_illustration.png" alt="">
        </div>
      </div>

      <div class="w-full md:w-1/3 flex flex-col justify-center items-center text-center md:text-left m-8">
        <div class="">
          <p>For Businesses</p>
          <h1>Receive Money, <br> get rewarded <br> and do payouts</h1>
        </div>
        <div class="">
          <img src="~/assets/imgs/contribute_shape.png" alt="">
        </div>
      </div>

    </div>

    <div class="w-full flex flex-col justify-center items-center text-center">
      <h2>Compound Rewards</h2>
      <p>Earn rewards proportional to your deposit!</p>
      <!-- <p>Current Weekly Reward Rate</p>
      <h3>~0.27%</h3>
      <p class="font-italic">~14.04% annualized</p> -->
      <!-- <LineChart :chartData="linedata" :styles="chart"/> -->
      <img src="~/assets/imgs/screenshots/ecomock.png">
    </div>

    <div class="w-full text-center pt-24">
      <h3>If you are in, you will win!</h3>
      <p>It is absolutely risk-less. We have a money back guarantee! You will only receive rewards over time!</p>
    </div>
    <div class="w-full pt-8">
      <div class="w-full flex justify-center text-gray-800">
        <Caret class="w-12 h-12"/>
      </div>
      <div class="flex w-full justify-center">
        <button
          class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center" @click="$router.push('/start/#getstarted')">
          Get Started!
        </button>
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
import ChartLine from '@/assets/svg/chart-line-solid.svg'
import ChartBar from '@/assets/svg/chart-bar-solid.svg'
import Landmark from '@/assets/svg/landmark-solid.svg'
import Check from '@/assets/svg/check-to-slot-solid.svg'

export default {
  components: {
    FeatureRight,
    FeatureLeft,
    Shield,
    Piggy,
    Credit,
    Caret,
    Puzzle,
    ChartLine,
    ChartBar,
    Landmark,
    Check
  }
}
</script>
