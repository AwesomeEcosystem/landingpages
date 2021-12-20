<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Product
      </h1>
      <div class="w-full flex flex-wrap justify-center items-center text-gray-800 text-center">
        <div class="flex justify-center items-center w-full my-8">
          <Nomics/>
        </div>
        <h3 class="w-full text-3xl font-bold leading-none mb-3">Nomics</h3>
        <p>Partnership Index Token</p>
      </div>
      <div class="w-full flex flex-wrap justify-center items-center">
        <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          Coming Soon
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Nomics from '@/assets/logos/nomics.svg'

export default {
  name: 'Product',
  components: {
    Nomics
  }
}
</script>
