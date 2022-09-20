<template>
  <div class="text-white nomics">
    <!-- <Maintenance/> -->
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Maintenance from '@/components/Maintenance.vue'

export default {
  components: {
    Header,
    Maintenance,
    Footer
  }
}
</script>

<style>
</style>
