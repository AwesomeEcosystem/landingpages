<template>
  <section class="bg-gray-100 text-gray-900 py-16">
    <h2 class="text-3xl text-center mb-8">Passive Payment as a Service</h2>
    <div class="container mx-auto flex flex-wrap justify-center items-center pt-8">
      <div class="flex flex-col justify-start items-center w-full md:w-1/4 mx-4">
        <Poll class="w-24 h-24 mb-4"/>
        <p>The protocol manages the stakes from the ecosystem for you. This enables and combine all advantages of Defi out of the Box.</p>
      </div>
      <div class="flex flex-col justify-start items-center w-full md:w-1/4 mx-4">
        <Chart class="w-24 h-24 mb-4"/>
        <p>By investing into Nomics, you invest into the hole ecosis Network without the need to buy each single token.</p>
      </div>

      <div class="flex flex-col justify-start items-center w-full mx-4 pt-12">
        <Credit class="w-24 h-24 mb-4"/>
        <p>
          Provide liquidity and pay passively by delegating Nomics. <br>
          The protocol manages stakes autonomously and shares rewards.
        </p>
      </div>
    </div>
    <div class="flex w-full justify-center mt-8">
      <a
        class="w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center"
        href="https://docs.ecosis.network/products/nomics">
        Read more!
      </a>
    </div>
  </section>
</template>

<script>
import Chart from '@/assets/svg/chart-bar-solid.svg'
import Poll from '@/assets/svg/poll-solid.svg'
import Credit from '@/assets/svg/credit-card-solid.svg'

export default {
  components: {
    Chart,
    Poll,
    Credit
  }
}
</script>

<style lang="css">
</style>
