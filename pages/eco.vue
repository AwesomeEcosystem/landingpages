<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          https://www.freepik.com/free-vector/digital-smart-city-concept-big-data-transmission-processing-data-center-warehouse_3629619.htm#&position=5&from_view=collections
          <img src="~/assets/logos/bend_logo.png"/>
        </div>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Eco
          </h1>
          <p class="leading-normal text-2xl mb-8 font-thin">
            Reserved Bridgechain
          </p>

          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/launch')">
            Join Sale!
          </button>
        </div>
      </div>
    </div>

    <Wave align="top" color="#fafafa"/>
    <section>
      <div class="flex">
        <div class="">
          https://www.freepik.com/free-vector/isometric-networking-connection-internet-network-topology-concept-server-room_3629630.htm
        </div>
        <div class="">
          <h1>What is Eco</h1>
          <p>Eco is a Bridgechain enabling the digital economical infrastructure.</p>
          <p>A Blockchain how it should!</p>
          <p>This Bridgechain is the base for the ecosis platform at the very bottom. </p>
          <p>Could run a smartphone.</p>
          <p>Fast Transactions.</p>
          <p>Best Developer Adoption due it's developed with the worlds most wellknown programming language Typescript.</p>
          <p>The Blockchain which enables cross-chain decentralized exchanges!</p>
        </div>
        <div class="w-full">
          <h1>The most efficient and democratic Blockchain on the world!</h1>
          <p>Written in Typescript</p>
          <p>Bulletproof by dozens of hackathons</p>
          <p>Easiest to use - say good bye to crypto handling</p>
        </div>
      </div>
    </section>
    <Wave align="bottom" color="#fafafa"/>

    <div class="py-32">
      <p></p>
      <h1>Stable Economics</h1>
      <div class="">
        <p>But a Tax System in a way how it sould, thanks to Custom Transaction Types.</p>
        <p>This Bridgechain is not only backed by collaterals in Nomics Vaults across multiple chains, it bridges Tokens in the most secure way!</p>
      </div>
      <div class="">
        <h2></h2>
      </div>
    </div>

    <div class="py-32">
      https://www.freepik.com/free-vector/awesome-isometric-banner-digital-technology-isometric-abstract-icon-big-data-processing_4102891.htm#&position=0&from_view=collections
      <p>Delegate Prof of Stake</p>
      <h1>Delegates</h1>
      <div class="">
        <p>Best Blockchain Consensus on the world so far!</p>
        <p>Bringing democracy to everyone!</p>
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
