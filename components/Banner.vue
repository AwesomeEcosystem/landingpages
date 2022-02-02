<template>
  <div>
    <BannerContent />
    <div class="relative -mt-12 lg:-mt-24">
      <Wave align="top" color="#fafafa"/>
    </div>
  </div>
</template>

<script>
import BannerContent from '@/components/BannerContent'
import Wave from '@/components/Wave'

export default {
  name: 'Banner',
  components: {
    BannerContent,
    Wave
  }
}
</script>
