<template>
  <section>
    <div class="w-screen h-screen flex justify-center items-center">
      <div class="flex flex-col items-center">
        <img class="w-64 h-64" src="~/assets/logos/ecosis_transparent.png">
        <h1 class="text-5xl -my-4">ecosis</h1>
        <p>Maintenance Mode</p>
        <div class="flex justify-center my-4">
          <CountDown :date="time"/>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-6xl">🤫</p>
          <p>Currently we are restructering some few things and perpare something special</p>
        </div>
        <CallToAction />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      time: 'August 8, 2022 16:00:00 GMT+02:00'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
