<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pb-8"
      >
        Products
      </h1>
      <div class="w-full flex flex-wrap justify-center items-center text-gray-800 text-center">

        <div class="w-full md:w-1/3 bend text-white rounded-lg m-2">
          <div class="flex flex-wrap justify-center items-center text-center">
            <div class="flex justify-center items-center w-full my-8">
              <img src="~/assets/logos/bend_logo_light.png"/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Bend</h3>
            <p>The Root of Sustainability</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center">
            <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/bend')">
              Learn more
            </button>
          </div>
        </div>

        <div class="w-full md:w-1/3 bend text-white rounded-lg m-2">
          <div class="flex flex-wrap justify-center items-center text-center">
            <div class="flex justify-center items-center w-full my-8">
              <img src="~/assets/logos/nomics_logo_light.png"/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Nomics</h3>
            <p>The Sustainable Set</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center">
            <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/nomics')">
              Learn more
            </button>
          </div>
        </div>

        <div class="w-full md:w-1/3 bend text-white rounded-lg m-2">
          <div class="flex flex-wrap justify-center items-center text-center">
            <div class="flex justify-center items-center w-full my-8">
              <img src="~/assets/logos/one_logo_light.png"/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">One</h3>
            <p>The All-in-One ecosis Network Wallet</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center">
            <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" href="https://one.ecosis.network" target="_blank">
              Open App
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Cap from '@/assets/logos/cap.svg'
import Nomics from '@/assets/logos/nomics.svg'
import Bend from '@/assets/logos/bend.svg'

export default {
  name: 'Products',
  components: {
    Nomics,
    Cap,
    Bend,
  }
}
</script>
