<template>
  <div class="flex justify-center w-full pt-2 pb-16">
    <DoughnutChart :chartData="doughnutData" :styles="chart"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linedata: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        datasets: [
          {
            label: "Bend",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [2, 10, 15, 35, 65],
          },
          {
            label: "Partner Tokens",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [30, 55, 4, 50, 75],
          },
        ],
      },
      doughnutData: {
        labels: ['Presale', 'eLabs', 'Genesis Partner Distribution', 'Market'],
        datasets: [
          {
            label: "Bend",
            borderColor: "transparent",
            pointBackgroundColor: "white",
            borderWidth: 1,
            backgroundColor: ['#5D675B', '#E5B25D', '#4357AD', '#EF5B5B'],
            data: [20, 20, 20, 40]
          }
        ]
      },
      chart: {
        width: '80%',
        legend: {
          fontColor: 'white'
        }
      },
    }
  },
}
</script>

<style lang="css" scoped>
</style>
