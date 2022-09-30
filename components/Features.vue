<template>
  <section>
    <div class="bg-white text-gray-900 w-full flex flex-col items-center pb-4">
      <div class="w-full text-center py-8">
        <h1>Features</h1>
      </div>
      <div class="w-full flex flex-wrap justify-center text-center pb-8">
        <div class="px-6">
          <h2>Build an App</h2>
          <div class="">
            <p>
              Use ecosis SDK to build your App on top of the marketplace!
            </p>
          </div>
        </div>
        <div class="px-6">
          <h2>Run a Business</h2>
          <div class="">
            Integrate ecosis' features into your e-commerce!
          </div>
        </div>
        <div class="px-6">
          <h2>Invest Volatility Free</h2>
          <div class="">
            Provide Liquidty and get ecosis' Stake to profit out of the marketplace!
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white text-gray-900">
      <div class="flex w-full justify-center">
        <a
          class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center" href="https://docs.ecosis.network/">
          Learn More!
        </a>
      </div>
    </div>
    <div class="relative">
      <Wave align="bottom" color="#fff"/>
    </div>
  </section>
</template>

<script>
import Wave from '@/components/Wave'

export default {
  name: 'Features',
  components: {
    Wave
  }
}
</script>

<style lang="css" scoped>
</style>
