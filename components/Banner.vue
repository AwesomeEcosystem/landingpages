<template>
  <section>
    <div class="md:min-h-screen flex flex-col justify-center">
      <div class="h-full flex flex-col justify-center items-center">
        <BannerContent />
      </div>
    </div>
    <Wave align="top" color="#fafafa"/>
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
