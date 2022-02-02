<template>
  <div>
    <WaveTop/>
    <CallToActionContent/>
  </div>
</template>

<script>
import WaveTop from '@/assets/svg/wave-top.svg'
import CallToActionContent from '@/components/CallToActionContent'

export default {
  name: 'CallToAction',
  components: {
    WaveTop,
    CallToActionContent
  }
}
</script>
