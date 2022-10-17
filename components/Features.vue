<template>
  <section>
    <div class="bg-white text-gray-900 w-full flex flex-col items-center pb-4">
      <div class="w-full text-center py-8">
        <p>Join the Network and</p>
        <h1>Create your own</h1>
      </div>
      <div class="w-full flex flex-wrap justify-center text-center pb-8">
        <div class="px-6">
          <h2>Synthetic Asset</h2>
          <div class="">
            <p>
              Migrate existing digital or real world Assets into the ecosystem! <br>
              "Tokenize" digital assets like Coins, Tokens, NFTs, any other softasset like stocks, bonds or commodities and even real world hard-assets.
            </p>
          </div>
        </div>
        <div class="px-6">
          <h2>Bridgechain</h2>
          <div class="">
            <p>
              Create your own sub-ecosystem! <br>
              Get Consultancy and define custom parameters for your own platform and be interoperable globally on the whole ecosis network marketplace.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap justify-center text-center pb-8">
        <div class="w-full text-center py-8">
          <p>List your existing Business and</p>
          <h2>Index your Ecosystem!</h2>
        </div>
      </div>
    </div>
    <div class="w-full bg-white text-gray-900">
      <div class="flex w-full justify-center">
        <a
          class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center" href="https://docs.ecosis.network/">
          Contact Us!
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
