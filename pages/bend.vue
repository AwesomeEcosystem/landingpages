<template>
  <div class="">
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center w-full">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Bend
          </h1>
          <p class="leading-normal text-2xl mb-8 font-thin">
            Reflecting Finance
          </p>

          <a class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center">
            Sale soon!
          </a>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center flex justify-center">
          <Bend />
        </div>
      </div>
    </div>
    <section class="bg-gray-100 text-gray-900 py-16">
      <h2 class="text-3xl text-center mb-8">Redistributing and Deflationary Tokenomics</h2>
      <div class="container mx-auto flex flex-wrap">
        <p class="w-full md:flex-1"></p>
        <p class="w-full md:flex-1">Bend Protocol is a mixture of RFI tokenomics with the added function of auto-burning to reduce total supply over time.</p>
        <p class="w-full md:flex-1"></p>
      </div>
    </section>
    <!-- <section class="bg-gray-200 text-gray-900 py-16">
      <h2 class="text-3xl text-center mb-8">Assets</h2>
      <div class="container mx-auto flex flex-wrap justify-around items-start">

      </div>
    </section> -->
  </div>
</template>

<script>
import Bend from '@/assets/logos/bend.svg'

export default {
  components: {
    Bend
  }
}
</script>

<style lang="css" scoped>
</style>
