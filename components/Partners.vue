<template>
  <section class="py-8">
    <div class="container mx-auto px-2">

      <div class="text-center mb-8">
        <div class="flex flex-wrap justify-center">

          <Partner logo="elabs_dark" name="eLabs" desc="ecosis Laboratories" url="https://elabs.enterprises"/>

          <Partner logo="cunoro_dark" name="cunoro" desc="DeFi 2.0" url="https://cunoro.finance"/>

        </div>
      </div>

      </div>
    </div>
  </section>
</template>

<script>
import Partner from '@/components/Partner'

export default {
  name: 'Partners',
  components: {
    Partner
  }
}
</script>
