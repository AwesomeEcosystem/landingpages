<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/one_logo.png"/>
        </div>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            One
          </h1>
          <p class="leading-normal text-2xl mb-8 font-thin">
            The All-in-One ecosis Network Wallet
          </p>

          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" href="https://app.ecosis.network" target="_blank">
            Open App
          </a>
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
        <p>The deflationary tokenomics acting as a store of value is estimated to ensure long-term sustainability and can be used to back partner tokens.</p>
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
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/4">
            <Bank class="w-24 h-24 mb-4"/>
            <p>Presale</p>
            <h2>20%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/4">
            <Team class="w-24 h-24 mb-4"/>
            <p>eLabs</p>
            <h2>20%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/4">
            <Partners class="w-24 h-24 mb-4"/>
            <p>Genesis Partner Distribution</p>
            <h2>20%</h2>
          </div>
          <div class="flex flex-col justify-center items-center w-1/2 md:w-1/4">
            <Market class="w-24 h-24 mb-4"/>
            <p>Market</p>
            <h2>40%</h2>
          </div>
        </div>

        <div class="flex justify-center w-full pt-2 pb-16">
          <DoughnutChart :chartData="doughnutData" :styles="chart"/>
        </div>
      </div>
    </div>
    <Wave align="bottom" color="#fafafa"/>

    <div class="py-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/one_logo_light.png"/>
        </div>
        <p class="leading-normal text-2xl mb-8 font-thin">
          The All-in-One ecosis Network Wallet
        </p>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">

          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" href="https://app.ecosis.network" target="_blank">
            Open App
          </a>
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

import Bank from '@/assets/svg/piggy-bank-solid.svg'
import Team from '@/assets/svg/users-solid.svg'
import Partners from '@/assets/svg/hands-helping-solid.svg'
import Market from '@/assets/svg/globe-solid.svg'

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
            label: "Bend",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [2, 10, 15, 35, 65],
          },
          {
            label: "Partner Tokens",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [30, 55, 4, 50, 75],
          },
        ],
      },
      doughnutData: {
        labels: ['Presale', 'eLabs', 'Genesis Partner Distribution', 'Market'],
        datasets: [
          {
            label: "Bend",
            borderColor: "transparent",
            pointBackgroundColor: "white",
            borderWidth: 1,
            backgroundColor: ['#5D675B', '#E5B25D', '#4357AD', '#EF5B5B'],
            data: [20, 20, 20, 40]
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
    Bank,
    Team,
    Partners,
    Market
  }
}
</script>

<style scoped>
</style>
