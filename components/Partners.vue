<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Partner
      </h1>
      <div class="text-center mb-8">
        <div class="flex flex-wrap justify-center">

          <Partner logo="boosterdao_dark" name="BoosterDAO" desc="REINVENTING Mobility" url="https://boosterdao.network/"/>

          <Partner logo="fab_dark" name="est" desc="FinTech and Blockchain Association" url="https://www.estglobalinc.com/"/>

          <Partner logo="shefan_dark" name="SheFan Pro" desc="Empowered Women in Blockchains" url="https://www.shefanpro.co.uk/"/>

          <Partner logo="webmagaritas_dark" name="WebMargaritas" desc="Token Promotion and Advertising" url="https://www.webmargaritas.com/"/>

        </div>
      </div>
      <div class="text-center">
        <h2>Genesis Partner</h2>
        <p>Backed with Bend and wrapped in Nomics</p>
        <div class="flex flex-wrap justify-center">

          <Partner logo="elabs_dark" name="eLabs" desc="The community driven Web 3 Laboratories" url="https://elabs.enterprises"/>

          <Partner logo="cunoro_dark" name="cunoro" desc="The ultimate Payment and Cash Flow Gateway" url="https://cunoro.finance"/>

          <Partner logo="aurora_dark" name="Aurora" desc="Innovation Ventures" url="https://auroradao.capital"/>

          <Partner logo="angelists_dark" name="Angelists" desc="Be the Angel of Projects with Lifetime Placements" url="https://angelists.ecosis.network"/>

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
