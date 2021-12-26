<template>
  <button
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center"
    @click="$router.push('/')"
  >
    <!--Icon from: http://www.potlabicons.com/ -->
    <img src="~/assets/logos/ecosis_transparent_dark.png" alt="" v-if="isSticky || isOpen">
    <img src="~/assets/logos/ecosis_transparent.png" alt="" v-else>
    <p :class="(isSticky || isOpen) ? 'text-gray-800' : 'text-white'" class="font-thin pl-2">ecosis</p>
  </button>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = (this.isSticky || this.isOpen) ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    }
  }
}
</script>
