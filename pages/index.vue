<template>
  <div>
    <Banner />
    <About id="about" />
    <Products id="products" />
    <!-- <Partners id="partner" /> -->
    <Features id="roadmap" />
    <CallToAction />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import About from '@/components/About'
import Products from '@/components/Products'
import Partners from '@/components/Partners'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    Banner,
    About,
    Products,
    Partners,
    Features,
    CallToAction
  }
}
</script>

<style>
</style>
