<template>
  <div class="flex flex-wrap justify-right w-full sm:flex-row">
    <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
      <div class="flex justify-center md:justify-end w-full mx-8">
        <slot name="svg"/>
      </div>
    </div>
    <div class="h-auto flex justify-right items-center w-full md:w-1/2 p-6 mt-6">
      <div class="align-middle text-center md:text-left">
        <h3 class="text-3xl font-bold leading-none mb-3">
          {{ headline }}
        </h3>
        <p class="mb-8 h-auto">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureLeft',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>
