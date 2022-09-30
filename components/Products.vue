<template>
  <section class="nomics">
    <WaveTop/>
    <!-- <div class="w-full text-center">
      <h1>Products</h1>
    </div> -->
    <div class="flex flex-wrap text-white">
      <!-- <div class="w-full flex flex-col justify-between text-white  md:h-auto min-h-screen" id="nomics">
        <div class="flex flex-wrap justify-center items-center text-center">
          <div class="flex justify-center items-center w-full my-8">
            <img src="~/assets/logos/nomics_banner_transparent.png"/>
          </div>
          <h3 class="w-full text-3xl font-bold leading-none mb-3">Nomics</h3>
          <p>Reserved Bridgechain</p>
        </div>
        <div class="w-full flex flex-wrap justify-center items-center pb-8">
          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/nomics')">
            Learn more
          </button>
        </div>
      </div> -->

      <div class="w-full flex flex-col justify-center md:w-1/2 md:h-auto min-h-screen py-12" id="nomics">
        <div class="flex flex-wrap justify-center items-center text-center">
          <div class="flex justify-center items-center w-full my-8">
            <img class="md:w-2/3"src="~/assets/logos/nomics_banner_transparent.png"/>
          </div>
          <h3 class="w-full text-3xl font-bold leading-none mb-3">Nomics</h3>
          <p>Interoperable Bridgechain</p>
        </div>
        <div class="w-full flex flex-wrap justify-center items-center pb-8">
          <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/nomics')">
            Learn more
          </button>
        </div>
      </div>

      <div class="w-full flex flex-col justify-center md:w-1/2 md:h-auto min-h-screen py-12" id="one">
        <div class="flex flex-wrap justify-center items-center text-center">
          <div class="flex justify-center items-center w-full my-8">
            <img class="md:w-1/3"src="~/assets/logos/one_logo.png"/>
          </div>
          <h3 class="w-full text-3xl font-bold leading-none mb-3">One</h3>
          <p>Global All-in-One ecosis Hub</p>
        </div>
        <div class="w-full flex flex-wrap justify-center items-center pb-8">
          <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
            Request
          </a>
        </div>
      </div>

      <Wave align="top" color="#fff"/>

      <!-- <div class="w-full flex flex-wrap justify-center items-center !text-white text-center">

        <div class="w-full flex flex-col justify-center authic md:h-auto min-h-screen py-12 " id="authic">
          <div class="flex flex-wrap justify-center items-center text-center">
            <div class="flex justify-center items-center w-full my-8">
              <img class="md:w-1/3"src="~/assets/logos/authic_logo.png"/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Authic</h3>
            <p>Global Multichain ID Manager</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center pb-8">
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-900 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              More soon
            </button>
          </div>
        </div>

        <div class="w-full flex flex-col justify-center md:w-full nomics md:h-auto min-h-screen py-12" id="one">
          <div class="flex flex-wrap justify-center items-center text-center">
            <div class="flex justify-center items-center w-full my-8">
              <img class="md:w-1/3"src="~/assets/logos/one_logo.png"/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">One</h3>
            <p>Global All-in-One ecosis App</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center pb-8">
            <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
              Request Beta!
            </a>
          </div>
        </div>

        <div class="w-full flex flex-col justify-between text-white verse md:h-auto min-h-screen pt-16">
          <div class="flex flex-wrap justify-center items-center text-center">
            <div class="flex justify-center items-center w-full my-8">
              <img src="~/assets/logos/verse_logo.png"/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Verse</h3>
            <p>Immersive Multiverse</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center pb-8">
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-900 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              More soon
            </button>
          </div>
          <Wave align="top" color="#fff"/>
        </div>
      </div> -->

    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

import WaveTop from '@/assets/svg/wave-top.svg'
import Wave from '@/components/Wave'

export default {
  name: 'Products',
  components: {
    FeatureRight,
    FeatureLeft,
    WaveTop,
    Wave
  }
}
</script>
