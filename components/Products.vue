<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Products
      </h1>
      <div class="w-full flex flex-wrap justify-center items-center text-gray-800 text-center">

        <div class="w-full">
          <div class="flex flex-wrap justify-center items-center text-gray-800 text-center">
            <div class="flex justify-center items-center w-full my-8">
              <Nomics/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Nomics</h3>
            <p>ecosis Partnership Network Index</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center">
            <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/nomics')">
              Learn more
            </button>
          </div>
        </div>

        <div class="flex-1">
          <div class="flex flex-wrap justify-center items-center text-gray-800 text-center">
            <div class="flex justify-center items-center w-full my-8">
              <Cap/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Cap</h3>
            <p>Crypto Total Market Capitalization Index</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center">
            <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/cap')">
              Learn more
            </button>
          </div>
        </div>

        <div class="flex-1">
          <div class="flex flex-wrap justify-center items-center text-gray-800 text-center">
            <div class="flex justify-center items-center w-full my-8">
              <Bend/>
            </div>
            <h3 class="w-full text-3xl font-bold leading-none mb-3">Bend</h3>
            <p>Reflect Finance Token</p>
          </div>
          <div class="w-full flex flex-wrap justify-center items-center">
            <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/bend')">
              Learn more
            </button>
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
