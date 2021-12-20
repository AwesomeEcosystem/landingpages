<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Partner
      </h1>
      <div class="flex flex-wrap justify-center">

        <Partner logo="elabs_dark" name="eLabs" desc="The community driven Web 3 Laboratories" url="https://elabs.ecosis.io"/>

        <Partner logo="cunoro_dark" name="cunoro" desc="The ultimate Payment and Cash Flow Gateway" url="https://cunoro.finance"/>

        <Partner logo="angelists_dark" name="Angelists" desc="Be the Angel of Projects with Lifetime Placements" url="https://angelists.ecosis.io"/>

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
