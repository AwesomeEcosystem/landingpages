<template>
  <div class="pt-24">
    <div
      class="container h-full px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center w-full py-8"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">Awesome Ecosystem</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          The Sustainable <br> Web 3 Network
        </h1>
        <p class="leading-normal text-2xl mb-8 font-thin">
          Capital. Finance. Economics.
        </p>

        <a
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center"
          href="https://discord.gg/9xejeEcH3N"
          target="_blank"
        >
          <Discord class="mr-4"/>
          Join Discord
        </a>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center flex">
        <!-- <img class="w-full justify-center items-center" src="~/assets/img/eco.png" alt /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Discord from '~/assets/logos/discord.svg'

export default {
  name: 'BannerContent',
  components: {
    Discord
  }
}
</script>
