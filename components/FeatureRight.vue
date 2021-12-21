<template>
  <div class="flex flex-wrap my-16 h-auto flex justify-center items-center">
    <div class="w-5/6 sm:w-1/2 p-6 ">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-700 mb-8">
        {{ content }}
      </p>
    </div>
    <div class="w-full sm:w-1/2 p-6">
      <slot name="svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRight',
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
