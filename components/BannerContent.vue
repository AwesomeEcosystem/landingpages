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
        <h1 class="my-4 text-5xl font-bold">
          The Sustainable <br> Web 3 Network
        </h1>
        <p class="text-2xl mb-8 font-thin">
          Business. Finance. Economics.
        </p>

        <div class="flex justify-start w-full">
          <a
            class="mx-auto lg:mx-0 hover:underline text-gray-800 font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://www.linkedin.com/company/ecosiss/"
            target="_blank"
            >
            <Linkedin class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-gray-800 font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://discord.gg/9xejeEcH3N"
            target="_blank"
            >
            <Discord class="mr-4"/>
          </a>
          <a
            class="mx-auto lg:mx-0 hover:underline text-gray-800 font-bold rounded-full my-2 py-4 px-2 flex items-center"
            href="https://t.co/kCfN6RJKr5"
            target="_blank"
            >
            <Telegram class="mr-4"/>
          </a>
        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center flex">
        <img class="w-full justify-center items-center" src="~/assets/img/eco.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Discord from '~/assets/logos/discord.svg'
import Telegram from '~/assets/logos/telegram.svg'
import Linkedin from '~/assets/logos/linkedin.svg'

export default {
  name: 'BannerContent',
  components: {
    Discord,
    Telegram,
    Linkedin
  }
}
</script>
