<template>
  <div class="flex flex-col justify-center items-center w-full py-16 text-center bg-opacity-50">
    <div class="w-full py-8">
      <h1>Tokenomics</h1>
    </div>
    <div class="w-full">
      <h2>Taxes</h2>
      <div class="border-b container mx-auto">
        <p>Transaction Fee</p>
        <h3>6%</h3>
      </div>

      <div class="flex flex-wrap justify-center items-cente rcontainer mx-auto px-32 text-center py-8 mb-12">

        <div class="w-full flex-1">
          <h3>2%</h3>
          <h3>Redistribution</h3>
          <p></p>
        </div>

        <div class="w-full flex-1">
          <h3>2%</h3>
          <h3>Liquidity Providing</h3>
          <p></p>
        </div>

        <div class="w-full flex-1">
          <h3>2%</h3>
          <h3>Token Burn</h3>
          <p></p>
        </div>

      </div>
    </div>
    <LineChart :chartData="taxes" :styles="chart"/>
    <div class="w-full py-8">
      <h2>Allocation</h2>
    </div>
    <DoughnutChart :chartData="allocation" :styles="chart"/>
    <!-- <div class="w-full py-8">
      <h2>Vesting</h2>
      <p>20% unlocked after Sale. After two weeks 10% get unlocked linearly over a period of 4 Months</p>
    </div>
    <LineChart :chartData="vesting" :styles="chart"/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      vesting: {
        labels: [
          "Week 1",
          "Week 3",
          "Week 5",
          "Week 7",
          "Week 9",
          "Week 11",
          "Week 13",
          "Week 15",
          "Week 17",
        ],
        datasets: [
          {
            label: "Unlock",
            borderColor: "white",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            data: [20, 30, 40, 50, 60, 70, 80, 90, 100],
          },
        ],
      },
      taxes: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        datasets: [
          {
            label: "Deflation",
            borderColor: "white",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            data: [2, 4, 8, 16, 32],
          },
        ],
      },
      allocation: {
        labels: ['20% Liquidity', '20% Presale', ' 40% Mainsale', '10% Marketing', '10% Team'],
        datasets: [
          {
            label: "Bend",
            borderColor: "transparent",
            color: "white",
            pointBackgroundColor: "white",
            borderWidth: 1,
            backgroundColor: ['#5D675B', '#E5B25D', '#4357AD', '#EF5B5B', '#DB6B93'],
            data: [20, 20, 40, 10, 10]
          }
        ]
      },
      chart: {
        color: 'white',
        width: '80%',
        legend: {
          scaleFontColor: 'white'
        }
      },
    }
  },
}
</script>

<style lang="css" scoped>
</style>
