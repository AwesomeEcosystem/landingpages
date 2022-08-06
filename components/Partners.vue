<template>
  <section class="py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-white">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Delegates
      </h1>

      <div class="text-center mb-8">
        <div class="flex flex-wrap justify-center">

          <Partner logo="elabs_dark" name="eLabs" desc="ecosis Laboratories" url="https://elabs.enterprises"/>

          <Partner logo="cunoro_dark" name="cunoro" desc="The ultimate Payment and Cash Flow Gateway" url="https://cunoro.finance"/>

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
