<template>
  <div class="flex flex-col w-full justify-center items-center py-8 my-4">
    <div class="w-full">
      <button class="btn hot" @click="connect()" v-if="!connected">
        Connect
      </button>
    </div>

    <div class="w-full md:w-1/3 flex flex-wrap justify-center items-center bg-gray-900 rounded-lg text-white py-8"
      v-if="connected && !delegated">

      <div class="w-full flex p-4 border-b border-white mx-24 md:mx-32">
        <input class="bg-transparent w-3/4 p-2 text-4xl text-center"
          v-model="amount"
          type="number"
          placeholder="Amount">
          <img class="w-12 m-2" src="~/assets/logos/nomics_logo.png" alt="">
      </div>
      <div class="w-full pt-8">
        <p>Delegate will receive</p>
        <div class="flex w-full justify-center items-center">
          <p>{{ stake }}</p>
          <img class="w-12 m-2" src="~/assets/logos/cunoro.png" alt="">
        </div>
        <p>after 8 Hours</p>
      </div>
      <div class="w-full pt-12 mt-4">
        <button class="btn hot" @click="delegate()">
          Delegate
        </button>
      </div>
    </div>

    <div class="w-full md:w-1/3 flex flex-wrap justify-center items-center bg-gray-200 rounded-lg py-8"
      v-if="connected && delegated">
      <div class="w-full pt-8">
        <p>Delegated</p>
        <div class="flex w-full justify-center items-center">
          <p class="text-4xl">{{ amount }}</p>
          <img class="w-12 m-2" src="~/assets/logos/nomics_logo.png" alt="">
        </div>
        <div class="w-full pt-8">
          <p>Delegate will receive</p>
          <div class="flex w-full justify-center items-center">
            <p>{{ stake }}</p>
            <img class="w-12 m-2" src="~/assets/logos/cunoro.png" alt="">
          </div>
          <p>after 8 Hours</p>
        </div>
      </div>
      <div class="w-full pt-12 mt-4">
        <button class="btn hot" @click="delegate()">
          Claim Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connected: false,
      delegated: false,
      amount: 0
    }
  },
  methods: {
    connect() {
      this.connected = !this.connected
    },
    delegate() {
      this.delegated = !this.delegated
    }
  },
  computed: {
    stake() {
      return this.amount * 0.2
    }
  }
}
</script>

<style lang="css" scoped>
</style>
