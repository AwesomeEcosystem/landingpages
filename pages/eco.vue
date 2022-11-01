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
            Eco
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
    <div class="flex justify-center w-full text-center px-4 bg-gray-100 text-gray-800 pt-12">
      <div class="w-full md:w-1/2">

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
