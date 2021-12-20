<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
    >
      Join the Community
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>

    <h3 class="my-4 text-3xl leading-tight">
      Web 3 is waiting for you!
    </h3>

    <div class="w-full flex justify-center">
      <a
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center"
        href="https://discord.gg/9xejeEcH3N"
        target="_blank"
      >
        <Discord class="mr-4"/>
        Join Discord
      </a>
    </div>
  </section>
</template>

<script>
import Discord from '~/assets/logos/discord.svg'

export default {
  name: 'CallToActionContent',
  components: {
    Discord
  }
}
</script>
