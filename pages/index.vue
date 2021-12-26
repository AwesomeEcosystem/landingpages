<template>
  <div>
    <hero />
    <features id="about" />
    <products id="products" />
    <partners id="partner" />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Partners from '@/components/Partners'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    products: Products,
    partners: Partners,
    'call-to-action': CallToAction
  }
}
</script>
