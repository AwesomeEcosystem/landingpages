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
            Verse
          </h1>
          <p class="leading-normal text-2xl mb-8 font-thin">
            The real Metaverse
          </p>

          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/launch')">
            Enter!
          </button>
        </div>
      </div>
    </div>

    <Wave align="top" color="#fafafa"/>
    <section>
      <h1>What is Verse</h1>
      <p>It's an abstract metaverse build out of virtual spaces.</p>
      <p>Register and define custom virtual spaces.</p>
      <p>Registration fees calculated dynamically out of sapce volume.</p>
      <p>Space Registration rewards stake holders as passive income.</p>
      <div class="">

        <div class="">
          <h2>Marketplace</h2>
          <p>Business Registration</p>
          <p>Stake Delegation</p>
        </div>

        <div class="">
          <h2>Communities</h2>
          <p></p>
        </div>

      </div>
    </section>
    <Wave align="bottom" color="#fafafa"/>

    <div class="py-32">
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
