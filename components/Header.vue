<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <logo class="w-12 h-12" :isStickable="true" :isSticky="isSticky" :isOpen="isOpen" />
      </div>
      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1"
          @click.prevent.stop="onToggleClick"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        :class="navContentClassList"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul
          :class="headerClassListLink"
          class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <button
              class="inline-block py-2 px-4 no-underline"
              @click="($route === '/') ? window.location('#about') : $router.push('/#about')"
              >About</button
            >
          </li>
          <li class="mr-3">
            <button
              class="inline-block py-2 px-4 no-underline"
              @click="($route === '/') ? window.location('#products') : $router.push('/#products')"
              >Products</button
            >
          </li>
          <li class="mr-3">
            <button
              class="inline-block py-2 px-4 no-underline"
              @click="($route === '/') ? window.location('#partner') : $router.push('/#partner')"
              >Partner</button
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block py-2 px-4 no-underline"
              href="https://docs.ecosis.network" target="_blank"
              >Documentation</a
            >
          </li>
        </ul>
        <!-- <button
          :class="navActionClassList"
          class="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
        >
          Nomics
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Header',
  components: {
    logo: Logo
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false
    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return (this.isSticky || this.isOpen) ? 'bg-white shadow' : ''
    },
    headerClassListLink() {
      return (this.isSticky || this.isOpen) ? 'text-gray-800' : 'text-white'
    },
    navActionClassList() {
      return (this.isSticky || this.isOpen) ? 'gradient text-white' : 'bg-white text-gray-800'
    },
    navContentClassList() {
      let classList = (this.isSticky || this.isOpen) ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    }
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>
