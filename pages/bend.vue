<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/Bend_logo_full_light.png"/>
        </div>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">
          <!-- <h1 class="my-4 text-5xl font-bold leading-tight">
            Bend
          </h1> -->
          <p class="leading-normal text-2xl mb-8 font-thin">
            The Ultimate Store of Value
          </p>

          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center">
            Sale soon!
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
        <h2>Reflections</h2>
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

      <!-- <FeatureRight
      class="w-full"
      headline="Deflationary Asset"
      content="Everything you need to participate to Web 3. Bundling the best and most promising Projects to adopt the Real World."
      >
      <img class="w-32" src="~/assets/img/market.png?inline" alt slot="svg" />
        </FeatureRight>

        <FeatureLeft
        class="w-full"
        headline="Financial Performance"
        content="Longterm Profits are sustainable. Its about combing DeFi the right way."
        >
        <img class="w-32" src="~/assets/img/market.png?inline" alt slot="svg" />
      </FeatureLeft> -->

    </div>
    <div class="flex justify-center w-full text-center my-4 px-4 pb-24">
      <div class="w-full md:w-1/4">
        <p>The deflationary tokenomics acting as a store of value is estimated to ensure long-term sustainability and can be used to back partner tokens.</p>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <LineChart :chart-data="linedata" :styles="chart"/>
    </div>
    <div class="py-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/Bend_logo_full_light.png"/>
        </div>
        <p class="leading-normal text-2xl mb-8 font-thin">
          The Ultimate Store of Value
        </p>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">

          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center">
            Sale soon!
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave'
import Bend from '@/components/Bend'

import LineChart from "@/components/Chart"

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
      chart: {
        width: '80%'
      }
    };
  },
  components: {
    Wave,
    Bend,
    LineChart,
  }
}
</script>

<style scoped>
</style>
