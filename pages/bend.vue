<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/bend_logo.png"/>
        </div>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Bend
          </h1>
          <p class="leading-normal text-2xl mb-8 font-thin">
            The Exclusive Accessibility
          </p>

          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/launch')">
            Join Sale!
          </button>
        </div>
      </div>
    </div>

    <Wave align="top" color="#fafafa"/>
    <Bend/>
    <Wave align="bottom" color="#fafafa"/>

    <div class="border-b container mx-auto">
      <h2>Transaction Fee</h2>
      <h1>6%</h1>
    </div>

    <div class="flex flex-wrap justify-center items-cente rcontainer mx-auto px-32 text-center py-8 mb-12">

      <div class="w-full flex-1">
        <h1>2%</h1>
        <h2>Redistribution</h2>
        <p></p>
      </div>

      <div class="w-full flex-1">
        <h1>2%</h1>
        <h2>Liquidity Providing</h2>
        <p></p>
      </div>

      <div class="w-full flex-1">
        <h1>2%</h1>
        <h2>Token Burn</h2>
        <p></p>
      </div>

    </div>

    <div class="flex justify-center w-full text-center my-4 px-4 pb-24">
      <div class="w-full md:w-1/4">
        <p>The deflationary tokenomics acting as a store of value is estimated to ensure long-term sustainability.</p>
      </div>
    </div>

    <div class="flex justify-center w-full pb-24">
      <LineChart :chartData="linedata" :styles="chart"/>
    </div>

    <Wave align="top" color="#fafafa"/>
    <div class="flex justify-center w-full text-center px-4 bg-gray-100 text-gray-800 pt-12">
      <div class="w-full md:w-1/2">
        <h2 class="font-bold">Token Allocation</h2>
        <p class="font-bold">Total Supply</p>
        <div class="flex justify-center inline w-full">
          <h1>12,000,000,000</h1><img class="w-8 h-8 ml-4" src="@/assets/logos/bend_logo.png" alt="">
        </div>
        <div class="flex flex-wrap justify-around items-center w-full md:1/2 text-center py-8 mt-4 font-bold border-t border-gray-600">
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/5">
            <Presale class="w-24 h-24 mb-4"/>
            <p>Presale</p>
            <h2>10%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/5">
            <Mainsale class="w-24 h-24 mb-4"/>
            <p>Mainsale</p>
            <h2>40%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/5">
            <Team class="w-24 h-24 mb-4"/>
            <p>Team</p>
            <h2>10%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/5">
            <Marketing class="w-24 h-24 mb-4"/>
            <p>Marketing</p>
            <h2>20%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/5">
            <Liquidity class="w-24 h-24 mb-4"/>
            <p>Liquidity</p>
            <h2>20%</h2>
          </div>
        </div>

        <div class="flex justify-center w-full pt-2 pb-16">
          <DoughnutChart :chartData="doughnutData" :styles="chart"/>
        </div>
        <div class="w-full flex justify-center">
          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/launch')">
            Join Sale!
          </button>
        </div>
      </div>
    </div>
    <Wave align="bottom" color="#fafafa"/>

    <div class="py-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/Bend_logo_full_light.png"/>
        </div>
        <p class="leading-normal text-2xl mb-8 font-thin">
          The Exclusive Utility
        </p>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">

          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/launch')">
            Join Sale!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave'
import Bend from '@/components/Bend'

import FeatureLeft from '@/components/FeatureLeft'
import FeatureRight from '@/components/FeatureRight'

import LineChart from "@/components/Charts/LineChart"
import DoughnutChart from "@/components/Charts/DoughnutChart"

import Presale from '@/assets/svg/percent-solid.svg'
import Team from '@/assets/svg/users-solid.svg'
import Marketing from '@/assets/svg/arrows-to-eye-solid.svg'
import Mainsale from '@/assets/svg/cart-arrow-down-solid.svg'
import Liquidity from '@/assets/svg/circle-dollar-to-slot-solid.svg'

export default {
  data() {
    return {
      linedata: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        datasets: [
          {
            label: "Deflation",
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
    Wave,
    Bend,
    LineChart,
    DoughnutChart,
    FeatureLeft,
    FeatureRight,
    Presale,
    Team,
    Marketing,
    Mainsale,
    Liquidity
  }
}
</script>

<style scoped>
</style>
