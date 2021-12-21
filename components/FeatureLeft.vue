<template>
  <div class="flex flex-wrap flex-col-reverse sm:flex-row my-16">
    <div class="w-full sm:w-1/2 p-6 mt-6">
      <slot name="svg" />
    </div>
    <div class="w-full h-auto flex justify-center items-center sm:w-1/2 p-6 mt-6">
      <div class="align-middle">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">{{ headline }}</h3>
        <p class="text-gray-700 mb-8 h-auto">
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
