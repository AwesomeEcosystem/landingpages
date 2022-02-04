<template>
  <div class="flex flex-wrap w-full my-16 h-auto justify-left items-center md:text-right">
    <div class="w-1/2 p-6 ">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-700 mb-8">
        {{ content }}
      </p>
    </div>
    <div class="w-1/2 p-6">
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
