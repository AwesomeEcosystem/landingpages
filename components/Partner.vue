<template>
  <a class="flex flex-col justify-start items-center h-auto bg-gray-200 hover:bg-gray-300 w-full rounded-lg md:w-1/5 m-2 p-4" :href="url" target="_blank">
    <img :src="fetchImage()" class="w-32 p-2 my-8"/>
    <h2 class="text-3xl font-bold leading-none mb-3">{{ name }}</h2>
    <p class="text-center">{{ desc }}</p>
  </a>
</template>

<script>
export default {
  props: {
    logo: String,
    name: String,
    desc: String,
    url: String
  },
  methods: {
    fetchImage() {
      return require(`~/assets/logos/${this.logo}.png`)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
