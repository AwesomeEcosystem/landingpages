<template>
  <div class="flex flex-wrap flex-col-reverse md:flex-row w-full my-16 h-auto justify-left items-center md:text-right">
    <div class="w-full md:w-1/2 p-6 text-center md:text-right">
      <h3 class="text-3xl font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="mb-8">
        {{ content }}
      </p>
    </div>
      <div class="flex flex-wrap w-full md:w-1/2 p-6 mt-6">
        <div class="flex justify-center md:justify-start w-full mx-8">
          <slot name="svg"/>
        </div>
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
