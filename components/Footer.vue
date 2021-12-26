<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <logo class="w-12 h-12 text-gray-800" :isSticky="true"/>
        </div>

        <!-- <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Getting Started</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >User</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Developer</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Entrepreneur</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Investor</a
              >
            </li>
          </ul>
        </div> -->
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Partner</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://elabs.ecosis.io"
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
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://angelists.ecosis.io"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Angelists</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Products</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <button
                href="#products"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                @click="$router.push('/nomics')"
                >Nomics</button
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <button
                href="#products"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                @click="$router.push('/cap')"
                >Cap</button
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <button
                href="#products"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                @click="$router.push('/bend')"
                >Bend</button
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
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
            <!-- <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://discord.gg/9xejeEcH3N"
                target="_blank"
                class="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >Twitter</a
              >
            </li> -->
          </ul>
        </div>
      </div>
    </div>

    <div class="flex w-full justify-center items-center text-gray-600 mb-8">
      <p>Copyright by ecosis Network</p>
    </div>
  </footer>
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
