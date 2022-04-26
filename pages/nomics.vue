<template>
  <div class="text-center">
    <div class="pt-32">
      <div class="container px-3 mx-auto flex flex-col items-center w-full pt-12">
        <!--Left Col-->
        <div class="w-full text-center flex justify-center">
          <img src="~/assets/logos/nomics_logo.png"/>
        </div>
        <!--Right Col-->
        <div class="flex flex-col w-full justify-center items-center text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Nomics
          </h1>

          <p class="leading-normal text-2xl mb-8 font-thin">
            The Sustainable Set
          </p>

          <button class="mx-auto lg:mx-0 hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center" @click="$router.push('/launch')">
            Soon Mintable!
          </button>
        </div>
      </div>
    </div>

    <Wave align="top" color="#fafafa"/>
    <Nomics/>
    <Wave align="bottom" color="#fafafa"/>

    <HowNomicsWorks/>

    <Wave align="top" color="#fafafa"/>
    <section class="w-full flex flex-wrap justify-center bg-gray-100 text-gray-900 text-center py-16">
      <div class="container px-3 mx-auto flex flex-col justify-center items-center w-full py-12 mb-24">
        <div class="w-full">
          <p>Demo</p>
          <h4 class="text-xl pt-2">Nomics Delegation</h4>
        </div>
        <div class="w-full">
          <NomicsWidget/>
        </div>
      </div>
    </section>
    <Wave align="bottom" color="#fafafa"/>

    <div class="container px-3 mx-auto flex flex-col items-center w-full py-12 mb-24">
      <div class="flex flex-col w-full justify-center items-center text-center md:text-left">
        <!-- <div class="container mx-auto flex flex-col justify-center items-center w-full text-center pt-16 px-8">
          <p>You have a sustainable Web 3 Business?</p>
          <h4 class="text-xl pt-2">Become a Partner!</h4>
          <a
            class="flex flex-col mx-auto lg:mx-0 hover:underline success text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center"
            href="https://forms.gle/9mX2ka8bUaq7zA126"
            target="_blank"
          >
          Contact
        </a>
      </div> -->
      <div class="w-full text-center flex justify-center">
        <img src="~/assets/logos/nomics_logo.png"/>
      </div>
        <!-- <h1 class="my-4 text-5xl font-bold leading-tight">
          Nomics
        </h1> -->
        <p class="leading-normal text-2xl mb-8 font-thin">
          The Sustainable Set
        </p>

        <a class="mx-auto lg:mx-0 hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center">
          Soon Mintable!
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Wave from '@/components/Wave'
import Nomics from '@/components/Nomics'

import FeatureLeft from '@/components/FeatureLeft'
import FeatureRight from '@/components/FeatureRight'

import LineChart from "@/components/Charts/LineChart"
import DoughnutChart from "@/components/Charts/DoughnutChart"

import Bank from '@/assets/svg/piggy-bank-solid.svg'
import Team from '@/assets/svg/users-solid.svg'
import Partners from '@/assets/svg/hands-helping-solid.svg'
import Market from '@/assets/svg/globe-solid.svg'
import Plus from '@/assets/svg/plus-circle-solid.svg'

export default {
  data() {
    return {
      linedata: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        datasets: [
          {
            label: "Nomics",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [20, 35, 40, 65, 60, 80],
          },
          {
            label: "Bend",
            borderColor: "#E5B25D",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [0, 5, 5, 10, 15, 50],
          },
          {
            label: "Partner",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [10, 30, 25, 35, 40, 75],
          },
          {
            label: "Partner",
            borderColor: "#5D675B",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [0, 25, 20, 50, 50, 70],
          },
        ],
      },
      chart: {
        width: '80%'
      },
    }
  },
  methods: {
    redirect(url) {
      window.open(url, '_blank')
    }
  },
  components: {
    Wave,
    Nomics,
    LineChart,
    DoughnutChart,
    FeatureLeft,
    FeatureRight,
    Bank,
    Team,
    Partners,
    Market,
    Plus
  }
}
</script>

<style scoped>
</style>
