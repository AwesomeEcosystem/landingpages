<template>
  <section>
    <Wave align="top" color="#fff"/>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row justify-around py-6">
          <div class="w-auto mb-6 text-gray-600">
            <logo class="w-12 h-12 text-gray-800" :isSticky="true"/>
            <div class="mt-4">
              <p>Company Nr 13994574 <br>Registered in UK, London </p>
              <p>Copyright by ecosis Network Ltd</p>
              <p>Build by eLabs Enterprises</p>
            </div>
          </div>

          <div class="w-full flex flex-wrap md:m-16">
            <div class="w-full md:flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Delegates</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                  href="https://elabs.enterprises"
                  target="_blank"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >eLabs</a
                  >
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                  href="https://cunoro.finance"
                  target="_blank"
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >cunoro</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full md:flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Products</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button
                  class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                  @click="($route === '/') ? window.location('#products') : $router.push('/#nomics')"
                  >
                  Nomics
                </button>
              </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <button
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                @click="($route === '/') ? window.location('#products') : $router.push('/#one')"
                >
              One
            </button>
          </li>
      </ul>
    </div>
    <div class="w-full md:flex-1">
      <p class="uppercase text-gray-500 md:mb-6">Social</p>
      <ul class="list-reset mb-6">
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
          href="https://www.linkedin.com/company/ecosiss/"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-orange-500"
          >Linkedin</a
          >
        </li>
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
          href="https://discord.gg/9xejeEcH3N"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-orange-500"
          >Discord</a
          >
        </li>
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
          href="https://twitter.com/ecosisnetwork"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-orange-500"
          >Twitter</a
          >
        </li>
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
          href="https://t.co/kCfN6RJKr5"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-orange-500"
          >Telegram</a
          >
        </li>
      </ul>
    </div>

    <div class="w-full md:flex-1">
      <p class="uppercase text-gray-500 md:mb-6">Links</p>
      <ul class="list-reset mb-6">
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
          href="https://docs.ecosis.network"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-orange-500"
          >Documentation</a
          >
        </li>
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
            href="http://nomics.ecosis.network:4200/"
            target="_blank"
            class="no-underline hover:underline text-gray-800 hover:text-orange-500"
            >Nomics Explorer</a
          >
        </li>
        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
          <a
          href="mailto:contact@ecosis.network"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-orange-500"
          >Contact</a
          >
        </li>
      </ul>
    </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Footer',
  components: {
    logo: Logo
  }
}
</script>
