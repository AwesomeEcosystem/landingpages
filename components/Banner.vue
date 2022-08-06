<template>
  <section>
    <div class="md:h-screen flex flex-col justify-between">
      <div class="h-full flex flex-col justify-center items-center">
        <BannerContent />
      </div>
      <Wave align="top" color="#fafafa"/>
    </div>
  </section>
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
