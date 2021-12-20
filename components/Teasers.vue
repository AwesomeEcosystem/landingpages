<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Getting Started
      </h1>
      <p
        class="w-full my-2 leading-tight text-center text-gray-800"
      >
        Everything you need to participate to Web 3!
      </p>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="3" action="Learn more">
        <template v-slot:overline>Apps</template>
        <template v-slot:headline>User</template>
        <template v-slot:content
          >Expore thousends of incredible Web 3 Applications made by the community for the community.</template
        >
      </teaser-column>
      <teaser-column :rows="3" action="Learn more">
        <template v-slot:overline>Technologies</template>
        <template v-slot:headline>Developer</template>
        <template v-slot:content
          >Work with sophisticated Technologies like Blockchains, Frameworks and SDKs</template
        >
      </teaser-column>
      <teaser-column :rows="3" action="Learn more">
        <template v-slot:overline>Platforms</template>
        <template v-slot:headline>Entrepreneur</template>
        <template v-slot:content
          >Do your Business on the platforms of the future</template
        >
      </teaser-column>
      <teaser-column :rows="3" action="Learn more">
        <template v-slot:overline>Financials</template>
        <template v-slot:headline>Investor</template>
        <template v-slot:content
          >Use the most profitable Payment and Asset Management Protocols.</template
        >
      </teaser-column>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
