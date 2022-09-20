<template>
  <div class="pt-24">
    <div
      class="h-full md:px-64 flex flex-wrap md:flex-row justify-around items-center w-full"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">Awesome Ecosystem</p>
        <h1 class="my-4 text-5xl font-bold">
          Digitized  <br>Marketplace
        </h1>
        <p class="text-2xl mb-8 font-thin">
          Composable. Interoperable. Sustainable.
        </p>

        <div class="flex justify-start w-full">
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://www.linkedin.com/company/ecosiss/"
            target="_blank"
            >
            <Linkedin class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://discord.gg/9xejeEcH3N"
            target="_blank"
            >
            <Discord class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://t.co/kCfN6RJKr5"
            target="_blank"
            >
            <Telegram class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://twitter.com/ecosisnetwork"
            target="_blank"
            >
            <Twitter class="mr-4"/>
          </a>
        </div>
        <div class="">
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-900 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            More Soon October 1st
          </button>
          <p>Big Upgrade Announcement coming!</p>
          <!-- <button class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="$router.push('/#')">
            Enter App
          </button>
          <button class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8" @click="$router.push('/#')">
            Start here
          </button> -->
        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center flex justify-center items-center">
        <img class="w-full" src="~/assets/imgs/marketplace.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Discord from '~/assets/logos/discord.svg'
import Telegram from '~/assets/logos/telegram.svg'
import Linkedin from '~/assets/logos/linkedin.svg'
import Twitter from '~/assets/logos/twitter.svg'

export default {
  name: 'BannerContent',
  components: {
    Discord,
    Telegram,
    Linkedin,
    Twitter
  }
}
</script>
