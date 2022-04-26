<template>
  <section>
    <div class="container mx-auto flex flex-wrap justify-center text-center pb-8">

      <div class="w-full">
        <CountDown/>
      </div>

      <div class="w-full">
        <button class="btn hot" @click="" v-if="!connected">
          Connect
        </button>
      </div>

      <div class="w-full md:w-1/3 flex flex-wrap justify-space items-center bg-gray-900 rounded-lg text-white py-8"
        v-if="connected && !saleActive">

        <div class="w-full flex p-4 border-b border-white mx-24 md:mx-32">
          <input class="bg-transparent w-3/4 p-2 text-4xl text-center"
            v-model="amount"
            type="number"
            placeholder="Amount">
            <img class="w-12 m-2" src="~/assets/logos/avalanche.png" alt="">
        </div>
        <div class="w-full pt-8">
          <p>You'll receive</p>
          <div class="flex w-full justify-center items-center">
            <p>0</p>
            <img class="w-12 m-2" src="~/assets/logos/bend_logo.png" alt="">
          </div>
        </div>
        <div class="w-full pt-12 mt-4">
          <button class="btn hot" @click="">
            Buy
          </button>
        </div>
      </div>

      <div class="w-full md:w-1/3 flex flex-wrap justify-center items-center bg-gray-200 rounded-lg py-8"
        v-if="connected && saleActive">
        <div class="w-full pt-8">
          <p>Caimable</p>
          <div class="flex w-full justify-center items-center">
            <p class="text-4xl">0</p>
            <img class="w-12 m-2" src="~/assets/logos/bend_logo.png" alt="">
          </div>
        </div>
        <div class="w-full pt-12 mt-4">
          <button class="btn hot" @click="">
            Claim
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import CountDown from './CountDown.vue'

export default {
  data() {
    return {
      connected: false,
      saleActive: false,
      amount: 0
    }
  },
  components: {
    CountDown
  }
}
</script>

<style lang="css" scoped>
</style>
