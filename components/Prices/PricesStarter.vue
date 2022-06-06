<template>
  <section class="py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        Starter
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <price name="Free" price="0$" :limited="false" :list="listFree" />
        <price
          name="Minimal"
          price="5$"
          :limited="true"
          :list="listBasic"
        />
        <price-highlighted name="Basic" price="20$" :limited="true" :list="listPro" />
        <price name="Advanced" price="50$" :limited="true" :list="listAdvanced" />
      </div>
    </div>
  </section>
</template>

<script>
import Price from './Price'
import PriceHighlighted from './PriceHighlighted'

export default {
  name: 'Prices',
  data() {
    return {
      listFree: ['0 Transactions', '0 Profits'],
      listBasic: ['0.2 Avax (Up to 10 Transactions)', '100,000 Bend', '1,000 sNoro (1%/Day ROI)'],
      listPro: ['1.0 Avax (Up to 50 Transactions)', '1,000,000 Bend', '100,000 sNoro (1%/Day ROI)'],
      listAdvanced: ['2.0 Avax (Up to 100 Transactions)', '10,000,000 Bend', '1,000,000 sNoro (1%/Day ROI)']
    }
  },
  components: {
    price: Price,
    'price-highlighted': PriceHighlighted
  }
}
</script>
