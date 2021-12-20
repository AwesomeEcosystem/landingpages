<template>
  <div>
    <hero />
    <features id="about" />
    <product id="product" />
    <partners id="partner" />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Product from '@/components/Product'
import Partners from '@/components/Partners'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    product: Product,
    partners: Partners,
    'call-to-action': CallToAction
  }
}
</script>
