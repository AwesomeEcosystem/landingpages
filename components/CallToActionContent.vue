<template>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
    >
      Join Today
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>

    <h3 class="my-4 text-3xl leading-tight">
      and earn Passive Income!
    </h3>

    <div class="w-full flex justify-center">
      <div class="flex justify-center w-full">
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
        <a
          class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-4 px-2 flex items-center"
          href="https://twitter.com/ecosisnetwork"
          target="_blank"
          >
          <Twitter class="mr-4"/>
        </a>
      </div>
    </div>
    <div class="pt-8">
      <a class="mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full py-4 px-8 shadow-lg" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">
        Request
      </a>
      <button class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full py-4 px-8" @click="$router.push('/start')">
        Start here
      </button>
    </div>
  </section>
</template>

<script>
import Discord from '~/assets/logos/discord.svg'
import Telegram from '~/assets/logos/telegram.svg'
import Linkedin from '~/assets/logos/linkedin.svg'
import Twitter from '~/assets/logos/twitter.svg'

export default {
  name: 'CallToActionContent',
  components: {
    Discord,
    Telegram,
    Linkedin,
    Twitter
  }
}
</script>
