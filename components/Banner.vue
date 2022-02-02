<template>
  <div>
    <BannerContent />
    <div class="relative -mt-12 lg:-mt-24">
      <WaveButtom/>
    </div>
  </div>
</template>

<script>
import BannerContent from '@/components/BannerContent'
import WaveButtom from '@/assets/svg/wave-bottom.svg'

export default {
  name: 'Banner',
  components: {
    BannerContent,
    WaveButtom
  }
}
</script>
