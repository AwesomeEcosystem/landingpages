<template>
  <section class="py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        Investor
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <price
          name="Retail Junior"
          price="120$"
          :limited="false"
          :list="listBasic"
        />
        <price-highlighted
          name="Retail Senior"
          price="350$"
          :limited="false"
          :list="listBasic"
        />
        <price name="Dolphin" price="800$" :limited="true" :list="listFree" />
        <price name="Whale" price="2,000$" :limited="false" :list="listPro" />
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
      listFree: ['Thing', 'Thing', 'Thing'],
      listBasic: ['Thing', 'Thing', 'Thing', 'Thing'],
      listPro: ['Thing', 'Thing', 'Thing', 'Thing', 'Thing']
    }
  },
  components: {
    price: Price,
    'price-highlighted': PriceHighlighted
  }
}
</script>
