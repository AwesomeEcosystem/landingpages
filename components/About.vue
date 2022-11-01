<template>
  <section class="w-full bg-gray-100 text-gray-800 py-24" id="about">

    <div class="w-full flex flex-wrap justify-center items-start">

      <div class="w-full text-center py-8">
        <h1>Features</h1>
        <h3>The marketplace which rewards its users!</h3>
      </div>

      <div class="w-full flex flex-wrap justify-center items-start text-center md:mx-64">
        <div class="w-full md:flex-1 p-4">
          <div class="flex justify-center items-center p-4 h-24">
            <Chart class="w-24"/>
          </div>
          <h3>It is rewarding</h3>
          <p>The system rewards everyone with a deposit!</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex justify-center items-center p-4 h-24">
            <Shield class="w-24"/>
          </div>
          <h3>It is risk-less</h3>
          <p>Your deposit is still yours!</p>
        </div>
        <div class="w-full md:flex-1 p-4">
          <div class="flex justify-center items-center p-4 h-24">
            <Puzzle class="w-24"/>
          </div>
          <h3>It is interoperable</h3>
          <p>Use it with more and more existing platforms out there!</p>
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

    <div class="w-full flex flex-col justify-center items-center">
      <h2>Compound Rewards</h2>
      <p>You get automatically rewarded proportional to your deposit!</p>
      <!-- <p>Current Weekly Reward Rate</p>
      <h3>~0.27%</h3>
      <p class="font-italic">~14.04% annualized</p> -->
      <LineChart :chartData="linedata" :styles="chart"/>
    </div>

    <div class="w-full text-center pt-24">
      <h3>If you are in, you will win!</h3>
      <p>It is absolutely risk-less. You can not lose any money. You only can get rewarded over time!</p>
    </div>
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

import LineChart from "@/components/Charts/LineChart"

import Shield from '@/assets/svg/user-shield-solid.svg'
import Piggy from '@/assets/svg/piggy-bank-solid.svg'
import Credit from '@/assets/svg/credit-card-solid.svg'
import Caret from '@/assets/svg/caret-down-solid.svg'
import Puzzle from '@/assets/svg/puzzle-piece-solid.svg'
import Chart from '@/assets/svg/chart-line-solid.svg'

export default {
  name: 'Features',
  data() {
    return {
      linedata: {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5"
        ],
        datasets: [
          {
            label: "Income",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [2, 5, 15, 35, 65],
          },
        ],
      },
      doughnutData: {
        labels: ['Presale', 'Mainsale', 'Team', 'Mainsaleing', 'Liquidity'],
        datasets: [
          {
            label: "Bend",
            borderColor: "transparent",
            pointBackgroundColor: "white",
            borderWidth: 1,
            backgroundColor: ['#5D675B', '#E5B25D', '#4357AD', '#EF5B5B'],
            data: [20, 40, 10, 10, 20]
          }
        ]
      },
      chart: {
        width: '80%'
      },
    }
  },
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
