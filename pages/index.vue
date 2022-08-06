<template>
  <div>
    <Banner />
    <Features id="about" />
    <Products id="products" />
    <!-- <Partners id="partner" /> -->
    <Roadmap id="roadmap" />
    <CallToAction />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Partners from '@/components/Partners'
import Roadmap from '@/components/Roadmap'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    Banner,
    Features,
    Products,
    Partners,
    Roadmap,
    CallToAction
  }
}
</script>

<style>
</style>
